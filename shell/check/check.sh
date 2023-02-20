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
remoteIp='192.168.193.164'
remoteList=(
etrading-order-service-DC
etrading-trademgr-service-DC
etrading-guard-srv
etrading-pub
etrading-query
etrading-web
'etrading-hsdc-hds-deploy'
tomcatpoc_fmut
)

for name in ${list[@]}
do
	echo " >>> check service name : $name  >>> >>> >>>"
	if [[ $(ps -ef | grep $name | grep java) ]];then
		if [[  $1 ]];then
			 echo -e "\e[32m "\>\>\> $name is exist \>\>\>" \e[0m" 	
		fi
	else
		echo -e "\e[31m "\>\>\> $name is not exist \>\>\>" \e[0m"	
	fi
done

for name in ${remoteList[@]}
do
	 echo " >>> check remote $remoteIp service name : $name  >>> >>> >>>"
        if [[ $(ssh tomcat@$remoteIp "ps -ef | grep $name " | grep java ) ]];then
        	if [[ $1 ]];then
                         echo -e "\e[32m "\>\>\> $name is exist \>\>\>" \e[0m"  
                fi 
	else
                echo -e "\e[31m "\>\>\> $name is not exist \>\>\>" \e[0m"       
        fi
done
