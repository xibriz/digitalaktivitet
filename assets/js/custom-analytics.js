window.addEventListener('load', function()
{
    if(!window.ga || !ga.create) 
    {
        var page = window.location.pathname.replace('/', '').replace('.html', '');
        if (page.length === 0) {
            page = 'home';
        }
        var img = document.createElement('img');
        img.setAttribute('style','display:none;');
        img.src = 'https://admin.digitalaktivitet.no/api/v1/collect-anon/Google%20Analytics';
        document.body.appendChild(img);    
    }
}, false);