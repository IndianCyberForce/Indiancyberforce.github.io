        function find(type) {
    var site = document.getElementById('target').value.trim();

    if (!site) {
        alert("Enter your target site. (Ex:- site:indiancyberforce.in)");
        return;
    }
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(site) + ' ';

    switch (type) {
        case 1:
            url += 'inurl:login | inurl:signin | intitle:login | intitle:signin | intext:"Admin Login" | inurl:"/admin/login" | intitle:"Admin Login"';
            break;
        case 2:
            url += 'inurl:"error" | intitle:"exception" | intitle:"failure" | intitle:"server at" | inurl:exception | "database error" | "SQL syntax" | "undefined index" | "unhandled exception" | "stack trace" | "You have an error in your SQL syntax"';
            break;
        case 3:
            url += 'inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= | inurl:"?id=" | inurl:".php?=" | inurl:".aspx?=" | inurl:".asp?=" | inurl:".asp?id=" | inurl:"?cat=" | inurl:"?id="';
            break;
        case 4:
            url += 'inurl:email= | inurl:phone= | inurl:password= | inurl:secret=';
            break;
        case 5:
            url += 'inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir= | inurl:ret= | inurl:r2= | inurl:page= inurl:& inurl:http';
            break;
        case 6:
            url += 'inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= | inurl:".php?file=" | inurl:".asp?file=" | inurl:".aspx?file="';
            break;
        case 7:
            url += 'nurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang=';
            break;
        case 8:
            url += '"choose file" | "upload"';
            break;   
        case 9:
            url += 'ext:txt | ext:pdf | ext:xml | ext:xls | ext:xlsx | ext:ppt | ext:pptx | ext:doc | ext:docx intext:"confidential" | intext:"Not for Public Release" | intext:"internal use only" | intext:"do not distribute"';
            break;    
        case 10:
            url += 'inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer | inurl:api | site:*/rest | site:*/v1 | site:*/v2 | site:*/v3 | ';
            break; 
        case 11:
            url += 'ext:ppk | ext:pem | ext:key | intext:"BEGIN RSA PRIVATE KEY"';
            break; 
        case 12:
            url += 'intitle:"index of" | "parent directory" | intext:"index of"';
            break; 
        case 13:
            url += 'inurl:conf | inurl:env | inurl:cgi | inurl:bin | inurl:etc | inurl:root | inurl:sql | inurl:backup | inurl:admin | inurl:php';
            break; 
        case 14:
            url += '"My Blog My WordPress" | "powered by WordPress" | inurl:"/xmlrpc.php"';
            break; 
        case 15:
            url += 'intitle:"index of" "/db_backups/" | intitle:"index of" inurl:ftp intext:admin | intitle:"index of" "system/config" | intitle:"index of" "admin/config" | "index of" "/config/sql" | intitle:"index of" "api/admin" | intitle:"index of" "tinyfilemanager.php" | intitle:"index of" "/admin/backup" | intitle:"index of" "admin/json" | intitle:"index of" "/admin_backup" | intitle:"index of" "/db_backups/"';
            break;  
        case 16:
            url += 'inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain= | inurl:page=';
            break;            
        default:
            alert("Unknown search type.");
            return;
    }

    window.open(url, '_blank');
}
