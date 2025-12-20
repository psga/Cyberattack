// --- 1. Data Source ---
const events = [
    {
        id: 1,
        year: 1971,
        title: "Creeper Worm",
        desc: "The dawn of self-replicating code. Created by Bob Thomas as an experiment, it hopped between DEC PDP-10 mainframes on ARPANET, famously taunting users with the message: 'I'M THE CREEPER: CATCH ME IF YOU CAN!'",
        category: "Malware",
        modalImage: "img/Creeper.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Creeper_(program)" },
            { label: "Interesting video", url: "https://www.youtube.com/watch?v=_2E6dLCLKo8" }
        ]
    },
    {
        id: 2,
        year: 1974,
        title: "Wabbit Virus",
        desc: "Named for its 'rabbit-like' speed of reproduction, this 'fork bomb' didn't just spread—it multiplied exponentially until the host's processing power vanished, effectively choking the system into a total crash.",
        category: "Malware",
        modalImage: "img/wabbit.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fork_bomb" },
            { label: "Malware analysis", url: "https://www.sciencedirect.com/topics/computer-science/fork-bombhttps://www.infosecinstitute.com/resources/malware-analysis/malware-spotlight-wabbit/" }
        ]
    },
    {
        id: 3,
        year: 1982,
        title: "Elk Cloner",
        desc: "A high-school prank gone global. Created for the Apple II, it was the first virus to spread 'in the wild' via infected floppy disks, displaying a short poem every 50th time a disk was booted.",
        category: "Malware",
        modalImage: "img/Elk Clonner.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Elk_Cloner" },
            { label: "Interesting video", url: "https://www.youtube.com/watch?v=uaFFCD2jxR0" }
        ]
    },
    {
        id: 4,
        year: 1986,
        title: "Brain Virus",
        desc: "The first IBM PC virus was surprisingly polite. Created by two brothers in Pakistan to track software piracy, it replaced the boot sector of a floppy disk with their contact information for 'vaccination' services.",
        category: "Malware",
        modalImage: "img/brain.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brain_(computer_virus)" },
            { label: "Documentary: The Brain", url: "https://www.youtube.com/watch?v=6v_ew2Qir4I" }
        ]
    },
    {
        id: 5,
        year: 1988,
        title: "Morris Worm",
        desc: "The first major wake-up call for the internet. Robert Morris released a program to 'gauge the size of the web,' but a coding error caused it to re-infect machines, paralyzing 10% of all connected computers.",
        category: "Malware",
        modalImage: "img/morris.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Morris_worm" },
            { label: "An Analysis", url: "https://blog.datacloud.today/blog/2020/07/the-morris-worm/" },
            { label: "FBI Case Study", url: "https://www.fbi.gov/history/famous-cases/the-morris-wormhttps://www.fbi.gov/news/stories/morris-worm-30-years-since-first-major-attack-on-internet-110218" }
        ]
    },
    {
        id: 6,
        year: 1989,
        title: "AIDS Trojan",
        desc: "The origin of Ransomware. Distributed via 20,000 floppy disks to healthcare researchers, it waited for 90 boot cycles before locking files and demanding $189 be sent to a P.O. Box in Panama.",
        category: "Malware",
        modalImage: "img/AIDS.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/AIDS_(Trojan_horse)" },
        ]
    },
    {
        id: 7,
        year: 1994,
        title: "Vladimir Levin Hack",
        desc: "A landmark case of digital bank robbery. From a laptop in St. Petersburg, Levin bypassed Citibank’s security to siphon millions into accounts globally—all without using the internet, relying instead on dial-up wire transfers.",
        category: "Data Breach",
        modalImage: "img/vladimir.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vladimir_Levin" },
            { label: "The Citibank Heist", url: "https://www.bankinfosecurity.com/vladimir-levin-a-1293" }
        ]
    },
    {
        id: 8,
        year: 1999,
        title: "Melissa Virus",
        desc: "This macro-virus disguised itself as an MS Word document containing adult site passwords. Once opened, it hijacked Outlook to mail itself to the user's top 50 contacts, causing such massive traffic that it forced corporate email servers to shut down.",
        category: "Malware",
        modalImage: "img/melissa.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Melissa_(computer_virus)" },
            { label: "A interesting Documentary", url: "https://www.youtube.com/watch?v=Nl8M8SF6Db0" },
            { label: "Interesting video from NordVPN", url: "https://www.youtube.com/watch?v=rBFSJFeCgsY" }
        ]
    },
    {
        id: 9,
        year: 2000,
        title: "ILOVEYOU",
        desc: "The most virulent worm of its time. By exploiting human curiosity through a fake 'Love Letter' attachment, it infected 10% of all internet-connected computers in just days, causing global damage estimated in the billions.",
        category: "Malware",
        modalImage: "img/iloveu.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/ILOVEYOU" },
            { label: "ILOVEYOU Virus Attacks Computers", url: "https://www.ebsco.com/research-starters/computer-science/iloveyou-virus-attacks-computers" },
            { label: "History video", url: "https://www.youtube.com/watch?v=rz168q8O79E" }

        ]
    },
    {
        id: 10,
        year: 2001,
        title: "Code Red",
        desc: "A devastating worm that exploited a vulnerability in Microsoft IIS servers. In a single day, it infected over 350,000 systems to launch a coordinated Distributed Denial of Service (DDoS) attack against the White House website.",
        category: "Malware",
        modalImage: "img/codered.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Code_Red_(computer_worm)" },
            { label: "Scientific Analysis", url: "https://dl.acm.org/doi/10.1145/586110.586130" }
        ]
    },
    {
        id: 10,
        year: 2001,
        title: "Code Red",
        desc: "A devastating worm that exploited a vulnerability in Microsoft IIS servers. In a single day, it infected over 350,000 systems to launch a coordinated Distributed Denial of Service (DDoS) attack against the White House website.",
        category: "Malware",
        modalImage: "img/codered.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Code_Red_(computer_worm)" },
            { label: "Scientific Analysis", url: "https://dl.acm.org/doi/10.1145/586110.586130" }
        ]
    },
    {
        id: 11,
        year: 2003,
        title: "SQL Slammer",
        desc: "One of the fastest-spreading worms ever recorded. Exploiting a vulnerability in Microsoft SQL Server, SQL Slammer infected over 75,000 hosts in just minutes, generating massive network congestion and causing widespread internet slowdowns and service outages across the globe.",
        category: "Vulnerability",
        modalImage: "img/sqlslammer.jpg",
        resources: [
            { label: "Wikipedia", url: "https://es.wikipedia.org/wiki/SQL_Slammer" },
            { label: "Gusano:W32/Slammer", url: "https://www.f-secure.com/v-descs/mssqlm.shtml" }

        ]
    },
    {
        id: 12,
        year: 2004,
        title: "MyDoom",
        desc: "The fastest-spreading mass-mailing worm of its era. MyDoom propagated through infected email attachments, launched large-scale denial-of-service attacks, and caused an estimated $38 billion in global economic damage, disrupting networks and corporate systems worldwide.",
        category: "Malware",
        modalImage: "img/mydoom.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mydoom" },
            { label: "What is MyDoom?", url: "https://www.corero.com/what-is-mydoom-virus/" }
        ]
    },
    {
        id: 13,
        year: 2005,
        title: "TJX Companies Hack",
        desc: "One of the largest data breaches of the 2000s. Attackers exploited weak wireless security to infiltrate TJX Companies’ networks, stealing over 94 million credit and debit card records from retailers like TJ Maxx and Marshalls, exposing serious gaps in payment data protection.",
        category: "Data Breach",
        modalImage: "img/tjx.png",
        resources: [
            { label: "T.J. Maxx theft believed largest hack ever", url: "https://www.nbcnews.com/id/wbna17871485" },
            { label: "Interesting Video: The Autist that Became the FBI’s Most Wanted Hacker", url: "https://www.youtube.com/watch?v=4oxVxCXSscQ" }
        ]
    },
    {
        id: 14,
        year: 2007,
        title: "Estonia Cyberwar",
        desc: "First major case of a state targeted by coordinated DDoS attacks.The first widely recognized example of a nation targeted by large-scale cyberattacks. Estonia faced coordinated distributed denial-of-service attacks that disrupted government, banking, and media websites, highlighting how digital infrastructure could be weaponized in modern geopolitical conflicts.",
        category: "Warfare",
        modalImage: "img/stonia.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/2007_cyberattacks_on_Estonia" },
            { label: "Interesting Video: How Hackers Paralyzed an Entire Country", url: "https://www.youtube.com/watch?v=oB_Gcc9tzPo" }
        ]
    },
    {
        id: 15,
        year: 2008,
        title: "Conficker",
        desc: "Advanced worm that created a botnet of over 10M computers.One of the most sophisticated worms ever discovered. Conficker exploited Windows vulnerabilities to spread aggressively, disabling security services and forming a massive botnet of over 10 million compromised machines, demonstrating a new level of resilience and complexity in malware design.",
        category: "Malware",
        modalImage: "img/conflicker.jpeg",
        resources: [
            { label: "Wikipedia", url: " https://es.wikipedia.org/wiki/Conficker" },
            { label: "Conficker", url: "https://www.eset.com/latam/blog/cultura-y-seguridad-digital/conficker-el-gusano-por-el-que-windows-ofrecio-una-millonaria-recompensa/" }

        ]
    },
    {
        id: 16,
        year: 2009,
        title: "Rockyou",
        desc: "The RockYou breach is critical because it transformed 32 million plaintext passwords into the world’s most famous dictionary for hackers, exposing the predictable patterns people use to create credentials. Today, this legacy lives on in massive compilations like RockYou2024, which contains nearly 10 billion leaked entries used to automate attacks against anyone who reuses passwords across different websites.",
        category: "Data breach",
        modalImage: "img/rockyou.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Operation_Aurora" },
            { label: "Rocklist wordlist", url: "https://github.com/RykerWilder/rockyou.txt" }
        ]
    },
    {
        id: 17,
        year: 2009,
        title: "Operation Aurora",
        desc: "A highly targeted cyber-espionage campaign aimed at Google and more than 20 major companies. Operation Aurora exploited zero-day vulnerabilities to steal intellectual property and sensitive data, marking a turning point in the awareness of state-sponsored cyberattacks on private industry.",
        category: "Warfare",
        modalImage: "img/Operacionaurora.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Operation_Aurora" },
            { label: "HACKING GOOGLE  Documentary", url: "https://www.youtube.com/watch?v=przDcQe6n5o" },
            { label: "Cybernews  Documentary", url: "https://www.youtube.com/watch?v=MlD2h0BP0Jc" }
        ]
    },
    {
        id: 18,
        year: 2010,
        title: "Stuxnet",
        desc: "The first known cyberweapon to cause physical damage. Stuxnet used multiple zero-day exploits to infiltrate industrial control systems, specifically targeting Iranian nuclear centrifuges, and demonstrated how malware could be engineered to carry out precise, real-world sabotage.",
        category: "Warfare",
        modalImage: "img/Stuxnet1.png",
        resources: [
            { label: "Wikipedia", url: "https://es.wikipedia.org/wiki/Stuxnet" },
            { label: "Stuxnet explained: The first known cyberweapon", url: "https://www.csoonline.com/article/562691/stuxnet-explained-the-first-known-cyberweapon.html" },
            { label: "CyberNew video", url: "https://www.youtube.com/watch?v=WXK5XUYFZcg&t=96s" },
            { label: "Interesting video: How America Destroyed Iran's Nuclear Program", url: "https://www.youtube.com/watch?v=WyBlh8Tq6_Q" },
            { label: "A MS10-046 exploit", url: "https://www.exploit-db.com/exploits/16574" }

        ]
    },
    {
        id: 19,
        year: 2011,
        title: "PSN Outage",
        desc: "A massive breach that compromised Sony’s PlayStation Network, exposing personal data of 77 million users. The attack forced a prolonged shutdown of online services, highlighting vulnerabilities in consumer data protection and online gaming infrastructure.",
        category: "Data Breach",
        modalImage: "img/PSNoutage.png",
        resources: [
            { label: "A interesting documentary", url: "https://www.youtube.com/watch?v=oBflgU5ComI" },
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/2011_PlayStation_Network_outage" }
        ]
    },
    {
        id: 20,
        year: 2011,
        title: "RSA Breach",
        desc: "A targeted cyberattack on RSA Security that compromised confidential seed values used in SecurID two-factor authentication tokens. This breach undermined the security of numerous organizations relying on RSA’s technology, raising concerns about the integrity of hardware-based authentication.",
        category: "Data Breach",
        modalImage: "img/RSAbreach.png",
        resources: [
            { label: "Some lessons from the breach", url: "https://www.csoonline.com/article/532972/lessons-from-the-rsa-breach.html" },
            { label: "summary of this breach", url: "https://www.sophos.com/en-us/research/rsacompromise" }
        ]
    },
    {
        id: 21,
        year: 2012,
        title: "Shamoon",
        desc: "A destructive wiper malware attack that targeted Saudi Aramco, erasing data on approximately 30,000 workstations. Shamoon caused significant operational disruption and demonstrated the potential for cyberattacks to inflict large-scale damage on critical infrastructure.",
        category: "Warfare",
        modalImage: "img/Shamoon.jpg",
        resources: [
            { label: "A interesting video", url: "https://www.youtube.com/watch?v=LgdFiAq2z_Y" },
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Shamoon" }
        ]
    },
    {
        id: 22,
        year: 2013,
        title: "Yahoo Hack",
        desc: "The largest known data breach to date, compromising over 3 billion Yahoo user accounts. The attackers accessed sensitive personal information, exposing severe flaws in data security and prompting widespread concern over user privacy on major platforms.",
        category: "Data Breach",
        modalImage: "img/yahoo.png",
        resources: [
            { label: "Video: Yahoo's Dark Day", url: "https://www.youtube.com/watch?v=ONmQmad3a1g" },
            { label: "Wikipedia: Yahoo data breaches", url: "https://en.wikipedia.org/wiki/Yahoo_data_breaches" }
        ]
    },
    {
        id: 23,
        year: 2013,
        title: "Cryptolocker",
        desc: "The first widely recognized modern ransomware that sparked a global epidemic. CryptoLocker encrypted victims’ files and demanded payment in cryptocurrency for their release, introducing a highly profitable and persistent threat model that reshaped cybercrime tactics.",
        category: "Malware",
        modalImage: "img/cryptolocker.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/CryptoLocker" },
        ]
    },
    {
        id: 24,
        year: 2014,
        title: "Heartbleed",
        desc: "A critical vulnerability in the OpenSSL cryptographic library that allowed attackers to read sensitive data from server memory. Heartbleed exposed private keys, passwords, and other confidential information, forcing a massive global effort to patch affected systems and restore trust in internet security.",
        category: "Vulnerability",
        modalImage: "img/heartbleed.png",
        resources: [
            { label: "Official Page", url: "https://heartbleed.com/" },
            { label: "Video: Exploiting Heartbleed (in 2025)", url: "https://www.youtube.com/watch?v=myl0WRXRFjU" },
            { label: "Interesting Computerphile video about", url: "https://www.youtube.com/watch?v=1dOCHwf8zVQ" },

        ]
    },
    {
        id: 25,
        year: 2014,
        title: "Target Breach",
        desc: "A major retail breach where attackers accessed Target’s network through compromised vendor credentials, stealing credit card information from 40 million shoppers. This incident exposed vulnerabilities in third-party access and payment data security in large enterprises.",
        category: "Data Breach",
        modalImage: "img/Targetbreach.png",
        resources: [
            { label: "A interesting post", url: "https://frameworksecurity.com/post/the-target-breach-a-historic-cyberattack-with-lasting-consequences" },
            { label: "A video:How Not To Secure Your Company (Target Data Breach)", url: "https://www.youtube.com/watch?v=tGXV-ZRwcUM" }
        ]
    },
    {
        id: 26,
        year: 2014,
        title: "Sony SPE Hack",
        desc: "A highly destructive cyberattack that targeted Sony Pictures Entertainment, wiping data and crippling core IT infrastructure. The hack caused major operational disruptions and exposed sensitive internal communications, highlighting the risks of politically motivated cyber warfare.",
        category: "Warfare",
        modalImage: "img/SonySpe.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/2014_Sony_Pictures_hack" },
            { label: "Video:The Sony Pictures Hack Explained", url: "https://www.youtube.com/watch?v=gM08uLd4swM" },
            { label: "A CyberNews video", url: "https://www.youtube.com/watch?v=7zNbcWuZRzg" }
        ]
    },
    {
        id: 27,
        year: 2015,
        title: "Ukraine Power Grid",
        desc: "The first confirmed cyberattack to successfully disrupt a national power grid. Hackers infiltrated Ukraine’s electrical systems, causing outages that left 230,000 people without electricity and demonstrating the real-world impact of cyber warfare on critical infrastructure.",
        category: "Warfare",
        modalImage: "img/UkrainePower.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/2015_Ukraine_power_grid_hack" },
            { label: "CISA post", url: "https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01" }
        ]
    },
    {
        id: 28,
        year: 2015,
        title: "Ashley Madison",
        desc: "A high-profile data breach that exposed personal information of millions of users on the Ashley Madison affair website. The leak led to widespread social fallout, including reputational damage and privacy concerns, highlighting the risks of sensitive data exposure.",
        category: "Data Breach",
        modalImage: "img/AsleyM.png",
        resources: [
            { label: "wikipedia", url: "https://en.wikipedia.org/wiki/Ashley_Madison_data_breach" },
            { label: "A documentary", url: "https://www.youtube.com/watch?v=itwqCLa0Ktc&t" },
            { label: "A VICE video", url: "https://www.youtube.com/watch?v=p06gxp6YnQ8" },
            { label: "A WIRED video", url: "https://www.youtube.com/watch?v=U_pzHXfn8dE" }
        ]
    },
    {
        id: 29,
        year: 2016,
        title: "Mirai Botnet",
        desc: "A malware strain that hijacked poorly secured IoT devices using default passwords to create one of the largest botnets ever seen. Mirai launched massive DDoS attacks that disrupted major websites and highlighted the vulnerabilities of connected devices.",
        category: "Malware",
        modalImage: "img/Miraibotnet.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mirai_(malware)" },
            { label: "Cloudflare post", url: "https://www.cloudflare.com/learning/ddos/glossary/mirai-botnet/" },
            { label: "Video: Minecraft's Most Notorious Hacker", url: "https://www.youtube.com/watch?v=lQ5i6-jlEEw" }
        ]
    },
    {
        id: 30,
        year: 2017,
        title: "WannaCry",
        desc: "A widespread ransomware outbreak that exploited the EternalBlue vulnerability in Windows, rapidly infecting systems worldwide. WannaCry crippled organizations including the UK’s NHS, causing severe disruption to critical services and raising global awareness about patch management.",
        category: "Malware",
        modalImage: "img/Wannacry.png",
        resources: [
            { label: "CyberNews Documentary", url: "https://www.youtube.com/watch?v=_OmpRDWRT9U&pp=ygUId2FubmFjcnk%3D" },
            { label: "WANNACRY: The World's Largest Ransomware Attack (Documentary)", url: "https://www.youtube.com/watch?v=PKHH_gvJ_hA" },
            { label: "Wikipedia", url: "https://es.wikipedia.org/wiki/WannaCry" }
        ]
    },
    {
        id: 31,
        year: 2017,
        title: "NotPetya",
        desc: "A highly destructive wiper malware disguised as ransomware, NotPetya spread rapidly to cause widespread damage. Responsible for an estimated $10 billion in losses, it targeted critical infrastructure and businesses, illustrating the destructive potential of state-sponsored cyberattacks.",
        category: "Warfare",
        modalImage: "img/Notpetya.png",
        resources: [
            { label: "Wikipedia", url: "https://es.wikipedia.org/wiki/Petya_(malware)" },
            { label: "The Most Destructive Hack Ever Used: NotPetya", url: "https://www.youtube.com/watch?v=3-MSlNVqzYY" },
            { label: "Ukraine ransomware attacks", url: "https://en.wikipedia.org/wiki/2017_Ukraine_ransomware_attacks" }
        ]
    },
    {
        id: 32,
        year: 2017,
        title: "Equifax Breach",
        desc: "A massive data breach that exposed sensitive personal information of 147 million Americans. The attack exploited an unpatched software vulnerability in Equifax’s systems, raising serious concerns about corporate cybersecurity practices and consumer data protection.",
        category: "Data Breach",
        modalImage: "img/Equifax.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/2017_Equifax_data_breach" },
            { label: "Scishow Video", url: "https://www.youtube.com/watch?v=_6Qbslgpw8U" }
        ]
    },
    {
        id: 33,
        year: 2017,
        title: "EternalBlue",
        desc: "A critical vulnerability in Microsoft’s SMB protocol exposed after being leaked by the Shadow Brokers hacking group. EternalBlue was quickly weaponized in major cyberattacks like WannaCry and NotPetya, highlighting the dangers of leaked exploits and unpatched systems.",
        category: "Vulnerability",
        modalImage: "img/EternalBlue.png",
        resources: [
            { label: "Video: The Biggest Hacking Mystery of Our Time: Shadow Brokers", url: "https://www.youtube.com/watch?v=fxqcwK5OMag" },
            { label: "Some advisories, Solutions, and Tools", url: "https://www.incibe.es/en/incibe-cert/early-warning/vulnerabilities/cve-2017-0144" },
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/EternalBlue" }
        ]
    },
    {
        id: 34,
        year: 2018,
        title: "Spectre & Meltdown",
        desc: "Two critical hardware vulnerabilities affecting nearly all modern CPUs. Spectre and Meltdown allowed attackers to bypass fundamental security boundaries, accessing sensitive data from memory and prompting widespread hardware and software mitigations across the tech industry.",
        category: "Vulnerability",
        modalImage: "img/MeltdownSpectre.png",
        resources: [
            { label: "Official Site", url: "https://meltdownattack.com/" }
        ]
    },
    {
        id: 35,
        year: 2018,
        title: "Marriott Breach",
        desc: "A massive data breach exposing up to 500 million guest records from Marriott’s Starwood reservation system. The attack compromised personal information over several years, revealing significant gaps in long-term data security for hospitality giants.",
        category: "Data Breach",
        modalImage: "img/Marriott.jpg",
        resources: [
            { label: "Marriott Data Breach", url: "https://www.huntress.com/threat-library/data-breach/marriott-data-breach" }
        ]
    },
    {
        id: 36,
        year: 2019,
        title: "BlueKeep",
        desc: "A critical remote code execution vulnerability in Windows Remote Desktop Services that allowed attackers to execute arbitrary code and potentially take full control of affected systems. BlueKeep posed a significant threat due to its worm-like propagation potential if left unpatched.",
        category: "Vulnerability",
        modalImage: "img/bluekeep.jpg",
        resources: [

            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/BlueKeep" },
            { label: "References to Advisories, Solutions, and Tools", url: "https://www.incibe.es/en/incibe-cert/early-warning/vulnerabilities/cve-2019-0708" }
        ]
    },
    {
        id: 37,
        year: 2020,
        title: "SolarWinds Hack",
        desc: "A sophisticated supply chain attack that compromised SolarWinds’ software updates, infiltrating numerous US government agencies and Fortune 500 companies. The breach revealed vulnerabilities in trusted software ecosystems and highlighted the scale of state-sponsored cyber espionage.",
        category: "Warfare",
        modalImage: "img/solarwinds.png",
        resources: [
            { label: "a CyberNew documentary", url: "https://www.youtube.com/watch?v=Eq6ATHhBezw" },
            { label: "Fortinet blog", url: "https://www.fortinet.com/resources/cyberglossary/solarwinds-cyber-attack" }
        ]
    },
    {
        id: 38,
        year: 2021,
        title: "Colonial Pipeline",
        desc: "A ransomware attack that forced Colonial Pipeline to shut down operations, leading to widespread fuel shortages across the US East Coast. The incident underscored the vulnerability of critical infrastructure to cyber threats and the far-reaching impact of cybercrime.",
        category: "Warfare",
        modalImage: "img/colonialpipeline.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack" },
            { label: "A interesting Video", url: "https://www.youtube.com/watch?v=JjUOAnftxHE" }
        ]
    },
    {
        id: 39,
        year: 2021,
        title: "Log4Shell",
        desc: "A critical remote code execution vulnerability discovered in the widely used Log4j logging library. Log4Shell allowed attackers to execute arbitrary code on affected systems, sparking urgent global efforts to patch and mitigate one of the most severe software flaws in recent history.",
        category: "Vulnerability",
        modalImage: "img/log4j.png",
        resources: [
            { label: "Log4Shell: analysis of vulnerabilities in Log4j", url: "https://www.incibe.es/en/incibe-cert/blog/log4shell-analysis-vulnerabilities-log4j" },
            { label: "Log4j Vulnerability (Log4Shell) Explaine", url: "https://www.youtube.com/watch?v=w2F67LbEtnk" }
        ]
    },
    {
        id: 40,
        year: 2021,
        title: "Kaseya VSA Hack",
        desc: "A supply chain ransomware attack targeting Kaseya’s VSA software, impacting managed service providers (MSPs) and their clients worldwide. The breach highlighted the risks posed by vulnerabilities in critical IT management tools and the cascading effects of supply chain compromises.",
        category: "Warfare",
        modalImage: "img/kaseya.png",
        resources: [
            { label: "", url: "https://www.incibe.es/en/incibe-cert/publications/cybersecurity-highlights/supply-chain-cyberattack-against-kaseya-vsa-software" },
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kaseya_VSA_ransomware_attack" },
            { label: "fortinet blog", url: "https://www.fortinet.com/blog/threat-research/new-supply-chain-ransomware-attack-targets-kaseya-platform" },
        ]
    },
    {
        id: 41,
        year: 2022,
        title: "Sandworm Ukraine",
        desc: "A series of coordinated Russian cyberattacks targeting Ukrainian government and critical infrastructure. The Sandworm group employed destructive malware and disruption tactics, demonstrating the increasing role of cyber warfare in modern conflicts.",
        category: "Warfare",
        modalImage: "img/sandwormg.png",
        resources: [
            { label: "wikipedia", url: "https://en.wikipedia.org/wiki/Sandworm_(hacker_group)" },
            { label: "Group in MITRE ATTACK ", url: "https://attack.mitre.org/groups/G0034/" },
        ]
    },
    {
        id: 42,
        year: 2022,
        title: "Lapsus$ Hacks",
        desc: "A hacking group known for breaching major technology companies using social engineering and insider access. Lapsus$ gained attention for stealing sensitive data and disrupting operations, highlighting new trends in cybercriminal tactics targeting high-profile organizations.",
        category: "Warfare",
        modalImage: "img/lapsus.png",
        resources: [
            { label: "wikipedia", url: "https://en.wikipedia.org/wiki/Lapsus$" },
            { label: "Group in MITRE ATTACK", url: "https://attack.mitre.org/groups/G1004/" }
        ]
    },
    {
        id: 43,
        year: 2023,
        title: "MOVEit Transfer",
        desc: "A zero-day vulnerability in the MOVEit Transfer file-sharing software exploited by the Cl0p ransomware group. The attack led to widespread data breaches, exposing sensitive information and demonstrating the dangers of unpatched enterprise software.",
        category: "Data Breach",
        modalImage: "img/moveit.png",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/2023_MOVEit_data_breach" },
            { label: "A video in detail", url: "https://www.youtube.com/watch?v=R7wz6RxcjDE" }
        ]
    },
    {
        id: 44,
        year: 2024,
        title: "National Public Data",
        desc: "A massive data breach exposing Social Security numbers and personal information of billions worldwide. This unprecedented leak raised critical concerns about the security of national public databases and the risks of identity theft on a global scale.",
        category: "Data Breach",
        modalImage: "img/npd.jpg",
        resources: [
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/2024_National_Public_Data_breach" },
            { label: "Video:Case Study ", url: "https://www.youtube.com/watch?v=Kzax5eiGYlA" },
            { label: "A IBM post", url: "https://www.ibm.com/think/news/national-public-data-breach-publishes-private-data-billions-us-citizens" }
        ]
    }

];

