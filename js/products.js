const AJ_PRODUCTS = [

  // ─── WOMEN'S BAGS (10 products) ────────────────────────────────────────────

  { id:1, name:"Black Ribbed Elegance", category:"bags", price:38000,
    image:"images/bag_1.jpeg",
    sizes:["One Size"], badge:"Best Seller", isNew:false,
    description:"Black ribbed structured handbag with dual handles. Bold sophistication meets everyday luxury in every stitch." },

  { id:2, name:"Checkered Classic", category:"bags", price:40000,
    image:"images/bag_2.jpeg",
    sizes:["One Size"], badge:null, isNew:false,
    description:"Black and cream checkered handbag with premium leather trim. Timeless elegance handcrafted for every occasion." },

  { id:3, name:"Patchwork Heritage Bag", category:"bags", price:42000,
    image:"images/bag_3.jpeg",
    sizes:["One Size"], badge:"New Arrival", isNew:true,
    description:"Vibrant patchwork handbag with blue, orange, burgundy and cream geometric patterns. Truly one of a kind." },

  { id:4, name:"Brown Monogram Tote", category:"bags", price:55000,
    image:"images/bag_4.jpeg",
    sizes:["One Size"], badge:"Premium", isNew:false,
    description:"Brown monogram tote with gold hardware and tan leather straps. An iconic statement piece for the woman of distinction." },

  { id:5, name:"Black Bow Mini Bag", category:"bags", price:35000,
    image:"images/bag_5.jpeg",
    sizes:["One Size"], badge:"New Arrival", isNew:true,
    description:"Elegant black mini bag with statement bow detail and wave-textured flap. Feminine luxury in a compact silhouette." },

  { id:6, name:"Navy Structured Handbag", category:"bags", price:45000,
    image:"images/bag_6.jpeg",
    sizes:["One Size"], badge:null, isNew:false,
    description:"Navy blue structured handbag with silver clasp lock and top handle. Commanding presence, impeccable craft." },

  { id:7, name:"Beige Mini Luxe", category:"bags", price:32000,
    image:"images/bag_7.jpeg",
    sizes:["One Size"], badge:"Best Seller", isNew:false,
    description:"Beige/cream mini bag with ruched handle and silver hardware. Delicate femininity and artisan craftsmanship." },

  { id:8, name:"Ivory Croc Tote", category:"bags", price:48000,
    image:"images/bag_8.jpeg",
    sizes:["One Size"], badge:"Premium", isNew:false,
    description:"Ivory cream crocodile-embossed structured tote. Exotic texture meets refined elegance in this collector's piece." },

  { id:9, name:"Bronze Leopard Handbag", category:"bags", price:44000,
    image:"images/bag_9.jpeg",
    sizes:["One Size"], badge:"New Arrival", isNew:true,
    description:"Brown and gold leopard-textured handbag with dark leather trim. Wild luxury for the fearless woman." },

  { id:10, name:"Gunmetal Grace Bag", category:"bags", price:50000,
    image:"images/bag_10.jpeg",
    sizes:["One Size"], badge:"Signature", isNew:false,
    description:"Silver gunmetal metallic structured handbag with crystal accent detail. Understated opulence." },

  // ─── MEN'S SANDALS (15 products) ───────────────────────────────────────────

  { id:11, name:"Silver Emblem Slide", category:"shoes", price:32000,
    image:"images/palm_1.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"Signature", isNew:false,
    description:"Black leather slide with bold silver emblem detail. A defining signature piece from the AJ FOOTZ collection." },

  { id:12, name:"Olive Suede H-Slide", category:"shoes", price:35000,
    image:"images/palm_2.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"Premium", isNew:false,
    description:"Olive green H-cut suede slide with cream sole. Rare craftsmanship in a distinguished colorway for the bold gentleman." },

  { id:13, name:"Taupe H-Strap Slide", category:"shoes", price:22000,
    image:"images/palm_3.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:null, isNew:false,
    description:"Gray/taupe H-strap slides. Understated sophistication, handmade with top-grain leather for all-day comfort." },

  { id:14, name:"Classic Black Thong", category:"shoes", price:20000,
    image:"images/palm_4.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:null, isNew:false,
    description:"Classic handcrafted black thong sandal. Timeless design and lasting quality at an accessible price." },

  { id:15, name:"Black Crest Slide", category:"shoes", price:30000,
    image:"images/palm_5.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"Best Seller", isNew:false,
    description:"Black textured slide with a gold crest emblem. Handcrafted luxury for the man who commands attention." },

  { id:16, name:"Black H-Suede Slide", category:"shoes", price:28000,
    image:"images/palm_6.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:null, isNew:false,
    description:"Black H-cut suede slide with cream sole. Clean, minimal, and crafted for the modern Nigerian gentleman." },

  { id:17, name:"Executive Black Thong", category:"shoes", price:25000,
    image:"images/palm_7.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"Best Seller", isNew:false,
    description:"Black thong sandal with signature gold buckle. Premium leather for the man who steps with purpose." },

  { id:18, name:"Carbon Slide", category:"shoes", price:27000,
    image:"images/palm_8.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:null, isNew:false,
    description:"Black carbon-textured slide with silver oval hardware. Sleek, modern, built for the distinguished man." },

  { id:19, name:"Monogram Cross-Strap", category:"shoes", price:33000,
    image:"images/palm_9.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"New Arrival", isNew:true,
    description:"Black monogram cross-strap sandal with interlocked pattern straps. Street luxury at its finest." },

  { id:20, name:"Oblique Cross-Strap", category:"shoes", price:33000,
    image:"images/palm_10.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"New Arrival", isNew:true,
    description:"Black oblique cross-strap patterned slide. Bold artisan design for the style-forward man." },

  { id:21, name:"Brown Cross-Strap Slide", category:"shoes", price:28000,
    image:"images/palm_11.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:null, isNew:false,
    description:"Brown and tan cross-strap slide. Handcrafted from genuine leather with meticulous attention to detail." },

  { id:22, name:"Grey Croc H-Slide", category:"shoes", price:36000,
    image:"images/palm_12.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"Premium", isNew:false,
    description:"Grey crocodile-embossed H-cut slide. Exotic texture and refined silhouette — a premium everyday statement." },

  { id:23, name:"Gold H-Buckle Slide", category:"shoes", price:38000,
    image:"images/palm_13.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"Signature", isNew:false,
    description:"Black leather slide with polished gold H-buckle hardware. Iconic luxury design, handcrafted to perfection." },

  { id:24, name:"Black Emblem Thong", category:"shoes", price:24000,
    image:"images/palm_14.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:null, isNew:false,
    description:"Black thong sandal with circular brand emblem. Clean craftsmanship, all-day comfort, unmistakable style." },

  { id:25, name:"Crystal Studded Slide", category:"shoes", price:42000,
    image:"images/palm_15.jpeg",
    sizes:["40","41","42","43","44","45","Custom"], badge:"New Arrival", isNew:true,
    description:"Black slide fully encrusted with crystal rhinestones. Maximum glamour, handcrafted detail, zero compromise." }

];

function formatPrice(price){ return "₦" + price.toLocaleString("en-NG"); }
function getByCategory(cat){ return cat==="all"?AJ_PRODUCTS:AJ_PRODUCTS.filter(p=>p.category===cat); }
function getNewArrivals(n=4){ return AJ_PRODUCTS.filter(p=>p.isNew).slice(0,n); }
function getFeatured(n=6){ return AJ_PRODUCTS.filter(p=>p.badge).slice(0,n); }
