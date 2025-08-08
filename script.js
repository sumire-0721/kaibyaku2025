document.addEventListener('DOMContentLoaded', () => {
    // // Helper function for translations
    // const translations = {
    //     ja: {
    //         // Common
    //         companyName: "株式会社KAIBYAKU",
    //         businessContent: "事業内容",
    //         access: "アクセス",
    //         greeting: "代表挨拶",
    //         blog: "ブログ",
    //         contact: "お問い合わせ",
    //         english: "English",
    //         japanese: "日本語",
    //         close: "閉じる",
    //         contactButton: "お問い合わせフォーム",
    //         detailsHere: "詳細はこちら",

    //         // index.html
    //         tagline: "全ての企業の可能性を広げ<br>時代を開闢する",
    //         service1Title: "診断士サービス",
    //         service2Title: "Webマーケティング",
    //         service3Title: "コンサルティング",
    //         serviceText: "ここにテキストを配置する",
    //         ceoGreetingTitle: "社長の挨拶<br>株式会社KAIBYAKUとは",
    //         accordionShi: "診断士",
    //         accordionWeb: "webマーケティング",
    //         accordionCon: "コンサルティング",

    //         // aaa.html, bbb.html, ccc.html (LP pages)
    //         lpNavProblem: "お悩み",
    //         lpNavStory: "ストーリー",
    //         lpNavService: "サービス",
    //         lpNavIntroduction: "紹介",
    //         lpNavResults: "実績",
    //         backToTop: "TOP",

    //         // aaa.html specific
    //         aaaFvText: "診断士業務なら私たちにお任せ下さい",
    //         aaaSection1Title: "中小企業診断士としてのお悩み",
    //         aaaSection1Content: "多くの中小企業が抱える経営課題に対し、専門的な知見で解決策を導きます。資金繰り、販路開拓、事業承継など、複雑な問題に寄り添い、具体的なアクションプランを提案します。",
    //         aaaSection2Title: "私たちの診断士ストーリー",
    //         aaaSection2Content: "これまで数多くの中小企業の成長を支援してきました。経営者様の声に耳を傾け、共に課題を乗り越え、成功へと導くストーリーを大切にしています。現場主義で、泥臭い仕事も厭いません。",
    //         aaaSection3Title: "診断士サービス内容",
    //         aaaSection3Content: "経営診断、事業計画策定支援、補助金・助成金申請支援、経営改善計画策定支援など、多岐にわたるサービスを提供しています。お客様の状況に合わせた最適なプランをご提案します。",
    //         aaaSection4Title: "私たちの紹介",
    //         aaaSection4Content: "経験豊富な中小企業診断士が多数在籍しており、各分野の専門家が連携してサポートします。お客様の課題に真摯に向き合い、長期的な視点で企業価値向上に貢献します。",
    //         aaaSection5Title: "診断士実績",
    //         aaaSection5Content: "設立以来、〇〇社以上の企業を支援し、平均〇〇%の売上向上、〇〇%のコスト削減に貢献しました。具体的な成功事例についてはお問い合わせください。",

    //         // bbb.html specific
    //         bbbFvText: "マーケティングのプロとして責務を果たします。",
    //         bbbSection1Title: "Webマーケティングのお悩み",
    //         bbbSection1Content: "デジタル化が進む現代において、Webマーケティングは企業の生命線です。集客、売上向上、ブランド力強化など、Web上での課題解決をサポートします。",
    //         bbbSection2Title: "私たちのWebマーケティングストーリー",
    //         bbbSection2Content: "常に最新のトレンドを追いかけ、データに基づいた戦略で数々の企業を成功に導いてきました。お客様のビジネスを深く理解し、オーダーメイドのマーケティング戦略を立案・実行します。",
    //         bbbSection3Title: "Webマーケティングサービス内容",
    //         bbbSection3Content: "SEO対策、Web広告運用、SNSマーケティング、コンテンツマーケティング、アクセス解析、EFO（入力フォーム最適化）など、包括的なWebマーケティングを提供します。",
    //         bbbSection4Title: "私たちの紹介",
    //         bbbSection4Content: "Webマーケティングのプロフェッショナル集団が、お客様の目標達成に向けて最適な戦略を提案し、実行までを一貫してサポートします。結果にコミットします。",
    //         bbbSection5Title: "Webマーケティング実績",
    //         bbbSection5Content: "大手企業から中小企業まで、幅広い業種でWebマーケティングを成功させてきました。具体的な数字として、CVR〇〇%向上、ROAS〇〇%改善などの実績があります。",

    //         // ccc.html specific
    //         cccFvText: "プロのコンサルティングで御社の可能性を切り拓きます。",
    //         cccSection1Title: "コンサルティングのお悩み",
    //         cccSection1Content: "企業の成長には、時に外部の視点が必要です。組織改革、新規事業立ち上げ、M&Aなど、複雑な経営課題に対し、専門的なコンサルティングを提供します。",
    //         cccSection2Title: "私たちのコンサルティングストーリー",
    //         cccSection2Content: "お客様と共に課題に向き合い、長期的な視点で持続可能な成長を支援してきました。単なるアドバイスではなく、実行まで伴走し、確かな成果を生み出します。",
    //         cccSection3Title: "コンサルティングサービス内容",
    //         cccSection3Content: "経営戦略策定、組織・人事コンサルティング、新規事業開発支援、DX推進支援、M&A戦略支援など、多岐にわたるコンサルティングサービスを提供しています。",
    //         cccSection4Title: "私たちの紹介",
    //         cccSection4Content: "各業界の専門知識と豊富な経験を持つコンサルタントが、お客様のビジネスを深く理解し、最適なソリューションを提供します。お客様の課題解決に全力を尽くします。",
    //         cccSection5Title: "コンサルティング実績",
    //         cccSection5Content: "多くの企業で経営改革を成功させ、市場競争力の強化、新たな収益源の確立に貢献してきました。具体的な事例は、個別にご相談いただければ開示可能です。",

    //         // AAA.html, BBB.html, CCC.html (Sub-LP pages)
    //         subLpNavAd: "広告",
    //         subLpNavLp: "LP",
    //         subLpNavMeo: "MEO",
    //         subLpNavCrm: "CRM",
    //         subLpNavSeo: "SEO",
    //         subLpNavStrategy: "戦略",
    //         subLpNavSite: "サイト",

    //         // AAA.html specific
    //         aaaSubSection1Title: "中小企業診断士による広告戦略",
    //         aaaSubSection1Content: "中小企業診断士の視点から、費用対効果の高い広告戦略を立案します。補助金や助成金を活用した広告展開もご提案可能です。",
    //         aaaSubSection2Title: "中小企業診断士によるLP改善",
    //         aaaSubSection2Content: "中小企業の特性を踏まえ、成果に繋がるLP（ランディングページ）の改善を支援します。CVR向上に向けた具体的な施策を提案します。",
    //         aaaSubSection3Title: "中小企業診断士によるMEO対策",
    //         aaaSubSection3Content: "地域ビジネスに強い中小企業診断士が、MEO（マップエンジン最適化）対策を支援し、店舗集客を最大化します。",
    //         aaaSubSection4Title: "中小企業診断士によるCRM導入支援",
    //         aaaSubSection4Content: "顧客関係管理（CRM）システムの導入を支援し、顧客データの活用による経営効率化を推進します。",
    //         aaaSubSection5Title: "中小企業診断士によるSEO対策",
    //         aaaSubSection5Content: "中小企業のウェブサイトが上位表示されるためのSEO対策を、経営戦略と結びつけて実施します。",
    //         aaaSubSection6Title: "中小企業診断士による経営戦略",
    //         aaaSubSection6Content: "中小企業診断士として、持続可能な成長のための経営戦略策定を全面的にサポートします。",
    //         aaaSubSection7Title: "中小企業診断士によるサイト制作監修",
    //         aaaSubSection7Content: "中小企業診断士の視点から、ビジネス目標達成に寄与するウェブサイト制作を監修します。",

    //         // BBB.html specific
    //         bbbSubSection1Title: "Webマーケティングによる広告運用",
    //         bbbSubSection1Content: "専門的なWebマーケティングの知識で、Google広告やSNS広告など、各種広告の効果的な運用を代行します。",
    //         bbbSubSection2Title: "WebマーケティングによるLP制作",
    //         bbbSubSection2Content: "顧客の心を掴み、高いコンバージョン率を実現するLP（ランディングページ）を制作します。",
    //         bbbSubSection3Title: "WebマーケティングによるMEO強化",
    //         bbbSubSection3Content: "地域検索からの集客を最大化するため、最新のMEO対策（マップエンジン最適化）を実施します。",
    //         bbbSubSection4Title: "WebマーケティングによるCRM連携",
    //         bbbSubSection4Content: "WebマーケティングとCRMシステムを連携させ、顧客データの収集から分析、活用までを支援します。",
    //         bbbSubSection5Title: "WebマーケティングによるSEO最適化",
    //         bbbSubSection5Content: "検索エンジン上位表示を目指し、キーワード選定からコンテンツ最適化まで、包括的なSEO対策を行います。",
    //         bbbSubSection6Title: "Webマーケティング戦略立案",
    //         bbbSubSection6Content: "市場分析に基づき、お客様のビジネスに最適なWebマーケティング戦略を立案し、実行をサポートします。",
    //         bbbSubSection7Title: "効果的なサイト設計と制作",
    //         bbbSubSection7Content: "ユーザーエクスペリエンスを考慮した、集客力と成果を高めるウェブサイトの企画・設計・制作を行います。",

    //         // CCC.html specific
    //         cccSubSection1Title: "コンサルティングと広告戦略",
    //         cccSubSection1Content: "経営戦略と連動した広告戦略を策定し、効果的なブランディングと集客を支援します。",
    //         cccSubSection2Title: "コンサルティングとLP改善",
    //         cccSubSection2Content: "コンサルティングの視点から、事業の目的達成に最適なLP（ランディングページ）の設計や改善を指導します。",
    //         cccSubSection3Title: "コンサルティングとMEO対策",
    //         cccSubSection3Content: "地域戦略の一環として、MEO（マップエンジン最適化）を組み込んだコンサルティングを提供します。",
    //         cccSubSection4Title: "コンサルティングとCRM導入",
    //         cccSubSection4Content: "顧客との関係性を強化し、LTV（顧客生涯価値）を最大化するためのCRM導入コンサルティングを行います。",
    //         cccSubSection5Title: "コンサルティングとSEO戦略",
    //         cccSubSection5Content: "経営戦略に則したSEO戦略を立案し、長期的な視点でウェブサイトの集客力を高めます。",
    //         cccSubSection6Title: "包括的なコンサルティング戦略",
    //         cccSubSection6Content: "事業の成長フェーズに応じた、経営戦略全般に関するコンサルティングを提供します。",
    //         cccSubSection7Title: "コンサルティングとサイト構築",
    //         cccSubSection7Content: "ビジネス目標達成のためのウェブサイト構築を、戦略立案から運用まで一貫してコンサルティングします。",

    //         // access.html
    //         addressText: "〒131-0045 東京都墨田区押上１丁目１−２",

    //         // greeting.html
    //         greetingTitle1: "ご挨拶",
    //         greetingContent1: "この度は株式会社KAIBYAKUのウェブサイトにお越しいただき、誠にありがとうございます。代表取締役の〇〇です。弊社は「全ての企業に可能性を」を理念に掲げ、中小企業の皆様の事業発展に貢献するため、日々邁進しております。激変する現代社会において、企業が直面する課題は多岐にわたります。私たちは、中小企業診断士、Webマーケティング、コンサルティングの３つの柱を通じて、お客様の潜在能力を最大限に引き出し、新たな未来を切り拓くお手伝いをさせていただきます。",
    //         greetingTitle2: "行動指針",
    //         greetingContent2: "<ul><li>**顧客第一主義**: お客様の課題を深く理解し、最適なソリューションを提供します。</li><li>**プロフェッショナリズム**: 常に専門知識とスキルを磨き、質の高いサービスを提供します。</li><li>**共創**: お客様と共に考え、共に汗を流し、共に成長することを目指します。</li><li>**革新**: 変化を恐れず、常に新しい価値創造に挑戦し続けます。</li><li>**社会貢献**: 地域社会の発展に寄与し、持続可能な社会の実現に貢献します。</li></ul>",

    //         // blog.html
    //         blogWebMarketing: "Webマーケティング",
    //         blogShindanshi: "中小企業診断士",
    //         blogLpSite: "LP・サイト制作",
    //         blogUpdate1: "2025/07/17更新",
    //         blogUpdate2: "2025/06/28更新",
    //         blogUpdate3: "2025/05/08更新",

    //         // contact.html
    //         contactTitle: "お問い合わせ",
    //         contactEmailLabel: "メールアドレスをご入力ください",
    //         contactEmailPlaceholder: "xxx.gmail.com",
    //         contactContentPlaceholder: "お問い合わせ内容をご入力ください",
    //         contactSendButton: "送信",
    //     },
    //     en: {
    //         // Common
    //         companyName: "KAIBYAKU Inc.",
    //         businessContent: "Services",
    //         access: "Access",
    //         greeting: "CEO Message",
    //         blog: "Blog",
    //         contact: "Contact",
    //         english: "English",
    //         japanese: "Japanese",
    //         close: "Close",
    //         contactButton: "Contact Form",
    //         detailsHere: "Details Here",

    //         // index.html
    //         tagline: "Unlocking Potential for All Businesses",
    //         service1Title: "Consultant Services",
    //         service2Title: "Web Marketing",
    //         service3Title: "Consulting",
    //         serviceText: "Place your text here",
    //         ceoGreetingTitle: "CEO's Message<br>About KAIBYAKU Inc.",
    //         accordionShi: "SME Consultant",
    //         accordionWeb: "Web Marketing",
    //         accordionCon: "Consulting",

    //         // aaa.html, bbb.html, ccc.html (LP pages)
    //         lpNavProblem: "Challenges",
    //         lpNavStory: "Story",
    //         lpNavService: "Service",
    //         lpNavIntroduction: "Introduction",
    //         lpNavResults: "Results",
    //         backToTop: "TOP",

    //         // aaa.html specific
    //         aaaFvText: "Leave SME Consulting to Us",
    //         aaaSection1Title: "Challenges for SME Consultants",
    //         aaaSection1Content: "We provide expert solutions for the diverse management challenges faced by many SMEs. We work closely with complex issues like cash flow, market development, and business succession, proposing concrete action plans.",
    //         aaaSection2Title: "Our SME Consultant Story",
    //         aaaSection2Content: "We have supported the growth of numerous SMEs. We value listening to the voices of business owners, overcoming challenges together, and guiding them to success. We prioritize a hands-on approach and are not afraid of hard work.",
    //         aaaSection3Title: "SME Consultant Services",
    //         aaaSection3Content: "We offer a wide range of services including management diagnosis, business plan development support, subsidy/grant application support, and business improvement plan development support. We propose optimal plans tailored to your situation.",
    //         aaaSection4Title: "About Us",
    //         aaaSection4Content: "We have many experienced SME consultants, and specialists in various fields collaborate to provide support. We sincerely address our clients' challenges and contribute to long-term corporate value improvement.",
    //         aaaSection5Title: "SME Consultant Achievements",
    //         aaaSection5Content: "Since our establishment, we have supported over XX companies, contributing to an average of XX% increase in sales and XX% reduction in costs. Please contact us for specific success stories.",

    //         // bbb.html specific
    //         bbbFvText: "Fulfilling Our Responsibility as Marketing Professionals.",
    //         bbbSection1Title: "Web Marketing Challenges",
    //         bbbSection1Content: "In today's digital age, web marketing is the lifeline of businesses. We support solving online challenges such as customer acquisition, sales improvement, and brand strengthening.",
    //         bbbSection2Title: "Our Web Marketing Story",
    //         bbbSection2Content: "We constantly follow the latest trends and have led numerous companies to success with data-driven strategies. We deeply understand our clients' businesses and formulate and execute customized marketing strategies.",
    //         bbbSection3Title: "Web Marketing Services",
    //         bbbSection3Content: "We offer comprehensive web marketing including SEO, web advertisement operation, SNS marketing, content marketing, access analysis, and EFO (input form optimization).",
    //         bbbSection4Title: "About Us",
    //         bbbSection4Content: "Our team of web marketing professionals proposes optimal strategies and provides end-to-end support from planning to execution to help you achieve your goals. We are committed to results.",
    //         bbbSection5Title: "Web Marketing Achievements",
    //         bbbSection5Content: "We have successfully implemented web marketing for a wide range of industries, from large corporations to SMEs. Specific achievements include a XX% increase in CVR and XX% improvement in ROAS.",

    //         // ccc.html specific
    //         cccFvText: "Unlock Your Company's Potential with Professional Consulting.",
    //         cccSection1Title: "Consulting Challenges",
    //         cccSection1Content: "Sometimes an external perspective is necessary for corporate growth. We provide expert consulting for complex management issues such as organizational reform, new business launch, and M&A.",
    //         cccSection2Title: "Our Consulting Story",
    //         cccSection2Content: "We have worked with our clients to address challenges and supported sustainable growth from a long-term perspective. We don't just offer advice; we accompany you through execution to achieve concrete results.",
    //         cccSection3Title: "Consulting Services",
    //         cccSection3Content: "We offer a wide range of consulting services including management strategy formulation, organization/HR consulting, new business development support, DX promotion support, and M&A strategy support.",
    //         cccSection4Title: "About Us",
    //         cccSection4Content: "Our consultants, with deep industry knowledge and rich experience, deeply understand your business and provide optimal solutions. We are fully committed to solving your challenges.",
    //         cccSection5Title: "Consulting Achievements",
    //         cccSection5Content: "We have successfully implemented management reforms in many companies, contributing to strengthening market competitiveness and establishing new revenue sources. Specific cases can be disclosed upon individual consultation.",

    //         // AAA.html, BBB.html, CCC.html (Sub-LP pages)
    //         subLpNavAd: "Ads",
    //         subLpNavLp: "LP",
    //         subLpNavMeo: "MEO",
    //         subLpNavCrm: "CRM",
    //         subLpNavSeo: "SEO",
    //         subLpNavStrategy: "Strategy",
    //         subLpNavSite: "Site",

    //         // AAA.html specific
    //         aaaSubSection1Title: "Advertising Strategy by SME Consultant",
    //         aaaSubSection1Content: "From the perspective of an SME consultant, we formulate cost-effective advertising strategies. We can also propose advertising campaigns utilizing subsidies and grants.",
    //         aaaSubSection2Title: "LP Improvement by SME Consultant",
    //         aaaSubSection2Content: "Considering the characteristics of SMEs, we support the improvement of LPs (landing pages) that lead to results. We propose concrete measures to improve CVR.",
    //         aaaSubSection3Title: "MEO Measures by SME Consultant",
    //         aaaSubSection3Content: "SME consultants strong in local business support MEO (Map Engine Optimization) measures to maximize store customer attraction.",
    //         aaaSubSection4Title: "CRM Introduction Support by SME Consultant",
    //         aaaSubSection4Content: "We support the introduction of CRM (Customer Relationship Management) systems to promote management efficiency through the utilization of customer data.",
    //         aaaSubSection5Title: "SEO Measures by SME Consultant",
    //         aaaSubSection5Content: "We implement SEO measures to help SME websites rank higher in search results, linking them with management strategies.",
    //         aaaSubSection6Title: "Management Strategy by SME Consultant",
    //         aaaSubSection6Content: "As SME consultants, we provide comprehensive support for formulating management strategies for sustainable growth.",
    //         aaaSubSection7Title: "Website Production Supervision by SME Consultant",
    //         aaaSubSection7Content: "From the perspective of an SME consultant, we supervise website production that contributes to achieving business goals.",

    //         // BBB.html specific
    //         bbbSubSection1Title: "Ad Operations by Web Marketing",
    //         bbbSubSection1Content: "With specialized web marketing knowledge, we manage the effective operation of various advertisements, including Google Ads and SNS ads.",
    //         bbbSubSection2Title: "LP Production by Web Marketing",
    //         bbbSubSection2Content: "We produce LPs (landing pages) that capture customers' hearts and achieve high conversion rates.",
    //         bbbSubSection3Title: "MEO Enhancement by Web Marketing",
    //         bbbSubSection3Content: "We implement the latest MEO (Map Engine Optimization) measures to maximize customer acquisition from local searches.",
    //         bbbSubSection4Title: "CRM Integration by Web Marketing",
    //         bbbSubSection4Content: "We integrate web marketing and CRM systems to support everything from customer data collection to analysis and utilization.",
    //         bbbSubSection5Title: "SEO Optimization by Web Marketing",
    //         bbbSubSection5Content: "We implement comprehensive SEO measures, from keyword selection to content optimization, aiming for top search engine rankings.",
    //         bbbSubSection6Title: "Web Marketing Strategy Planning",
    //         bbbSubSection6Content: "Based on market analysis, we formulate web marketing strategies optimal for your business and support their execution.",
    //         bbbSubSection7Title: "Effective Site Design and Production",
    //         bbbSubSection7Content: "We plan, design, and produce websites that enhance customer attraction and results, considering user experience.",

    //         // CCC.html specific
    //         cccSubSection1Title: "Consulting and Advertising Strategy",
    //         cccSubSection1Content: "We formulate advertising strategies linked to management strategies and support effective branding and customer acquisition.",
    //         cccSubSection2Title: "Consulting and LP Improvement",
    //         cccSubSection2Content: "From a consulting perspective, we guide the design and improvement of LPs (landing pages) that are optimal for achieving business objectives.",
    //         cccSubSection3Title: "Consulting and MEO Measures",
    //         cccSubSection3Content: "We offer consulting that incorporates MEO (Map Engine Optimization) as part of a regional strategy.",
    //         cccSubSection4Title: "Consulting and CRM Introduction",
    //         cccSubSection4Content: "We provide CRM introduction consulting to strengthen customer relationships and maximize LTV (Customer Lifetime Value).",
    //         cccSubSection5Title: "Consulting and SEO Strategy",
    //         cccSubSection5Content: "We formulate SEO strategies in line with management strategies to enhance website traffic in the long term.",
    //         cccSubSection6Title: "Comprehensive Consulting Strategy",
    //         cccSubSection6Content: "We provide comprehensive consulting on all aspects of management strategy tailored to the growth phase of your business.",
    //         cccSubSection7Title: "Consulting and Site Construction",
    //         cccSubSection7Content: "We provide end-to-end consulting for website construction to achieve business goals, from strategy formulation to operation.",

    //         // access.html
    //         addressText: "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan",

    //         // greeting.html
    //         greetingTitle1: "Greetings",
    //         greetingContent1: "Thank you for visiting KAIBYAKU Inc.'s website. I am [Your Name], the CEO. Our company is committed to the philosophy of 'Unlocking Potential for All Businesses' and strives daily to contribute to the business development of SMEs. In this rapidly changing modern society, businesses face diverse challenges. Through our three pillars: SME Consultants, Web Marketing, and Consulting, we will help you maximize your potential and open up a new future.",
    //         greetingTitle2: "Action Principles",
    //         greetingContent2: "<ul><li>**Customer First**: Deeply understand client challenges and provide optimal solutions.</li><li>**Professionalism**: Continuously refine expertise and skills to deliver high-quality services.</li><li>**Co-creation**: Aim to think, work, and grow together with our clients.</li><li>**Innovation**: Embrace change and continuously challenge ourselves to create new value.</li><li>**Social Contribution**: Contribute to the development of local communities and the realization of a sustainable society.</li></ul>",

    //         // blog.html
    //         blogWebMarketing: "Web Marketing",
    //         blogShindanshi: "SME Consultant",
    //         blogLpSite: "LP/Site Production",
    //         blogUpdate1: "Updated: 2025/07/17",
    //         blogUpdate2: "Updated: 2025/06/28",
    //         blogUpdate3: "Updated: 2025/05/08",

    //         // contact.html
    //         contactTitle: "Contact Us",
    //         contactEmailLabel: "Enter your email address",
    //         contactEmailPlaceholder: "xxx.gmail.com",
    //         contactContentPlaceholder: "Enter your inquiry details",
    //         contactSendButton: "Send",
    //     }
    // };

    let currentLanguage = 'ja'; // Default language

    const applyTranslation = () => {
        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[currentLanguage][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[currentLanguage][key];
                } else if (el.tagName === 'BUTTON') {
                    el.textContent = translations[currentLanguage][key];
                }
                else if (key === "ceoGreetingTitle" || key === "greetingContent2") {
                    el.innerHTML = translations[currentLanguage][key];
                }
                else {
                    el.textContent = translations[currentLanguage][key];
                }
            }
        });

        // Update hamburger menu 'English'/'日本語' item
        const langToggleButton = document.getElementById('lang-toggle');
        if (langToggleButton) {
            langToggleButton.textContent = currentLanguage === 'ja' ? translations.ja.english : translations.en.japanese;
            langToggleButton.setAttribute('data-translate-key', currentLanguage === 'ja' ? 'english' : 'japanese');
        }
        // Update header logo
        const headerLogo = document.querySelector('.header__logo');
        if (headerLogo) {
            headerLogo.textContent = translations[currentLanguage].companyName;
        }

        // Update index.html specific elements
        if (document.body.classList.contains('index-page')) {
            document.querySelector('.fv-company-name').textContent = translations[currentLanguage].companyName;
            document.querySelector('.fv-tagline').textContent = translations[currentLanguage].tagline;
        }
    };

    // --- Loading Animation ---
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500); // Allow fade-out animation to complete
        }, 2000); // Minimum 2 seconds
    }

    // --- Common Header & Hamburger Menu ---
    const hamburgerIcon = document.querySelector('.hamburger-menu-icon');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerClose = document.getElementById('hamburger-close');
    const hamburgerLangToggle = document.getElementById('lang-toggle');
    const businessContentLink = document.getElementById('business-content-link');
    const accordionMenu = document.getElementById('accordion-menu');

    if (hamburgerIcon && hamburgerMenu && hamburgerClose) {
        const toggleHamburgerMenu = () => {
            hamburgerIcon.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
            // Add a class to body to prevent scroll when menu is open
            document.body.classList.toggle('no-scroll');
        };

        hamburgerIcon.addEventListener('click', toggleHamburgerMenu);
        hamburgerClose.addEventListener('click', toggleHamburgerMenu);

        // Close hamburger menu when a link is clicked
        hamburgerMenu.querySelectorAll('ul li a').forEach(link => {
            if (link.id !== 'business-content-link') { // Exclude business content link for accordion
                link.addEventListener('click', () => {
                    toggleHamburgerMenu();
                    if (accordionMenu.classList.contains('open')) {
                        accordionMenu.classList.remove('open');
                    }
                });
            }
        });
    }

    // Language Toggle
    if (hamburgerLangToggle) {
        hamburgerLangToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
            applyTranslation();
            // Close hamburger menu after language change
            if (hamburgerMenu.classList.contains('active')) {
                hamburgerIcon.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    // Accordion Menu (Business Content)
    if (businessContentLink && accordionMenu) {
        businessContentLink.addEventListener('click', (e) => {
            e.preventDefault();
            accordionMenu.classList.toggle('open');
            // Close the main hamburger menu only if the accordion isn't open
            // No, the prompt says when this button is clicked, it opens, and when clicked again, it closes
            // So we don't close the main menu.
        });
    }

    // --- Fixed Contact Button ---
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        // You can add a scroll event listener here if you want it to appear/disappear on scroll
        // For now, it's always visible as per "常に右下に"
        contactButton.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    }

    // --- Index.html First View Slider ---
    const slides = document.querySelectorAll('.fv-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        };

        showSlide(currentSlide); // Show the first slide initially
        setInterval(nextSlide, 1500); // Change every 1.5 seconds
    }

    // --- Scroll Animation for Section Titles (LP pages & Greeting) ---
    const sectionTitles = document.querySelectorAll('.lp-section__title, .greeting-section__title, .sub-lp-section__title');

    const animateOnScroll = () => {
        sectionTitles.forEach(title => {
            const sectionTop = title.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) { // When title is 85% visible
                title.classList.add('is-visible');
            } else {
                title.classList.remove('is-visible'); // Optional: remove if scrolled back up
            }
        });
    };

    if (sectionTitles.length > 0) {
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on load to catch elements already in view
    }

    // --- Back to Top Button (LP pages) ---
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show after scrolling 300px
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- LP Page Header Navigation Smooth Scroll ---
    const lpPageNavLinks = document.querySelectorAll('.lp-header nav ul li a, .sub-lp-header nav ul li a');
    if (lpPageNavLinks.length > 0) {
        lpPageNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1); // Remove '#'
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerOffset = document.querySelector('.lp-header') ? document.querySelector('.lp-header').offsetHeight : (document.querySelector('.sub-lp-header') ? document.querySelector('.sub-lp-header').offsetHeight : 0);
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    // Update active class for LP nav
                    lpPageNavLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });

        // Set active class on scroll
        const sections = document.querySelectorAll('.lp-section, .sub-lp-section');
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50% 0px', // Adjust as needed
            threshold: 0.5 // When 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    lpPageNavLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // --- Contact Page Character Counter ---
    const contactMessageInput = document.getElementById('contact-message');
    const characterCountDisplay = document.getElementById('character-count');
    const maxChars = 1000;

    if (contactMessageInput && characterCountDisplay) {
        contactMessageInput.addEventListener('input', () => {
            const currentLength = contactMessageInput.value.length;
            characterCountDisplay.textContent = `${currentLength}/${maxChars}`;
            if (currentLength > maxChars) {
                contactMessageInput.value = contactMessageInput.value.substring(0, maxChars);
                characterCountDisplay.style.color = 'red';
            } else {
                characterCountDisplay.style.color = '#777';
            }
        });
        // Initialize count on load
        characterCountDisplay.textContent = `0/${maxChars}`;
    }

    // --- Contact Form Submission (Basic Email Link) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('contact-email').value;
            const message = contactMessageInput.value;
            const subject = encodeURIComponent("お問い合わせ (KAIBYAKU Corporate Site)");
            const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);

            window.location.href = `mailto:kaibyaku07@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    // Initial translation application
    applyTranslation();
});