// --- 2. Configuration & State ---
const config = {
    minYear: 1970,
    maxYear: 2025,
    trackWidth: 15000, // Adjusted further for massive event list
    lerpFactor: 0.1, // Smoothness of scroll
};

let activeCategories = new Set(events.map(e => e.category));
const categoryColors = {
    "Malware": "#ef4444",       // Red
    "Data Breach": "#f97316",   // Orange
    "Warfare": "#a855f7",       // Purple
    "Vulnerability": "#3b82f6"  // Blue
};

// --- 3. DOM Elements ---
const track = document.getElementById('timeline-track');
const scrollContainer = document.getElementById('scroll-container');
const filterContainer = document.getElementById('filter-container');
const modalOverlay = document.getElementById('modal-overlay');
const aboutOverlay = document.getElementById('about-overlay');
const modalContent = document.getElementById('modal-content');
const progressBar = document.getElementById('scroll-progress-bar');
const yearIndicator = document.getElementById('scroll-year-indicator');

// Scroll State
let targetScrollLeft = 0;
let currentScrollLeft = 0;
let isDragging = false;
let isDraggingScrollBar = false;
let startX, scrollStartX;

// --- 4. Logic: Render Timeline ---
// --- 4. Logic: Render Timeline ---

// Global state for marker syncing
let timelineGlobalState = {
    yearToX: {},
    totalTrackWidth: 0
};

