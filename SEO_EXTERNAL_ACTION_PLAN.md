# ANTI.AI — Post-Deployment External SEO Action Guide

> **Target Domain**: `https://antiai.ltd`  
> **Primary Goal**: Secure #1 rank for "antiai", "anti ai", "anti.ai", "antigpt", "antitode", trigger the Google Knowledge Panel, ensure rich previews across all social platforms, and achieve full indexing across Google and Bing.

---

## Quick Reference Checklist

| Step | Action | Platform | Time Required | Priority |
|:---:|:---|:---|:---:|:---:|
| **1** | Domain Ownership Verification | Google Search Console | 10 mins | 🔴 Critical |
| **2** | Submit XML Sitemap | Google Search Console | 2 mins | 🔴 Critical |
| **3** | Priority URL Inspection & Indexing | Google Search Console | 5 mins | 🔴 Critical |
| **4** | Setup & 1-Click Import | Bing Webmaster Tools | 5 mins | 🔴 Critical |
| **5** | Enable IndexNow Protocol | Bing / Cloudflare | 5 mins | 🟠 High |
| **6** | Social Profiles Audit & Entity Linking | LinkedIn, X, IG, YouTube | 15 mins | 🔴 Critical |
| **7** | Validate Rich Results & Social Previews | Google Rich Results, OpenGraph.xyz | 10 mins | 🟠 High |
| **8** | Directory & Brand Signals Setup | Crunchbase, ProductHunt, GitHub | 20 mins | 🟡 Medium |
| **9** | Google Business Profile (Optional/Recommended) | Google Business | 15 mins | 🟡 Medium |
| **10** | Weekly & Monthly SEO Monitoring | Search Console & Bing Analytics | Ongoing | 🟢 Routine |

---

## Step 1: Google Search Console (GSC) Setup & Verification

Google Search Console is the direct line between your website and Google's search index.

