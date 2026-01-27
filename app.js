// Sales Enablement Hub - Main Application JavaScript

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderAllContent();
    updateStats();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-links li');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            navigateTo(section);
        });
    });
}

function navigateTo(sectionId) {
    // Update active nav link
    document.querySelectorAll('.nav-links li').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });

    // Show active section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Content rendering
function renderAllContent() {
    const categories = ['onboarding', 'cheatsheets', 'onepagers', 'frameworks', 'battlecards'];

    categories.forEach(category => {
        renderCategoryContent(category);
    });
}

function renderCategoryContent(category) {
    const grid = document.getElementById(`${category}-grid`);
    const content = salesContent[category] || [];

    if (content.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>No content yet</h3>
                <p>Click "Add Content" to create your first item in this category.</p>
                <button class="btn-primary" onclick="openAddModal('${category}')">
                    <i class="fas fa-plus"></i> Add Content
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = content.map((item, index) => `
        <div class="content-card" onclick="viewContent('${category}', ${index})">
            <div class="content-card-header">
                <h3>${escapeHtml(item.title)}</h3>
                <span class="content-card-type type-${category}">${getCategoryLabel(category)}</span>
            </div>
            <p>${escapeHtml(item.description)}</p>
            <div class="content-card-tags">
                ${item.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        'onboarding': 'Onboarding',
        'cheatsheets': 'Cheat Sheet',
        'onepagers': 'One Pager',
        'frameworks': 'Framework',
        'battlecards': 'Battle Card'
    };
    return labels[category] || category;
}

// Stats update
function updateStats() {
    document.getElementById('onboarding-count').textContent = salesContent.onboarding.length;
    document.getElementById('cheatsheets-count').textContent = salesContent.cheatsheets.length;
    document.getElementById('onepagers-count').textContent = salesContent.onepagers.length;
    document.getElementById('frameworks-count').textContent = salesContent.frameworks.length;
    document.getElementById('battlecards-count').textContent = salesContent.battlecards.length;
}

// Modal functionality
function openAddModal(preselectedType = '') {
    document.getElementById('addModal').classList.add('active');
    document.getElementById('addContentForm').reset();

    if (preselectedType) {
        document.getElementById('contentType').value = preselectedType;
    }
}

function closeAddModal() {
    document.getElementById('addModal').classList.remove('active');
}

let currentViewItem = null;

function viewContent(category, index) {
    const item = salesContent[category][index];
    currentViewItem = { category, index };

    document.getElementById('viewTitle').textContent = item.title;
    document.getElementById('viewTags').innerHTML = item.tags.map(tag =>
        `<span class="tag">${escapeHtml(tag)}</span>`
    ).join('');
    document.getElementById('viewContent').innerHTML = parseContent(item.content);
    document.getElementById('viewModal').classList.add('active');
}

function closeViewModal() {
    document.getElementById('viewModal').classList.remove('active');
    currentViewItem = null;
}

// Content management
function addContent(event) {
    event.preventDefault();

    const type = document.getElementById('contentType').value;
    const title = document.getElementById('contentTitle').value.trim();
    const description = document.getElementById('contentDescription').value.trim();
    const content = document.getElementById('contentBody').value.trim();
    const tagsInput = document.getElementById('contentTags').value.trim();

    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

    const newItem = {
        title,
        description,
        content,
        tags,
        createdAt: new Date().toISOString()
    };

    salesContent[type].push(newItem);
    saveContent();
    renderCategoryContent(type);
    updateStats();
    closeAddModal();

    // Navigate to the category where content was added
    navigateTo(type);
}

function deleteCurrentContent() {
    if (!currentViewItem) return;

    if (confirm('Are you sure you want to delete this content?')) {
        const { category, index } = currentViewItem;
        salesContent[category].splice(index, 1);
        saveContent();
        renderCategoryContent(category);
        updateStats();
        closeViewModal();
    }
}

// Local storage persistence
function saveContent() {
    localStorage.setItem('salesEnablementContent', JSON.stringify(salesContent));
}

function loadContent() {
    const saved = localStorage.getItem('salesEnablementContent');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Merge with default content, keeping saved content
            Object.keys(parsed).forEach(key => {
                if (salesContent[key]) {
                    salesContent[key] = parsed[key];
                }
            });
        } catch (e) {
            console.error('Error loading saved content:', e);
        }
    }
}

// Simple markdown-like parser
function parseContent(text) {
    if (!text) return '';

    let html = escapeHtml(text);

    // Headers
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Bullet points
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    // Numbered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

    // Blockquotes
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');

    // Line breaks to paragraphs
    html = html.split('\n\n').map(para => {
        if (para.trim() && !para.startsWith('<h') && !para.startsWith('<ul') && !para.startsWith('<ol') && !para.startsWith('<blockquote')) {
            return `<p>${para}</p>`;
        }
        return para;
    }).join('\n');

    // Single line breaks
    html = html.replace(/\n/g, '<br>');

    // Clean up extra br tags
    html = html.replace(/<br><br>/g, '</p><p>');
    html = html.replace(/<\/h(\d)><br>/g, '</h$1>');
    html = html.replace(/<br><h(\d)>/g, '<h$1>');
    html = html.replace(/<\/ul><br>/g, '</ul>');
    html = html.replace(/<br><ul>/g, '<ul>');

    return html;
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load saved content on startup
loadContent();

// Close modals on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAddModal();
        closeViewModal();
    }
});

// Close modals on outside click
document.getElementById('addModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeAddModal();
    }
});

document.getElementById('viewModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeViewModal();
    }
});