function renderTimeline() {
    track.innerHTML = '';

    // Sort events by year to ensure propagation works correctly
    const sortedEvents = [...events].sort((a, b) => a.year - b.year);

    const minGap = 160; // Minimum pixels between node centers
    let currentAccOffset = 0;
    let lastFinalX = -minGap;
    const yearToX = {}; // Store positions for scroll sync

    sortedEvents.forEach((event, index) => {
        const totalYears = config.maxYear - config.minYear;
        const baseX = ((event.year - config.minYear) / totalYears) * config.trackWidth;

        // Calculate potential position with current accumulated offset
        let finalX = baseX + currentAccOffset;

        // If this position collides with the previous node, increase the offset
        if (finalX < lastFinalX + minGap) {
            currentAccOffset += (lastFinalX + minGap) - finalX;
            finalX = baseX + currentAccOffset;
        }

        lastFinalX = finalX;
        yearToX[event.id] = finalX; // Map ID to position

        const color = categoryColors[event.category] || "#ffffff";
        const node = document.createElement('div');
        node.className = `timeline-node absolute top-1/2 group cursor-pointer z-10`;
        node.style.left = `${finalX}px`;
        node.style.transform = `translate(-50%, -50%)`; // Center onX and Y

        node.dataset.category = event.category;
        node.dataset.year = event.year;

        // Check if multiple events in this year to add a suffix
        const eventsInYear = sortedEvents.filter(e => e.year === event.year);
        const eventIndex = eventsInYear.findIndex(e => e.id === event.id);
        const yearSuffix = eventsInYear.length > 1 ? `` : '';

        node.innerHTML = `
            <div class="relative flex flex-col items-center group-hover:scale-110 transition-transform duration-300">
                <span class="absolute -top-14 opacity-50 group-hover:opacity-100 transition-all duration-300 text-[11px] font-mono font-bold tracking-widest text-neutral-400 year-text">
                    ${event.year}${yearSuffix}
                </span>
                <div class="h-12 w-px bg-neutral-700 connector transition-all duration-300"></div>
                <div class="w-24 h-24 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden main-circle group-hover:scale-100">
                    <img src="${event.modalImage}" alt="${event.title}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                </div>
                <div class="absolute -bottom-14 opacity-0 group-hover:opacity-100 group-hover:-bottom-20 transition-all duration-300 w-56 text-center pointer-events-none">
                    <h3 class="text-[11px] font-black uppercase text-white bg-black/95 px-3 py-1.5 rounded-lg border border-neutral-800 tracking-tight shadow-2xl">${event.title}</h3>
                </div>
            </div>
        `;

        node.addEventListener('mouseenter', () => {
            node.querySelector('.year-text').style.color = color;
            node.querySelector('.connector').style.backgroundColor = color;
            node.querySelector('.main-circle').style.borderColor = color;
            node.querySelector('.main-circle').style.boxShadow = `0 0 40px ${color}55`;
        });
        node.addEventListener('mouseleave', () => {
            node.querySelector('.year-text').style.color = '';
            node.querySelector('.connector').style.backgroundColor = '';
            node.querySelector('.main-circle').style.borderColor = '';
            node.querySelector('.main-circle').style.boxShadow = '';
        });
        node.addEventListener('click', () => openModal(event));
        track.appendChild(node);
    });

    // Update track width to fit all pushed nodes + some padding
    const finalWidth = Math.max(config.trackWidth, lastFinalX + 400);
    track.style.width = `${finalWidth}px`;
    track.style.minWidth = `${finalWidth}px`;

    // Store state for markers
    timelineGlobalState.yearToX = yearToX;
    timelineGlobalState.totalTrackWidth = finalWidth;

    renderScrollMarkers();
    applyFilters();
}

