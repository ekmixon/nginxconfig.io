"use strict";(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[33],{7033:(e,n,i)=>{i.r(n),i.d(n,{default:()=>Y});const o={back:"Zurück",next:"Weiter",enable:"Aktiviere",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"Logging",reverseProxy:"Reverse Proxy",reverseProxyLower:"reverse proxy",restrict:"Beschränkungen",path:"Pfad"};var r=i(6568);const t={title:`${o.nginx}Config`,description:`Der einfachste Weg, einen performanten, sicheren und stabilen ${o.nginx} Server zu konfigurieren.`,singleColumnMode:"Einspaltiger Modus",splitColumnMode:"Mehrspaltiger Modus",perWebsiteConfig:"Webseiten-Konfiguration",addSite:"Webseite hinzufügen",globalConfig:"Globale Konfiguration",setup:"Setup",configFiles:"Konfigurationsdateien",copied:"kopiert"},s={downloadConfig:"Konfiguration herunterladen",copyBase64:"Als Base64 kopieren"},a={backToTop:"Zurück nach oben",thisToolIs:"Dieses Tool ist",openSourceOnGitHub:"Open-Source auf GitHub",underThe:"unter der",mit:"MIT",license:"Lizenz!",weWelcomeFeedbackAndContributions:"Feedback und Beiträge sind willkommen.",originallyCreatedBy:"Ursprünglich erstellt von",balintSzekeres:"Bálint Szekeres",maintainedBy:"gepflegt von",digitalOcean:"DigitalOcean"},l={enableEncryptedSslConnection:`${o.enable} verschlüsselte ${o.ssl} Verbindungen`,http2:`${o.http}/2`,enableHttp2Connections:`${o.enable} ${o.http}/2 Verbindungen`,http3:`${o.http}/3`,enableHttp3Connections:`${o.enable} ${o.http}/3 Verbindungen`,forceHttps:`Erzwinge ${o.https}`,hsts:"HSTS",enableStrictTransportSecurity:`${o.enable} Strict Transport Security, was HTTPS Verbindungen erzwingt`,enableIncludeSubDomains:`${o.enable} includeSubDomains Direktive, welche HTTPS Verbindungen auf ALLEN Subdomains erzwingt`,enablePreload:`${o.enable} preload Direktive, welche Browsern mitteilt, ausschließlich HTTPS Verbindungen zu verwenden`,certificationType:"Zertifizierungsart",customCertificate:"Eigenes Zertifikat",letsEncryptEmail:`${o.letsEncrypt} E-Mail`,http3IsANonStandardModule:"HTTP/3 ist kein Standard NGINX Modul. Besuche das ",http3NginxQuicReadme:"NGINX QUIC Readme",http3OrThe:" oder das ",http3CloudflareQuicheProject:"Cloudflare Quiche Project",http3ForBuildingNginxWithHttp3:" für Informationen, wie man NGINX mit HTTP/3 verwendet!"},d={byDomain:"der Domain",enableForThisDomain:"Für diese Domain aktivieren"},u="Onion",c={onion:u,onionLocation:`${u} Location`,provideAnOnionLocationToSetOnionLocationHeader:"Gib eine Onion Adresse an, um den Onion-Location Header für deine Seite zu setzen.",letsVisitorsKnownOnionServicesIsAvailable:"Dies teilt deinen Besuchern mit, dass eine Onion-Version deiner Webseite für Tor-Browser verfügbar ist.",learnMoreAboutOnionServices:"Lerne mehr über Onion-Dienste",onionLocationExpectedToEndWithOnion:"Onion Adressen enden normalerweise mit `.onion`."},g={phpIsDisabled:`${o.php} ist deaktiviert.`,phpCannotBeEnabledWithReverseProxy:`${o.php} kann nicht aktiviert werden, während ein Reverse Proxy aktiviert ist.`,phpCannotBeEnabledWithPython:`${o.php} kann nicht aktiviert werden, während ${o.python} aktiviert ist.`,enablePhp:`${o.enable} ${o.php}`,wordPressRules:`${o.wordPress} Regeln`,enableWordPressRules:`${o.enable} ${o.wordPress}-spezifische Regeln`,drupalRules:`${o.drupal} Regeln`,enableDrupalRules:`${o.enable} ${o.drupal}-spezifische Regeln`,magentoRules:`${o.magento} Regeln`,enableMagentoRules:`${o.enable} ${o.magento}-spezifische Regeln`,joomlaRules:`${o.joomla} Regeln`,enableJoomlaRules:`${o.enable} ${o.joomla}-spezifische Regeln`,phpServer:`${o.php} Server`,phpBackupServer:`${o.php} Backup Server`,tcp:"TCP",hhvmSocket:"HHVM Socket",php70Socket:"7.0 Socket",php71Socket:"7.1 Socket",php72Socket:"7.2 Socket",php73Socket:"7.3 Socket",php74Socket:"7.4 Socket",php80Socket:"8.0 Socket",php81Socket:"8.1 Socket",php82Socket:"8.2 Socket",phpSocket:"PHP Socket",custom:"Benutzerdefiniert",disabled:"Deaktiviert"},p={presets:"Voreinstellungen",itLooksLikeYouCustomisedTheConfig:"Es sieht so aus, als hättest du die Konfiguration für diese Webseite angepasst. Eine neue Voreinstellung zu laden könnte manche deiner Anpassungen zurücksetzen oder ändern.",frontend:"Frontend",nodeJs:"Node.js",singlePageApplication:"Single-Page-Webanwendung"},h={pythonIsDisabled:`${o.python} ist deaktiviert.`,pythonCannotBeEnabledWithReverseProxy:`${o.python} kann nicht aktiviert werden, während ein Reverse Proxy aktiviert ist.`,pythonCannotBeEnabledWithPhp:`${o.python} kann nicht aktiviert werden, während ${o.php} aktiviert ist.`,enablePython:`${o.enable} ${o.python}`,djangoRules:`${o.django} Regeln`,enableDjangoRules:`${o.enable} ${o.django}-spezifische Regeln`},m={disableForThisDomain:"Für diese Domain deaktivieren",responseCode:"HTTP Antwort-Code"},b={reverseProxyIsDisabled:`${o.reverseProxy} ist deaktiviert.`,reverseProxyCannotBeEnabledWithPhp:`${o.reverseProxy} kann nicht aktiviert werden, während ${o.php} aktiviert ist.`,reverseProxyCannotBeEnabledWithPython:`${o.reverseProxy} kann nicht aktiviert werden, während ${o.python} aktiviert ist.`,enableReverseProxy:`${o.enable} ${o.reverseProxy}`,proxyHostHeader:"Proxy Host header"},f={fallbackRouting:"Fallback Routing",fallbackRoutingPhpPath:`Fallback Routing ${o.php} Pfad`,legacyPhpRouting:`Legacy ${o.php} Routing`,enableLegacyRouting:`${o.enable} Legacy Routing`,routing:"Routing"},k={domain:"Domain",documentRoot:"Document Root",oneOrMoreOtherDomainsAreAlsoNamed:"Eine oder mehrere Domains lauten ebenfalls",thisWillCauseIssuesWithConfigGeneration:"Dies sorgt für Probleme beim Generieren der Konfigurationsdateien.",wwwSubdomain:"WWW Subdomain",cdnSubdomain:"CDN Subdomain",redirectSubdomains:"Subdomains weiterleiten",server:"Server",listen:"Hören auf"},v={https:l,logging:d,php:g,presets:p,python:h,reverseProxy:b,routing:f,server:k,restrict:m,onion:c},S="Mozilla",$="IPv4",y="IPv6",C={sslProfile:`${o.ssl} Profil`,httpsMustBeEnabledOnOneSite:`${o.https} muss auf mindestes einer Webseite aktiviert sein, um globale ${o.https} Einstellungen zu konfigurieren.`,portReuse:"Reuseport",enableReuseOfPort:`${o.enable} Reuseport um einen Socket pro Worker zu generieren`,ocspDnsResolvers:"OCSP DNS Resolver",cloudflareResolver:"Cloudflare Resolver",googlePublicDns:"Google Public DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`${o.letsEncrypt} Web-Root`,letsEncryptCertRoot:`${o.letsEncrypt} Zertifikats-Verzeichnis`,mozillaModern:`${S} Modern`,mozillaIntermediate:`${S} Intermediate`,mozillaOld:`${S} Old`,ipv4Only:`nur ${$}`,ipv6Only:`nur ${y}`,ipv4AndIpv6:`${$} & ${y}`},P={enableFileNotFoundErrorLogging:`${o.enable} "Seite nicht gefunden" Error Logging in`,logformat:"log_format",enableCloudflare:"Füge Cloudflare Anfrage-Header dem Standard Log-Format hinzu",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},D={nginxConfigDirectory:`${o.nginx} Konfigurationsverzeichnis`,mb:"MB"},z={disableHtmlCaching:"Disable HTML caching",enableDisableHtmlCaching:"disable HTML caching",gzipCompression:"Gzip Komprimierung",enableGzipCompression:`${o.enable} Gzip Komprimierung`,brotliCompression:"Brotli Komprimierung",enableBrotliCompression:`${o.enable} Brotli Komprimierung`,brotliIsANonStandardModule:"Brotli ist kein Standard NGINX Modul. Besuche das ",brotliGoogleNgxBrotliProject:"Google ngx_brotli Projekt",brotliForBuildingNginxWithBrotli:" für Informationen, wie man NGINX mit Brotli verwendet!",expirationForAssets:"Ablauf von Assets",expirationForMedia:"Ablauf von Medien",expirationForSvgs:"Ablauf von SVGs",expirationForFonts:"Ablauf von Schriften",performance:"Performance"},w={pythonServer:`${o.python} Server`,pythonMustBeEnabledOnOneSite:`${o.python} muss auf mindestes einer Webseite aktiviert sein, um globale ${o.python} Einstellungen zu konfigurieren.`},x="Legacy X-Forwarded-* Header",T={reverseProxyMustBeEnabledOnOneSite:`${o.reverseProxy} muss auf mindestes einer Webseite aktiviert sein, um globale ${o.reverseProxy} Einstellungen zu konfigurieren.`,seconds:"Sekunden",passOn:`${x} weiterleiten`,remove:`${x} aktiv entfernen`},R={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`Bei der Verwendung von ${o.wordPress} ist es oft nötig, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> in die Content Security Policy aufzunehmen, damit der Admin-Bereich korrekt funktioniert.`,security:"Security"},B={modularizedStructure:"Modularisierte Struktur",enableModularizedConfigFiles:`${o.enable} modularisierte Konfigurationsdateien`,symlinkVhost:"Symlink VHost",enableSymLinksFrom:`${o.enable} Symlinks von`,to:"zu",shareConfiguration:"Konfiguration teilen",resetConfiguration:"Konfiguration zurücksetzen",resetGlobalConfig:"Globale Konfiguration zurücksetzen",resetAllDomains:"Alle Domains zurücksetzen",removeAllDomains:"Alle Domains entfernen",resetAllDomainsConfig:"Alle Domain-Konfigurationen entfernen",resetDomainConfig:"Konfiguration zurücksetzen",removeDomain:"Domain entfernen",yesImSure:"Ja, ich bin sicher",noCancel:"Nein, abbrechen",tools:"Tools",resetGlobalConfigBody:'Bist du dir sicher, dass du alle Optionen im Bereich "Globale Konfiguration" zurücksetzen möchtest?',resetAllDomainsConfigBody:"Bist du dir sicher, dass du die Konfiguration ALLER Domains zurücksetzen möchtest?",removeAllDomainsBody:"Bist du dir sicher, dass du ALLE Domains entfernen möchtest?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"Bist du dir sicher, dass du die Konfiguration von",domain:"zurücksetzen möchtest?",areYouSureYouWantToRemoveThe:"Bist du dir sicher, dass du die Domain ",domainConfiguration:"entfernen möchtest?"},E="Docker",O="Dockerfile",A={docker:E,dockerfile:O,dockerCompose:`${E} Compose`,applyDockerTweaks:`${E} Optimierungen anwenden`,applyDockerTweaksForNginx:`Füge Optimierungen für den Betrieb von ${o.nginx} mit ${E} der Konfigurationsdatei hinzu`,applyDockerTweaksExplainer:`Setzt den ${o.nginx} Benutzer auf <code class="slim">nginx</code> und die PID auf <code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`${O} hinzufügen, um ${o.nginx} mit ${E} zu betreiben`,includeDockerCompose:`docker-compose.yaml hinzufügen, um ${o.nginx} mit docker-compose zu betreiben`},F={https:C,logging:P,nginx:D,performance:z,python:w,reverseProxy:T,security:R,tools:B,docker:A},I="Certbot",L={commentOutSslDirectivesInConfiguration:`Kommentiere ${o.ssl}-relevante Direktiven in deiner Konfiguration aus:`,reloadYourNginxServer:`Führe einen reload deines ${o.nginx} Server aus:`,obtainSslCertificatesFromLetsEncrypt:`Erhalte ${o.ssl} Zertifikate von ${o.letsEncrypt} mittels ${I}:`,uncommentSslDirectivesInConfiguration:`Kommentiere ${o.ssl}-relevante Direktiven in deiner Konfiguration ein:`,configureCertbotToReloadNginxOnCertificateRenewal:`Konfiguriere ${I} um ${o.nginx} neu zu laden, wenn die Zertifikate erfolgreich erneuert wurden:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`${I} muss für deine ${o.nginx} Konfiguration nicht eingerichtet werden.`,certbot:I},N={downloadTheGeneratedConfig:"Generierte Konfigurationsdateien <b>herunterladen</b>:",andUploadItToYourServers:"Auf deinen Server <b>hochladen</b> und ins Verzeichnis ",directory:"verschieben.",or:"Oder ",copyBase64StringOfCompressedConfig:"kopiere einen Base64 String der komprimierten Konfiguration",pasteItInYourServersCommandLineAndExecute:", füge ihn auf der Kommandozeile deines Servers ein und führe ihn aus.",navigateToYourNginxConfigurationDirectoryOnYourServer:`Wechsle in das ${o.nginx} <b>Konfigurationsverzeichnis</b> deines Servers:`,createABackupOfYourCurrentNginxConfiguration:`Erstelle ein <b>Backup</b> deiner aktuellen ${o.nginx} Konfiguration:`,extractTheNewCompressedConfigurationArchiveUsingTar:"<b>Entpacke</b> das komprimierte Konfigurationsverzeichnis mittels tar:",download:"Download"},K={letsGoLive:"Jetzt gehts los!",reloadNginxToLoadInYourNewConfiguration:`Lade ${o.nginx} neu, um deine neue Konfiguration zu verwenden:`,goLive:"Los gehts!"},H={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"Erzeuge <b>Diffie-Hellman Schlüssel</b> indem du diesen Befehl auf deinem Server ausführst:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`Erstelle ein <b>ACME-Challenge</b> Verzeichnis (für <b>${o.letsEncrypt}</b>):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`Es sind keine weiteren Schritte nötig, um ${o.ssl} für deine ${o.nginx} Konfiguration einzurichten.`,sslInit:`${o.ssl} initialisieren`},W={certbot:L,download:N,goLive:K,ssl:H},M={lookingForAPlaceToDeploy:"👋 Suchst du nach einem Ort, deine neue Konfiguration zu deployen?",tryOutDigitalOceansDroplet:"Teste DigitalOcean's LEMP Droplet mit NGINX"},G={wantToContributeChanges:"👋 Willst du neue Features vorschlagen, Änderungen beitragen oder das Tool in eine andere Sprache übersetzen?",getInvolvedOnGitHub:"Beteilige dich auf GitHub"},V={droplet:M,contribute:G},j={app:t,setup:s,footer:a,domainSections:v,globalSections:F,setupSections:W,callouts:V},Y={common:o,languages:r["default"],templates:j}}}]);