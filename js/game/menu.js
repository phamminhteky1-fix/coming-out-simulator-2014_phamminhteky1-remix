const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log(currentYear);
// Just in case it breaks

function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("<b>COMING OUT SIM 2014</b>");
	N("(but remixed and ruined by phamminhteky1)")
	N("A half-true game about half-truths.");
	N("Hey there, player. Welcome to this game, I guess.");
	N("What would you like to do now?");

	Choose({
		"Let's play this thingy!": Play,
		"Wtf are you? (Credits)": function(){
			Credits("Wtf are you?");
		},
		"Hmmmm, tell me moree. (About Dis Game)": function(){
			About("Hmmmm, tell me moree.");
		}
	});

}

function SipCoffee(message){
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	PlaySound("sfx","coffee_sip");
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");
}

function Play(message){
	
	SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("Jumping right into it! Great!");
		N("No messing around with reading the Credits or the About This Game sections or--");
		p("SHUSH!");
		N("Fine, fine, fine, fine....");
		N("Nyaa-Nyaa-Nyaa-Nyaa...")
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p(". . . . . .");
		p("Why the hell did you make that a clickable option, when it was the only option left.");
		N("ABS NO FAKING IDEA");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("Yes, let's gooo!");
	}

	N("Let's travel back " + (currentYear - 2010) + " years ago, to 2010...");
	p("That was " + (currentYear - 2010) + " years ago?!");
	N("...to da evening that changed my life forever...");
	N("AND AS YOU SEE, AFTER DAT EVENING I AM TRULY... uhhh sorry it is *almost* accidential spoiling...")

	N("Tell me, dear player, how do you think this all ends?");

	Choose({
		"With flowers and rainbows and gay unicorns?": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("Yes. That is exactly how this game ends.");
			N("AND YOU SEE, THAT MAKES ME NOW!!!")
			p("Really?");
			N("uhhh no.");
			Play_2();
		},
		"Apparently, with you redditing at Starbucks.": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("Hey, me coding on DIS laptop. Turning my coming-of-age story into the game you're playing right now, are you seeing what I'm seeing?");
			p("Naw, you're probably procrastinating.");
			N("Look who's talking.");
			p("Touché, douché.");
			N("Anyway...");
			Play_2();
		},
		"IT ALL ENDS IN BLOOD": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("Uh, compared to that :ending:, I guess my story isn't that tragic to be involved to BLOOD.");
			N("And I'M not making THAT kind of violent games.")
			N("Although that's kind of a glass one-hundredths-full interpretation.");
			p("BLOOD!");
			N("STOP-SAYNG-BLOOD!")
			N("Anyway...");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("If you didn't skip the About This Game section, you'd know this is a very personal story.");
		p("Shush. I'm giving you some PRIVACY.");
	}

	N("This game includes dialogue that I, my parents, and my ex-boyfriend actually said.");
	N("But somehow muffled, idk why");
	N("As well as all the things we could have, should have, must have, and never would have said.");
	N("It doesn't matter which is which.");
	N("Nah anymore.");

	Choose({
		"How the hell can I win a game with no right answers?": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("Exactly.");
			p(". . .");
			Play_3();
		},
		"You're a bit of a downer, aren't you?": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("LIFE is a bit of a downer.");
			p("So that's a yes.");
			Play_3();
		},
		"This 'true' game is full of lies?": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("Even if the dialogue was 100% accurate, it'd still be 100% lies.");
			p(". . .");
			Play_3();
		}
	});

}