function renderScrollMarkers() {
    // Clear existing markers (keep progress bar and year indicator)
    Array.from(document.querySelectorAll('.scroll-marker')).forEach(el => el.remove());

    const container = document.querySelector('.scroll-progress-container');
    const { yearToX, totalTrackWidth } = timelineGlobalState;

    // IMPORTANT: Calculate the maximum scrollable distance
    // The markers should represent the % of the SCROLLABLE area, not total width.
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Safety check to avoid division by zero or negative
    if (maxScroll <= 0) return;

    events.forEach(event => {
        const finalX = yearToX[event.id];
        if (finalX === undefined) return;

        // Calculate where the scrollbar (scrollTop/Left) needs to be to show this event centered (or left aligned)
        // We want the event to be at 100px from left.
        const targetScrollPos = Math.max(0, finalX - 100);

        // Now calculate what percentage of the TOTAL SCROLLABLE AREA this position represents
        const percent = (targetScrollPos / maxScroll) * 100;

        // Clamp between 0 and 100
        const clampedPercent = Math.max(0, Math.min(100, percent));

        const color = categoryColors[event.category] || "#ffffff";

        const marker = document.createElement('div');
        marker.className = 'scroll-marker';
        marker.dataset.category = event.category; // Add category for filtering
        marker.style.left = `${clampedPercent}%`;
        marker.style.backgroundColor = color;

        // Tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'scroll-marker-tooltip shadow-xl backdrop-blur-md';
        tooltip.innerHTML = `<span class="font-bold text-white">${event.year}</span> <span class="opacity-70">|</span> <span style="color:${color}">${event.title}</span>`;
        marker.appendChild(tooltip);

        // Click to scroll
        marker.addEventListener('click', (e) => {
            e.stopPropagation();
            targetScrollLeft = targetScrollPos;
        });

        container.appendChild(marker);
    });
}

