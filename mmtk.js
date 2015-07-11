function startGame(){
    
     var x=45;
  
    var resetGame=function(){
        player1.maxCP=50;
        player1.cp=50;
        player1.level=1;
        player1.XP=0;
        player1.strength=5;
        player1.EA=1;
        player1.cash=0;
        updateCash(player1);
        lbAvailable=false;
        limitLevel=0;
        updateLimitBake();
        hebOpen=false;
        $("#encounterCP").html("");
        $("#menuList").empty();
        $("#menuList1").empty();
        $("#helpList").empty();
        $("#helpList1").empty();
        $("#cookList").empty();
        $("#eatList").empty();
        $("#recipeList").empty();
        $("#currentCookAid").html("None ");
        $("#currentEatAid").html("None ");
        
    }
    // Player Proto
    
    function Player(name, maxCP, CP, strength, cash, weapon,damsel,level, XP, eatingAbility,limitAttack){
        this.name=name;
        this.maxCP=maxCP;
        this.CP=CP;
        this.strength=strength;
        this.cash=cash;
        this.weapon=weapon;
        this.damsel=damsel;
        this.level=level;
        this.XP=XP;
        this.eatingAbility=eatingAbility;
        this.limitAttack=limitAttack;
        
    }
    
    var refillCP=function(){
        var amountRefill=player1.maxCP-player1.CP;
        player1.CP+=amountRefill;
        updateCP(player1.CP);
        
    }
    
    //Generating Player 1
    
    var playerName=prompt("What is your name?").toUpperCase();
    

            var player1=new Player(playerName, 50, 50, 5, 0, "TRIED DESPERATELY NOT TO BURN THE KITCHEN DOWN", "ROBIN!",1, 0,1, "CREATED THE HEALTHIEST MOST VEGETARIAN MEAL EVER");
            $("#playerImage").html('<img src=terry.gif>');
    
        /*
        case "ROBIN":
            var player1=new Player(playerName, 50, 50, 5, 0, "PIES", "TERRY", 1 ,0,1,"PIED IN THE FACE");
            $("#playerImage").html('<img src=robin.gif>');
            break;
            
        case "KEVIN":
            var player1=new Player(playerName, 50, 50, 5, 0, "BURGERS", "MICHAELA",1,0,1, "GRILLED UP A STORM");
            $("#playerImage").html('<img src=kevin.gif>');
            break;
            
        default:
            var player1=new Player(playerName, 40,40, 3, 0, "BACON","NIGELLA LAWSON", 1,0,0,"USED THE UNHOLY POWER OF BACON GREASE");
            $("#playerImage").html('<img src=genericPlayer.gif>');
            }
    */
    
    //Player Info Updater
    
    /*
     idea for consistency in spacing: if < certain amount add spaces
     */
    var updateCP=function(currentCP){
    
        if(currentCP<20){
            $("#currentCP").html("CP: "+currentCP+"/"+player1.maxCP).css('color','red');
        }
        else{
            $("#currentCP").html("CP: "+currentCP+"/"+player1.maxCP).css('color','black');
        }
    }
    
    var updateLevel=function(player){
        $("#currentLevel").html("Level: "+player.level);
    }
    var updateXP=function(player){
        $("#currentXP").html("XP: "+player.XP);
    }
    var updateEA=function(player){
        $("#currentEA").html("EA: "+player.eatingAbility);
    }
    var updateStrength=function(player){
        $("#currentStrength").html("Protein: "+player.strength);
    }
    var updateCash=function(player){
        $("#currentCash").html("$"+player.cash);
    }
    var cashEarning=false;
    var showCash=function(){
        $("#currentCash").css('visibility','visible');
        cashEarning=true;
    }
    showCash();
    
    var updateLimitBake=function(){
        
        if (limitLevel===0){
        $("#currentLimit").html($('<img/>', {
                                 src:"limit0.gif",
                                 }));
        }
        
        else if(limitLevel>0 && limitLevel< 5){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit1.gif",
                                    }));
        }
        
        else if(limitLevel>4 && limitLevel< 9){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit2.gif",
                                      }));
        }
        
        else if(limitLevel>8 && limitLevel< 13){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit3.gif",
                                      }));
        }
        
        else if(limitLevel>12 && limitLevel< 17){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit4.gif",
                                      }));
        }
        
        else if(limitLevel>16 && limitLevel < 21){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit5.gif",
                                      }));
        }
        
        else if(limitLevel>20 && limitLevel < 26){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit6.gif",
                                      }));
        }
        
        else if(limitLevel>25 && limitLevel < 31){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit7.gif",
                                      }));
        }
        
        else if(limitLevel>30 && limitLevel<36){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit8.gif",
                                      }));
        }
        
        else if(limitLevel>35){
            $("#currentLimit").html($('<img/>', {
                                      src:"limit9.gif",
                                      }));
        }
    }
    
    // Define Recipes
    var numRecipes=0;
    function Recipe(name,link){
        this.name=name;
        var numVisit=0;
        this.addToList=function(){
            if(numRecipes===0){
                
                $('<br/>').appendTo("#gameText");
                $('<br/>').appendTo("#gameText");
                
                $('<span/>',{
                  text: "You learned "
                  }).appendTo("#gameText");
                $('<span/>',{
                  text: "about cooking"
                  }).css('font-weight','bold').appendTo("#gameText");
                $('<span/>',{
                  text: "!"
                  }).appendTo("#gameText");
                $('<br/>').appendTo("#gameText");
                $('<br/>').appendTo("#gameText");
            }
            else{
                
            
            $('<br/>').appendTo("#gameText");
            $('<br/>').appendTo("#gameText");
            $('<span/>',{
              text: "You learned how to cook "
              }).appendTo("#gameText");
                
            $('<span/>',{
                text: name
                }).css('font-weight','bold').appendTo("#gameText");
                
                $('<span/>',{
                  text: "!"
                  }).appendTo("#gameText");
            $('<br/>').appendTo("#gameText");
            $('<br/>').appendTo("#gameText");
                
            }
            
            if (numRecipes%4===0 && numRecipes!=0){
                $('<br/>').appendTo("#recipeList");
                $('<br/>').appendTo("#recipeList");
            }
            numRecipes++;
            $('<a/>',{
              id:"proceed",
              text:name,
              href:link,
              target:"_blank",
              click:function(){
              if(numVisit<1){
              player1.maxCP+=5;
              player1.CP+=5;
              numVisit++;
              }
              updateCP(player1.CP);
              }
              
              }).appendTo("#recipeList");
        };
    }
    
    var aboutR=new Recipe("About","http://mymesstheirkitchen.blogspot.com/p/about-me.html");
    var kaleR=new Recipe("Kale", "http://mymesstheirkitchen.blogspot.com/2011/07/gardein-picatta-and-kale-with-currants.html");
    var tofuR=new Recipe("Tofu", "http://mymesstheirkitchen.blogspot.com/2011/07/tofu-kale-lasagna.html");
    var lentilR= new Recipe("Lentils", "http://mymesstheirkitchen.blogspot.com/2011/08/favorite-dishes-lentil-loaf.html");
    
    var breadR=new Recipe("Bread", "http://mymesstheirkitchen.blogspot.com/2014/02/super-bowl-sunday-denver-and-double.html");
    var cookieR=new Recipe("Cookies", "http://mymesstheirkitchen.blogspot.com/2013/05/reeses-pieces-cookies-cookie-cake.html");
    var whoopieR=new Recipe("Whoopies", "http://mymesstheirkitchen.blogspot.com/2015/02/super-bowl-coffee-whoopie-pies.html");
    var cupcakeR=new Recipe("Cupcakes", "http://mymesstheirkitchen.blogspot.com/2015/04/easter-redux-cadbury-creme-egg-cupcakes.html");
    
    var baconR=new Recipe("Bacon", "http://mymesstheirkitchen.blogspot.com/2013/05/fancy-mothers-day-brunch-bacon-cheddar.html");
    var burgerR=new Recipe("Burgers", "http://mymesstheirkitchen.blogspot.com/2014/03/cowboy-burgers-shiner-onion-rings-and.html");
    var tacoR=new Recipe("Tacos", "http://mymesstheirkitchen.blogspot.com/2014/03/dr-pepper-braised-brisket-tacos.html");
    var risottoR=new Recipe("Risotto", "http://mymesstheirkitchen.blogspot.com/2011/08/kennair-kuelbsian-supremacy-grapefruit.html");
    
    var crustR=new Recipe("Crust", "http://mymesstheirkitchen.blogspot.com/2015/03/pi-day-bayou-goo-pie.html");
    var pieR=new Recipe("Pie", "http://mymesstheirkitchen.blogspot.com/2011/08/cherry-pie.html");
    var meringueR=new Recipe("Meringue", "http://mymesstheirkitchen.blogspot.com/2012/02/crazy-pie-train-chocolate-cream.html");
    var popTartR=new Recipe("Pop Tarts", "http://mymesstheirkitchen.blogspot.com/2012/06/pop-tart-cake.html");
    
    var banhMiR=new Recipe("Banh Mi", "http://mymesstheirkitchen.blogspot.com/2014/04/banh-mi-burgers-with-pickled-carrots.html");
    var chiliR=new Recipe("Chili", "http://mymesstheirkitchen.blogspot.com/2013/11/pumpkin-chili-and-great-football-rib.html");
    var deenR=new Recipe("Bacon Butter", "http://mymesstheirkitchen.blogspot.com/2012/03/paula-deen-vegan-challenge-glazed-bacon.html");
    //Creating Enemies
    
    function Enemy(name, maxCP, strength, attack, pronoun1, pronoun2, XPDrop, eatingAbility, imgsrc){
        this.name=name;
        this.maxCP=maxCP;
        this.strength=strength;
        this.attack=attack;
        this.pronoun1=pronoun1;
        this.pronoun2=pronoun2;
        this.XPDrop=XPDrop;
        this.eatingAbility=eatingAbility;
        this.imgsrc=imgsrc;
        this.opening="Prepare to be destroyed in the kitchen";
        this.closing="Oh, no, you found my one weakness, cooking!";
        this.enemyWins="That must burn.";
        this.recipe=aboutR;
        this.giveRecipe=function(){
            this.recipe.addToList();
        }
        
    }
    
    
    var foodCritic= new Enemy("FOOD CRITIC", 35, 4, "WROTE A BAD REVIEW","his","He",100,3,"foodCritic.gif");
    
    var water=new Enemy("WATER", 10, 1, "TOOK FOREVER TO BOIL","its","It", 20, 2,"water.gif");
    water.opening="...";
    water.closing=".........";
    water.enemyWins="...";
    water.recipe=aboutR;
    
    var kale=new Enemy("KALE", 20,2, "WAS SUPER HEALTHY","its","It",40,2,"kale.gif");
    kale.opening="I'll show you, spinach, and everyone who the ultimate super food is!";
    kale.closing="But how? I am so packed with nutrients!";
    kale.recipe=kaleR;
    
    var tofu=new Enemy("TOFU", 25, 3, "WAS A WEIRD BLOB ABSORBING THE FLAVORS OF EVERYTHING IN ITS PATH", "its","It", 40, 2, "tofu.gif");
    tofu.opening="I'm soy the best. Haven't you curd?";
    tofu.closing="Oh, no. You found my one weakness--cooking!";
    tofu.recipe=tofuR;
    
    var lentilLoaf=new Enemy("LENTIL LOAF", 30,4, "MADE YOU TAKE VEGETARIANISM SERIOUSLY", "its", "It", 40, 2, "lentilLoaf.gif");
    lentilLoaf.opening="Peas...It's gonna take Olive your skills to best me.";
    lentilLoaf.closing="In case of defeat, Romaine calm.";
    lentilLoaf.recipe=lentilR;
    
    var bread=new Enemy("BREAD", 50, 5, "GLUTENED", "its", "It", 40, 3, "bread.gif");
    bread.opening="I'm gonna drop a carbo-load of pain on you";
    bread.closing="I have been kneaded into submission";
    bread.recipe=breadR;
    
    var cookie=new Enemy("COOKIE", 55, 6, "MADE YOU REPEATEDLY SAY 'JUST ONE MORE'", "its", "It", 40, 3, "cookie.gif");
    cookie.opening="I've got a chocolate chip on my shoulder!";
    cookie.closing="I guess that's how the cookie crumbles";
    cookie.recipe=cookieR;
    
    var cookieMonster=new Enemy("COOKIE MONSTER",80, 8, "WAS CONTINUALLY ENABLED IN HIS SAD ADDICTION TO COOKIES","its","It",80,5, "cookieMonster.gif");
    cookieMonster.opening="Cookie! Coooooookkkkiiieee!!!";
    cookieMonster.closing="Coooooooooookkkkkkiiieeee????";
    cookieMonster.recipe=whoopieR;
    
    var cupcake=new Enemy("CUPCAKE", 65, 6, "DELIVERED THE MOST EFFICIENT SUGAR HIGH POSSIBLE", "its", "It", 40, 3, "cupcake.gif");
    cupcake.opening="I may be small, but I pack a huge, sugary punch!";
    cupcake.closing="I'll have my revenge many years from now. Avenge me, diabetes! Avenge me!";
    cupcake.recipe=cupcakeR;
    
    var bacon=new Enemy("BACON", 75, 8, "WAS THE MOST AMAZING THING EVER", "its", "It", 50, 4, "bacon.gif");
    bacon.opening="I will own your heart, especially the arteries!";
    bacon.closing="Promise me you won't let anything of mine go to waste. Not even the grease!";
    bacon.recipe=baconR;
    
    var jjWATT=new Enemy("J.J. WATT", 100, 12, "WENT TO HEB","his","He",100,7,"jjWatt.gif");
    jjWATT.opening="Fee fi fo fum, I smell the blood of a non Texas son!";
    jjWATT.closing="I have been sacked. You can come to my cookouts anytime.";
    jjWATT.recipe=chiliR;
    
    var burger=new Enemy("BURGER", 85, 11, "TASTED LIKE WHAT AMERICA MUST TASTE LIKE", "its", "It", 50, 5, "burger.gif");
    burger.opening="Yeeeeehaaawwww!!! USA! USA! USA!";
    burger.closing="At least I still have country music-the music of pain.";
    burger.recipe=burgerR;
    
    var taco=new Enemy("TACO", 90, 12, "BROUGHT TOGETHER THE BEST OF TEXAS AND MEXICO", "its", "It", 50, 6, "taco.gif");
    taco.opening="CHEESE SIDES! FULL STOMACHS! CAN'T CHOOSE!!";
    taco.closing="Tex-mex forever, Street. Tex-mex forever...";
    taco.recipe=tacoR;
    
    var risotto=new Enemy("RISOTTO", 100, 15, "DEFINED SMOOTH, FANCY, AND SOPHISTICATED", "its", "It", 60, 7, "risotto.gif");
    risotto.opening="It'll take me less time to defeat you than it does to stir a proper risotto.";
    risotto.closing="In my defense, I have quite a bit of wine in me.";
    risotto.recipe=risottoR;
    
    var crust=new Enemy("CRUST", 80, 11,"WAS AN INTRICATE LATTICE OF FLAKY PERFECTION","its","It", 55, 6, "crust.gif");
    crust.opening="Facing me is only shortening your cooking career!";
    crust.closing="It would appear I am destined to be humble pie.";
    crust.recipe=crustR;
    
    var pie=new Enemy("PIE", 90, 12, "SOOTHED THE SOUL AND STOMACH LIKE NONE OTHER", "its", "It", 55, 7, "pie.gif");
    pie.opening="Beating you is my pie-mary objective.";
    pie.closing="Thus I pie!";
    pie.recipe=pieR;
    
    var meringue=new Enemy("Meringue", 100, 13, "ROSE DELICIOUSLY TOWARD THE HEAVENS", "its", "It", 55, 8, "meringue.gif");
    meringue.opening="I have more peaks than your sad cooking career ever will!";
    meringue.closing="You've beaten me worse than my egg whites.";
    meringue.recipe=meringueR;
    
    var popTartCake= new Enemy("Pop Tart Cake", 130, 16, "WAS GLORIOUS", "its", "It", 70, 8, "popTart.gif");
    popTartCake.opening="You're not even worth the sugar in one of my sprinkles."
    popTartCake.closing="What am I? Am I breakfast or dessert? Am I chocolatey or fruity? What is my purpose? Does it matter?!!?";
    popTartCake.recipe=popTartR;
    
    var guyFieri=new Enemy("GUY FIERI", 200, 19, "NACHO CHEESED EVERYWHERE AND MADE YOU FEEL DISGUSTING","his","He",100,11,"guyFieri.gif");
    guyFieri.opening="This cook-off is gonna be bananas, and bananas is good!";
    guyFieri.closing="That was so not money. Looks like I'll be taking the bus to Losertown.";
    guyFieri.recipe=banhMiR;
    
    var paulaDeen=new Enemy ("PAULA DEEN",250,21, "BUTTERED EVERYTHING!","her","She",100,13,"paulaDeen.gif");
    paulaDeen.opening="I'm gonna deep-fry you like a bacon wrapped twinkie, Sug!";
    paulaDeen.closing="Impossible! I'm melting!! I'm meeelllltttiiinnnggg!!!!";
    paulaDeen.recipe=deenR;
 
      //Random Encounters
    
    var randEncounter=function(){
        var randNum= Math.floor(Math.random()*6);
        
        switch(randNum){
            case 0:
                
                $("#gameText").html("Oh, no! You have encountered a "+ cookieMonster.name+"! and it has challenged you to a cook-off!"+'<br/>'+'<br/>');
                
                $('<button/>', {
                  id: "proceed",
                  text: "Proceed",
                  click: function () {
                  
                  $("#encounterName").html(cookieMonster.name);
                  
                  $("#encounterImage").html('<img src=cookieMonster.gif>');
                  
                  this.remove();
                  
                  cookOff(player1,cookieMonster);
                  }
                  }).appendTo("#gameText");

                    break;
            case 1:
                
                $("#gameText").html("Oh, no! You have encountered a "+ kale.name+"! and it has challenged you to a cook-off!"+'<br/>'+'<br/>');
                
                
                $('<button/>', {
                  id: "proceed",
                  text: "Proceed",
                  click: function () {
                  
                  $("#encounterName").html(kale.name);
                  $("#encounterImage").html('<img src=kale.gif>');
                  this.remove();
                  cookOff(player1,kale);
                  }
                  }).appendTo("#gameText");

                    break;
            case 2:
                
                $("#gameText").html("Oh, no! You have encountered a "+ foodCritic.name+"! and it has challenged you to a cook-off!"+'<br/>'+'<br/>');
                
                $('<button/>', {
                  id: "proceed",
                  text: "Proceed",
                  click: function () {
                  
                  $("#encounterName").html(foodCritic.name);
                  
                  $("#encounterImage").html('<img src=foodCritic.gif>');
                  this.remove();
                  cookOff(player1,foodCritic);
                  }
                  }).appendTo("#gameText");

                
                    break;
            case 3:
                
                $("#gameText").html("Oh, no! You have encountered a "+ paulaDeen.name+"! and it has challenged you to a cook-off!"+'<br/>'+'<br/>');
                
                $('<button/>', {
                  id: "proceed",
                  text: "Proceed",
                  click: function () {
                  
                  $("#encounterName").html(paulaDeen.name);
                  $("#encounterImage").html('<img src=paulaDeen.gif>');
                  
                  this.remove();
                  cookOff(player1,paulaDeen);
                  }
                  }).appendTo("#gameText");

                    break;
            case 4:
                
                $("#gameText").html("Oh, no! You have encountered a "+ guyFieri.name+"! and it has challenged you to a cook-off!"+'<br/>'+'<br/>');
                
                $('<button/>', {
                  id: "proceed",
                  text: "Proceed",
                  click: function () {
                  
                  $("#encounterName").html(guyFieri.name);
                  $("#encounterImage").html('<img src=guyFieri.gif>');
                  
                  this.remove();
                  cookOff(player1,guyFieri);
                  }
                  }).appendTo("#gameText");

                    break;
            case 5:
                
                $("#gameText").html("Oh, no! You have encountered a "+ jjWATT.name+"! and it has challenged you to a cook-off!"+'<br/>'+'<br/>');
                
                $('<button/>', {
                  id: "proceed",
                  text: "Proceed",
                  click: function () {
                  
                  $("#encounterName").html(jjWATT.name);
                  $("#encounterImage").html('<img src=jjWatt.gif>');
                  
                  this.remove();
                  cookOff(player1,jjWATT);
                  }
                  }).appendTo("#gameText");

                
        }
    }
    
    //setting Help Menu
    var numHelp=0;
    
    function HelpItem(name,header,description){
        this.name=name;
        this.header=header;
        this.description=description;
        
        
        this.addToHelp=function(){
            
            if (numHelp%2===0 || numHelp===0){
            
            numHelp++;
                
            $('<li/>', {
              id: "proceed",
              text: name,
              mouseenter: function(){
              $("#helpHead").html(header);
              $("#helpDesc").html(description);
              },
              mouseleave: function(){
              $("#helpHead").html("");
              $("#helpDesc").html("");
              }
              }).appendTo("#helpList");
            }
            else {
            
            numHelp++;
                
            $('<li/>', {
                id: "proceed",
                text: name,
                mouseenter: function(){
                $("#helpHead").html(header);
                $("#helpDesc").html(description);
                },
                mouseleave: function(){
                $("#helpHead").html("");
                $("#helpDesc").html("");
                }
                }).appendTo("#helpList1");
            }
        }
    }
    
    var cpHelp=new HelpItem("CP", "COOKING POINTS","Determine how much energy you have left for cook-offs. When they run out, you can no longer cook and will lose. Your opponent's cooking will lower your CP, but you can restore CP with Items.");
    
    
    
    var eaHelp=new HelpItem("EA", "EATING ABILITY", "Determines how much of your opponent's cooking you can stomach before it starts to get to you and lowers your CP.");
    
    
    var proteinHelp=new HelpItem("Protein", "PROTEIN","Determines how strong your cooking is and thus how much your opponent's CP is lowered upon successfully cooking.");
    
    
    var itemHelp=new HelpItem("Items","ITEMS", "Different items restore your CP by varying amounts. They can be given to you by the Cooking Masters or purchased if you find a store. You can only hold up to 12 items at a time. Access them by pressing 'I'." );
    
    var recipeHelp=new HelpItem("Recipes","RECIPES","Learn important cooking information by reading recipes given at the conclusion of cook-offs. Reading recipes for the first time increases your current and Max CP by 5 each.");
    
    var blogHelp=new HelpItem("Blog", "BLOGGING", "Once per cook-off you have an opportunity to demonstrate your cooking knowledge to the masses. Answer correctly, and you will impress your multitude of Blog fans (read: your mom) and receive a 2x bonus for the turn. Miss it, and you'll drop to 1/2 effective.");
    
    var xpHelp=new HelpItem("XP", "EXPERIENCE POINTS", "Win cook-offs to earn XP. Every 100 XP will result in Leveling-up and give you permanent stat boosts to your CP, EA, and Protein.");
    
    var cookToolHelp=new HelpItem("Cook Tools", "COOKING TOOLS", "Cooking tools are equipment that can be used to give boosts to your Max CP and Protein. They are given by Cooking Masters or purchased at stores. Only one tool can be equipped at a time.");
    
    var eatAidHelp= new HelpItem("Eating Aids", "EATING AIDS", "This type of equipment gives a boost to you EA. Similar to cooking tools, these are given as gifts by cooking masters or purchased at stores, and only one can be used at a time.");
    
    var HEBHelp= new HelpItem("HEB", "HEB", "Put your hard earned cash to use by visiting your local HEB and purchasing Items, Cooking Tools, and Eating Aids. ");
    
    var cookOffHelp=new HelpItem("Cook-offs","COOK-OFFS", "Face off against important ingredients and other culinary figures to learn new recipes, earn cash, and gain XP. Contestants take turns showing off their cooking prowess until one is completely depleted of CP. Increase your chances of winning by improving your Protein and EA.");
    
    var limitBakeHelp=new HelpItem("Limit Bake", "LIMIT BAKE", "Achieve a zen-like state of cooking nirvana to help you when you're in a pinch. This ability is unlocked after losing a set amount of CP.");
    
    
    //Setting Items
    
    var numItems=0;
    
    function Item(name, cpRecover, description, imgsrc){
        this.name=name;
        this.cpRecover=cpRecover;
        this.description=description;
        this.imgsrc=imgsrc;
    
        this.addToMenu=function(){
            
            
            if(numItems<6|| ($("#menuList1 li").length===6 && numItems<12)){
                numItems++;
                
                $('<br/>').appendTo("#gameText");
                $('<span/>',{
                  text: "You received a delicious "
                  }).appendTo("#gameText");
                $('<span/>',{
                  text: name
                  }).css('font-weight','bold').appendTo("#gameText");
                
                $('<span/>',{
                  text: "!"
                  }).appendTo("#gameText");
                
                $('<br/>').appendTo("#gameText");
                $('<br/>').appendTo("#gameText");
                
                
            $('<li/>', {
              id: "proceed",
              text: name,
              mouseenter: function(){
              $("#menuDesc").html(description);
              $("#menuPic").html($('<img/>', {
                                   src:imgsrc,
                                   
                                   }))
              },
              mouseleave: function(){
              $("#menuDesc").html("");
              $("#menuPic").html("")
              },
              click: function () {
              if(player1.CP+cpRecover>player1.maxCP)
              {
              player1.CP=player1.maxCP;
              }
              else{
              player1.CP+=cpRecover;
              }
              updateCP(player1.CP);
              this.remove();
              numItems--;
              }
              }).appendTo("#menuList");
            }
            else if(numItems>=6 && numItems<12){
                numItems++;
                
                
                $('<br/>').appendTo("#gameText");
                $('<span/>',{
                  text: "You received a delicious "
                  }).appendTo("#gameText");
                $('<span/>',{
                  text: name
                  }).css('font-weight','bold').appendTo("#gameText");
                
                $('<span/>',{
                  text: "!"
                  }).appendTo("#gameText");
                
                $('<br/>').appendTo("#gameText");
                $('<br/>').appendTo("#gameText");
                
                $('<li/>', {
                  id: "proceed",
                  text: name,
                  mouseenter: function(){
                  $("#menuDesc").html(description);
                  $("#menuPic").html($('<img/>', {
                                       src:imgsrc,
                                       
                                       }))
                  },
                  mouseleave: function(){
                  $("#menuDesc").html("");
                  $("#menuPic").html("")
                  },
                  click: function () {
                  if(player1.CP+cpRecover>player1.maxCP)
                  {
                  player1.CP=player1.maxCP;
                  }
                  else{
                  player1.CP+=cpRecover;
                  }
                  updateCP(player1.CP);
                  this.remove();
                  numItems--;
                  }
                  }).appendTo("#menuList1");
            }
            else {
                $('<p/>',{
                  text: "You have maxed out your inventory! Please use an item before receiving another."
                  }).appendTo("#gameText");
            }

        };
    
    }
    
    
    var soyMilk=new Item("SOY MILK", 10, "CP+10", "soyMilk.gif");
    var drPepper=new Item("DR. PEPPER", 10, "CP +10", "drPepper.gif");
    var brisket=new Item("BRISKET", 20, "CP +20", "brisket.gif");
    var frosting=new Item("FROSTING", 15, "CP +15", "frosting.gif");
    var fruit=new Item("FRUIT", 25, "CP +25", "fruit.gif");
    var tortilla=new Item("TORTILLA", 50,"CP +50", "tortilla.gif");
    

    // Defining Equipment
    
    var equipStatus1=false;
    var equipStatus2=false;
    var type1maxCPIncrease=0;
    var type1strengthIncrease=0;
    var type2eaIncrease=0;
    var totalClick=1;
    var equip1name=" ";
    var equip2name=" ";
    
    function Equipment(name, maxCPIncrease, strengthIncrease, eaIncrease,type, description, imgsrc){
        this.name=name;
        this.maxCPIncrease=maxCPIncrease;
        this.strengthIncrease=strengthIncrease;
        this.eaIncrease=eaIncrease;
        this.type=type;
        this.description=description;
        this.imgsrc=imgsrc;
        var numClick=1;
        
        
        this.add=function(){
            if(type===1){
            $('<li/>', {
              id: "proceed",
              text: name,
              mouseenter: function(){
              $("#menuDesc").html(description);
              $("#menuPic").html($('<img/>', {
                                   src:imgsrc,
                                   
                                   }))
              },
              mouseleave: function(){
              $("#menuDesc").html("");
              $("#menuPic").html("");
              },
              click: function () {
              
              
              if (numClick %2!=0 || totalClick>numClick){
              
              //Unequips when clicking what is already equipped
              
              if(equip1name===name && type===1 && equipStatus1){
              
              player1.maxCP-=maxCPIncrease;
              type1maxCPIncrease=0;
              
              player1.strength-=strengthIncrease;
              type1strengthIncrease=0;
              
              
              updateCP(player1.CP);
              updateEA(player1);
              updateStrength(player1);
              numClick++;
              totalClick++;
              
              
              equipStatus1=false;
              $("#currentCookAid").html("None ");
              equip1name=" ";
                            }
              else if(equip2name===name && type===2 && equipStatus2){
              
              player1.eatingAbility-=eaIncrease;
              type2eaIncrease=0;
              
              updateCP(player1.CP);
              updateEA(player1);
              updateStrength(player1);
              numClick++;
              totalClick++;
              
              
              equipStatus2=false;
              $("#currentEatAid").html("None ");
              equip2name=" ";
            
              }
              
              //Equips new type 1 when there was already a type 1 equipped
              
              else if(type===1 && equipStatus1 && equip1name!=name){
              player1.maxCP-=type1maxCPIncrease;
              player1.strength-=type1strengthIncrease;
              
              
              type1maxCPIncrease=0;
              type1strengthIncrease=0;
              
              player1.maxCP+=maxCPIncrease;
              type1maxCPIncrease+=maxCPIncrease;
              
              
              player1.strength+=strengthIncrease;
              type1strengthIncrease+=strengthIncrease;
              
              
              updateCP(player1.CP);
              updateEA(player1);
              updateStrength(player1);
              numClick++;
              totalClick++;
              
              equipStatus1=true;
              $("#currentCookAid").html($('<img/>', {
                                          src:imgsrc,
                                          }));
              equip1name=name;
              
              }
              
              //Equips new type 2 when there was already a type 2 clicked
              
              else if(type===2 && equipStatus2 && equip2name!=name){
              
              player1.eatingAbility-=type2eaIncrease;
              type2eaIncrease=0;
              
              player1.eatingAbility+=eaIncrease;
              type2eaIncrease+=eaIncrease;
              
              updateCP(player1.CP);
              updateEA(player1);
              updateStrength(player1);
              numClick++;
              totalClick++;
              
              equipStatus2=true;
              $("#currentEatAid").html($('<img/>', {
                                         src:imgsrc,
                                         }));
              equip2name=name;
              
              }
              
              //Initial equip
              
              else{
              player1.maxCP+=maxCPIncrease;
              type1maxCPIncrease+=maxCPIncrease;
              
              
              player1.strength+=strengthIncrease;
              type1strengthIncrease+=strengthIncrease;
              
              player1.eatingAbility+=eaIncrease;
              type2eaIncrease+=eaIncrease;
              
              updateCP(player1.CP);
              updateEA(player1);
              updateStrength(player1);
              numClick++;
              totalClick++;
              
              if(type===1){
              equipStatus1=true;
              $("#currentCookAid").html($('<img/>', {
                                          src:imgsrc,
                                          }));
              equip1name=name;
              }
              if(type===2){
              equipStatus2=true;
              $("#currentEatAid").html($('<img/>', {
                                         src:imgsrc,
                                         }));
              equip2name=name;
              }
              
              
              }
              }
              
              //Unequip when even number of clicks && total clicks=numclicks
              
              else {
              
              player1.maxCP-=maxCPIncrease;
              type1maxCPIncrease=0;
              
              player1.strength-=strengthIncrease;
              type1strengthIncrease=0;
              
              player1.eatingAbility-=eaIncrease;
              type2eaIncrease=0;
              
              updateCP(player1.CP);
              updateEA(player1);
              updateStrength(player1);
              numClick++;
              totalClick++;
              
              if (type===1){
              equipStatus1=false;
              $("#currentCookAid").html("None ");
              equip1name=" ";
              }
              if (type===2){
              equipStatus2=false;
              $("#currentEatAid").html("None ");
              equip2name=" ";
              }
              
              
              }
              
              
              }
              }).appendTo("#cookList");
            
            }
            else{
                $('<li/>', {
                  id: "proceed",
                  text: name,
                  mouseenter: function(){
                  $("#menuDesc").html(description);
                  $("#menuPic").html($('<img/>', {
                                       src:imgsrc,
                                       
                                       }))
                  },
                  mouseleave: function(){
                  $("#menuDesc").html("");
                  $("#menuPic").html("");
                  },
                  click: function () {
                  
                  
                  if (numClick %2!=0 || totalClick>numClick){
                  
                  //Unequips when clicking what is already equipped
                  
                  if(equip1name===name && type===1 && equipStatus1){
                  
                  player1.maxCP-=maxCPIncrease;
                  type1maxCPIncrease=0;
                  
                  player1.strength-=strengthIncrease;
                  type1strengthIncrease=0;
                  
                  
                  updateCP(player1.CP);
                  updateEA(player1);
                  updateStrength(player1);
                  numClick++;
                  totalClick++;
                  
                  
                  equipStatus1=false;
                  $("#currentCookAid").html("None ");
                  equip1name=" ";
                  }
                  else if(equip2name===name && type===2 && equipStatus2){
                  
                  player1.eatingAbility-=eaIncrease;
                  type2eaIncrease=0;
                  
                  updateCP(player1.CP);
                  updateEA(player1);
                  updateStrength(player1);
                  numClick++;
                  totalClick++;
                  
                  
                  equipStatus2=false;
                  $("#currentEatAid").html("None ");
                  equip2name=" ";
                  
                  }
                  
                  //Equips new type 1 when there was already a type 1 equipped
                  
                  else if(type===1 && equipStatus1 && equip1name!=name){
                  player1.maxCP-=type1maxCPIncrease;
                  player1.strength-=type1strengthIncrease;
                  
                  
                  type1maxCPIncrease=0;
                  type1strengthIncrease=0;
                  
                  player1.maxCP+=maxCPIncrease;
                  type1maxCPIncrease+=maxCPIncrease;
                  
                  
                  player1.strength+=strengthIncrease;
                  type1strengthIncrease+=strengthIncrease;
                  
                  
                  updateCP(player1.CP);
                  updateEA(player1);
                  updateStrength(player1);
                  numClick++;
                  totalClick++;
                  
                  equipStatus1=true;
                  $("#currentCookAid").html($('<img/>', {
                                              src:imgsrc,
                                              }));
                  equip1name=name;
                  
                  }
                  
                  //Equips new type 2 when there was already a type 2 clicked
                  
                  else if(type===2 && equipStatus2 && equip2name!=name){
                  
                  player1.eatingAbility-=type2eaIncrease;
                  type2eaIncrease=0;
                  
                  player1.eatingAbility+=eaIncrease;
                  type2eaIncrease+=eaIncrease;
                  
                  updateCP(player1.CP);
                  updateEA(player1);
                  updateStrength(player1);
                  numClick++;
                  totalClick++;
                  
                  equipStatus2=true;
                  $("#currentEatAid").html($('<img/>', {
                                             src:imgsrc,
                                             }));
                  equip2name=name;
                  
                  }
                  
                  //Initial equip
                  
                  else{
                  player1.maxCP+=maxCPIncrease;
                  type1maxCPIncrease+=maxCPIncrease;
                  
                  
                  player1.strength+=strengthIncrease;
                  type1strengthIncrease+=strengthIncrease;
                  
                  player1.eatingAbility+=eaIncrease;
                  type2eaIncrease+=eaIncrease;
                  
                  updateCP(player1.CP);
                  updateEA(player1);
                  updateStrength(player1);
                  numClick++;
                  totalClick++;
                  
                  if(type===1){
                  equipStatus1=true;
                  $("#currentCookAid").html($('<img/>', {
                                              src:imgsrc,
                                              }));
                  equip1name=name;
                  }
                  if(type===2){
                  equipStatus2=true;
                  $("#currentEatAid").html($('<img/>', {
                                             src:imgsrc,
                                             }));
                  equip2name=name;
                  }
                  
                  
                  }
                  }
                  
                  //Unequip when even number of clicks && total clicks=numclicks
                  
                  else {
                  
                  player1.maxCP-=maxCPIncrease;
                  type1maxCPIncrease=0;
                  
                  player1.strength-=strengthIncrease;
                  type1strengthIncrease=0;
                  
                  player1.eatingAbility-=eaIncrease;
                  type2eaIncrease=0;
                  
                  updateCP(player1.CP);
                  updateEA(player1);
                  updateStrength(player1);
                  numClick++;
                  totalClick++;
                  
                  if (type===1){
                  equipStatus1=false;
                  $("#currentCookAid").html("None ");
                  equip1name=" ";
                  }
                  if (type===2){
                  equipStatus2=false;
                  $("#currentEatAid").html("None ");
                  equip2name=" ";
                  }
                  
                  
                  }
                  
                  
                  }
                  }).appendTo("#eatList");
            }
        }
    }
 
    var whisk=new Equipment("WHISK", 1, 1, 0, 1, "Max CP+1 & Protein +1", "whisk.gif");
    var kitchenAid=new Equipment("KITCHEN-AID", 20, 3, 0,1, "Max CP +20 & Protein +3", "kitchenAid.gif");
    var truffle=new Equipment("TRUFFLE", 5, 2, 0, 1, "Max CP +5 & Protein +2", "truffle.gif");
    var sweatPants=new Equipment("SWEAT PANTS", 0, 0, 3, 2, "EA +3", "sweatPants.gif");
    var spork=new Equipment("SPORK", 0, 0, 2, 2, "EA +2", "spork.gif");
    var straw=new Equipment("STRAW", 0, 0, 1, 2, "EA +1", "straw.gif");
    
    
    //Generating HEB Items
    
    
    function hebItem(name, listing, price, amount, description, type, imgsrc){
        this.name=name;
        this.price=price;
        this.amount=amount;
        this.description=description;
        this.listing=listing;
        this.type=type;
        this.imgsrc=imgsrc;
        this.buy=function(){
            if(this.type===0){
            this.name.addToMenu();
            }
            else{
                this.name.add();
            }
            this.amount--;
            
        }
    }
    
    var brisketH=new hebItem(brisket, "Brisket", 15, 12, "CP +20", 0, "brisketP.gif");
    var drPepperH=new hebItem(drPepper, "Dr. Pepper", 10, 12, "CP +10", 0, "drPepperP.gif");
    var tortillaH=new hebItem(tortilla, "Tortilla", 35, 5, "CP +50", 0, "tortillaP.gif");
    var truffleH=new hebItem(truffle, "Truffle", 50, 1, "Max CP +5 & Protein +2", 1, "truffleP.gif");
    var sweatPantsH=new hebItem(sweatPants, "Sweat Pants", 50, 1, "EA +3", 1, "sweatPantsP.gif");
    var kitchenAidH=new hebItem(kitchenAid, "Kitchen-Aid", 100, 1, "Max CP +20 & Protein +3", 1, "kitchenAidP.gif");
    var sporkH=new hebItem(spork, "Spork", 25, 1, "EA +2", 1, "sporkP.gif");
    var whiskH=new hebItem(whisk, "Whisk", 1, 1, "Max CP +1 & Protein +1", 1, "whisk.gif");
    var strawH=new hebItem(straw, "Straw", 1, 1, "EA +1",1, "straw.gif");
    
    
    
    var productGen=function(product){
        if(product.amount>0){
        
           /* $('<img/>', {
              src:product.imgsrc,
             click: function () {
             if(player1.cash>=product.price && product.amount>0 && numItems<12)
             {
             
             player1.cash-=product.price;
             updateCash(player1);
             product.buy();
             $("#gameText").empty();
             HEB();
             }
             else if(player1.cash>=product.price && product.amount>0 && numItems>=12){
             
             $('<p/>',{
             text: "You have maxed out your inventory! Please use an item before receiving another."
             }).appendTo("#gameText");
             
             }
             }

                }).appendTo("#gameText");*/

            
        $('<li/>', {
          id: "product",
          text: product.listing+", $"+ product.price+", "+product.amount+" available"+", "+product.description,
          style:"list-style-type:none",
          
          mouseenter: function(){
          $("#encounterName").html(product.listing).css('font-weight','bold');
          $("#encounterImage").html($('<img/>', {
                                      src:product.imgsrc,
                                      align:"center",
                                      id:"enemyImage"
                                      }));
          $("#encounterCP").html("");
    
          },
          mouseleave: function(){
          $("#encounterName").html(jjWATT.name).css('font-weight','bold');
          $("#encounterImage").html($('<img/>', {
                                      src:jjWATT.imgsrc,
                                      align:"center",
                                      id:"enemyImage"
                                      }));
          $("#encounterCP").html("");
          },
          click: function () {
          if(player1.cash>=product.price && product.amount>0 && numItems<12)
          {
          
          player1.cash-=product.price;
          updateCash(player1);
          product.buy();
          $("#gameText").empty();
          HEB();
          }
          else if(player1.cash>=product.price && product.amount>0 && numItems>=12){
          
          $('<p/>',{
            text: "You have maxed out your inventory! Please use an item before receiving another."
            }).appendTo("#gameText");

          }
          }
          }).appendTo("#gameText");
            
        $('<br/>').appendTo("#gameText");
        }
    }
    
    //Creating HEB
    
    var hebOpen=false;
    
    var HEB=function(){
        $("#gameText").html($('<img/>',{
                              src:"hebLogo.gif",
                              align:"center",
                              id:"enemyImage"
                              }));
        
        $("#encounterName").html(jjWATT.name);
        $("#encounterImage").html($('<img/>', {
                                    src:jjWATT.imgsrc,
                                    align:"center",
                                    id:"enemyImage"
                                    }));
        
        
        $('<p/>',{
          text: "Welcome to HEB! What can we help you with?",
          align:"center",
          }).appendTo("#gameText");
        
        
        
        
        $('<ul/>', {
          id:"proceed"
          }).appendTo("#gameText");
        
        productGen(drPepperH);
        productGen(brisketH);
        productGen(tortillaH);
        productGen(truffleH);
        productGen(kitchenAidH);
        productGen(sweatPantsH);
        productGen(sporkH);
 
        
        $('<br/>').appendTo("#gameText");
        
        $('<button/>', {
          id: "proceed",
          text: "Leave HEB",
          click: function () {
          checkX(x);
          this.remove();
          }
          }).appendTo("#gameText");
    }
    
    // Creating NPC
    
    function NPC(name){
        this.name=name;
        this.numSayings;
        this.banner;
        this.saying1;
        this.saying2;
        this.saying3;
        this.response1;
        this.response2;
        this.response3;
        this.giveItem;
        this.imgsrc;
    }
    
    
    
    //Encountering
    var npcEncounter=function(npc){
        $("#encounterName").html(npc.name).css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                  src:npc.imgsrc,
                                    align:"center",
                                    id:"enemyImage"
                                  }));
        
                                  /*
        $('<img/>',{
          src: npc.imgsrc,
          align:"center",
          id: "enemyImage"
          }).appendTo("#encounterImage");*/
        
        if (npc.numSayings===3){
        
        $("#gameText").html(npc.banner+'<br/>'+'<br/>'+"1. "+npc.saying1+'<br/>'+"2. "+npc.saying2+'<br/>'+"3. "+npc.saying3+'<br/>');
        
        $('<button/>', {
          id: "proceed",
          text: "1",
          click: function () {
          $('<p/>',{
            text: "1- "+npc.response1
            }).appendTo("#gameText");
          this.remove();
          }
          }).appendTo("#gameText");
        
        $('<button/>', {
          id: "proceed",
          text: "2",
          click: function () {
          $('<p/>',{
            text: "2- "+npc.response2
            }).appendTo("#gameText");
          this.remove();
          }
          }).appendTo("#gameText");
        
        $('<button/>', {
          id: "proceed",
          text: "3",
          click: function () {
          $('<p/>',{
            text: "3- "+npc.response3
            }).appendTo("#gameText");
          this.remove();
          }
          }).appendTo("#gameText");
        
        $('<button/>', {
          id: "proceed",
          text: "Finished",
          click: function () {
          npc.giveItem();
          npc.numEncounters++;
          this.remove();
          endRun(x);
          
          }
          }).appendTo("#gameText");
        }
        else if (npc.numSayings===2){
            
            $("#gameText").html(npc.banner+'<br/>'+'<br/>'+"1. "+npc.saying1+'<br/>'+"2. "+npc.saying2+'<br/>');
            $('<button/>', {
              id: "proceed",
              text: "1",
              click: function () {
              $('<p/>',{
                text: "1- "+npc.response1
                }).appendTo("#gameText");
              this.remove();
              }
              }).appendTo("#gameText");
            
            $('<button/>', {
              id: "proceed",
              text: "2",
              click: function () {
              $('<p/>',{
                text: "2- "+npc.response2
                }).appendTo("#gameText");
              this.remove();
              }
              }).appendTo("#gameText");
            
            $('<button/>', {
              id: "proceed",
              text: "Finished",
              click: function () {
              npc.giveItem();
              npc.numEncounters++;
              this.remove();
              endRun(x);
              
              }
              }).appendTo("#gameText");
        }
        else if (npc.numSayings===1){
            
            $("#gameText").html(npc.banner+'<br/>'+'<br/>'+"1. "+npc.saying1+'<br/>');
            $('<button/>', {
              id: "proceed",
              text: "1",
              click: function () {
              $('<p/>',{
                text: "1- "+npc.response1
                }).appendTo("#gameText");
              this.remove();
              }
              }).appendTo("#gameText");
            
            $('<button/>', {
              id: "proceed",
              text: "Finished",
              click: function () {
              npc.giveItem();
              npc.numEncounters++;
              this.remove();
              endRun(x);
              
              }
              }).appendTo("#gameText");
        }
        else{
            
            $("#gameText").html(npc.banner+'<br/>');
            $('<button/>', {
              id: "proceed",
              text: "Finished",
              click: function () {
              npc.giveItem();
              npc.numEncounters++;
              this.remove();
              endRun(x);
              
              }
              }).appendTo("#gameText");
        }


        
    }
    // creating Erika initial encounter
    
    var erika=new NPC("ERIKA");
    
    erika.imgsrc="erika.gif";
    erika.numSayings=3;
    erika.banner="Hey, little brother! Have you thought about what you're going to do with your life now that grad school is over? Why don't you try cooking? It's a lot like chemistry except smelling almonds is a good thing. Fortunately for you, your big sis is an expert chef thanks to years of having to cook vegetarian things for myself. Are you ready to learn from the "+'<b>'+"VEGETARIAN MASTER"+'</b>'+"?";
    erika.saying1="Would you like to learn about "+'<b>'+"COOKING"+'</b>'+"?";
    erika.saying2="Would you like to learn about "+'<b>'+"LEVELING-UP"+'</b>'+"?";
    erika.saying3="Would you like to learn how to use "+'<b>'+"ITEMS"+'</b>'+"?";
    erika.response1="COOKING POINTS (CP) determine how much cooking power you have left for cook-offs. When they run out, you will lose motivation and require a nap meaning you can no longer cook and lose. Special ITEMS can be used to restore them. EATING ABILITY (EA) determines how much of your opponent's cooking you can stomach before it starts to get to you and affects your CP. PROTEIN determines how strong your cooking is.";
    erika.response2="As you compete in COOK-OFFS you gain EXPERIENCE POINTS (XP). Every 100 XP ups your skill 1 LEVEL and yields increases to your MAX CP, PROTEIN, and EA.";
    erika.response3="Items are received after talking to the COOKING MASTERS or defeating opponents in COOK-OFFS. At any time, you can hit the 'I' key and bring up your ITEM MENU in the lower right.";
    erika.giveItem=function(){
        soyMilk.addToMenu();
        
    }
    
    var jenny=new NPC("JENNY");
    jenny.imgsrc="jenny.gif";
    jenny.numSayings=3;
    jenny.banner="Hi, "+'<b>'+playerName+'</b>'+"! You have come to the right place to learn about the "+'<b>'+"SCIENCE OF BAKING"+'</b>'+".";
    jenny.saying1="What do you mean the "+'<b>'+"SCIENCE OF BAKING"+'</b>'+"?";
    jenny.saying2="What do I need to know about "+'<b>'+"FLOUR POWER"+'</b>'+"?";
    jenny.saying3="How does "+'<b>'+"GLUTEN"+'</b>'+" work?"
    
    jenny.response1="Just like with our CHEMISTRY training, measuring things properly is extremely important. Also, a lot of baking comes down to chemical reactions like those of an ACID and BASE coming together when acidic buttermilk activates basic baking soda.";
    jenny.response2="First, you need to know how to properly measure FLOUR. Even though we're in L.A., we're going full GLUTEN on this adventure. Always fluff up or sift it first. Then scoop it into your measuring cup making sure NOT to compress it, and use a flat edge to push off any excess flour for the proper amount.";
    jenny.response3="GLUTEN is a PROTEIN found in many grains that gives dough its elasticity. When water is introduced to flour, several wheat proteins come together to form gluten. Kneading or mixing dough allows gluten to form into strong networks, so you need to take care not to overmix things like cakes and not to undermix breads. Everything else from fat and sugar (GLUTEN HINDERERS) to salt (GLUTEN HELPERS) affects the final result of your dough or batter.";
    jenny.giveItem=function(){
        frosting.addToMenu();
    }
   
    var kevin=new NPC("KEVIN");
    kevin.imgsrc="kevin.gif";
    kevin.numSayings=3;
    kevin.banner="Welcome back, roomie. Now that you live in "+'<b>'+"TEXAS"+'</b>'+", it is mandated by state law that you know how to cook meat.";
    kevin.saying1="Is there a state meat of Texas?";
    kevin.saying2="What's the key to becoming a "+'<b>'+"GRILL MASTER"+'</b>'+"?";
    kevin.saying3="Do you have a secret weapon?";
    kevin.response1="Here in Texas, nothing is more sacred than the BRISKET. This is barbecue perfection, and anyone who suggests differently is a liar and a COMMUNIST.";
    kevin.response2="Picking the right cut of meat and having the support of some refreshing beer and country music is paramount to success.";
    kevin.response3="The secret weapon in any dish is the most succulent meat known to man- BACON! From veggies to filet mignon, anything can be improved with its greasy perfection.";
    kevin.giveItem=function(){
        brisket.addToMenu();
    }
    
    var robin=new NPC("ROBIN");
    robin.imgsrc="robin.gif";
    robin.numSayings=3;
    robin.banner="Hey, sugar, I'm so glad to see you can hold your own in the kitchen a lot better than the last time we met. What took you so long?";
    robin.saying1="Being brilliant takes a lot out of a guy. I didn't want to be too intimidating and magnificent.";
    robin.saying2="Something tells me if I'm gonna be the best, I'm gonna need your help. What can you and your "+'<b>'+"PIE MASTER"+'</b>'+"y teach me?";
    robin.saying3="So how do we get started?";
    robin.response1="I always figured that's what your old Lincoln beard was for.";
    robin.response2="PIE is the most fundamental food you're ever going to make. Quite simply, PIE is love. From the buttery flakey CRUST to the soul soothing FILLING and life affirming a la mode opportunities, everyone could use a little more PIE in their lives.";
    robin.response3="In order to make a great PIE, you need to have a solid foundation and that comes in the CRUST. You'll have a variety of options from the work heavy LATTICE patchworks of FRUIT PIES to the quick to assemble goodness of GRAHAM CRACKER CRUSTS found in CHOCOLATE and PECAN PIES. Picking the right CRUST is essential for delivering the best PIE experience possible, so choose carefully.";
    robin.giveItem=function(){
        fruit.addToMenu();
    }
    
    //Leveling up (every 100 XP gives a new level)
    
    var levelUp=function(player){
        while(player.XP >=100){
            
            player.maxCP+=10;
            player.strength+=2;
            player.level+=1;
            player.eatingAbility+=1;
            
            
            $('<br/>').appendTo("#gameText");
            $('<br/>').appendTo("#gameText");
            
            $('<span/>',{
              text: "Congratulations, "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: player.name
              }).css('font-weight','bold').appendTo("#gameText");
            
            $('<span/>',{
              text: ", you have leveled up to "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: "LEVEL "+player.level
              }).css({'color':'red','font-weight':'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: "! Your "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: "MAX CP "
              }).css('font-weight','bold').appendTo("#gameText");
            
            $('<span/>',{
              text: "has increased by "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: "10 "
              }).css({'color':'red','font-weight':'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: "to "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: player.maxCP+" CP"
              }).css({'color':'red','font-weight':'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: ". Your "
              }).appendTo("#gameText");
            
            
            $('<span/>',{
              text: "PROTEIN "
              }).css('font-weight','bold').appendTo("#gameText");

            $('<span/>',{
              text: "has increased by "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: "2 "
              }).css({'color':'red','font-weight':'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: "to "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: player.strength
              }).css({'color':'red','font-weight':'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: ", and your "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: "EATING ABILITY "
              }).css('font-weight','bold').appendTo("#gameText");
            
            $('<span/>',{
              text: "has increased by "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: "1 "
              }).css({'color':'red','font-weight':'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: "to "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: player.eatingAbility
              }).css({'color':'red','font-weight':'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: "!"
              }).appendTo("#gameText");
            


            
            player.XP-=100;
            updateLevel(player);
            updateXP(player);
            updateCP(player.CP);
            updateEA(player);
            updateStrength(player);
        }
        
    };
    
 
     
     var limitLevel=0;
    var lbAvailable=false;
    var limitMult=2.5;
    var blogging=false;
    var blogX=0;
    
    var lbOn=function(){
        $("#currentLimit").css('visibility','visible');
        $("#limitBake").css('visibility','visible');
        
    }
    //Creating Cook-offs
    var cookOff=function(player, enemy){
        var playerDamage=0;
        var enemyDamage=0;
        var blogPost=0;
        var cookMult=1;
        
        var cooking=true;
        $("#encounterName").html(enemy.name).css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                    src:enemy.imgsrc,
                                    align:"center",
                                    id:"enemyImage"
                                    }));
      
        $("#encounterCP").html(enemy.maxCP+"/"+enemy.maxCP+" CP").css('font-weight','bold');
        
        
        
        var blog=function(){
            
            var correct=function(){
                cookMult=2;
                blogPost++;
                blogX++;
                cook();
                cookMult=1;
                this.remove();
            }
            var wrong=function(){
                cookMult=0.5;
                blogPost++;
                blogX++;
                cook();
                cookMult=1;
                this.remove();
            }
            switch(blogX){
                    
                case 0:
                    var question=Math.floor(Math.random()*2);
                    
                    if (question===0){
                    
                    $("#gameText").html("To add excitement, it's best to think of lasagna as Italian___?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Tacos"+'<br/>'+'<b>'+"B-"+'</b>'+" Enchiladas"+'<br/>'+'<b>'+"C-"+'</b>'+" Noodles"+'<br/>');
                    
                    
                    $('<img/>', {
                      src:"cookOffLogo.gif",
                      align:"center",
                      id:"enemyImage"
                      }).prependTo("#gameText");
                        
                    $('<button/>', {
                      id: "proceed",
                      text: "A",
                      click: function () {
                      wrong();
                      }
                      }).appendTo("#gameText");
                    $('<button/>', {
                      id: "proceed",
                      text: "B",
                      click: function () {
                      correct();
                      }
                      }).appendTo("#gameText");
                    $('<button/>', {
                      id: "proceed",
                      text: "C",
                      click: function () {
                      wrong();
                      }
                      }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("What kind of tofu is best for replicating meat?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Firm"+'<br/>'+'<b>'+"B-"+'</b>'+" Soft"+'<br/>'+'<b>'+"C-"+'</b>'+" None- Use Meat"+'<br/>');
                       
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    break;
                case 1:
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("What's best to serve lentil loaf with?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Gravy"+'<br/>'+'<b>'+"B-"+'</b>'+" Ketchup"+'<br/>'+'<b>'+"C-"+'</b>'+" Tub o' Mayo"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("How do you prepare lentils for a lentil loaf?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Saute"+'<br/>'+'<b>'+"B-"+'</b>'+" There are Lentils?"+'<br/>'+'<b>'+"C-"+'</b>'+" Soak"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }
                    break;
                case 2:
                    var question=Math.floor(Math.random()*2);
                    
                    if (question===0){
                        $("#gameText").html("What is gluten?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Evil"+'<br/>'+'<b>'+"B-"+'</b>'+" Protein"+'<br/>'+'<b>'+"C-"+'</b>'+" Carbohydrate"+'<br/>');
                        
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("What would help gluten?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Sugar"+'<br/>'+'<b>'+"B-"+'</b>'+" Fat"+'<br/>'+'<b>'+"C-"+'</b>'+" Salt"+'<br/>');
                        
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }

                    break;
                case 3:
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("What type of reaction produces nutty and savory flavors in baking?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Kaboomy"+'<br/>'+'<b>'+"B-"+'</b>'+" Sakurai"+'<br/>'+'<b>'+"C-"+'</b>'+" Maillard"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("Humanity reached its zenith with the creation of___?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Penicillin"+'<br/>'+'<b>'+"B-"+'</b>'+" Chocolate"+'<br/>'+'<b>'+"C-"+'</b>'+" Reese's"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }

                    break;
                   
                case 4:
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                       
                        $("#gameText").html("When all else fails make ___ frosting?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Buttercream"+'<br/>'+'<b>'+"B-"+'</b>'+" Cream Cheese"+'<br/>'+'<b>'+"C-"+'</b>'+" Store Bought"+'<br/>');
                        
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("How can you make a quick cupcake filling?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Frozen Candy"+'<br/>'+'<b>'+"B-"+'</b>'+" Room Temp Candy"+'<br/>'+'<b>'+"C-"+'</b>'+" Give Up and Eat Batter"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                    
                case 5:
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("What kind of baking sheet produces the best whoopie pie cookie?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Parchment Paper"+'<br/>'+'<b>'+"B-"+'</b>'+" Silicone"+'<br/>'+'<b>'+"C-"+'</b>'+" Cake"+'<br/>');
                       
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("How should the cream cheese and butter be to produce a smooth filling?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Softened"+'<br/>'+'<b>'+"B-"+'</b>'+" Frozen"+'<br/>'+'<b>'+"C-"+'</b>'+" Low-fat Vegan"+'<br/>');
                       
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                    
                    case 6:
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("What makes everything from veggies to waffles to steak better?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" A Sunny Disposition"+'<br/>'+'<b>'+"B-"+'</b>'+" Bacon"+'<br/>'+'<b>'+"C-"+'</b>'+" Chocolate"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("Not eating meat in Texas makes people think you are a ___?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" True Texan"+'<br/>'+'<b>'+"B-"+'</b>'+" Manly Man"+'<br/>'+'<b>'+"C-"+'</b>'+" Communist"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                
                case 7:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("Aside from actual pumpkin, how can you best infuse pumpkin flavor into chili?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Pumpkin Spice Latte"+'<br/>'+'<b>'+"B-"+'</b>'+" Bacon Wrapped Pumpkin"+'<br/>'+'<b>'+"C-"+'</b>'+" Pumpkin Beer"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("When do you know that you are finished sauteeing veggies?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" A Fire Breaks Out"+'<br/>'+'<b>'+"B-"+'</b>'+" Onions Become Translucent"+'<br/>'+'<b>'+"C-"+'</b>'+" Onions Firm Up"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                    
                case 8:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("What type of facial hair should you never have if you want to get the girl?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Lincoln Beard"+'<br/>'+'<b>'+"B-"+'</b>'+" Lumberjack Beard"+'<br/>'+'<b>'+"C-"+'</b>'+" Clean-Shaven"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("Which of these ingredients is not a part of graham cracker crust?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Butter"+'<br/>'+'<b>'+"B-"+'</b>'+" Sugar"+'<br/>'+'<b>'+"C-"+'</b>'+" Shortening"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                    
                case 9:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                       
                        $("#gameText").html("What is the proper fat ratio for a burger?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" All Fat All The Time"+'<br/>'+'<b>'+"B-"+'</b>'+" 80/20"+'<br/>'+'<b>'+"C-"+'</b>'+" 90/10"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("What makes a Cowboy Burger?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" BBQ Sauce and Onion Rings"+'<br/>'+'<b>'+"B-"+'</b>'+" French Fries and Beer"+'<br/>'+'<b>'+"C-"+'</b>'+" Country Music and Guns"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                    
                case 10:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("Despite what Robin says, which pie do you know is the best deep down in your heart?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Cherry"+'<br/>'+'<b>'+"B-"+'</b>'+" Strawberry Rhubarb"+'<br/>'+'<b>'+"C-"+'</b>'+" Moon"+'<br/>');

                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("What kind of extract helps kick fruit pies up a notch and make them unique?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Tear"+'<br/>'+'<b>'+"B-"+'</b>'+" Peppermint"+'<br/>'+'<b>'+"C-"+'</b>'+" Almond"+'<br/>');

                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                
                case 11:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("What makes Tex-Mex better than all other foods?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Queso"+'<br/>'+'<b>'+"B-"+'</b>'+" Taco Tuesday"+'<br/>'+'<b>'+"C-"+'</b>'+" Beans"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("Pick a braising liquid for the ultimate Texas themed Brisket Tacos?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Coca-Cola"+'<br/>'+'<b>'+"B-"+'</b>'+" Miller High Life, The Champagne of Beers"+'<br/>'+'<b>'+"C-"+'</b>'+" Dr. Pepper"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                
                case 12:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("What gives meringue its peaks?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Egg Whites"+'<br/>'+'<b>'+"B-"+'</b>'+" Egg Yolks"+'<br/>'+'<b>'+"C-"+'</b>'+" Love"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("What type of onions are best for a quick pickle taco topping?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Green"+'<br/>'+'<b>'+"B-"+'</b>'+" Red"+'<br/>'+'<b>'+"C-"+'</b>'+" Yellow"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                
                case 13:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("The key to success with a risotto is?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Using Only Broth"+'<br/>'+'<b>'+"B-"+'</b>'+" Stirring Near Constantly"+'<br/>'+'<b>'+"C-"+'</b>'+" Just Deciding to Drink a Bottle of Wine"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("How can you best infuse fruit flavor into a risotto?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Add Zest and Juice"+'<br/>'+'<b>'+"B-"+'</b>'+" Wish Upon a Star"+'<br/>'+'<b>'+"C-"+'</b>'+" Add Extract"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                
                case 14:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("What is the most important aspect of Pop Tart Cake?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Sprinkle Variety"+'<br/>'+'<b>'+"B-"+'</b>'+" Expensive Wine"+'<br/>'+'<b>'+"C-"+'</b>'+" Having Machine-like Precision"+'<br/>');

                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("How many fillings should a Pop Tart Cake have?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" One"+'<br/>'+'<b>'+"B-"+'</b>'+" Just Frosting"+'<br/>'+'<b>'+"C-"+'</b>'+" As Many as Your Heart Desires"+'<br/>');

                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;
                
                case 15:
                    
                    var question=Math.floor(Math.random()*2);
                    if (question===0){
                        
                        $("#gameText").html("How can you help create an outer crust when making bread?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Steam Ice in the Oven"+'<br/>'+'<b>'+"B-"+'</b>'+" Over-Bake"+'<br/>'+'<b>'+"C-"+'</b>'+" Get Sweet Frosted Tips"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    else{
                        
                        $("#gameText").html("Which meat is not found in a Banh Mi Burger?"+'<br/>'+'<br/>'+'<b>'+"A-"+'</b>'+" Chicken"+'<br/>'+'<b>'+"B-"+'</b>'+" Pork"+'<br/>'+'<b>'+"C-"+'</b>'+" Shrimp"+'<br/>');
                        
                        $('<img/>', {
                          src:"cookOffLogo.gif",
                          align:"center",
                          id:"enemyImage"
                          }).prependTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "A",
                          click: function () {
                          correct();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "B",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                        $('<button/>', {
                          id: "proceed",
                          text: "C",
                          click: function () {
                          wrong();
                          }
                          }).appendTo("#gameText");
                    }
                    
                    break;

            }
            
        
        }
        
        var limitBake=function(player,enemy){
            
            var playerDamageThisTurn=Math.floor((Math.random()*5+player.strength-enemy.eatingAbility+3)*limitMult);
            
            $("#gameText").html("You are in a cooking zone! You "+'<b>'+player.limitAttack+'</b>'+ " with expert skill taking ");
            
            $('<span/>',{
              text: playerDamageThisTurn+" CP "
              }).css({'color': 'red', 'font-weight': 'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: "from "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: enemy.name
              }).css('font-weight','bold').appendTo("#gameText");
            $('<span/>',{
              text: "!"
              }).appendTo("#gameText");
            $("#encounterImage").effect('shake',{distance:10});
            $("#encounterCPTrack").html("-"+playerDamageThisTurn+" CP").fadeIn(200);
            $("#encounterCPTrack").html("-"+playerDamageThisTurn+" CP").fadeOut(1500);

            
            /*
            $("#gameText").html("You are in a cooking zone! You "+player.limitAttack+" with expert skill taking "+playerDamageThisTurn+" CP from the enemy!"+'<br/>'+'<br/>');*/
     
            limitLevel=0;
            enemyDamage+=playerDamageThisTurn;
            if(enemyDamage<=enemy.maxCP){
            $("#encounterCP").html(enemy.maxCP-enemyDamage+"/"+enemy.maxCP+" CP").css('font-weight','bold');
            }
            else{
            $("#encounterCP").html("0"+"/"+enemy.maxCP+" CP").css('font-weight','bold');
            }
            checkEnemyDefeated();
        }
        
        var checklimitBake=function(player,enemy){
            updateLimitBake();
            if (limitLevel>=36)
                $('<button/>', {
                  id: "proceed",
                  text: "LIMIT BAKE!",
                  click: function () {
                  limitBake(player,enemy);
                  updateLimitBake();
                  this.remove();
                  //$("#cook").remove();
                  
                  }
                  }).appendTo("#gameText");
        }


        
        
        //Check for Hit
        var cook=function(){
            $("#gameText").empty();
            
            if(cookMult<=1){
            var playerCook=Math.floor(Math.random()*(player.level+2.5));
            }
            else{
            var playerCook=true;
            }
            var playerDamageThisTurn=Math.floor((Math.random()*5+player.strength-enemy.eatingAbility)*cookMult);
            
            if (playerDamageThisTurn<=0){
                playerDamageThisTurn=0;
                playerCook=false;
            }
            
            if(playerCook){
                
                if(cookMult<1){
                    $("#gameText").html('<b>'+"WRONG!"+'</b>'+'<br/>'+'<br/>'+"You successfully cooked. You "+'<b>'+player.weapon+'</b>'+ " deducting ");
                    
                }
                else if(cookMult===1){
                    $("#gameText").html("You successfully cooked. You "+'<b>'+player.weapon+'</b>'+ " deducting ");
                }
                else{
                    $("#gameText").html('<b>'+"CORRECT! EXCELSIOR!!!"+'</b>'+'<br/>'+'<br/>'+"You successfully cooked. You "+'<b>'+player.weapon+'</b>'+ " deducting ");
                }
                $("#encounterImage").effect('shake',{distance:10});
                
                
                
                $('<span/>',{
                  text: playerDamageThisTurn+" CP "
                  }).css({'color': 'red', 'font-weight': 'bold'}).appendTo("#gameText");
                
                $('<span/>',{
                  text: "from "
                  }).appendTo("#gameText");
                
                $('<span/>',{
                  text: enemy.name
                  }).css('font-weight','bold').appendTo("#gameText");
                $('<span/>',{
                  text: "!"
                  }).appendTo("#gameText");
                
                /*$('<p/>',{
                  text: "You successfully cooked. You "+player.weapon+" deducting "+playerDamageThisTurn+" CP from "+enemy.name+"!"
                  }).appendTo("#gameText");*/
                $("#encounterCPTrack").html("-"+playerDamageThisTurn+" CP").fadeIn(200);
                $("#encounterCPTrack").html("-"+playerDamageThisTurn+" CP").fadeOut(1500);
                
                enemyDamage+=playerDamageThisTurn;
                if(enemyDamage>enemy.maxCP){
                    $("#encounterCP").html(0+"/"+enemy.maxCP+" CP").css('font-weight','bold');
                }
                else{
                $("#encounterCP").html(enemy.maxCP-enemyDamage+"/"+enemy.maxCP+" CP").css('font-weight','bold');
                }
                checkEnemyDefeated();
                
            }
            else{
                playerDamageThisTurn=0;
                $("#gameText").html("You "+'<b>'+"missed"+'</b>'+"! Perhaps you should hit the kitchen a little more often than the gym.");
                $('<img/>', {
                  src:"cookOffLogo.gif",
                  align:"center",
                  id:"enemyImage"
                  
                  }).prependTo("#gameText");
                /*$('<p/>',{
                  text: "You missed! Perhaps you should hit the gym a little more often than the kitchen."
                  }).appendTo("#gameText");*/
                $("#encounterCPTrack").html("-"+playerDamageThisTurn+" CP").fadeIn(200);
                $("#encounterCPTrack").html("-"+playerDamageThisTurn+" CP").fadeOut(1500);
                
               setTimeout(enemyAttack,800);
                
            }
            
            
        }
        
        //Check for Enemy Defeated
        
        var checkEnemyDefeated=function(){
            
            if(enemyDamage>=enemy.maxCP){
       
                player.XP+=enemy.XPDrop;
                
                $('<img/>', {
                  src:"victory.gif",
                  align:"center",
                  id:"enemyImage"
                  
                  }).prependTo("#gameText");
                
                $('<p/>',{
                  text: enemy.name+": "+enemy.closing
                  }).css('font-style','italic').appendTo("#gameText");
                var victoryStuffs=function(){
                
                $('<span/>',{
                  text: "Congratulations. You proved you are the better cook and vanquished the "
                  }).appendTo("#gameText");
               
                $('<span/>',{
                  text: enemy.name+"!"
                  }).css('font-weight', 'bold').appendTo("#gameText");
                
                $('<br/>').appendTo("#gameText");
                $('<br/>').appendTo("#gameText");
                
                $('<span/>',{
                  text: "Emerging victorious in the cook-off earned you "
                  }).appendTo("#gameText");
                
                $('<span/>',{
                  text: enemy.XPDrop+" XP"
                  }).css({'color': 'red', 'font-weight': 'bold'}).appendTo("#gameText");
                
                $('<span/>',{
                  text: "."
                  }).appendTo("#gameText");
                

                
                levelUp(player);
                updateXP(player);
                enemy.giveRecipe();
                if (cashEarning){
                    var cashDrop=Math.floor(Math.random()*5+enemy.strength+player.level);
                    player.cash+=cashDrop;
                    $('<span/>',{
                      text: "You received "
                      }).appendTo("#gameText");
                    
                    $('<span/>',{
                      text: "$"+cashDrop
                      }).css({'color': 'red', 'font-weight': 'bold'}).appendTo("#gameText");
                    
                    $('<span/>',{
                     text: " for your victory!"
                     }).appendTo("#gameText");
                    
                    $('<br/>').appendTo("#gameText");
                    
                    updateCash(player);
                }
                    endRun(x);
                }
                setTimeout(victoryStuffs,1000);
                //endRun(x);
               
                
            }
            else{
                
                $('<img/>', {
                  src:"cookOffLogo.gif",
                  align:"center",
                  id:"enemyImage"
                  
                  }).prependTo("#gameText");
                setTimeout(enemyAttack,800);
                
            }
        }
        
        // Have enemy attack
        
        var enemyAttack=function(){
            
            var enemyCook=Math.floor(Math.random()*2);
            var enemyDamageThisTurn=Math.floor(Math.random()*4.5+enemy.strength-player.eatingAbility);
            
            if (enemyDamageThisTurn<0){
                enemyDamageThisTurn=0;
            }
            
            
            $('<p/>',{
              text: "Your cooking power wasn't enough that round."
              }).appendTo("#gameText");
            
            
            $('<span/>',{
              text: enemy.name
              }).css('font-weight','bold').appendTo("#gameText");
            
            $('<span/>',{
              text: " fires back with "+enemy.pronoun1+" cooking skills. "+enemy.pronoun2+" "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: enemy.attack
              }).css('font-weight','bold').appendTo("#gameText");
            
            $('<span/>',{
              text: " subtracting "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: enemyDamageThisTurn+" CP "
              }).css({'color': 'red', 'font-weight': 'bold'}).appendTo("#gameText");
            
            $('<span/>',{
              text: " from you!"
              }).appendTo("#gameText");
            $("#playerImage").effect('shake',{distance:10});
            
            $("#cpTrack").html("-"+enemyDamageThisTurn+" CP").fadeIn(200);
            $("#cpTrack").html("-"+enemyDamageThisTurn+" CP").fadeOut(1500);
            
            /*$('<p/>',{
              text: "Your cooking power wasn't enough that round. " +enemy.name+" fires back with "+enemy.pronoun1+" cooking skills. "+enemy.pronoun2+" "+enemy.attack+" dealing "+enemyDamageThisTurn+" CP of damage to you"
              }).appendTo("#gameText");*/

            player.CP-=enemyDamageThisTurn;
            if (player.CP<0){
                player.CP=0;
            }
            updateCP(player.CP);
            if(lbAvailable){
            limitLevel+=enemyDamageThisTurn;
            }
            checkPlayerDefeated();
            
        }
        
        //Check for player defeated
        
        var checkPlayerDefeated=function(){
            if (player.CP<=0)
            {
                
                $('<img/>', {
                  src:"lose.gif",
                  align:"center",
                  id:"enemyImage"
                  
                  }).prependTo("#gameText");
                
                $('<p/>',{
                  text: enemy.name+": "+enemy.enemyWins
                  }).css('font-style','italic').appendTo("#gameText");
                $('<span/>',{
                  text: enemy.name
                  }).css('font-weight','bold').appendTo("#gameText");
                $('<span/>',{
                  text: "'s cooking prowess was too much for you, and you were defeated... "
                  }).appendTo("#gameText");
                $('<p/>',{
                  text: "GAME OVER"
                  }).css('font-weight','bold').appendTo("#gameText");
                
                $('<br/>').appendTo("#gameText");
                
                $('<button/>', {
                  id: "proceed",
                  text: "Restart",
                  click: function () {
                  resetGame();
                  startGame();
                  this.remove();
                  
                  
                  }
                  }).appendTo("#gameText");
                $('<button/>', {
                  id: "proceed",
                  text: "Visit Blog",
                  click: function () {
                  location.href="http://www.mymesstheirkitchen.blogspot.com";
                  this.remove();
                  
                  }
                  }).appendTo("#gameText");
                return;
                
                
            }
            else{
                /*$('<img/>', {
                  src:"cookOffLogo.gif",
                  align:"center",
                  id:"enemyImage"
                  
                  }).prependTo("#gameText");*/
                $('<p/>',{
                  text: "The cook-off rages on to the next round!"
                  }).appendTo("#gameText");
                
                $('<button/>', {
                  id: "cook",
                  text: "COOK!",
                  click: function () {
                  cook();
                  this.remove();
                  }
                  }).appendTo("#gameText");
                
                if(blogPost<1 && blogging){
                    $('<button/>', {
                      id: "cook",
                      text: "BLOG!",
                      click: function () {
                      blog();
                      this.remove();
                      }
                      }).appendTo("#gameText");
                }
                
                if(lbAvailable){
                    checklimitBake(player,enemy);
                }

        }
        
        }
        
        $("#gameText").html("Oh, no! You have encountered a "+ '<b>'+enemy.name+'</b>'+"! and it has challenged you to a cook-off!"+'<br/>'+'<br/>'+'<i>'+enemy.name+": "+enemy.opening+'</i>'+'<br/>'+'<br/>');
        $('<img/>', {
          src:"cookOffLogo.gif",
          align:"center",
          id:"enemyImage"
          
          }).prependTo("#gameText");
        
        $('<button/>', {
          id: "cook",
          text: "COOK!",
          click: function () {
          
          this.remove();
          cook();
          }
          }).appendTo("#gameText");

        
        
        }
    

         //Intro
    var napTime=function(){
        $('<button/>', {
          id: "proceed",
          text: "Proceed",
          click: function () {
          
          $('<p/>',{
            text: "All that lounging around and TV watching has taken its toll. What will you do?"
            }).appendTo("#gameText");
          
          $('<button/>', {
            id: "proceed",
            text: "Nap",
            click: function () {
            checkX(x);
            this.remove();
            }
            }).appendTo("#gameText");
          $('<button/>', {
            id: "proceed",
            text: "Nap",
            click: function () {
            checkX(x);
            this.remove();
            }
            }).appendTo("#gameText");
          $('<button/>', {
            id: "proceed",
            text: "Nap",
            click: function () {
            checkX(x);
            this.remove();
            
            }
            }).appendTo("#gameText");
          
          
          this.remove();
          }
          }).appendTo("#gameText");
    }

    var priceIsRight=function(){
        
    $("#encounterName").html("Drew Carey").css('font-weight','bold');
    $("#encounterImage").html($('<img/>', {
                                    src:"drewCarey.gif",
                                    align:"center",
                                    id:"enemyImage"
                                    }));
    
    $("#gameText").html('<b>'+playerName+ '</b>'+", come on down!"+'<br/>'+'<br/>'+"Hello, and welcome to "+'<b>'+"The Price is Right"+'</b>'+"! Let's start off the bidding on this lovely "+'<b>'+"GRILL"+'</b>'+"."+'<br/>'+'<br/>');
        
        
        $('<img/>', {
                    src:"grill.gif",
                    align:"center",
                    id:"enemyImage"
          }).appendTo("#gameText");
        
        $('<img/>', {
          src:"price.gif",
          align:"center",
          id:"enemyImage"
          
          }).appendTo("#gameText");
   
    $('<button/>', {
      id: "proceed",
      text: "Proceed",
      click: function () {
      
      $('<button/>', {
        id: "proceed",
        text: "$1",
        click: function () {
        $('<p/>',{
          text: "And the actual retail price is $250! You've seen this show too many times."
          }).appendTo("#gameText");
        this.remove();
        $('#proceed1').hide();
        $('#proceed2').hide();
        napTime();
        }
        }).appendTo("#gameText");
      $('<button/>', {
        id: "proceed1",
        text: "$400",
        click: function () {
        $('<p/>',{
          text: "And the actual retail price is $250! Why would you ever not bid $1? Have you even watched this show before?"
        }).appendTo("#gameText");
        this.remove();
        $('#proceed').hide();
        $('#proceed2').hide();
        napTime();
        
        }
        }).appendTo("#gameText");
      $('<button/>', {
        id: "proceed2",
        text: "$602",
        click: function () {
        $('<p/>',{
          text: "And the actual retail price is $250! Wow you're kind of a jerk with your bidding..."
        }).appendTo("#gameText");
        this.remove();
        $('#proceed').hide();
        $('#proceed1').hide();
        napTime();
        
        }
        }).appendTo("#gameText");
            this.remove();
      }
      }).appendTo("#gameText");
    }
    
//VEGETARIAN MASTER
    
    var vegMaster1=function(){
        $("#gameText").html("After many hours of gloriously napping, you awake to find your sister has returned home."+'<br/>'+'<br/>');
        $('<button/>', {
          id: "proceed",
          text: "Wake-up",
          click: function () {
          
          npcEncounter(erika);
          cpHelp.addToHelp();
          eaHelp.addToHelp();
          proteinHelp.addToHelp();
          itemHelp.addToHelp();
          xpHelp.addToHelp();
          this.remove();
          }
          }).appendTo("#gameText");
        
    }
    
    
    
    
    var vegMaster2=function(){
        erika.numSayings=3;
        erika.banner="Excellent work not burning our apartment down! But now it's time to learn how to incorporate actual food into your cooking.";
        erika.saying1="What are these "+'<b>'+"GREEN THINGS"+'</b>'+" all over your kitchen?";
        erika.saying2="How do you manage to live a "+'<b>'+"VEGETARIAN"+'</b>'+" lifestyle?";
        erika.saying3="Do you think of all this off the top of your head or do you find "+'<b>'+"RECIPES"+'</b>'+"?";
        erika.response1="These are known as VEGETABLES. They can easily be incorporated into your cooking with some CHOPPING, ROASTING, or SAUTEEING. Amazingly, you will find you feel less like death after eating a few of them.";
        erika.response2="It took many years of deep meditation and teenage rebellion to break through the carnivorous ways of our ancestors. Also, animals are kind of awesome and eating them makes me sad.";
        erika.response3="When getting started, it definitely helps to have RECIPES to follow. Each time you win a cook-off, you will receive a RECIPE that you can access at anytime in the lower-right by hitting 'R'. Reading a new RECIPE will also give you a permanent boost to your stats because knowledge is (cooking) power!";
        erika.giveItem=function(){
            soyMilk.addToMenu();
            cookOffHelp.addToHelp();
            recipeHelp.addToHelp();
        }
       
        
        npcEncounter(erika);
        
        
    }
    var vegMaster3=function(){
        $("#playerImage").html('<img src=terryV.gif>');
        player1.weapon="ROASTED UP SOME VEGGIES";
        erika.numSayings=2;
        erika.banner="Good job, but man cannot live on green leafiness alone. You're going to have to incorporate some "+'<b>'+"PROTEIN"+'</b>'+" into your diet as well.";
        erika.saying1="But how am I supposed to get "+'<b>'+"PROTEIN"+'</b>'+" without meat?";
        erika.saying2="Is there anything I can do to help out my limited skills?";
        erika.response1="There are plenty of surprisingly edible meat substitutes like TOFU, TEMPEH, SEITAN, NUTS, and BEANS to assist you on your journey into cooking a fully realized meal.";
        erika.response2="You can always supplement your lack of culinary finese with COOKING TOOLS and EATING AIDS. COOKING TOOLS provide boosts to your MAX CP and PROTEIN, while EATING AIDS help you withstand all of your opponent's cooking by upping your EATING ABILITY. You can only have one of each type equipped at a time, and you can access your equipment at any time by pressing 'I' for the ITEM MENU. I'll give you your first COOKING TOOL when you head out to your next COOK-OFF. Too much info to remember? Access the HELP MENU by pressing 'H' at anytime."
        erika.giveItem=function(){
            whisk.add();
            $('<br/>').appendTo("#gameText");
            $('<span/>',{
              text: "You received a mighty "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: "WHISK"
              }).css('font-weight','bold').appendTo("#gameText");
            
            $('<span/>',{
              text: "!"
              }).appendTo("#gameText");
            
            $('<br/>').appendTo("#gameText");
            $('<br/>').appendTo("#gameText");
            cookToolHelp.addToHelp();
        }

        npcEncounter(erika);
        
    }
    
    var vegMaster4=function(){
        blogging=true;
        blogHelp.addToHelp();
        erika.numSayings=1;
        erika.banner="You're gonna need a showstopper, though, to prove the supremacy of vegetarian cooking. It's time you learned the secrets of the "+'<b>'+"LENTIL LOAF"+'</b>'+"!";
        erika.saying1="Am I ready to handle something that big?";
        erika.response1="All you have to do is make it seem like you know what you're doing thanks to the power of the INTERNET! Be sure to tap into the knowledge you have learned from our encounters and the recipes you have gathered. ONCE per COOK-OFF you can harness this power to cook up something special by BLOGGING. Impress and gain countless followers by utilizing the knowledge properly and you'll cook something TWICE as special; answer incorrectly and your cooking will suffer.";
        erika.giveItem=function(){
            soyMilk.addToMenu();
            
        }
        npcEncounter(erika);
    }

    var vegMaster5=function(){
        lbAvailable=true;
        lbOn();
        refillCP();
        limitBakeHelp.addToHelp();
        erika.numSayings=0;
        erika.banner="Wow, I am impressed with your skills in the kitchen, little brother. You have now gained the ability to unleash a super attack known as a "+'<b>'+"LIMIT BAKE"+'</b>'+" special to help when a cook off gets too hot.  Unfortunately, I have taught you everything that I can about cooking and being healthy. Now, it's time to get off of my couch and explore the world for other "+'<b>'+"COOKING MASTERS"+'</b>'+"."
        
        npcEncounter(erika);
    }
    
    
//BAKING MASTER
    
    var bakingMaster1=function(){
        $("#encounterName").html("Grad Alma Mater").css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                    src:"ucla.gif",
                                    align:"center",
                                    id:"enemyImage"
                                    }));

        
        $("#gameText").html("Thanks to countless hours admiring Cupcake Wars, you find yourself prepared to contact the mysterious "+'<b>'+"BAKING MASTER"+'</b>'+" so she can help you achieve your (relatively new) life's dream of making the finest confectionary crafts."+'<br/>'+'<br/>');
        $('<button/>', {
          id: "proceed",
          text: "Bake",
          click: function () {
          
          npcEncounter(jenny);
          this.remove();
          }
          }).appendTo("#gameText");
    }
    
    var bakingMaster2=function(){
        jenny.numSayings=2;
        jenny.banner="Excellent work on that "+'<b>'+"BREAD"+'</b>'+", but the true key to baking success is "+'<b>'+"SUGAR"+'</b>'+"! Let's get working on some sweets like "+'<b>'+"COOKIES"+'</b>'+".";
        jenny.saying1="What are the basics of a good "+'<b>'+"COOKIE"+'</b>'+"?";
        jenny.saying2="How does a "+'<b>'+"COOKIE"+'</b>'+" bake?";
        jenny.response1="COOKIES typically start with the same foundation- creaming of butter with sugar, flavoring with extracts, beating in eggs, and whisking in your flour, leaveners (baking soda and/or baking powder), and a hint of salt. From there you can alter your recipe with any number of ingredients from nuts to cocoa powder to potato chips for the cookie of your dreams.";
        jenny.response2="First the dough spreads as the butter melts. As a result you can use cooled dough for less spready cookies. Next the edges set since they are the thinnest part of the cookie. After that the cookie rises thanks to our now dissolved baking soda reacting with the acid of things like brown sugar or buttermilk resulting in outgassing. Then the proteins from the egg and the starches will set at high temperatures leading to your eventual cookie shape and size. As the temperature continues to increase, the sugar caramelizes typically on the bottom and at the edges where it is the hottest yielding the sweet flavors. Next super chemistry occurs when proteins from our flour and eggs brown with the sugars in a MAILLARD REACTION producing nutty and savory flavors. Finally, it cools once removed from the oven leading to the crispy exterior and some deflation.";
        jenny.giveItem=function(){
            straw.add();
            eatAidHelp.addToHelp();
            $('<br/>').appendTo("#gameText");
            $('<span/>',{
              text: "You received a crazy "
              }).appendTo("#gameText");
            
            $('<span/>',{
              text: "STRAW"
              }).css('font-weight','bold').appendTo("#gameText");
            
            $('<span/>',{
              text: "!"
              }).appendTo("#gameText");
            
            $('<br/>').appendTo("#gameText");
            
        }

        npcEncounter(jenny);
    }
    
    
    var bakingMaster3=function(){
        jenny.numSayings=3;
        jenny.banner='<b>'+"COOKIES"+'</b>'+" are a great way to make quick uncomplicated treats, but I think you're ready to dive into the deep end of baking. Let's visit the trendiest corners of the baking world and talk about the handheld sugar bombs known as "+'<b>'+"CUPCAKES"+'</b>'+".";
        jenny.saying1="What's the secret to great "+'<b>'+"FROSTING"+'</b>'+"?";
        jenny.saying2="How do I know when the "+'<b>'+"CUPCAKE"+'</b>'+" is ready?";
        jenny.saying3="What if I want to make my "+'<b>'+"CUPCAKES"+'</b>'+" even more ridiculous?";
        jenny.response1="CREAM CHEESE FROSTING, as proven time and time again by its ability to make CARROT CAKE delicious, is the greatest FROSTING ever created. You need to make sure the CREAM CHEESE and BUTTER used are both at similar SOFTENED temperatures when you make it, or else you'll end up with a lumpy mess that is less than appetizing.";
        jenny.response2="The easiest way to check is to insert a TOOTHPICK into the CUPCAKE. If it comes out clean then your cakes are done baking. You want to get them out while they are still moist and bouncy and before they begin to dry out and crack.";
        jenny.response3="Then fillings are the way to go. You can either cut out some of the cake post baking and add a COMPOTE, CARAMEL or other treat before frosting, or you can drop a dollop of something like NUTELLA or a FROZEN CANDY (so it doesn't melt during baking) straight into your batter filled muffin tins.";
        jenny.giveItem=function(){
            frosting.addToMenu();
            
        }

        npcEncounter(jenny);
    }
    
    var bakingMaster4=function(){
        $("#playerImage").html('<img src=terryC.gif>');
        player1.weapon="RAINED DOWN CUPCAKES";
        player1.limitAttack="EXPLODED A DELICIOUS SUGAR BOMB OF CUPCAKES";
        limitMult+=0.5;
        jenny.numSayings=0;
        jenny.banner="Now that you can make sugary delights, your life will never be the same. Your "+'<b>'+"LIMIT BAKE"+'</b>'+" has been upgraded to reflect your newfound mastery of confectionary crafts. Be careful. People will expect to get their fix, and if your treats are good enough you'll develop a fanatical following.";
        npcEncounter(jenny);
    }
    
    var texas=function(){
        refillCP();
        $("#encounterName").html("The Lone Star State").css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                    src:"texas.gif",
                                    align:"center",
                                    id:"enemyImage"
                                    }));
        $("#gameText").html("Knowing that there is nothing left in sunny "+'<b>'+"California"+'</b>'+" to learn, you set off to the place where meat was probably created to continue your quest."+'<br/>'+'<br/>');
        
        $('<button/>', {
          id: "proceed",
          text: "Cowboy Up",
          click: function () {
          checkX(x);
          this.remove();
          
          }
          }).appendTo("#gameText");
    }
//GRILLING MASTER
    
    var grillMaster1=function(){
        npcEncounter(kevin);
    }
    
    var grillMaster2=function(){
        kevin.numSayings=3;
        kevin.banner="If I'm going to teach you how to cook like a "+'<b>'+"TEXAN"+'</b>'+", we're going to have to get supplies from the ultimate Texas store-"+'<b>'+"HEB"+'</b>'+". Unfortunately, it is protected by a most feared "+'<b>'+"GUARDIAN"+'</b>'+".";
        kevin.saying1="What can we get at "+'<b>'+"HEB"+'</b>'+"?";
        kevin.saying2="Can you tell me more about this "+'<b>'+"GUARDIAN"+'</b>'+"?";
        kevin.saying3="Can we just sneak past the "+'<b>'+"GUARDIAN"+'</b>'+"?";
        kevin.response1="HEB has some of the best meat you can find outside of a butcher shop as well as the best storemade tortillas out there. You can purchase items and equipment to up your cooking stats or replenish cooking power.";
        kevin.response2="The guardian is the most feared yet beloved adopted son of Houston. If you earn his respect, you will have access to the treasures of HEB.";
        kevin.response3="They say he is fueled by a fire like that of a fine salsa.";
        kevin.giveItem=function(){
            brisket.addToMenu();
            HEBHelp.addToHelp();
        }
        npcEncounter(kevin);
    }
    
    var grillMaster3=function(){
        kevin.numSayings=3;
        kevin.banner=" I hope you had fun reuniting with the "+'<b>'+"PIE MASTER"+'</b>'+". For the life of me, I'll never understand eating dessert when you can just eat meat all the time. If you want to be king of the cookout and thus the manliest man out there, you're gonna need to be well versed in how to make a "+'<b>'+"BURGER"+'</b>'+".";
        kevin.saying1="How does one make a worthy "+'<b>'+"BURGER"+'</b>'+" patty?"
        kevin.saying2="What about fixins'?";
        kevin.saying3="What's your philosophy on the "+'<b>'+"GRILL"+'</b>'+"?";
        kevin.response1="Having quality BEEF to start with is the most important thing you can do. You want about an 80/20 or 85/15 FAT CONTENT. Add some ONION, GARLIC, WORCESTERSHIRE SAUCE, SALT and PEPPER, and you're ready to go, but the meat should always be the star.";
        kevin.response2="For easy BURGER fixins', wrap some ONION, MUSHROOMS, or other veggies tightly in aluminum foil with some BUTTER and/or BALSAMIC. Let them cook in the back of the grill until nice and tender.";
        kevin.response3="You only want to flip the BURGERS once so they stay nice and juicy. Also give the patty a little dimple with your thumb before you start cooking them. Get your grill up to around 350-400 F and cook for about 5-8 minutes per side. You want the outside to be nicely grill-marked, but you don't want the inside to dry out.";
        npcEncounter(kevin);
        kevin.giveItem=function(){
            brisket.addToMenu();
        }

    }
    
    var grillMaster4=function(){
        kevin.numSayings=3;
        kevin.banner="While many people might tell you that BBQ is the greatest thing in Texas, it just might be the cultural hybrid known as "+'<b>'+"TEX-MEX"+'</b>'+".";
        kevin.saying1="What is "+'<b>'+"TEX-MEX"+'</b>'+"?"
        kevin.saying2="What about spices?";
        kevin.saying3="What's the best thing about "+'<b>'+"TEX-MEX"+'</b>'+"?";
        kevin.response1="TEX-MEX is Mexican food unlike any other. With added emphasis on gooey melted cheese and hearty Texas style meat, it's the best of all worlds.";
        kevin.response2="CUMIN is the king spice of this style of cooking.";
        kevin.response3="QUESO is without a doubt the greatest thing you will find in TEX-MEX. Before your meal comes, you should already have a stomach full of melted goodness and have trouble moving. Make sure you have a MARGARITA or three to help wash it all down.";
        npcEncounter(kevin);
    }

    var grillMaster5=function(){
        kevin.numSayings=3;
        kevin.banner="Very good, my padawan. Now it is time you unleashed your full power by learning the Kevin Special- "+'<b>'+"RISOTTO WITH SCALLOPS"+'</b>'+"!";
        kevin.saying1="Isn't "+'<b>'+"RISOTTO"+'</b>'+" hard to make?"
        kevin.saying2="What is the secret to a good "+'<b>'+"RISOTTO"+'</b>'+"?";
        kevin.saying3="Does this really work?";
        kevin.response1="RISOTTO takes a lot of care and calls for your attention, but it is not actually that hard to make. Near constant stirring over the course of about an hour is required, but the creamy results are worth it.";
        kevin.response2="The secret to both a perfect RISOTTO and having fun while making it is lots of WINE. At least an entire bottle should be split between yourself and the RISOTTO during the half hour+ of stirring.";
        kevin.response3="60% of the time, this works every time.";
        npcEncounter(kevin);
    }

    var grillMaster6=function(){
        player1.limitAttack="STIRRED SO HARD YOU CREATED A VORTEX OF THE CREAMIEST, MOST DELIGHTFUL RISOTTO EVER";
        limitMult+=0.5;
        kevin.numSayings=0;
        kevin.banner="Pure and total utter culinary perfection. You now know the showstopper to end all showstoppers. With your new "+'<b>'+"LIMIT BAKE"+'</b>'+", you will be an unstoppable force in the kitchen. There's nothing more I can teach you other than how to drink beer and fix cars at the same time, but I have a feeling you have bigger plans in mind than that. It's been a pleasure, roomie. Go get 'em.";
        npcEncounter(kevin);
    }
    var grillPieInter=function(){
        $("#gameText").html("That showdown with the largest person you have ever seen took a lot out of you, so you decided to take a break from the tutelage of "+'<b>'+"KEVIN"+'</b>'+" and visit an old friend who may be the key to establishing your baking supremacy."+'<br/>'+'<br/>');
        $('<button/>', {
          id: "proceed",
          text: "Proceed",
          click: function () {
          checkX(x);
          this.remove();
          
          }
          }).appendTo("#gameText");
    }
    
//PIE MASTER
    
    var pieMaster1=function(){
        npcEncounter(robin);
    }
    
    var pieMaster2=function(){
        robin.numSayings=3;
        robin.banner="Welcome back. I didn't expect to see you again so soon. Now that you have a nice pre-baked shell for your "+'<b>'+"PIE"+'</b>'+", you're gonna need to fill it with deliciousness.";
        robin.saying1="I want to be the best, so what's the best "+'<b>'+"FILLING"+'</b>'+" there is?";
        robin.saying2="Does the inside of a "+'<b>'+"PIE"+'</b>'+" have to be cooked fruit?";
        robin.saying3="Is there any "+'<b>'+"FILLING"+'</b>'+" that doesn't work?";
        robin.response1="Sometimes tradition matters, and when it comes to historically great PIE, CHERRY is where it's at. With just the right combo of tartness and sweetness, a nice warm slice of CHERRY PIE with some vanilla ice cream can remove all of life's stresses.";
        robin.response2="If you're looking for a lazy day and don't mind waiting, CREAM PIES are the way to go. They can be filled with fruits that are less conducive to baking like banana or coconut, or you can attempt to make the world's largest s'more with rich chocolate. Once the CRUST is pre-baked, you just need to mix the goodies together and let it set in the fridge while you build up unsafe levels of anticipation.";
        robin.response3="Absolutely! Despite what you may think, no one should ever be subjected to the celery-like abomination known as RHUBARB.";
        npcEncounter(robin);
    }
    
    var pieMaster3=function(){
        robin.numSayings=2;
        robin.banner="I know you, and I know what you've learned so far isn't nearly complicated enough for your tastes.";
        robin.saying1="How can I make "+'<b>'+"PIE"+'</b>'+" as extravagant as possible?";
        robin.saying2="Anything else I should know about "+'<b>'+"PIE"+'</b>'+"?";
        robin.response1="Just like with your beloved CUPCAKES, any good PIE can use a topping. From the simplicity of serving a slice a la mode to cool and refreshing WHIPPED CREAM to the Heaven reaching heights of MERINGUE, you have quite a few tools at your disposal.";
        robin.response2="::fart noises:: ";
        npcEncounter(robin);
    }
    
    var pieMaster4=function(){
        robin.numsayings=2;
        robin.banner="Hey, "+'<b>'+playerName+'</b>'+"! What are you doing here? I've taught you all the PIE lessons there are.";
        robin.saying1="Actually, I was wondering if you'd like some dinner. Perhaps, I could make you a super fancy RISOTTO?";
        robin.saying2="Just because we've learned all there is about pie, doesn't mean we can't have more ridiculous and awesome baking adventures together!";
        robin.response1="Wow, yeah that would be really nice! I'll get the wine.";
        robin.response2="I have actually been wanting to try something that sounds too amazing to not be great. You ready?"
        npcEncounter(robin);
        
    }
    
    var pieMaster5=function(){
        robin.numSayings=0;
        robin.banner="That was the epitome of delightful. We should definitely do that again once we've awoken from our food comas.";
        npcEncounter(robin);
    }
    
    var mysteryMan=function(){
        
        $("#encounterName").html("??????").css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                    src:"mysteryMan.gif",
                                    align:"center",
                                    id:"enemyImage"
                                    }));
        
        $("#gameText").html("As you leave Robin's you hear a loud commotion. Ever the brave one, you rush back in to find her missing but a mysterious man in the shadows."+'<br/>'+'<br/>'+'<b>'+"MYSTERY MAN"+'</b>'+": Whoa now, partner. Just where do you think you're going?"+'<b>'+" The GREAT AND POWERFUL BUTTERED ONE"+'</b>'+" has big plans for your litle friend in "+'<b>'+"SOUTH CAROLINA"+'</b>'+", but you don't have to worry about meeting her there. Because tonight we have a thrilling episode of"+'<b>'+" Triple D"+'</b>'+" for you: "+'<b>'+"Death"+'</b>'+", "+'<b>'+"Destruction"+'</b>'+", and "+'<b>'+"Dominance"+'</b>'+"!"+'<br/>'+'<br/>');
        
        /*$('<p/>',{
          text: "MYSTERY MAN: Whoa now, partner. Just where do you think you're going? The GREAT AND POWERFUL BUTTERED ONE has big plans for your litle friend in South Carolina, but you don't have to worry about meeting her there. Because tonight we have a thrilling episode of Triple D for you: Death, Destruction, and Dominance!"
          }).appendTo("#gameText");*/
        
        $('<button/>', {
          id: "proceed",
          text: "Engage!",
          click: function () {
          checkX(x);
          this.remove();
          
          }
          }).appendTo("#gameText");

    }
    
    var southCarolina=function(){
        $("#encounterName").html("The Palmetto State").css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                    src:"sc.gif",
                                    align:"center",
                                    id:"enemyImage"
                                    }));
        
        $("#gameText").html("Returning to "+'<b>'+"TEXAS"+'</b>'+" has led to some epic times and tons of new adventures, but it's time to move on and head to "+'<b>'+"SOUTH CAROLINA"+'</b>'+" to rescue "+'<b>'+"ROBIN"+'</b>'+" from the mysterious "+'<b>'+"GREAT AND POWERFUL BUTTERED ONE"+'</b>'+". Things are sure to be different, but you're ready for the challenge. Although, it might not be a bad idea to stock up on brisket before heading to a region known for its pulled pork and lack of "+'<b>'+"HEB"+'</b>'+" stores."+'<br/>'+'<br/>');
        
        $('<button/>', {
          id: "proceed",
          text: "Move!",
          click: function () {
          checkX(x);
          this.remove();
          
          }
          }).appendTo("#gameText");
        
        $('<button/>', {
          id: "proceed",
          text: "Go to HEB",
          click: function () {
          HEB();
          this.remove();
          $("#proceed").remove();
          }
          }).appendTo("#gameText");
    }
    
    var mysteryWoman=function(){
        hebOpen=false;
        $("#encounterName").html("???????").css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                    src:"mysteryWoman.gif",
                                    align:"center",
                                    id:"enemyImage"
                                    }));
        $("#gameText").html('<b>'+"MYSTERY WOMAN"+'</b>'+": Silly, boy. Years of eating a diet consisting purely of SUGAR and BUTTER hasn't been able to stop me, so what makes you think that you can?"+'<br/>'+'<br/>');
        
        $('<button/>', {
          id: "proceed",
          text: "Be a Hero!",
          click: function () {
          checkX(x);
          this.remove();
          
          }
          }).appendTo("#gameText");
    }

    var pieMaster6=function(){
        $("#encounterName").html("ROBIN & "+playerName).css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                    src:"finale.png",
                                    align:"center",
                                    id:"finaleImage"
                                    }));

        
        
        robin.banner="Wow, "+'<b>'+playerName+'</b>'+"! I can't believe you came all the way out to South Carolina to save me!";
        robin.saying1="Are you ok? What did they do?";
        robin.saying2="So what now?";
        robin.response1="It actually wasn't all that bad. They just made me eat a bunch of things covered in butter and cheese.";
        robin.response2="Who knows, and who cares? We've got a whole new state to have adventures in and a whole lot of new cuisine to sample.";
        
        
        
        $("#gameText").html(robin.banner+'<br/>'+'<br/>'+"1. "+robin.saying1+'<br/>'+"2. "+robin.saying2+'<br/>');
        /*$('<img/>', {
          src:"finale.png",
          align:"center",
          id:"finaleImage"
          
          }).appendTo("#gameText");*/
        
        
        $('<button/>', {
          id: "proceed",
          text: "1",
          click: function () {
          $('<p/>',{
            text: "1- "+robin.response1
            }).appendTo("#gameText");
          this.remove();
          }
          }).appendTo("#gameText");
        
        
        
        $('<button/>', {
          id: "proceed",
          text: "2",
          click: function () {
          $('<p/>',{
            text: "2- "+robin.response2
            }).appendTo("#gameText");
          this.remove();
          }
          }).appendTo("#gameText");
        
        $('<button/>', {
          id: "proceed",
          text: "Here We Go!",
          click: function () {
          checkX(x);
          this.remove();
          
          
          }
          }).appendTo("#gameText");
    }
    var finale=function(){
        $("#encounterName").html("The Champ").css('font-weight','bold');
        $("#encounterImage").html($('<img/>', {
                                    src:"eating.gif",
                                    align:"center",
                                    id:"finalImage"
                                    }));
        $("#gameText").html("Congrats, "+'<b>'+playerName+'</b>'+", on defeating "+'<b>'+"My Mess Their Kitchen the Game"+'</b>'+"! Now it's time to find someone else's kitchen to make a mess in!"+'<br/>'+'<br/>');
        
        
        $('<br/>').appendTo("#gameText");
        $('<p/>',{
          text: "Credits",
          align:"center",
          }).css('text-decoration','underline').appendTo("#gameText");

        $('<span/>',{
          text: "Written, Coded, and Drawn by Terry Kennair",
          }).appendTo("#gameText");
        $('<br/>').appendTo("#gameText");
        $('<br/>').appendTo("#gameText");

        $('<span/>',{
          text: "Game Testers: Brandon, Bridget, Bryan, Evan, Kathryn, Kevin, Robin, Ted, and Trey",
          }).appendTo("#gameText");
        $('<br/>').appendTo("#gameText");
        $('<br/>').appendTo("#gameText");

        $('<span/>',{
          text: "Based on the adventures of My Mess Their Kitchen",
          }).appendTo("#gameText");
        $('<br/>').appendTo("#gameText");
        $('<br/>').appendTo("#gameText");
        
        $('<span/>',{
          text: "Designs inspired by Super Mario World, Final Fantasy 7, Scott Pilgrim, and delicious food",
          }).appendTo("#gameText");
        $('<br/>').appendTo("#gameText");
        $('<br/>').appendTo("#gameText");

        $('<span/>',{
          text: "Special Thanks to: Robin, Maggie, Abby, Swarley, Erika, Bryan, Jenny, Kevin, Code Academy, and my future Diabetes",
          }).appendTo("#gameText");
        $('<br/>').appendTo("#gameText");
        $('<br/>').appendTo("#gameText");

        
        
        $('<button/>', {
          id: "proceed",
          text: "Play Again!",
          click: function () {
          resetGame();
          startGame();
          this.remove();
          
          }
          }).appendTo("#gameText");
        
        $('<button/>', {
          id: "proceed",
          text: "Visit Blog",
          click: function () {
          location.href="http://www.mymesstheirkitchen.blogspot.com";
          this.remove();
          
          }
          }).appendTo("#gameText");
    }
    
    //SCRIPT OF EVENTS TO RUN
   
    var checkX=function(z){
       
        
        switch(z){
            case 0:
                priceIsRight();
                x++;
                break;
            case 1:
                vegMaster1();
                x++;
                break;
            case 2:
                cookOff(player1,water);
                x++
                break;
            case 3:
                vegMaster2();
                x++;
                break;
            case 4:
                cookOff(player1,kale);
                x++;
                break;
            case 5:
                vegMaster3();
                x++;
                break;
            case 6:
                cookOff(player1,tofu);
                x++;
                break;
            case 7:
                vegMaster4();
                x++;
                break;
            case 8:
                cookOff(player1,lentilLoaf);
                x++;
                break;
            case 9:
                vegMaster5();
                x++;
                break;
            case 10:
                bakingMaster1();
                x++;
                break;
            case 11:
                cookOff(player1, bread);
                x++;
                break;
            case 12:
                bakingMaster2();
                x++;
                break;
            case 13:
                cookOff(player1, cookie);
                x++;
                break;
            case 14:
                bakingMaster3();
                x++;
                break;
            case 15:
                cookOff(player1, cupcake);
                x++;
                break;
            case 16:
                bakingMaster4();
                x++;
                break;
            case 17:
                cookOff(player1,cookieMonster);
                x++;
                break;
            case 18:
                texas();
                x++;
                break;
            case 19:
                grillMaster1();
                x++;
                break;
            case 20:
                cookOff(player1,bacon);
                x++;
                break;
            case 21:
                grillMaster2();
                x++;
                break;
            case 22:
                cookOff(player1,jjWATT);
                hebOpen=true;
                x++;
                break;
            case 23:
                grillPieInter();
                x++;
                break;
            case 24:
                pieMaster1();
                x++;
                break;
            case 25:
                cookOff(player1,crust);
                x++;
                break;
            case 26:
                grillMaster3();
                x++;
                break;
            case 27:
                cookOff(player1,burger);
                x++;
                break;
            case 28:
                pieMaster2();
                x++;
                break;
            case 29:
                cookOff(player1,pie);
                x++;
                break;
            case 30:
                grillMaster4();
                x++;
                break;
            case 31:
                cookOff(player1,taco);
                x++;
                break;
            case 32:
                pieMaster3();
                x++;
                break;
            case 33:
                cookOff(player1,meringue);
                x++;
                break;
            case 34:
                grillMaster5();
                x++;
                break;
            case 35:
                cookOff(player1,risotto);
                x++;
                break;
            case 36:
                grillMaster6();
                x++;
                break;
            case 37:
                pieMaster4();
                x++;
                break;
            case 38:
                cookOff(player1, popTartCake);
                x++
                break;
            case 39:
                pieMaster5();
                x++;
                break;
            case 40:
                mysteryMan();
                x++;
                break;
            case 41:
                cookOff(player1, guyFieri);
                x++;
                break;
            case 42:
                southCarolina();
                x++;
                break;
            case 43:
                mysteryWoman();
                x++;
                break;
            case 44:
                cookOff(player1,paulaDeen);
                x++;
                break;
            case 45:
                pieMaster6();
                x++;
                break;
            case 46:
                finale();
                x++;
            /*
            default:
                randEncounter();*/
        }
}
    
    //Creates a button then runs next event
    
    var endRun=function(y){
    $('<button/>', {
      id: "proceed",
      text: "Proceed",
      click: function () {
      checkX(x);
      this.remove();
      $("#encounterCP").html("");
     
      }
      }).appendTo("#gameText");
        if (hebOpen){
            $('<button/>', {
              id: "proceed",
              text: "Go to HEB",
              click: function () {
              HEB();
              this.remove();
              $("#proceed").remove();
              }
              }).appendTo("#gameText");
        }
    }
    $(document).ready(function(){
                      $("#logo").hide();
                      $("#startButton").hide();
                      $("#startPic").hide();
                      $("#game").css('visibility','visible');
                      $(".logopic").css('visibility','visible');
                      $("#playerName").html(player1.name);
                      updateCP(player1.CP);
                      updateLevel(player1);
                      updateXP(player1);
                      updateEA(player1);
                      updateStrength(player1);
                      $("#gameText").html("You wake up in a haze on your sister's couch. Today seems like any other, but it will not be. It's time to get your morning latte and watch some educational television."+'<br/>'+'<br/>'+"You imagine that one joyous moment where your dreams could come true."+'<br/>'+'<br/>');
                      $("#encounterName").html("");
                      $("#encounterImage").html("");

                    
                    
                      
                      endRun(x);
                  
        
                                            });

}
