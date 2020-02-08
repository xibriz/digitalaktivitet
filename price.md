---
title: Pris
---
# Pris

Vi ønsker å gjøre terskelen så lav som mulig for alle klubber i Norge, uansett størrelse.

Prismodellen er derfor veldig enkel: {{ site.data.price[0].NOK }} kr per aktive medlem per måned.

Dersom klubben din har {{ site.data.price[0].members }} aktive medlemmer betaler dere kun {{ site.data.price[0].NOK | times: site.data.price[0].members }} kr per måned.  
Det blir {{ site.data.price[0].NOK | times: site.data.price[0].members | times: 3 }} kr per kvartal og {{ site.data.price[0].NOK | times: site.data.price[0].members | times: 12 }} kr per år.

Vi er så sikre på produktet at første kvartal av 2020 vil være gratis!

Fakturering vil skje første uke i hvert kvartal for innværende kvartal. Alle priser er eks mva.

### Priskalkulator

<form class="form-inline" action="#">
    <input type="number" style="min-width: 70px;" class="form-control mb-2 mr-sm-2 col-1 mr-2" id="numberOfActiveMembers" value="{{ site.data.price[0].members }}" onchange="calculatePrice(this);" onblur="calculatePrice(this);">
    aktive medlemmer koster bare&nbsp;
    <span id="price" style="font-weight: bold">{{ site.data.price[0].NOK | times: site.data.price[0].members }}</span>
    &nbsp;kr per måned.
</form>
<script type="text/javascript">
var price = {{ site.data.price[0].NOK }};
function calculatePrice(input) { console.log(input.value);
    $('#price').html(price*parseInt(input.value, 10));
}
</script>