// Add resize listener to update markers when viewport changes (altering maxScroll)
window.addEventListener('resize', () => {
    // Debounce slightly or just run
    requestAnimationFrame(renderScrollMarkers);
});

// --- 5. Logic: Filters ---
function renderFilters() {
    filterContainer.innerHTML = '';
    const categories = [...new Set(events.map(e => e.category))];
    categories.forEach(cat => {
        const isActive = activeCategories.has(cat);
        const color = categoryColors[cat] || "#ffffff";
        const btn = document.createElement('button');
        btn.className = `filter-btn flex items-center space-x-3 group transition-all duration-300 ${isActive ? 'active' : ''}`;
        btn.style.color = color;
        btn.innerHTML = `<div class="filter-btn-circle" style="border-color: ${color}"></div><span class="text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 group-hover:text-white">${cat}</span>`;
        btn.onclick = () => {
            if (isActive && activeCategories.size === 1) return;
            isActive ? activeCategories.delete(cat) : activeCategories.add(cat);
            renderFilters();
            applyFilters();
        };
        filterContainer.appendChild(btn);
    });
}

function applyFilters() {
    document.querySelectorAll('.timeline-node').forEach(node => {
        const visible = activeCategories.has(node.dataset.category);
        node.style.opacity = visible ? '1' : '0.05';
        node.style.pointerEvents = visible ? 'auto' : 'none';
        node.style.filter = visible ? 'grayscale(0)' : 'grayscale(1)';
    });

    // Also filter scroll markers
    document.querySelectorAll('.scroll-marker').forEach(marker => {
        const visible = activeCategories.has(marker.dataset.category);
        marker.style.opacity = visible ? '1' : '0';
        marker.style.pointerEvents = visible ? 'auto' : 'none';
    });
}

