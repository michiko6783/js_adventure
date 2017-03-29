var person = prompt("Welcome", "enter name");
  text = "Nice to meet you!";

var guild = prompt(" Which guild were you thinking of joining: Fairy Tail or Blue Pegasus?");
switch(guild) {
  case "Fairy tail" :
    text = "Perfect, join us!";
    break;
  case "Blue Pegasus" :
    text = "I'd watch my back with that crowd!";
    break;
}

var member = prompt ("So here's who will help you settle in..");
  switch(member) {
    case "Natsu Dragneel.":
      text = "for Fairy Tail.";
      break;
    case "Ivu Tirumu" :
      text = "if you insist.";
      break;
  }

  var magic = prompt ("Your guild member will train you in ");
    switch(magic) {
      case "Dragon Magic":
        text = "rare and dangerous but powerful!";
        break;
      case "Snow Magic":
        text = " doesn't sound like much but it's deadly.";
        break;
    }

    var attack = prompt ("Fairy Tail is being attacked! Do you ");
    switch(attack){
      case "take a stand!":
        text = "Fairy Tail fights together or dies together!";
        break;
      case "take over Fairy Tail!":
        text = "your guild is weak!";
        break;
    }

    var aftermath = prompt ("Is the guild still standing?");
    switch(aftermath){
      case "Still here!":
        text = "We may be down but we're not out!";
        break;
      case "Fairy Tail is ours!":
        text = "It's not over til its over...";
    }

    var choice = prompt ("You sticking around or is it too much?");
    switch(choice){
      case "We can do this!!!":
        text = "Then let's rebuild.";
        break;
      case "That's too much for me, I'm out.":
        text = "That's what you get for picking them over us!";
        break;
    }
