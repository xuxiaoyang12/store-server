#/bin/sh
## author xxy
## check service shell
## service name list
list=(
'tomcat-etrading-mktService-8001'
'tomcat-etrading-orderService-8004'
'tomcat-etrading-publicService-8002'
'tomcat-etrading-quoteService-8005'
'tomcat-etrading-riskService-8003'
'tomcat-etrading-strategy-client-8007'
'tomcat-etrading-strategyService-8006'
'etrading-calculate'
'etrading-maker-facade'
etrading-maker-salve-facade
etrading-market-service-DC
)
for name in ${list[@]}
do
	if [[ $( echo $name | grep "tomcat") ]];then
		echo "tomcat $name"
		sh ~/tomcat-poc/$name/bin/startup.sh		
	else
		echo "$name"
		sh ~/workspace/$name/start.sh
	fi
done