// --- 6. Logic: Full Screen Overlay & Parallax ---
const modalBgImage = document.getElementById('modal-bg-image');

function openModal(event) {
    // Populate Content
    modalBgImage.style.backgroundImage = `url('${event.modalImage}')`;
    document.getElementById('modal-year-display').innerText = event.year;
    document.getElementById('modal-year').innerText = event.year;
    document.getElementById('modal-category').innerText = event.category;
    document.getElementById('modal-title').innerText = event.title;
    document.getElementById('modal-desc').innerText = event.desc;

    // Populate Resources
    const resourcesContainer = document.getElementById('modal-resources');
    resourcesContainer.innerHTML = '';
    if (event.resources && event.resources.length > 0) {
        event.resources.forEach(res => {
            const link = document.createElement('a');
            link.href = res.url;
            link.className = 'resource-link';
            link.innerHTML = `<span>${res.label}</span><svg class="w-4 h-4 ml-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`;
            resourcesContainer.appendChild(link);
        });
    } else {
        resourcesContainer.innerHTML = '<span class="text-neutral-600 italic text-sm">No specific resources archived.</span>';
    }

    // Show Overlay
    modalOverlay.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    requestAnimationFrame(() => {
        modalOverlay.classList.remove('opacity-0');
    });

    // Add Parallax Listener
    document.addEventListener('mousemove', handleParallax);
}

