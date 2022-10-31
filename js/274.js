"use strict";(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[274],{9274:(e,o,n)=>{n.r(o),n.d(o,{default:()=>V});const t={back:"返回",next:"下一个",enable:"启用",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"日志记录",reverseProxy:"反向代理",reverseProxyLower:"反向代理",restrict:"限制",path:"路径"};var r=n(2073);const i={title:`${t.nginx} 配置`,description:`配置高性能、安全、稳定的${t.nginx}服务器的最简单方法。`,singleColumnMode:"垂直模式",splitColumnMode:"水平模式",perWebsiteConfig:"站点配置",addSite:"添加站点",globalConfig:"全局配置",setup:"使用配置",configFiles:"配置文件",copied:"已复制"},s={downloadConfig:"下载配置",copyBase64:"复制Base64"},a={backToTop:"返回顶部",thisToolIs:"这个工具",openSourceOnGitHub:"开源在GitHub上",underThe:"是",mit:"MIT",license:"许可!",weWelcomeFeedbackAndContributions:"我们欢迎您提供反馈和意见。",originallyCreatedBy:"最初创建者",balintSzekeres:"Bálint Szekeres",maintainedBy:"维护者",digitalOcean:"DigitalOcean"},l={enableEncryptedSslConnection:`${t.enable}加密的${t.ssl}连接`,http2:`${t.http}/2`,enableHttp2Connections:`${t.enable} ${t.http}/2 连接`,http3:`${t.http}/3`,enableHttp3Connections:`${t.enable} ${t.http}/3 连接`,forceHttps:`强制 ${t.https}`,hsts:"HSTS",enableStrictTransportSecurity:`${t.enable}HSTS（强制客户端、浏览器等使用 HTTPS 与服务器创建链接），需要HTTPS连接`,enableIncludeSubDomains:`${t.enable}includeSubDomains指令，HSTS对所有子域生效`,enablePreload:`${t.enable}preload指令, 强制客户端只可以使用https连接`,certificationType:"证书类型",customCertificate:"本地证书",letsEncryptEmail:`${t.letsEncrypt} 邮箱`,http3IsANonStandardModule:"HTTP/3 并不是一个标准的 NGINX 模块, 请查看 ",http3NginxQuicReadme:"NGINX QUIC 使用文档",http3OrThe:" 或者 ",http3CloudflareQuicheProject:"Cloudflare quiche 项目",http3ForBuildingNginxWithHttp3:" 以构建支持 HTTP/3 的 NGINX!"},p={byDomain:"在此站点",enableForThisDomain:`为此站点${t.enable}`},c={phpIsDisabled:`${t.php}已禁用。`,phpCannotBeEnabledWithReverseProxy:`${t.php}在启用${t.reverseProxy}时无法启用。`,phpCannotBeEnabledWithPython:`${t.php} 在启用${t.python}时无法启用。`,enablePhp:`${t.enable} ${t.php}`,wordPressRules:`${t.wordPress} 规则`,enableWordPressRules:`${t.enable} ${t.wordPress}专属规则`,drupalRules:`${t.drupal} 规则`,enableDrupalRules:`${t.enable} ${t.drupal}专属规则`,magentoRules:`${t.magento} 规则`,enableMagentoRules:`${t.enable} ${t.magento}专属规则`,joomlaRules:`${t.joomla} 规则`,enableJoomlaRules:`${t.enable} ${t.joomla}专属规则`,phpServer:`${t.php} 服务`,phpBackupServer:`${t.php}备份服务器`,tcp:"TCP",hhvmSocket:"HHVM socket",php70Socket:"7.0 socket",php71Socket:"7.1 socket",php72Socket:"7.2 socket",php73Socket:"7.3 socket",php74Socket:"7.4 socket",php80Socket:"8.0 socket",php81Socket:"8.1 socket",php82Socket:"8.2 socket",phpSocket:"PHP socket",custom:"自定义",disabled:"禁用"},d={presets:"预设",itLooksLikeYouCustomisedTheConfig:"看起来您已经为这个站点定制了配置。选择新的预设可能会重置或更改一些您已经定制的设置。",frontend:"前端",nodeJs:"Node.js",singlePageApplication:"单页面应用"},u={pythonIsDisabled:`${t.python}已禁用。`,pythonCannotBeEnabledWithReverseProxy:`${t.python}在启用${t.reverseProxy}时无法启用。`,pythonCannotBeEnabledWithPhp:`${t.python}在启用${t.php}时无法启用。`,enablePython:`${t.enable} ${t.python}`,djangoRules:`${t.django} 规则`,enableDjangoRules:`${t.enable} ${t.django}专属规则`},g={reverseProxyIsDisabled:`${t.reverseProxy}已禁用。`,reverseProxyCannotBeEnabledWithPhp:`${t.reverseProxy}在启用${t.php}时无法启用。`,reverseProxyCannotBeEnabledWithPython:`${t.reverseProxy}在启用${t.python}时无法启用。`,enableReverseProxy:`${t.enable} ${t.reverseProxyLower}`,proxyHostHeader:"Proxy Host header"},b={fallbackRouting:"后备路由",fallbackRoutingPhpPath:`后备路由${t.php}路径`,legacyPhpRouting:`传统${t.php}路由`,enableLegacyRouting:`${t.enable}传统路由`,routing:"路由设置"},h={domain:"站点",documentRoot:"运行目录",oneOrMoreOtherDomainsAreAlsoNamed:"发现了重复的域名",thisWillCauseIssuesWithConfigGeneration:"这将导致生成配置出现问题。",wwwSubdomain:"www 子域名",cdnSubdomain:"CDN 子域名",redirectSubdomains:"子域名重定向",server:"服务",listen:"监听"},$={disableForThisDomain:"在此站点上禁用",responseCode:"响应代码"},m="洋葱",y={onion:m,onionLocation:`${m}位置`,provideAnOnionLocationToSetOnionLocationHeader:"提供一个洋葱位置地址，为您的站点设置洋葱协议头。",letsVisitorsKnownOnionServicesIsAvailable:"这可以让访问者知道你的网站的洋葱服务版本可用于Tor浏览器。",learnMoreAboutOnionServices:"了解有关洋葱服务的更多信息",onionLocationExpectedToEndWithOnion:"洋葱位置地址通常以.onion结尾。"},C={https:l,logging:p,php:c,presets:d,python:u,reverseProxy:g,routing:b,server:h,restrict:$,onion:y},f="Mozilla",S="IPv4",P="IPv6",x={sslProfile:`${t.ssl}配置`,httpsMustBeEnabledOnOneSite:`必须在至少一个站点上启用${t.https}才能配置全局${t.https}设置。`,portReuse:"端口重用",enableReuseOfPort:`${t.enable} 重用端口 为每个 NGINX Worker 单独生成一个监听套接字`,ocspDnsResolvers:"OCSP DNS解析器",cloudflareResolver:"Cloudflare解析器",googlePublicDns:"谷歌公共DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`${t.letsEncrypt} Web根目录`,letsEncryptCertRoot:`${t.letsEncrypt}证书目录`,mozillaModern:`${f} Modern`,mozillaIntermediate:`${f} Intermediate`,mozillaOld:`${f} Old`,ipv4Only:`${S}`,ipv6Only:`${P}`,ipv4AndIpv6:`${S} & ${P}`},v={enableFileNotFoundErrorLogging:`${t.enable}“文件未找到”错误日志：`,logformat:"log_format",enableCloudflare:"将Cloudflare请求头部添加到默认日志格式",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},k={nginxConfigDirectory:`${t.nginx}配置目录`,mb:"MB"},T={disableHtmlCaching:"禁用 HTML 缓存",enableDisableHtmlCaching:"禁用 HTML 缓存",gzipCompression:"Gzip 压缩",enableGzipCompression:`${t.enable} Gzip 压缩`,brotliCompression:"Brotli 压缩",enableBrotliCompression:`${t.enable} Brotli 压缩`,brotliIsANonStandardModule:"Brotli 并不是一个 standard NGINX 模块, 请查看 ",brotliGoogleNgxBrotliProject:"Google ngx_brotli 项目",brotliForBuildingNginxWithBrotli:" 以构建支持 Brotli 的 NGINX!",expirationForAssets:"资源有效期",expirationForMedia:"媒体资源有效期",expirationForSvgs:"SVGs有效期",expirationForFonts:"字体有效期",performance:"性能"},D={pythonServer:`${t.python} 服务`,pythonMustBeEnabledOnOneSite:`必须在至少一个站点上启用${t.python}才能配置全局${t.python}设置。`},N="传统 X-Forwarded-* 请求头",I={reverseProxyMustBeEnabledOnOneSite:`必须在至少一个站点上启用${t.reverseProxy}才能配置全局${t.reverseProxy}设置。`,seconds:"秒",passOn:`转发 ${N}`,remove:`自动删除 ${N}`},O={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`当使用${t.wordPress}时，<code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> 通常需要置于内容安全策略中，以确保管理面板的正常运行。`,security:"安全"},w={modularizedStructure:"模块化结构",enableModularizedConfigFiles:`${t.enable}模块化的配置文件`,symlinkVhost:"符号链接 vhost",enableSymLinksFrom:`${t.enable}符号链接`,to:"到",shareConfiguration:"分享配置",resetConfiguration:"重置配置",resetGlobalConfig:"重置全局配置",resetAllDomains:"重置所有站点",resetAllDomainsConfig:"重置所有站点",removeAllDomains:"删除所有站点",resetDomainConfig:"重置站点配置",removeDomain:"删除站点",yesImSure:"好的",noCancel:"取消",tools:"工具",resetGlobalConfigBody:"您确定要重置全局配置部分中的所有配置选项吗?",resetAllDomainsConfigBody:"您确定要重置所有站点的配置吗?",removeAllDomainsBody:"您确定要删除所有站点的配置吗?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"您确定要重置",domain:"站点的所有配置选项吗?",areYouSureYouWantToRemoveThe:"你确定要删除",domainConfiguration:"的站点配置吗？"},F="Docker",B="Dockerfile",R={docker:F,dockerfile:B,dockerCompose:`${F} 编排服务`,applyDockerTweaks:`应用${F}调整`,applyDockerTweaksForNginx:`为使用${F}运行${t.nginx}进行配置调整。`,applyDockerTweaksExplainer:`将${t.nginx}用户更新为<code class="slim">nginx</code>，将pid更新为<code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`生成${B}运行${t.nginx}与${F}`,includeDockerCompose:`生成docker-compose.yaml来运行${t.nginx} docker-compose`},E={https:x,logging:v,nginx:k,performance:T,python:D,reverseProxy:I,security:O,tools:w,docker:R},H="Certbot",A={commentOutSslDirectivesInConfiguration:`注释掉配置中的${t.ssl}相关指令:`,reloadYourNginxServer:`重新加载你的${t.nginx}服务器:`,obtainSslCertificatesFromLetsEncrypt:`使用${H}从 ${t.letsEncrypt} 获得${t.ssl}证书:`,uncommentSslDirectivesInConfiguration:`在配置中取消注释${t.ssl}相关指令:`,configureCertbotToReloadNginxOnCertificateRenewal:`配置${H}，当${t.nginx}成功更新证书时重新加载:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`${H}不需要为您的${t.nginx}配置进行设置。 `,certbot:H},L={downloadTheGeneratedConfig:"<b>下载</b> 生成的配置:",andUploadItToYourServers:"然后 <b>上传</b> 到你的服务器的",directory:"目录.",or:"或, ",copyBase64StringOfCompressedConfig:"复制压缩配置的base64字符串",pasteItInYourServersCommandLineAndExecute:"，将其粘贴到服务器的命令行并执行。",navigateToYourNginxConfigurationDirectoryOnYourServer:`进入你的 ${t.nginx}服务器上的<b>配置目录</b>:`,createABackupOfYourCurrentNginxConfiguration:`创建当前${t.nginx}配置的<b>备份</b>:`,extractTheNewCompressedConfigurationArchiveUsingTar:"使用tar<b>解压</b>新的压缩配置",download:"下载"},G={letsGoLive:"让我们开始吧！",reloadNginxToLoadInYourNewConfiguration:`重新加载${t.nginx}以载入新的配置:`,goLive:"上线！"},M={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"在您的服务器上运行此命令生成<b>Diffie-Hellman keys</b>:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`创建一个通用的<b>ACME-challenge</b>目录(用于 <b>${t.letsEncrypt}</b>):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`无需任何操作，即可为您的${t.nginx}完成${t.ssl}配置`,sslInit:`${t.ssl} 初始化`},W={certbot:A,download:L,goLive:G,ssl:M},Y={lookingForAPlaceToDeploy:"👋 在寻找部署新配置的地方？",tryOutDigitalOceansDroplet:"试用已安装 NGINX 的 DigitalOcean LEMP Droplet。"},j={wantToContributeChanges:"👋 想要申请新的功能，提出修改意见，或将该工具翻译成新的语言？",getInvolvedOnGitHub:"欢迎在 Github 中参与本项目"},z={droplet:Y,contribute:j},X={app:i,setup:s,footer:a,domainSections:C,globalSections:E,setupSections:W,callouts:z},V={common:t,languages:r["default"],templates:X}}}]);