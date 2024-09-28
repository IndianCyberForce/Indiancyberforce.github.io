        function find(type) {
    var site = document.getElementById('target').value.trim();

    if (!site) {
        alert("Enter your target site. (Ex:- org:google or country:cn or host:192.168.1.7 or net:192.168.1.0/24 or asn:)");
        return;
    }
    var url = 'https://www.shodan.io/search?query=' + encodeURIComponent(site) + ' ';

    switch (type) {
        case 1:
            url += 'http.title:"dashboard"';
            break;
        case 2:
            url += 'http.title:"Index of /" http.html:"backup.zip"';
            break;
        case 3:
            url += 'http.html:"* The wp-config.php creation script uses this file"';
            break;
        case 4:
            url += '"authentication disabled"';
            break;
        case 5:
            url += 'port:"445" os:"Windows"';
            break;
        case 6:
            url += 'html:"def_wirelesspassword"';
            break;
        case 7:
            url += 'http.title:"phpmyadmin"';
            break;
        case 8:
            url += 'kibana content-length:217';
            break;   
        case 9:
            url += 'http.html:"xoxb-"';
            break;    
        case 10:
            url += 'port:102,8554,554';
            break; 
        case 11:
            url += 'http.title:"Index of /" http.html:".pem"';
            break; 
        case 12:
            url += '"unauthorized"';
            break; 
        case 13:
            url += 'port:23 console gateway';
            break; 
        case 14:
            url += 'http.title:"Grafana"';
            break; 
        case 15:
            url += 'http.favicon.hash:81586312';
            break;  
        case 16:
            url += 'http.title:"Admin Login"';
            break;  
        case 17:
            url += '"MongoDB Server Information" -authentication';
            break;  
        case 18:
            url += 'Microsoft IIS httpd';
            break;            
        default:
            alert("Unknown search type.");
            return;
    }

    window.open(url, '_blank');
}