function Play_3(){

	N("You'll be playing as me, circa 2010.");
	if(!$.asked_credits){
		N("Because you skipped the Credits, my (illegal) name is Nicky Case. Just so you know.");
		p("Shush.");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		case 1: whatISay = "This game doesn't end with gay unicorns. "; break;
		case 2: whatISay = "This game is a coming-out, a coming-of-age, a coming-to-terms. "; break;
		case 3: whatISay = "This game ends not in blood, but in tears. "; break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay += "Sorry for being a bit of a downer."; break;
		case 2: whatISay += "And there are no right answers."; break;
		case 3: whatISay += "And it's full of lies."; break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("Hey, I just said that!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");
	
	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);
	
	N("When you play...");
	N("Choose your words wisely.");
	N("Every character will remember everything you say. Or don't say if you're afraid enough.");
	N("Imagine playing Dispatch.");
	p("Yeah. You even brought up my choices in this MAIN MENU.");
	N("Exactly.");
	N("And you also *almost* learnt yourslef how to play this game");

	N(". . .");
	N("Some things are hard not to remember.");
	N("REMEMBER DAT!")
	
	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("Who are you?");
	}
	
	N("Ah, how rude of me! Let me introduce myself.");
	N("Hi, I'm Nicky Case.");
	N("That's my illegal name, it's just my REAL name.");

	p("That's totes weird, dude.");
	if($.asked_about){
		p("And like you just told me, this is your personal story?");
	}else{
		p("And you made this game?");
	}

	N("Yep, I am the sole writer / programmer / artist of Coming Out Simulator 2014.");

	if($.asked_about){
		p("All of this yourself?");
		p("I said it before and I'll say it again...");
		p("Of course. You narcissist.");
		N("Well it's not ALL me.");
		N("The sounds & audio are from various public domain sources.");
	}else{
		N("The sounds & audio, though, are from various public domain sources.");
	}

	N("But although it's mostly just me behind this game...");
	N("...there's a lot of people behind this game's story.");

	if($.asked_about){
		Choose({
			"Speaking of which, let's play that! Now! NOW!!!!!": Play
		});
	}else{
		Choose({
			"Speaking of that, can we play it now?": Play,
			"Why'd you make this? (About This Game)": function(){
				About("Why'd you make this?");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){
		N("I just wanted to tell my story.");
	}else{
		N("This game...");
		N("...more like a conversation simulator, really...");
		N("...is a very very very very personal story.");
	}
	
	p("Of course. You narcissist.");
	N("Ha, of course.");

	if($.asked_credits){
		p("Actually no, a narcissist would use their real name.");
		N("I told you, it IS my real na--");
		p("Aight, aight. Weirdo.");
	}
	N("This game,");
	N("Uh, this is the remixer, and the one who ruined this...");
	p("SHUT UP!");
	p("Dude, right in the start, you have changed everything Nicky said and I say");
	N("So?");
	N("Well, tbh, this is my personal project just-4-fun");
	N("He always makes bonker games!");
	N("This game, a semi-biographical game by himself, is purposely used for the #Nar8 Game Jam")
	N("A fun fact, he did not oppyright this game, that means you can remix yourslef, ruin the game even more, or even create your own game using this engine.");
	N("You can even sell (???) and use it without mentioning the author, as he is also open to his sexuality.");
	p("worst pun ever...");
	N("What about letting you see my google search history and you ended up seeing searches like what is a fork...");
	p("ENOUGH YAPPING");
	N("Butt, mentioning the original creator will be highly appreciated by the creator himself and the Internet");
	N("and also creates less (not legal) consequences...");
	N("To know more about me, go to phamminhteky1-fix.github.io!");
	N("Backing to Nicky..")
	N("I made this game for the #Nar8 Game Jam. Gave me an excuse. And a deadline!");
	p("You procrastinated until the last day to enter, didn't you.");
	N("Yes.");
	p("A fun fact...");
	N("Also! This game is uncopyrighted. Dedicated to the public domain.");
	p("...")
	N("I'm as open with my source code as I am with my sexuality.");
	p("...")
	N("?")
	p("uhm thanks")

	if($.asked_credits){
		Choose({
			"Let's just play this game already.": Play
		});
	}else{
		Choose({
			"Bad puns aside, can we play now?": Play,
			"So what ARE you? (Credits)": function(){
				Credits("So what ARE you?");
			}
		});
	}

}