function closeModal() {
    modalOverlay.classList.add('opacity-0');
    setTimeout(() => {
        modalOverlay.classList.add('hidden');
        // Reset background position
        modalBgImage.style.transform = `translate(0px, 0px) scale(1.1)`;
    }, 500); // Match CSS duration

    // Remove Parallax Listener
    document.removeEventListener('mousemove', handleParallax);
}

function handleParallax(e) {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    // Apply opposite movement
    modalBgImage.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
}

document.getElementById('close-modal').onclick = closeModal;
// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
        closeModal();
    }
});

// --- 7. Advanced Smooth Scrolling & Drag ---
function updateScroll() {
    currentScrollLeft += (targetScrollLeft - currentScrollLeft) * config.lerpFactor;
    scrollContainer.scrollLeft = currentScrollLeft;

    // Visual Scrollbar Sync
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const progress = (currentScrollLeft / maxScroll) * 100;
    progressBar.style.width = `${progress}%`;
    yearIndicator.style.left = `${progress}%`;

    if (config.maxYear && config.minYear) {
        const currentYear = Math.round(config.minYear + (progress / 100) * (config.maxYear - config.minYear));
        yearIndicator.innerText = currentYear;
    }

    requestAnimationFrame(updateScroll);
}

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    targetScrollLeft = Math.max(0, Math.min(scrollContainer.scrollWidth - scrollContainer.clientWidth, targetScrollLeft + e.deltaY * 2.5));
});

scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollStartX = targetScrollLeft;
    scrollContainer.classList.add('grabbing');
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    targetScrollLeft = Math.max(0, Math.min(scrollContainer.scrollWidth - scrollContainer.clientWidth, scrollStartX - walk));
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    scrollContainer.classList.remove('grabbing');
});

// --- 8. Scrollbar Interaction ---
const scrollProgressContainer = document.querySelector('.scroll-progress-container');

function handleScrollBarInteraction(e) {
    const rect = scrollProgressContainer.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    targetScrollLeft = percentage * maxScroll;
}

scrollProgressContainer.addEventListener('mousedown', (e) => {
    isDraggingScrollBar = true;
    handleScrollBarInteraction(e);
    scrollContainer.classList.add('grabbing');
});

window.addEventListener('mousemove', (e) => {
    if (isDraggingScrollBar) {
        handleScrollBarInteraction(e);
    }
});

window.addEventListener('mouseup', () => {
    if (isDraggingScrollBar) {
        isDraggingScrollBar = false;
        scrollContainer.classList.remove('grabbing');
    }
});

// --- 9. Initialization ---
function initializeApp() {
    renderTimeline();
    renderFilters();

    // Set initial timelapse to 2010
    const startYear = 2000;
    const event2010 = events.find(e => e.year === startYear);
    if (event2010 && timelineGlobalState.yearToX[event2010.id]) {
        targetScrollLeft = Math.max(0, timelineGlobalState.yearToX[event2010.id] - 100);
        currentScrollLeft = targetScrollLeft;
    }

    updateScroll();
    initStarBackground();

    // Handle Splash Screen
    const splash = document.getElementById('splash-screen');
    if (splash) {
        setTimeout(() => {
            splash.classList.add('fade-out');
            // Remove from DOM after transition to avoid any pointer-event issues
            setTimeout(() => {
                splash.remove();
            }, 1000); // Matches the 1s transition in CSS
        }, 1000); // Initial 1s display
    }
}

// --- 11. About Project Modal ---
const aboutBtn = document.getElementById('about-btn');
const closeAboutBtn = document.getElementById('close-about');

function openAbout() {
    aboutOverlay.classList.remove('hidden');
    // Force reflow for animation
    void aboutOverlay.offsetWidth;
    aboutOverlay.classList.add('flex', 'opacity-100');
    scrollContainer.style.pointerEvents = 'none';
}

function closeAbout() {
    aboutOverlay.classList.remove('opacity-100');
    setTimeout(() => {
        aboutOverlay.classList.add('hidden');
        aboutOverlay.classList.remove('flex');
        scrollContainer.style.pointerEvents = 'auto';
    }, 700); // Wait for transition
}

aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openAbout();
});

closeAboutBtn.addEventListener('click', closeAbout);
aboutOverlay.addEventListener('click', (e) => {
    if (e.target === aboutOverlay) closeAbout();
});

initializeApp();

// --- 10. Custom Cursor (Cybergap Style) ---
const follower = document.getElementById('follower');
const dot = document.getElementById('dot');

// Variables para la posición del mouse y del seguidor
let mouseX = 0, mouseY = 0;     // Posición real del mouse
let followX = 0, followY = 0;   // Posición del círculo con retraso

// 1. Capturamos la posición del mouse constantemente
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // El punto pequeño se mueve instantáneamente
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

// 2. Función de animación para el círculo exterior (Efecto Smooth)
function animateCursor() {
    // El "Lerp" (Linear Interpolation)
    // Calculamos la distancia y la multiplicamos por un factor (0.1)
    // Esto hace que el seguidor siempre intente alcanzar al mouse suavemente
    followX += (mouseX - followX) * 0.1;
    followY += (mouseY - followY) * 0.1;

    follower.style.left = followX + 'px';
    follower.style.top = followY + 'px';

    // Llamamos a la función en el próximo frame
    requestAnimationFrame(animateCursor);
}

// Iniciamos la animación
animateCursor();

// --- 12. Animated Star Background ---
function initStarBackground() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let width, height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initStars();
    }

    function initStars() {
        stars = [];
        const count = Math.floor((width * height) / 15000); // Much lower density for a cleaner look
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.2, // Smaller stars
                opacity: Math.random() * 0.5, // Lower initial opacity
                speed: 0.05 + Math.random() * 0.2, // Slower movement
                twinkle: Math.random() * 0.01 // Slower twinkling
            });
        }
    }

    function draw() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();

            // Movement
            star.y -= star.speed;
            if (star.y < 0) {
                star.y = height;
                star.x = Math.random() * width;
            }

            // Twinkle
            star.opacity += star.twinkle;
            if (star.opacity > 1 || star.opacity < 0.2) {
                star.twinkle = -star.twinkle;
            }
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
}
