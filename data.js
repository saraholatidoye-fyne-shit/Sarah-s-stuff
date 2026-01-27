// Sales Enablement Hub - Sample Content Data
// This file contains starter content for each category
// Content is stored in localStorage after first edit

const salesContent = {
    onboarding: [
        {
            title: "Week 1: Company & Product Overview",
            description: "Introduction to our company history, mission, values, and core product offerings.",
            content: `# Week 1: Company & Product Overview

## Day 1-2: Company Foundation

**Company History**
- Founded in [Year]
- Key milestones and growth trajectory
- Current market position

**Mission & Values**
- Our mission statement
- Core values that drive our culture
- How these translate to customer interactions

## Day 3-4: Product Deep Dive

**Core Products**
- Product A: [Description and key features]
- Product B: [Description and key features]
- Product C: [Description and key features]

**Key Differentiators**
- What makes us unique
- Technology advantages
- Customer success stories

## Day 5: Tools & Systems

**CRM Training**
- Salesforce/HubSpot basics
- Data entry requirements
- Pipeline management

**Communication Tools**
- Email templates location
- Slack channels to join
- Meeting scheduling best practices

## Homework
1. Complete product certification quiz
2. Shadow 3 discovery calls
3. Review top 10 customer case studies`,
            tags: ["week-1", "beginner", "required"]
        },
        {
            title: "Week 2: Sales Process & Methodology",
            description: "Learn our sales methodology, qualification frameworks, and pipeline stages.",
            content: `# Week 2: Sales Process & Methodology

## Our Sales Methodology

We follow a consultative selling approach with these key principles:
- Listen more than you talk
- Understand before you pitch
- Solve problems, don't push products

## Pipeline Stages

### 1. Prospecting
- Ideal Customer Profile (ICP)
- Lead sources and prioritization
- Initial outreach strategies

### 2. Discovery
- BANT qualification (Budget, Authority, Need, Timeline)
- Pain point identification
- Stakeholder mapping

### 3. Demo/Presentation
- Tailoring the demo to needs
- Feature vs. benefit selling
- Handling technical questions

### 4. Proposal
- Pricing presentation
- ROI calculations
- Contract terms overview

### 5. Negotiation & Close
- Common objections and responses
- Negotiation boundaries
- When to involve leadership

## Activity Metrics

**Daily Targets:**
- 50+ outbound activities (calls/emails)
- 5+ meaningful conversations
- 2+ meetings scheduled

**Weekly Targets:**
- 10+ qualified meetings held
- 3+ proposals sent
- Pipeline growth of $X`,
            tags: ["week-2", "methodology", "required"]
        },
        {
            title: "Week 3: Prospecting & Outreach Mastery",
            description: "Master cold calling, email sequences, and social selling techniques.",
            content: `# Week 3: Prospecting & Outreach Mastery

## Cold Calling Framework

### The Opening (First 10 Seconds)
"Hi [Name], this is [Your Name] from [Company]. Did I catch you at a bad time?"

**Why this works:**
- Pattern interrupt
- Shows respect for their time
- Often leads to "What's this about?"

### Building Interest (Next 20 Seconds)
"The reason I'm calling is that we help [their role] at [their type of company] to [achieve outcome]. I wanted to see if it makes sense to have a brief conversation to see if we might be able to help you too."

### Qualifying Questions
1. "How are you currently handling [problem area]?"
2. "What's working well? What's not?"
3. "If you could wave a magic wand, what would change?"

## Email Sequences

### Sequence Structure
- Day 1: Initial outreach
- Day 3: Follow-up with value add
- Day 7: Different angle/use case
- Day 14: Breakup email

### Subject Line Best Practices
- Keep under 40 characters
- Personalize when possible
- Create curiosity
- Avoid spam triggers

**Examples:**
- "Quick question about [specific initiative]"
- "[Mutual connection] suggested I reach out"
- "Idea for [their company]'s [goal]"

## LinkedIn/Social Selling

### Profile Optimization
- Professional headshot
- Compelling headline (not just job title)
- Customer-focused summary

### Engagement Strategy
- Comment on prospect's posts
- Share relevant industry content
- Connect with warm introduction message`,
            tags: ["week-3", "prospecting", "cold-calling", "email"]
        }
    ],

    cheatsheets: [
        {
            title: "Product Feature Quick Reference",
            description: "One-stop reference for all product features, pricing tiers, and technical specifications.",
            content: `# Product Feature Quick Reference

## Pricing Tiers

| Tier | Price/mo | Users | Features |
|------|----------|-------|----------|
| Starter | $29 | Up to 5 | Core features |
| Professional | $79 | Up to 25 | + Advanced analytics |
| Enterprise | Custom | Unlimited | + API, SSO, SLA |

## Core Features (All Tiers)

**Dashboard**
- Real-time metrics
- Customizable widgets
- Export to PDF/CSV

**User Management**
- Role-based access
- Team collaboration
- Activity logging

**Integrations**
- Salesforce
- HubSpot
- Slack
- Zapier (1000+ apps)

## Professional+ Features

**Advanced Analytics**
- Custom report builder
- Predictive insights
- Benchmark comparisons

**Automation**
- Workflow builder
- Scheduled actions
- Trigger-based alerts

## Enterprise Only

**Security & Compliance**
- SSO/SAML
- SOC 2 Type II
- GDPR compliant
- Custom data retention

**Support**
- Dedicated CSM
- 99.9% SLA
- Priority support queue
- Quarterly business reviews

## Technical Specs

- **Uptime:** 99.95% guaranteed
- **API Rate Limits:** 1000 req/min (Pro), Unlimited (Enterprise)
- **Data Storage:** Unlimited
- **File Upload:** 100MB per file`,
            tags: ["product", "pricing", "features", "reference"]
        },
        {
            title: "Objection Handling Cheat Sheet",
            description: "Quick responses to the most common sales objections you'll encounter.",
            content: `# Objection Handling Cheat Sheet

## Price Objections

### "It's too expensive"
**Response:** "I understand budget is important. Let me ask - expensive compared to what? The cost of the problem you're trying to solve, or another solution you're considering?"

**Follow-up:** "Let's calculate the ROI together. What would it be worth to [achieve their stated goal]?"

### "We don't have budget right now"
**Response:** "I appreciate you being upfront about that. Help me understand - is this a timing issue, or is the investment itself the concern? Many of our customers found budget by [reallocating from X / showing ROI to finance]."

---

## Timing Objections

### "We're not ready to make a decision"
**Response:** "That's completely fair. What would need to happen for you to be ready? Is there anything I can provide to help move that along?"

### "Call me back in 6 months"
**Response:** "Happy to do that. So I can be helpful when we reconnect - what's happening in 6 months that makes that a better time?"

---

## Competition Objections

### "We're already using [Competitor]"
**Response:** "Great, they're a solid company. Out of curiosity, what made you choose them? And how's it been going - is it checking all the boxes for you?"

### "Your competitor is cheaper"
**Response:** "You're right, we're not the cheapest option. We've found that customers who choose us prioritize [key differentiator]. Is [that factor] important to your decision?"

---

## Authority Objections

### "I need to run this by my boss/team"
**Response:** "Of course! What do you think their main questions or concerns will be? I'd love to help you build the case - would it be helpful if I put together a summary document?"

### "This isn't my decision"
**Response:** "I appreciate you telling me. Who else is involved in this decision, and what matters most to them? Would it make sense to include them in our next conversation?"

---

## Trust Objections

### "I've never heard of your company"
**Response:** "That's fair - we're growing fast but still building awareness. Let me share how we've helped [similar company] achieve [specific result]. Would a reference call be helpful?"

### "How do I know this will work?"
**Response:** "Great question. We offer [trial/pilot/guarantee]. More importantly, here's a case study from [similar company] who had the same concern..."`,
            tags: ["objections", "responses", "sales-skills"]
        },
        {
            title: "Discovery Call Question Bank",
            description: "Essential questions to ask during discovery calls organized by category.",
            content: `# Discovery Call Question Bank

## Situation Questions
*Understanding their current state*

- "Walk me through how your team currently handles [process]."
- "What tools/systems are you using today?"
- "How many people are involved in this process?"
- "How long have you been doing it this way?"

## Problem Questions
*Uncovering pain points*

- "What's the biggest challenge you're facing with [area]?"
- "What happens when [problem occurs]?"
- "How often does this issue come up?"
- "What have you tried in the past to solve this?"

## Implication Questions
*Exploring the impact*

- "What does this problem cost you in terms of time/money/resources?"
- "How does this affect your team's productivity/morale?"
- "What happens if this isn't addressed in the next 6-12 months?"
- "How does this impact your ability to [achieve their goals]?"

## Need-Payoff Questions
*Helping them see the value*

- "If you could solve this, what would that mean for your team?"
- "What would success look like 12 months from now?"
- "How would [specific benefit] impact your [KPI]?"
- "What would it be worth to eliminate [specific pain]?"

## Decision Process Questions

- "Who else is involved in evaluating solutions like this?"
- "What's your timeline for making a decision?"
- "What criteria are most important in your evaluation?"
- "Is there a budget allocated for this initiative?"
- "What would need to happen for you to move forward?"

## Competitive Questions

- "Are you evaluating other solutions? Which ones?"
- "What do you like about what you've seen so far?"
- "What concerns do you have about any of the options?"

## Pro Tips

**Listen more than you talk** - Aim for 70/30 (them/you)

**Take notes** - Quote their exact words back to them

**Go deeper** - When they give a surface answer, ask "Tell me more about that"

**Summarize** - "So what I'm hearing is..." ensures alignment`,
            tags: ["discovery", "questions", "qualification"]
        }
    ],

    onepagers: [
        {
            title: "Platform Overview One-Pager",
            description: "High-level overview of our platform for initial prospect conversations.",
            content: `# [Company Name] Platform Overview

## The Challenge

Modern businesses struggle with:
- Fragmented data across multiple systems
- Manual processes that don't scale
- Lack of visibility into key metrics
- Difficulty collaborating across teams

## Our Solution

[Company Name] is an all-in-one platform that helps teams:

**Centralize** - Single source of truth for all your data

**Automate** - Eliminate manual work with smart workflows

**Analyze** - Real-time insights and actionable analytics

**Collaborate** - Work together seamlessly across departments

## Key Benefits

| Benefit | Impact |
|---------|--------|
| Save Time | 10+ hours/week per user |
| Reduce Errors | 90% fewer manual mistakes |
| Faster Decisions | Real-time data access |
| Better Collaboration | 50% faster project completion |

## Who We Help

**Industries:** SaaS, Financial Services, Healthcare, Manufacturing

**Company Size:** 50-5,000 employees

**Key Users:** Operations, Finance, Sales, Customer Success

## Trusted By

- [Customer Logo 1] - "Transformed how we operate"
- [Customer Logo 2] - "ROI in 3 months"
- [Customer Logo 3] - "Can't imagine working without it"

## Getting Started

1. **Discovery Call** (30 min) - Understand your needs
2. **Custom Demo** (45 min) - See the platform in action
3. **Pilot Program** (2 weeks) - Try before you buy
4. **Implementation** (2-4 weeks) - Full onboarding support

## Contact

[Sales Rep Name]
[Email]
[Phone]
[Calendar Link]`,
            tags: ["overview", "platform", "prospects"]
        },
        {
            title: "ROI Calculator One-Pager",
            description: "Help prospects understand the potential return on investment.",
            content: `# ROI Calculator

## Your Investment

| Item | Cost |
|------|------|
| Annual Subscription | $XX,XXX |
| Implementation | $X,XXX |
| Training | Included |
| **Total Year 1** | **$XX,XXX** |

## Your Expected Returns

### Time Savings
- Hours saved per user per week: **10 hours**
- Number of users: **X users**
- Hourly cost of employee: **$50/hr**
- **Annual time savings: $XXX,XXX**

### Error Reduction
- Current error rate: **X%**
- Cost per error: **$XXX**
- Errors prevented annually: **XXX**
- **Annual error savings: $XX,XXX**

### Revenue Impact
- Faster deal cycles: **20% improvement**
- Better conversion rates: **15% improvement**
- **Estimated revenue increase: $XXX,XXX**

## Total ROI Summary

| Metric | Value |
|--------|-------|
| Total Investment | $XX,XXX |
| Total Annual Benefit | $XXX,XXX |
| **Net Benefit** | **$XXX,XXX** |
| **ROI** | **XXX%** |
| **Payback Period** | **X months** |

## Conservative vs. Optimistic

| Scenario | ROI | Payback |
|----------|-----|---------|
| Conservative | 150% | 8 months |
| Expected | 250% | 5 months |
| Optimistic | 400% | 3 months |

## What Our Customers Report

> "We achieved full ROI in just 4 months and have saved over $500K in the first year."
> — VP Operations, [Company]

## Next Steps

1. Let's validate these assumptions together
2. Build a custom business case for your team
3. Present to stakeholders with confidence`,
            tags: ["ROI", "business-case", "value"]
        }
    ],

    frameworks: [
        {
            title: "Cold Email Framework",
            description: "Proven email structure for cold outreach that gets responses.",
            content: `# Cold Email Framework

## The AIDA Structure

### A - Attention (Subject Line)
Get them to open the email

**Formulas:**
- "[Mutual Connection] suggested I reach out"
- "Quick question about [their initiative]"
- "Idea for [Company]'s [goal]"
- "[Relevant trigger event]"

**Rules:**
- Under 40 characters
- No spam words (free, guaranteed, etc.)
- Personalize when possible

### I - Interest (Opening Line)
Hook them in the first sentence

**Templates:**
- "I noticed [something specific about them/company]..."
- "Congrats on [recent news/achievement]..."
- "[Mutual connection] mentioned you're focused on..."
- "I've been following [their company] since..."

**Rules:**
- Make it about THEM, not you
- Show you did your research
- Connect to a relevant trigger

### D - Desire (Body)
Create desire for your solution

**Structure:**
"We help [their role] at [their type of company] to [achieve desirable outcome] by [brief how]."

"For example, we helped [similar company] [achieve specific result] in [timeframe]."

**Rules:**
- Focus on outcomes, not features
- Use social proof (customers, results)
- Keep it to 2-3 sentences max

### A - Action (CTA)
Make the next step easy

**Soft CTAs (higher response rate):**
- "Would it make sense to have a brief conversation?"
- "Open to learning more?"
- "Worth a 15-minute call to explore?"

**Specific CTAs:**
- "Do you have 15 minutes on [Day] or [Day]?"
- "I'll follow up [day] if I don't hear back."

---

## Example Email

**Subject:** Idea for Acme's expansion plans

Hi Sarah,

Congrats on the Series B announcement - exciting times for the team!

I noticed you're scaling the sales team from 10 to 50 reps this year. We help high-growth SaaS companies ramp new reps 40% faster with our enablement platform.

For example, we helped Datadog cut their ramp time from 6 months to 3.5 months.

Would it make sense to have a quick call to see if we might be able to help?

Best,
[Name]

---

## Follow-Up Sequence

**Email 2 (Day 3):** Add value - share relevant content
**Email 3 (Day 7):** Different angle or use case
**Email 4 (Day 14):** Breakup email

> "I'll assume the timing isn't right and won't reach out again. If things change, I'm always happy to reconnect."`,
            tags: ["email", "outreach", "cold-email", "prospecting"]
        },
        {
            title: "Discovery Call Framework",
            description: "Structure for running effective discovery calls that qualify and advance deals.",
            content: `# Discovery Call Framework

## Pre-Call Prep (5-10 minutes)

**Research Checklist:**
- [ ] LinkedIn profile of attendee(s)
- [ ] Company website - recent news, job postings
- [ ] 10-K/Annual report (if public)
- [ ] Competitor presence
- [ ] Mutual connections
- [ ] Tech stack (BuiltWith, etc.)

**Prepare:**
- 3 personalized observations/questions
- Hypothesis of their potential pain points
- Relevant case studies to reference

---

## Call Structure (30 minutes)

### 1. Opening (2-3 min)
**Build rapport, set agenda**

"Thanks for taking the time today, [Name]. Before we dive in, I'd love to learn more about what prompted you to take this call. Then I'll share a bit about us and how we've helped similar companies. Sound good?"

### 2. Discovery (15-18 min)
**Understand their world**

**Current State:**
- "Walk me through how you currently handle [process]."
- "What's working well? What's not?"

**Pain Points:**
- "What's the biggest challenge you're facing?"
- "How is that impacting [team/business]?"

**Desired Future State:**
- "In an ideal world, what would this look like?"
- "What would success mean for you personally?"

**Decision Process:**
- "Who else is involved in evaluating solutions?"
- "What's your timeline?"
- "Is there budget allocated?"

### 3. Tailored Pitch (5-7 min)
**Connect your solution to their needs**

"Based on what you've shared, here's how we might be able to help..."

- Lead with their top 1-2 pain points
- Show relevant capability
- Share similar customer story
- Quantify potential impact

### 4. Close (3-5 min)
**Agree on next steps**

"It sounds like there could be a good fit here. What would be a helpful next step?"

**Options:**
- Product demo with broader team
- Technical deep-dive
- Reference call with customer
- Proposal/pricing discussion

**Always confirm:**
- Who should attend
- When (get it scheduled NOW)
- What they need to prepare

---

## Post-Call Actions

1. **Within 1 hour:**
   - Send recap email with next steps
   - Update CRM with notes
   - Add next meeting to calendar

2. **Within 24 hours:**
   - Send any promised materials
   - Connect on LinkedIn
   - Brief internal team if needed`,
            tags: ["discovery", "calls", "qualification", "methodology"]
        },
        {
            title: "Closing Framework - MEDDIC",
            description: "Use MEDDIC methodology to qualify and close enterprise deals.",
            content: `# MEDDIC Closing Framework

## What is MEDDIC?

MEDDIC is a qualification methodology for complex B2B sales. Use it to identify qualified opportunities and understand what's needed to close.

---

## M - Metrics

**What success looks like in numbers**

**Questions to ask:**
- "What KPIs are you measured on?"
- "What would success look like in 6-12 months?"
- "What's the cost of the current problem?"
- "What ROI would justify this investment?"

**What you need:**
- Quantified business impact
- Specific metrics they'll use to measure success
- Baseline numbers to compare against

---

## E - Economic Buyer

**The person who can say YES and write the check**

**Questions to ask:**
- "Who has final sign-off on the budget?"
- "Have they approved similar investments before?"
- "What matters most to them?"

**What you need:**
- Name and title of economic buyer
- Their priorities and concerns
- A plan to engage them (directly or indirectly)

---

## D - Decision Criteria

**How they'll evaluate options**

**Questions to ask:**
- "What factors are most important in your decision?"
- "How are you weighing different criteria?"
- "Are there any must-haves vs. nice-to-haves?"

**What you need:**
- Written list of their criteria
- Understanding of priority/weighting
- How you stack up on each criterion

---

## D - Decision Process

**Steps and timeline to get a deal done**

**Questions to ask:**
- "Walk me through your typical buying process."
- "Who needs to be involved at each stage?"
- "What approvals are required?"
- "What's your target timeline?"

**What you need:**
- Mapped buying process with stages
- Key stakeholders at each stage
- Internal deadlines/milestones
- Potential blockers

---

## I - Identify Pain

**The problem driving the purchase**

**Questions to ask:**
- "What's the biggest challenge you're trying to solve?"
- "What happens if you don't address this?"
- "How long has this been a problem?"
- "Why is it important to solve now?"

**What you need:**
- Clearly articulated pain point
- Impact of the pain (quantified)
- Urgency to solve
- Consequence of inaction

---

## C - Champion

**Your internal advocate who wants you to win**

**Questions to ask:**
- "Who on your team would benefit most from this?"
- "Who's driving this initiative internally?"
- "Can you help me understand the internal dynamics?"

**What you need:**
- Someone with influence and access
- Personal motivation to see you win
- Willingness to coach you and sell internally

**Champion Test:**
- Do they give you insider information?
- Will they meet with you without you asking?
- Do they proactively advance the deal?

---

## MEDDIC Scorecard

| Element | Score (1-5) | Notes |
|---------|-------------|-------|
| Metrics | _ | |
| Economic Buyer | _ | |
| Decision Criteria | _ | |
| Decision Process | _ | |
| Identify Pain | _ | |
| Champion | _ | |
| **Total** | _/30 | |

**Scoring Guide:**
- 25-30: Strong opportunity - push to close
- 18-24: Good opportunity - fill gaps
- 12-17: Needs work - qualify harder
- Below 12: Likely not qualified`,
            tags: ["MEDDIC", "closing", "enterprise", "qualification"]
        }
    ],

    battlecards: [
        {
            title: "vs. Competitor A",
            description: "Competitive positioning and talk tracks against Competitor A.",
            content: `# Battle Card: Us vs. Competitor A

## Quick Facts

| | Us | Competitor A |
|---|---|---|
| Founded | 20XX | 20XX |
| Funding | $XXM | $XXM |
| Employees | XXX | XXX |
| Customers | X,000+ | X,000+ |

---

## Where We Win

### 1. Ease of Use
**Our advantage:** Modern, intuitive interface. Avg. 2-week implementation.
**Their weakness:** Legacy UI, requires extensive training. Avg. 3-month implementation.
**Talk track:** "Unlike [Competitor A], we designed our platform for the modern user. Our customers are up and running in weeks, not months."

### 2. Integration Ecosystem
**Our advantage:** 200+ native integrations, open API
**Their weakness:** Limited integrations, closed ecosystem
**Talk track:** "We integrate with your existing stack out of the box. With [Competitor A], you'll spend months on custom integration work."

### 3. Customer Support
**Our advantage:** Dedicated CSM, 24/7 support, 98% CSAT
**Their weakness:** Ticket-based only, known for slow response
**Talk track:** "Every customer gets a dedicated success manager. Our 98% CSAT speaks for itself."

---

## Where They Win (and how to counter)

### 1. Brand Recognition
**Their advantage:** Longer in market, more brand awareness
**Counter:** "They've been around longer, but that also means legacy technology. We've built modern solutions from the ground up."

### 2. Enterprise Features
**Their advantage:** Some niche enterprise capabilities
**Counter:** "We offer what 95% of enterprise customers need, plus a roadmap driven by customer feedback. What specific capabilities are must-haves for you?"

### 3. Price (sometimes)
**Their advantage:** May discount heavily to win
**Counter:** "Let's look at total cost of ownership - implementation time, training, integrations, support. Our customers find we're actually more cost-effective."

---

## Common Objections

### "We're already using Competitor A"
"How's that going? What made you start looking at alternatives?"
*Listen for pain points, then address specific issues*

### "Competitor A has feature X"
"Help me understand how you use that feature. What problem does it solve?"
*Often they don't actually need it, or we have an equivalent*

### "Competitor A is the industry standard"
"They've been around a while, that's true. But the industry is evolving fast. Let me show you what modern looks like..."

---

## Landmines to Plant

Ask prospects to evaluate competitors on:
- Implementation timeline
- Integration capabilities
- Support response times
- Recent product innovation
- Customer references in their industry

---

## Proof Points

**Customer Win:** [Company] switched from Competitor A
- 60% faster time-to-value
- $200K annual savings
- "Wish we'd switched sooner"

**G2 Comparison:**
- Our rating: 4.7/5
- Their rating: 4.1/5
- We lead in: Ease of Use, Support, ROI`,
            tags: ["competitor-a", "competitive", "battlecard"]
        },
        {
            title: "vs. Competitor B",
            description: "Competitive positioning and talk tracks against Competitor B.",
            content: `# Battle Card: Us vs. Competitor B

## Quick Facts

| | Us | Competitor B |
|---|---|---|
| Target Market | Mid-Market + Enterprise | SMB + Mid-Market |
| Pricing Model | Per user/month | Flat rate |
| Best For | Growing teams | Small teams |

---

## Positioning

**Competitor B** is a good solution for small teams with basic needs. As companies grow and requirements become more complex, they often outgrow Competitor B and need a more scalable solution like ours.

**Key message:** "Competitor B is great for getting started. We're built for where you're going."

---

## Where We Win

### 1. Scalability
**Our advantage:** Built for enterprise scale, handles millions of records
**Their weakness:** Performance issues above 10K records, limited users
**Talk track:** "We're built to grow with you. Competitor B is great for small teams, but clients often hit walls when they try to scale."

### 2. Advanced Analytics
**Our advantage:** Custom reports, predictive insights, benchmarking
**Their weakness:** Basic reporting only
**Talk track:** "Our analytics go beyond basic dashboards. You'll get predictive insights and industry benchmarking that drive strategic decisions."

### 3. Security & Compliance
**Our advantage:** SOC 2, HIPAA, GDPR, SSO, custom retention
**Their weakness:** Limited security features, no compliance certs
**Talk track:** "For regulated industries or enterprise security requirements, we have the certifications and controls you need."

### 4. Customization
**Our advantage:** Highly configurable, custom fields, workflows
**Their weakness:** One-size-fits-all approach
**Talk track:** "Every business is different. We adapt to your processes; with Competitor B, you adapt to theirs."

---

## Where They Win (and how to counter)

### 1. Price Point
**Their advantage:** Lower sticker price
**Counter:** "Let's look at what you actually get. When you factor in the limitations you'll hit and eventual migration cost, our solution is often more economical long-term."

### 2. Simplicity
**Their advantage:** Quick setup, less training needed
**Counter:** "Simplicity is great until you need more. We offer both - easy to start, powerful when you need it."

### 3. SMB Focus
**Their advantage:** Designed specifically for small business
**Counter:** "If you plan to stay small, they might work. But most of our customers came to us after outgrowing simpler tools."

---

## Trigger Events for Switching

Prospects often switch from Competitor B when they:
- Exceed 50 users
- Need enterprise security/compliance
- Require advanced reporting
- Want to customize workflows
- Experience performance issues
- Need better integrations

---

## Discovery Questions

To uncover pain with Competitor B:
- "How has [Competitor B] scaled as you've grown?"
- "Tell me about your reporting capabilities today."
- "What security and compliance requirements do you have?"
- "How much have you customized your current setup?"
- "What happens when you hit a limitation?"

---

## Competitive Swap Program

We offer special pricing for Competitor B switchers:
- Free data migration
- Extended trial period
- Dedicated onboarding support
- Price match guarantee

---

## Customer Quote

> "We loved Competitor B when we were a 10-person team. But when we hit 100 people, we needed something built for scale. The switch to [Us] was one of the best decisions we made."
> — Director of Ops, [Customer Company]`,
            tags: ["competitor-b", "competitive", "battlecard"]
        },
        {
            title: "vs. In-House/DIY Solutions",
            description: "How to compete when prospects are considering building their own solution.",
            content: `# Battle Card: Us vs. Build In-House

## The Scenario

Prospect says: "We're thinking about building this ourselves" or "Our dev team could probably create something."

---

## Why They Consider Building

1. **Cost perception** - "It's free if we build it ourselves"
2. **Control** - Want full customization
3. **Security concerns** - Keeping data in-house
4. **Not-invented-here syndrome** - Prefer own solutions
5. **Existing dev resources** - "We have developers anyway"

---

## Our Counter-Arguments

### 1. True Cost of Building

**Hidden costs they forget:**
- Developer salaries (opportunity cost)
- Infrastructure/hosting
- Ongoing maintenance (20% annually)
- Security updates
- Bug fixes
- Feature development
- Documentation
- Training

**Talk track:** "Let's calculate the real cost. With developer salaries, infrastructure, maintenance, and opportunity cost - most companies find it's 3-5x more expensive to build than buy."

**Quick math:**
- 2 developers x $150K salary = $300K/year
- Infrastructure: $50K/year
- Maintenance: ongoing forever
- Time to build: 6-12 months
- Time to buy: 2-4 weeks

### 2. Time to Value

**Talk track:** "Your developers are talented, but is this the best use of their time? With us, you're live in weeks. Building takes 6-12 months minimum, and that's assuming no scope creep."

### 3. Ongoing Maintenance Burden

**Talk track:** "Building is just the beginning. Who maintains it when developers leave? Who handles security updates? Who builds new features? With us, you get a dedicated team of 100+ engineers focused on making the product better every day."

### 4. Feature Depth

**Talk track:** "We've spent [X years] and [$X million] building this platform, learning from thousands of customers. That's hard to replicate with a side project."

### 5. Risk Mitigation

**Talk track:** "What happens if the project fails or goes over budget? What if key developers leave? With us, you have guaranteed uptime, support, and continuous improvement."

---

## Discovery Questions

- "What's driving the desire to build vs. buy?"
- "Who would build this and what else are they working on?"
- "How have past internal tool projects gone?"
- "What's your timeline to have a solution in place?"
- "Who would maintain this long-term?"
- "What's your risk tolerance for this project?"

---

## When Build Might Make Sense

Be honest - sometimes building is right:
- Truly unique, proprietary requirements
- Core competitive differentiator
- No solutions exist in the market
- They have a large, dedicated dev team

**In these cases:** "If this is truly core to your competitive advantage, building might make sense. For most companies, [this problem] isn't their core business - our platform lets them focus on what makes them unique."

---

## Proof Points

**Industry stat:** "According to McKinsey, 70% of custom software projects fail to meet objectives, run over budget, or are abandoned."

**Customer example:** "[Company] initially tried building in-house. After 18 months and $500K, they had a half-working solution. They switched to us and were fully operational in 3 weeks."

---

## Objection Handling

### "Our developers can build this"
"I'm sure they can. The question is - should they? What else could they be building that's actually core to your business?"

### "It's basically free if we build it"
"Developer time isn't free - it's actually your most expensive resource. Let me share a TCO comparison..."

### "We need full customization"
"What specific customizations do you need? We have [API/webhooks/custom fields]. Let me show you what's possible."

### "We don't want to depend on a vendor"
"I understand. Let's talk about our data portability, SLAs, and financial stability. We're built to be a long-term partner, not a risk."`,
            tags: ["build-vs-buy", "in-house", "DIY", "competitive"]
        }
    ]
};