### 1.1 Add Your Property
1. Navigate to **[Google Search Console](https://search.google.com/search-console)**.
2. Sign in with your company Google account (e.g., `admin@antiai.ltd` or founder email).
3. In the property selector dropdown (top-left), click **+ Add property**.
4. You will see two options:
   - **Domain** (Recommended): Covers `antiai.ltd`, `www.antiai.ltd`, `products.antiai.ltd`, and all subdomains over `http://` and `https://`.
   - **URL prefix**: Only covers the exact URL entered (e.g. `https://antiai.ltd/`).
   - 👉 **Choose "Domain"** and enter: `antiai.ltd`.

### 1.2 Verify Ownership via DNS (Recommended)
1. Copy the TXT record value provided by Google (e.g., `google-site-verification=abc123xyz...`).
2. Log into your DNS provider (Cloudflare, GoDaddy, Namecheap, Vercel, or AWS Route53).
3. Add a new DNS Record:
   - **Type**: `TXT`
   - **Name / Host**: `@` (or leave blank depending on provider)
   - **Value / Content**: Paste the copied string (`google-site-verification=...`)
   - **TTL**: Auto or 300 seconds
4. Return to Search Console and click **Verify**. (If it doesn't verify immediately, wait 2–5 minutes for DNS propagation).

> [!TIP]
> If you cannot access DNS records right away, you can select **URL prefix** for `https://antiai.ltd/` and verify via **HTML tag** by placing `<meta name="google-site-verification" content="..." />` into `index.html`.

---

## Step 2: Submit Sitemap to Google Search Console

Once your property is verified:

1. In the left navigation menu, click **Sitemaps** (under *Indexing*).
2. Under **Add a new sitemap**, type:
   ```text
   sitemap.xml
   ```
3. Click **Submit**.
4. **Verification**:
   - Status should change to **"Success"** (green).
   - Under *Discovered pages*, verify that all 9 pages from your sitemap are discovered:
     - `/` (Home)
     - `/capabilities`
     - `/story`
     - `/makers`
     - `/careers`
     - `/collaborate`
     - `/privacy`
     - `/terms`
     - `/support`

---

## Step 3: Priority URL Inspection & Instant Indexing Request

Don't wait for Googlebot to find pages through scheduled crawls. Force an immediate inspection:

1. In the top search bar of Search Console (*"Inspect any URL in 'antiai.ltd'"*), paste:
   ```text
   https://antiai.ltd/
   ```
2. Press Enter. Click **Test Live URL** (top right) to confirm:
   - Page can be indexed
   - HTTP response is 200
   - JSON-LD schemas (`Organization`, `WebSite`, `SoftwareApplication`) are detected without errors.
3. Click **Request Indexing**.
4. Repeat this for the top 3 highest-priority pages:
   - `https://antiai.ltd/capabilities`
   - `https://antiai.ltd/careers`
   - `https://antiai.ltd/story`

> [!NOTE]
> Google limits live indexing requests to ~10–20 per day. Requesting the Homepage and core landing pages pushes your brand name to the top of Google's queue within 24 to 72 hours.

---

## Step 4: Bing Webmaster Tools & IndexNow Setup

Bing powers search for Microsoft Bing, Yahoo, DuckDuckGo, and several AI engines (Copilot, ChatGPT search).

### 4.1 1-Click Import from Google Search Console
1. Navigate to **[Bing Webmaster Tools](https://www.bing.com/webmasters)**.
2. Sign in with your Microsoft or Google account.
3. Click **Import from Google Search Console** (fastest, requires no DNS changes).
4. Select `antiai.ltd`. Bing will automatically import your verified domain and submitted sitemaps!

### 4.2 Submit Sitemap (if not auto-imported)
1. Go to **Sitemaps** in the left menu.
2. Click **Submit sitemap**.
3. Enter: `https://antiai.ltd/sitemap.xml` and click **Submit**.

### 4.3 Enable IndexNow
Bing supports the **IndexNow** protocol, which notifies search engines the second a page is updated:
- If hosting on **Cloudflare**: Navigate to *Cloudflare Dashboard > Speed > Optimization > Crawl Hints / IndexNow* and toggle **Enable IndexNow** (1-click, zero code).
- Alternatively, you can generate an IndexNow key directly inside Bing Webmaster Tools.

---

## Step 5: Social Profile Entity Linking (Knowledge Graph Signals)

Search engines look for consistent name, logo, and external links across official profiles to assemble a **Google Knowledge Panel** (the infobox that appears on the right side of search results for brand queries).

### 5.1 Profile Update Matrix

Ensure every profile matches the exact URL and naming conventions:

| Platform | Handle / URL | Website URL field | Bio / Description snippet |
|:---|:---|:---|:---|
| **LinkedIn Company** | `linkedin.com/company/anti-ai/` | `https://antiai.ltd` | "Responsible, human-governed artificial intelligence. Creators of AntiGPT and Antitode." |
| **X (Twitter)** | `@antiaishield` | `https://antiai.ltd` | "Human-Governed AI Software Company. Creators of AntiGPT & Antitode. Responsible AI & enterprise security." |
| **Instagram** | `@antiaishield` | `https://antiai.ltd` | "ANTI.AI — Responsible, human-governed AI. Deepfake detection & enterprise intelligence." |
| **YouTube** | `@anti.ai_15` | `https://antiai.ltd` | Add `https://antiai.ltd` under *Channel Customization > Basic Info > Links*. |
| **Threads** | `@antiaishield` | `https://antiai.ltd` | Linked via Instagram. |

### 5.2 Key Entity Signals
- In each platform's "About" or "Website" section, use the exact canonical URL: `https://antiai.ltd` (do not use HTTP or omit trailing slashes if canonicalized).
- Ensure the company name is consistently written as **ANTI.AI** (with "Anti AI" or "AntiAI" in bio tags).

---

## Step 6: Validate Rich Results & Social Sharing Cards

Before publicly sharing links, test that search engines and social platforms parse your tags correctly:

### 6.1 Google Rich Results Test
1. Visit **[Google Rich Results Test](https://search.google.com/test/rich-results)**.
2. Test `https://antiai.ltd`.
3. Verify that the following schemas are recognized without errors:
   - `Organization`
   - `WebSite`
   - `SoftwareApplication` (AntiGPT & Antitode)
4. Test `https://antiai.ltd/careers` to verify `JobPosting` schema detection.

### 6.2 Social Share Debuggers
Clear crawler caches and ensure the preview cards look crisp:
1. **OpenGraph Previewer**: Test on **[OpenGraph.xyz](https://www.opengraph.xyz/url/https%3A%2F%2Fantiai.ltd)**.
   - Confirm image is `https://antiai.ltd/og-image.png`.
   - Confirm Title is *"ANTI.AI — Human-Governed AI Software Company"*.
2. **LinkedIn Post Inspector**: Go to **[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)**, paste `https://antiai.ltd`, and click **Inspect** to force LinkedIn to clear its cache and store the new OG image.
3. **Facebook / Meta Sharing Debugger**: Visit **[Meta Sharing Debugger](https://developers.facebook.com/tools/debug/)**, enter `https://antiai.ltd`, and click **Scrape Again**.
4. **X / Twitter Card Validator**: Share a test tweet or preview via TweetDeck / X composer to confirm the large summary card renders.

---

## Step 7: Brand Citations & Authoritative Listings

To accelerate search engines recognizing `antiai` as an established tech brand rather than a generic keyword:

1. **GitHub Organization**:
   - Create or update the `github.com/anti-ai` (or corresponding) organization profile.
   - Set website to `https://antiai.ltd`.
   - Add description: *"Human-governed AI software company"*.
2. **Product Hunt**:
   - Create a Maker / Company profile for **ANTI.AI** with `https://antiai.ltd`.
   - When launching AntiGPT or Antitode, link to `products.antiai.ltd` and `antiai.ltd`.
3. **Crunchbase / Wellfound (AngelList)**:
   - Create a profile for **ANTI.AI** (Free).
   - Enter funding status, founders (Tanishq Sharma), domain `https://antiai.ltd`, headquarters, and contact info.
   - Google heavily references Crunchbase for tech company Knowledge Panels.

---

## Step 8: Google Business Profile (Optional but High Impact)

If ANTI.AI has a physical registered office or co-working address:
1. Go to **[Google Business Profile](https://business.google.com)**.
2. Create listing: **ANTI.AI** (Category: *Software Company* or *Research Institute*).
3. Add website: `https://antiai.ltd`.
4. Add contact phones: `+91 91166 65513` and `+91 91160 20359`.
5. Complete business verification (postcard, video, or instant phone/email).
> **Result**: Triggers the Google Maps pin and instant desktop Knowledge Graph card when users in India or globally search "antiai".

---

## Step 9: Ongoing Monitoring Cadence

### Week 1 Post-Launch
- [ ] Check Google Search Console > **Pages**: ensure discovered pages change from *Discovered - currently not indexed* to *Crawled - currently indexed*.
- [ ] Query Google directly using search operators:
  - `site:antiai.ltd` (verifies every page indexed)
  - `"ANTI.AI"` (checks exact brand mentions)
  - `antiai` (checks rank position)

### Monthly Routine
- [ ] **Search Console Performance Report**: Check queries triggering impressions for "antiai", "anti ai", "antigpt", "antitode".
- [ ] **Average CTR & Position**: Monitor brand queries moving toward Position 1.
- [ ] **Coverage / Page Experience**: Check Core Web Vitals report (LCP, FID/INP, CLS) to ensure scores remain 100% green.
- [ ] Update `sitemap.xml` whenever new pages, case studies, or job postings are added.
