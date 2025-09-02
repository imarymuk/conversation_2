let blocksRaw = {
  init: [
    {
      type: "horizontal-bar"
    },
    {
      type: "system-note",
      message:
        "Mrs Capobianco is a little frustrated that she can no longer continue watching her programme. Make the right decisions to reduce her frustration.",
    },
    {
      type: "barometer",
      points: 0,
      expression: "none",
      message: "",
    },
    {
      type: "system-options",
      options: [
        {
          label: "Hello, this is James Edward. Welcome to Sunrise. How can I help you?",
          nextNode: "" //stay empty
        }
      ],
    },
    {
      type: "customer-message",
      messages: [
        "Yes hello, this is Capobianco speaking.",
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Hello, Mrs Capobianco",
          nextNode: "warm_hello"
        },
        {
          label: "Grützi.",
          nextNode: "cold_hello"
        }
      ],
    }
  ],

  warm_hello: [
    {
      type: "horizontal-bar",
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message:
        "Great, using the customer's name makes the conversation feel much more personal.",
    },
    {
      type: "reference",
      nextNode: "customer_reply"
    }
  ],

  cold_hello: [
    {
      type: "horizontal-bar",
    },
    {
      type: "system-note",
      message:
        "Remember to use the customer's name right from the start. This makes the conversation feel much more personal.",
    },
    {
      type: "reference",
      nextNode: "customer_reply"
    }
  ],

  customer_reply: [
    {
      type: "horizontal-bar"
    },
    {
      type: "customer-message",
      messages: [
        "I was comfortably watching my programme here at home and then, one moment to the next, the TV suddenly stopped working...!",
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Yes Mrs Capobianco, that's stupid...",
          nextNode: "agent_response_1"
        },
        {
          label: "Oh Mrs Capobianco, that's not so bad. A programme like this isn't that important.",
          nextNode: "agent_response_2"
        },
        {
          label: "Oh dear, I'm sorry that your television is no longer working.",
          nextNode: "agent_response_3"
        }
      ]
    }
  ],

  agent_response_1: [
    {
      type: "customer-message",
      messages: ["Yes, you can say that again. You know, I was really looking forward to continuing my series..."],
    },
    {
      type: "horizontal-bar",
    },
    {
      type: "system-note",
      message: "Show that you can put yourself in the customer's shoes and make her feel heard."
    },
    {
      type: "system-options",
      options: [
        {
          label: "Yes, I understand, I would feel the same way if I were you, so I will now see what kind of solution I can find for you.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: ["Ok, thank you"],
    },
    {
      type: "horizontal-bar",
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message:
        "That was better. The customer now feels more understood.",
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_20" //this will use in all three sections
    }
  ],

  agent_response_2: [
    {
      type: "customer-message",
      messages: [
        "Not important? Do you know how much I was looking forward to watching my series again!"
      ]
    },
    {
      type: "horizontal-bar",
    },
    {
      type: "barometer",
      points: +10,
      expression: "angry",
      message:
        "Oh dear, your reaction wasn't exactly emphatic and further upset the customer.",
    },
    {
      type: "system-options",
      options: [
        {
          label: "But Mrs Capobianco, that's no reason to get loud now. We'll find a solution.",
          nextNode: "worst_option"
        },
        {
          label: "Yes, I understand, of course that's very annoying. I will now see what solution I can find so that you can continue watching your series.",
          nextNode: "better_option"
        }
      ]
    }
  ],

  worst_option: [
    {
      type: "customer-message",
      messages: [
        "That's outrageous! Really cheeky... How would you feel if you were me!"
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +10,
      expression: "angry",
      message: "Oh oh, the conversation is going in the wrong direction. Now you should really calm the customer down."
    },
    {
      type: "system-options",
      options: [
        {
          label: "Yes, you're right. I would feel the same way if I were you. I will now see what solution I can find so that you can continue watching your series.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Good."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "Phuuu... You've just about got your act together."
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_20" //this will use in all three sections
    }
  ],

  better_option: [
    {
      type: "customer-message",
      messages: [
        "Ok, thank you"
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "That was better. The customer now feels more understood."
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_20" //this will use in all three sections
    }
  ],

  agent_response_3: [
    {
      type: "customer-message",
      messages: [
        "Yes, you know, I was really looking forward to continuing my series..."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Yes, I understand, I would feel the same way if I were you, so I will now see what solution I can find for you.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Ok, thank you"
      ]
    },
    {
      type: "barometer",
      points: -5,
      expression: "happy",
      message:
        "Very good, by showing understanding and responding empathetically, the customer feels heard.",
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_20" //this will use in all three sections
    }
  ],

  nextPage_Slide_20: [
    {
      type: "system-options",
      options: [
        {
          label: "Ok Mrs Capobianco, please tell me your customer number and your password.",
          nextNode: "Slide_20_opt_1"
        },
        {
          label: "Can you give me your customer number and your password, Mrs Capobianco? Then I'll be happy to look into the cause of the fault for you.",
          nextNode: "Slide_20_opt_2"
        }
      ]
    }
  ],

  Slide_20_opt_1: [
    {
      type: "customer-message",
      messages: [
        "My customer number is 156 392 50 and my password is: Capobianco."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "All right.",
          nextNode: "agent_cold_response_Slide_20"
        },
        {
          label: "Thank you very much.",
          nextNode: "agent_combined_response" //reference
        }
      ]
    }
  ],

  Slide_20_opt_2: [
    {
      type: "customer-message",
      messages: [
        "My customer number is 156 392 50 and my password is: Capobianco."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "All clear.",
          nextNode: "agent_combined_response" //reference
        },
        {
          label: "Thank you very much.",
          nextNode: "agent_warm_response__Slide_20"
        }
      ]
    }
  ],

  agent_cold_response_Slide_20: [
    {
      type: "customer-message",
      messages: [
        "It doesn't get any friendlier than that, does it..."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +2,
      expression: "angry",
      message: "Make sure you use polite words and a friendly, open manner."
    },
    {
      type: "reference",
      nextNode: "agent_combined_response" //reference
    }
  ],

  agent_warm_response__Slide_20: [
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "Great, your polite and friendly manner makes your customer feel at ease."
    },
    {
      type: "reference",
      nextNode: "agent_combined_response" //reference
    }
  ],

  agent_combined_response: [
    {
      type: "system-options",
      options: [
        {
          label: "I've found you in our system, Mrs Capobianco.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Good."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Let's go through the whole thing. Where is your router?",
          nextNode: "ask_about_router"
        },
        {
          label: "Can you tell me exactly what happened, Mrs Capobianco?",
          nextNode: "ask_about_situation_in_start"
        }
      ]
    },
  ],

  ask_about_router: [
    {
      type: "customer-message",
      messages: [
        "I don't know, my daughter set it all up for me back then... Do you mean the black box from which the Internet comes?"
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Yes, exactly. Which wifi is activated in your home? Have you already reset everything to the factory settings?",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Erm... What do you mean by Wifi? I haven't pressed or done anything. I don't understand anything about it. That's why I'm calling!"
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "I see, we'll do it together, step by step, don't worry. What light is on your box?",
          nextNode: "asking_about_light"
        },
        {
          label: "I see, don't worry Mrs Capobianco. We will certainly find the cause of the fault. Can you tell me exactly what happened?",
          nextNode: "finding_cause_of_fault"
        }
      ]
    },
  ],

  asking_about_light: [
    {
      type: "customer-message",
      messages: [
        "I don't know, there's a button on the TV here..."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Ok, what about the box? What does it show?",
          nextNode: "asking_about_box" //worst option
        },
        {
          label: "Okay, Mrs Capobianco. What exactly happened, can you describe it to me?",
          nextNode: "asking_to_repeat_the_situation" 
        }
      ]
    },
  ],

  asking_about_box: [
    {
      type: "customer-message",
      messages: [
        "Which box? I don't understand what to do... Can't you just do something in your system...?!"
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +10,
      expression: "angry",
      message: "Oh dear, the customer is visibly confused. She probably doesn't know much about technology. In future, pay attention to your customers' technical knowledge to prevent them from being overwhelmed and frustrated."
    },
    {
      type: "system-options",
      options: [
        {
          label: "Yes, just a moment. I'll quickly check our system here to see if there's a general fault.",
          nextNode: "" // stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Yes, do that. Because I really haven't pressed anything here... From one moment to the next I have no reception."
      ]
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_21" //this will use in all three sections //reference
    }
  ],

  asking_to_repeat_the_situation: [
    {
      type: "customer-message",
      messages: [
        "I was watching TV as usual and from one moment to the next I have no reception. Can't you just check your system to see what's going on? I haven't done anything..."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +5,
      expression: "angry",
      message: "Phew, you've realised just in time that Mrs Capobianco doesn't know enough about technology and that your questions will only cause more frustration. In future, pay attention to your customers' technical knowledge to prevent them from being overwhelmed."
    },
    {
      type: "reference",
      nextNode: "check_in_system"  //reference
    }
  ],

  finding_cause_of_fault: [
    {
      type: "customer-message",
      messages: [
        "Ok, good. You know, I just don't know anything about technology. I was watching TV as usual and from one moment to the next I had no reception."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "Very good. You've realised that Mrs Capobianco doesn't know enough about technology and that your questions only add to her frustration. In future, pay attention to the technical knowledge of your customers to prevent them from being overwhelmed and frustrated."
    },
    {
      type: "reference",
      nextNode: "check_in_system"  //reference
    }
  ],

  check_in_system: [
    {
      type: "system-options",
      options: [
        {
          label: "I see. Then I'll check here in our system whether there is a general fault. Then we'll know more, Mrs Capobianco.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Yes, please. The malfunction occurred very suddenly. Before that, everything worked as usual."
      ]
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_21" //this will use in all three sections //reference
    }
  ],

  ask_about_situation_in_start: [
    {
      type: "customer-message",
      messages: [
        "I was watching TV as usual and from one moment to the next I had no reception."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "I see. Then I'll check our system to see if there's a general fault. Then we'll know more, Mrs Capobianco.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Yes, please. The fault really came on very suddenly. Before that, everything worked as usual."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -5,
      expression: "happy",
      message: "Very well. By asking open questions, you quickly find out more about an issue and the customer has the feeling that you are motivated to find the cause of the fault."
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_21" //this will use in all three sections //reference
    }
  ],

  nextPage_Slide_21: [
    {
      type: "horizontal-bar"
    },
    {
      type: "system-note",
      message: "You notice that there is a major fault in the street where Mrs Capobianco lives. An excavator has probably damaged the fibre optic cable during roadworks, leaving the whole street without internet. What do you do next?"
    },
    {
      type: "system-options",
      options: [
        {
          label: "Mrs Capobianco, your entire street is currently affected by the fault.",
          nextNode: "Slide_21_agent_response_1"
        },
        {
          label: "Mrs Capobianco, is there construction work going on in your street?",
          nextNode: "Slide_21_agent_response_2"
        }
      ]
    }
  ],

  Slide_21_agent_response_1: [
    {
      type: "customer-message",
      messages: [
        "Oh well, why don't you fix the problem? Then my entire street will be happy."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "It's not that easy.",
          nextNode: "just_tell_no"
        },
        {
          label: "An excavator has probably damaged the fibre optic cable, which has caused the internet outage.",
          nextNode: "explain_why_no"
        }
      ]
    }
  ],

  just_tell_no: [
    {
      type: "customer-message",
      messages: [
        "But why? Can't you do something about it...?"
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +5,
      expression: "angry",
      message: "Mrs Capobianco doesn't understand why you can't help straight away. Explain the reason for the outage to her in order to gain more acceptance."
    },
    {
      type: "system-options",
      options: [
        {
          label: "An excavator has probably damaged the fibre cable.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Oh, yes, the road here was torn up..."
      ]
    },
    {
      type: "reference",
      nextNode: "customer_asking_for_options" //this will use in all three sections //reference
    }
  ],

  explain_why_no : [
    {
      type: "customer-message",
      messages: [
        "Oh, yes, the road here was torn up..."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "Very good, your explanations help the customer to understand the cause of the disruption and to be more understanding."
    },
    {
      type: "reference",
      nextNode: "customer_asking_for_options" //this will use in all three sections //reference
    }
  ],

  Slide_21_agent_response_2: [
    {
      type: "customer-message",
      messages: [
        "Yes, we've had a building site here for days, the road has been torn up."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Mmm, yes, that fits in with what I see here. An excavator has probably damaged the fibre optic cable. The whole road is now affected by the disruption.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Oh, that's annoying. But that explains why the connection was cut so suddenly."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -5,
      expression: "happy",
      message: "Very good, thanks to your explanations, the customer understands the cause of the fault and can be more understanding."
    },
    {
      type: "reference",
      nextNode: "customer_asking_for_options" //this will use in all three sections //reference
    }
  ],

  customer_asking_for_options: [
   {
      type: "customer-message",
      messages: [
        "But what can you do now?"
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Unfortunately, there's nothing I can do.",
          nextNode: "tell_you_can_do_anything"
        },
        {
          label: "In this case, we'll have to hire a construction company to replace the cable. Unfortunately, the logistics will take some time.",
          nextNode: "bring_an_outside_option"
        }
      ]
    }, 
  ],

  tell_you_can_do_anything: [
    {
      type: "customer-message",
      messages: [
        "Are you really sure...?"
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +2,
      expression: "angry",
      message: "Mrs Capobianco probably feels like you just don't want to help... Explain the situation to her to get more understanding."
    },
    {
      type: "system-options",
      options: [
        {
          label: "I expressed myself unfavourably: An external construction company will be commissioned to replace the cable. This will take some time.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Oh, I see. But that's pretty frustrating and doesn't solve my problem either..."
      ]
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_22" //this will use in all two sections
    }
  ],

  bring_an_outside_option: [
    {
      type: "customer-message",
      messages: [
        "Oh, I see. Thanks for the information. Now I understand better how the problem arose."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "Very good, Mrs Capobianco understands the situation thanks to your detailed explanation."
    },
    {
      type: "customer-message",
      messages: [
        "Ultimately, this is not a solution to my problem..."
      ]
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_22" //this will use in all two sections
    }
  ],

  nextPage_Slide_22: [
    {
      type: "system-options",
      options: [
        {
          label: "What do you think is an acceptable solution?",
          nextNode: "asking_for_customer_thoughts" //opt 1
        },
        {
          label: "I'm sorry that I can't solve your problem directly.",
          nextNode: "saying_no_agent_cant_do_anything" //opt 2
        }
      ]
    }
  ],

  asking_for_customer_thoughts: [
    {
      type: "customer-message",
      messages: [
        "Well, isn't there any other way that I can continue watching my series? I'm meeting up with my friends next week and the series is the number one topic, so I'd like to know what it's about."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "Very good, you're involving Mrs Capobiaco in finding a solution! That way, you find out what the customer expects and can proceed in a solution-orientated way."
    },
    {
      type: "reference",
      nextNode: "Slide_22_options_for_agent" //reference
    }
  ],

  saying_no_agent_cant_do_anything: [
   {
      type: "customer-message",
      messages: [
        "But I have to be able to continue watching my series somehow... I'm meeting up with my friends next week and the series is the number one topic, so I want to know what it's about!"
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +5,
      expression: "angry",
      message: "It seems that the non-functioning connection is not the core of the problem. Mrs Capobiaco is actually only interested in watching her series..."
    },
    {
      type: "reference",
      nextNode: "Slide_22_options_for_agent" //reference
    } 
  ],

  Slide_22_options_for_agent: [
    {
      type: "system-options",
      options: [
        {
          label: "I'm sorry. But we can't restore the connection so quickly. The construction company is responsible for repairing the fault.",
          nextNode: "construction_company_is_responsible" //opt 1 worst response
        },
        {
          label: "As far as the Internet connection is concerned, there's nothing I can do right now. But do you already know our Sunrise TV app?",
          nextNode: "tell_about_TV_app" //opt 2 better response
        }
      ]
    }
  ],

  construction_company_is_responsible: [
    {
      type: "customer-message",
      messages: [
        "But that can't be right. I spend so much money every month on my internet, TV, tablet and mobile phone... and they want to tell me that nothing is possible?"
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "There's no point in getting loud here. If you want to complain, you're welcome to do so to the company responsible for the repair.",
          nextNode: "worst_response_to_situation" //opt 1 worst response
        },
        {
          label: "Oh, if you have a mobile phone or tablet, you can use the Sunrise TV app!",
          nextNode: "suggesting_better_option" //opt 2 better response
        }
      ]
    }
  ],

  worst_response_to_situation: [
    {
      type: "customer-message",
      messages: [
        "Yes, I will do that! And I will leave you a bad review. As an Internet provider, you have to be prepared for such cases!"
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +10,
      expression: "angry",
      message: "Oh dear, Mrs Capobianco is not happy at all. Even if we can't help the disruption, we take responsibility for our customers' satisfaction. The Sunrise TV app is a good stopgap here."
    },
    {
      type: "system-options",
      options: [
        {
          label: "That reminds me, do you already know our Sunrise TV app? You can easily continue watching your series there, albeit on a smaller screen.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Oh yes, I think my daughter set that up for me on her tablet once. You see, I knew there was some other solution..."
      ]
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_23" //reference
    }
  ],

  suggesting_better_option: [
    {
      type: "customer-message",
      messages: [
        "That works? I think my daughter set it up on my tablet once. But I've never used it."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "You can easily continue watching your series there, albeit on a smaller screen.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Oh ok. That's good. Then I can have my say next week when I meet up with my friends."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "You've thought this through! The Sunrise TV app is a good interim solution until the cable is replaced."
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_23" //reference
    }
  ],

  tell_about_TV_app: [
    {
      type: "customer-message",
      messages: [
        "Oh yes... I think my daughter set it up on my tablet once. But I've never used it."
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "You can simply continue watching your series there, albeit on a smaller screen.",
          nextNode: "" //stay empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "That's great! Then I can have my say next week."
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "You've thought this through! The Sunrise TV app is a good interim solution until the cable is replaced."
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_23" //reference
    }
  ],

  nextPage_Slide_23: [
    {
      type: "horizontal-bar"
    },
    {
      type: "system-note",
      message: "Great, you've now found a solution that the customer is happy with. Is there anything else you can do to compensate for the inconvenience?"
    },
    {
      type: "system-options",
      variant : "primary",
      options: [
        {
          label: "No, since the customer is satisfied, there is nothing more to do.",
          nextNode: "Slide_23_system_option_01"
        },
        {
          label: "I am offering material compensation.",
          nextNode: "Slide_23_system_option_02"
        },
        {
          label: "I apologise once again.",
          nextNode: "Slide_23_system_option_03"
        }
      ]
    }
  ],

  Slide_23_system_option_01: [
    {
      type: "horizontal-bar"
    },
    {
      type: "system-note",
      message: "Since the customer cannot fully utilise our services, material compensation would be appropriate here."
    },
    {
      type: "reference",
      nextNode: "relief_on_next_bill" //Slide 23 first common point
    }
  ],

  Slide_23_system_option_02: [
    {
      type: "horizontal-bar"
    },
    {
      type: "system-note",
      message: "Very well. As the customer is unable to make full use of our services, material compensation is appropriate."
    },
    {
      type: "reference",
      nextNode: "relief_on_next_bill" //Slide 23 first common point
    }
  ],

  Slide_23_system_option_03: [
    {
      type: "horizontal-bar"
    },
    {
      type: "system-note",
      message: "Non-material compensation is always appropriate, you're right. However, material compensation would also be appropriate here, as the customer is unable to make full use of our services."
    },
    {
      type: "reference",
      nextNode: "relief_on_next_bill" //Slide 23 first common point
    }
  ],

  relief_on_next_bill: [
    {
      type: "system-options",
      options: [
        {
          label: "I will waive the basic fee on your next bill for this inconvenience, Mrs Capobianco.",
          nextNode: "" //empty
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Oh, that's nice. Thank you!",
        "But how long will it take until the cable has been replaced and the Internet is working again?"
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Unfortunately, I don't know.",
          nextNode: "negative_response" 
        },
        {
          label: "I can't tell you exactly. But I can offer to notify you by text message when the time comes.",
          nextNode: "positive_response" 
        }
      ]
    },
  ],

  negative_response: [
    {
      type: "customer-message",
      messages: [
        "Great, do I have to try every day to see if it works?",
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +2,
      expression: "angry",
      message: "Oh, the customer probably feels a little left alone with the fault. Our notification option gives customers the feeling of being continuously supported."
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_24" //Slide 23 second common point
    }
  ],

  positive_response: [
    {
      type: "customer-message",
      messages: [
        "That would be great, thank you!",
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "Great, the customer is happy to be continuously supported by you."
    },
    {
      type: "reference",
      nextNode: "nextPage_Slide_24" //Slide 23 second common point
    }
  ],

  nextPage_Slide_24: [
   {
      type: "system-options",
      options: [
        {
          label: "Is that all, Mrs Capobianco?",
          nextNode: "cold_ending" 
        },
        {
          label: "Is there anything else I can do for you, Mrs Capobianco?",
          nextNode: "warm_ending" 
        }
      ]
    } 
  ],

  cold_ending: [
    {
      type: "customer-message",
      messages: [
        "Yes, that was all. Now you have peace from me.",
      ]
    },
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: +2,
      expression: "angry",
      message: "Oh, you must have made the customer feel annoyed. Make sure you use low-conflict language and end the conversation on a positive note."
    },
    {
      type: "reference",
      nextNode: "last_agent_response" //last message from agent
    }
  ],

  warm_ending: [
    {
      type: "customer-message",
      messages: [
        "No, that was all. I just hope the cable is repaired quickly...",
      ]
    },
    {
      type: "system-options",
      options: [
        {
          label: "Yes, and now you can still watch your series.",
          nextNode: "customer_is_relaxed" 
        },
        {
          label: "Yes, I hope so too!",
          nextNode: "customer_can_enjoy_show" 
        }
      ]
    } 
  ],

  customer_is_relaxed: [
    {
      type: "customer-message",
      messages: [
        "Yes, that's right. That's a good interim solution.",
      ]
    },
    {
      type: "reference",
      nextNode: "last_barometer" //last barometer
    }
  ],

  customer_can_enjoy_show: [
    {
      type: "customer-message",
      messages: [
        "At least I can continue watching my series on the tablet now. That was a good idea.",
      ]
    },
    {
      type: "reference",
      nextNode: "last_barometer" //last barometer
    }
  ],

  last_barometer: [
    {
      type: "horizontal-bar"
    },
    {
      type: "barometer",
      points: -2,
      expression: "happy",
      message: "Great, you're making the conversation a success with low-conflict language."
    },
    {
      type: "reference",
      nextNode: "last_agent_response" //last message from agent
    }
  ],

  last_agent_response: [
    {
      type: "system-options",
      options: [
        {
          label: "If that's all, I hope you have a great day and enjoy watching the series.",
          nextNode: ""
        }
      ]
    },
    {
      type: "customer-message",
      messages: [
        "Yes, thank you. Have a good day too."
      ],
      last: true
    }
  ]

};



Object.keys(blocksRaw).forEach((key) => {
  blocksRaw[key] = blocksRaw[key].map((block, index) => {
    return {
      ...block,
      id: `${key}-${index}`,
    };
  });
});

export const blocks = blocksRaw;