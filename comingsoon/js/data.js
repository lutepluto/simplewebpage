function getIndex(score){
        var index;  
        switch(score){
          case 300 :
          case 275 :
            index = 0;
            break;
          case 250 : 
          case 225 :
            index = 1;
            break;
          case 200 :
          case 175 :
            index = 2;
            break;
          case 150 :
          case 125 :
            index = 3;
            break;
          case 100 :
          case 75 :
            index = 4;
            break;
          case 50 :
          case 25 :
            index = 5;
            break;
          case 0 :
            index = 6;
            break;
          case -25 :
          case -50 :
            index = 7;
            break;
          case -75 :
          case -100 :
            index = 8;
            break;
          case -125 :
          case -150 :
            index = 9;
            break;
          case -175 :
            index = 10;
            break;
          case -200 :
            index = 11;
            break;
          case -225 :
            index = 12;
            break;
          case -250 :
            index = 13;
            break;
          case -275 :
            index = 14;
            break;
          case -300 :
            index = 15;
        }
        return index;
      }

function showQuestions(pos){

        //show back button or not
        if(pos == 0){
          $(".backbtn").addClass("disappear");
        }else{
          $(".backbtn").removeClass("disappear");
        }

        if(pos == 6){
          $(".question-content").addClass("question7-content");
          $(".question-image").removeClass("disappear");
        }else{
          $(".question-content").removeClass("question7-content");
          $(".question-image").addClass("disappear");
        }

        //show question title
        $(".question-title").text("问题" + (pos + 1) + "（共8题）");

        //show question content
        $(".question-content").text(questions[pos].question);

        //show choices
        $(".choice > .ans").each(function(index){
          var txt = $(this).text().substring(0, 2);
          $(this).text(txt + questions[pos].options[index].content);
        });

      }


      function showScores(total){
        $(".questions-show").addClass("disappear");
        $(".result-show").removeClass("disappear");
        $(".backbtn").addClass("disappear");

        //show result image

        var index = getIndex(total);
        //console.log("the index of result is " + index);
        $(".result-image img").attr("src", assessment[index].imageUrl);
        $(".result-content-score").text(total);
        $(".result-content-words").text("专家意见：" + assessment[index].words);

        //$(".sina-share").css("border", "5px solid blue");
        $(".sina-share").attr("pic", "http://www.lutepluto.com/jiecao/image/caoQtest.gif");
        $(".sina-share").attr("title", "hahahahahhha");
      }

var questions = [
	  {
	    "question": "如果你上厕所大号一半的时候发现没带纸，你会怎么办？",
	    "options": [
	      { "content": "打电话给朋友、快递或外卖", "score": -25 },
	      { "content": "用内裤或袜子擦擦丢掉", "score": 25 },
	      { "content": "在纸篓里捡张干净点的擦", "score": -50 },
	      { "content": "等风干后淡定离开", "score": 0 }
	    ]
	  },

	  {
	    "question": "以下哪句话刻在ipad后面，显得逼格最高？",
	    "options": [
	      { "content": "第十八次全国人民代表大会会议留念", "score": 25 },
	      { "content": "友谊地久天长------近平 赠", "score": -25 },
	      { "content": "拍错了，请帮我换成白色", "score": 0 },
	      { "content": "飞行模式已打开", "score": -50 }
	    ]
	  },

	  {
	    "question": "如果你想给自己起一个高端大气上档次的外国名字，你会考虑叫做？",
	    "options": [
	      { "content": "冈坂日川", "score": 0 },
	      { "content": "高丸多三郎", "score": -25 },
	      { "content": "沃考.尼玛德", "score": 25 },
	      { "content": "史东.冉居", "score": 50 }
	    ]
	  },

	  {
	    "question": "小明说：“我女朋友飞了。”这说明小明……",
	    "options": [
	      { "content": "是只蚊子", "score": 25 },
	      { "content": "是名矮穷挫", "score": 50 },
	      { "content": "是名标枪选手", "score": 0 },
	      { "content": "给女朋友充了氢气", "score": -25 }
	    ]
	  },

	  {
	    "question": "\"仰天大笑出门去，~~~~~~~~~\"请选出最合适的后半句",
	    "options": [
	      { "content": "惨遭一血小分队", "score": 0 },
	      { "content": "我一定会回来哒", "score": 50 },
	      { "content": "结果被人抬回来", "score": 25 },
	      { "content": "现已被警方控制", "score": -25 }
	    ]
	  },

	  {
	    "question": "如果你可以学会一门武功，你希望是",
	    "options": [
	      { "content": "还我漂漂拳", "score": 0 },
	      { "content": "菊花点穴手", "score": -50 },
	      { "content": "无影咸猪手", "score": -25 },
	      { "content": "军体拳", "score": 25 }
	    ]
	  },

	  {
	    "question": "图片题：根据图中女性的穿着特点，判断她的职业",
	    "options": [
	      { "content": "日本爱情动作片影后", "score": -25 },
	      { "content": "这是我班班主任。。", "score": -50 },
	      { "content": "节操电台女主播", "score": 25 },
	      { "content": "异装癖爱好者", "score": 0 }
	    ]
	  },

	  {
	    "question": "\"Just do it！\"最恰当的翻译是？",
	    "options": [
	      { "content": "就是从事IT行业！", "score": 25 },
	      { "content": "只管去做！", "score": 50 },
	      { "content": "贾斯特！干它！", "score": -25 },
	      { "content": "炸死他都依特！", "score": 0 }
	    ]
	  }
	];

var assessment = [
	{
		"words": "艾玛！你的操Q太高了，你是贿赂了测试员了吧！你是这世界上最稀少的物种，你不去取经真的白瞎你的人才了，有人吃你一块肉能长生不老有木有！！！",
		"imageUrl": "../image/01.gif"
	},
	{
		"words": "你的操Q非常高，国家应该派4个贴身保镖保护你这么稀少的存在！万一哪天你碎了，联合国会为你降半旗致哀。。。",
		"imageUrl": "../image/01.gif"
	},
	{
		"words": "开玩笑吧！你的操Q比大多数人都高！遇到你这么有节操的青年我感动得有点想哭，难道你上小学四年级时就每天坚持阅读参考消息吗？",
		"imageUrl": "../image/02.gif"
	},
	{
		"words": "很好很好，你的节操很高，如果节操按斤卖，那你挣的钱够做四五次大保健了吧。。。",
		"imageUrl": "../image/02.gif"
	},
	{
		"words": "你的操Q就算勉强及格吧，如果有节操是一种犯罪，你也就够拘留十五天的吧，不过至少不是负分，买两串毛蛋庆祝下吧",
		"imageUrl": "../image/03.gif"
	},
	{
		"words": "你仅有的一点节操勉强能让你不成为失足青年，请珍惜你自己这点节操吧",
		"imageUrl": "../image/03.gif"
	},
	{
		"words": "你的操Q是0，你果然是个奇葩的存在，当你谈论节操时，你在谈论什么？",
		"imageUrl": "../image/04.gif"
	},
	{
		"words": "在通往无节操的路上，你从未迷失过方向，节操这个词，也许只有第二个字跟你有点关系",
		"imageUrl": "../image/05.gif"
	},
	{
		"words": "知道人类为什么发明了负数吗？其实最主要就是为了形容你的节操。",
		"imageUrl": "../image/05.gif"
	},
	{
		"words": "我已经不想跟你说节操这个词了，我想直接跟你说这个词的第二个字，滚粗！",
		"imageUrl": "../image/06.gif"
	},
	{
		"words": "在谈论你的节操之前，请允许我先为你的小学思想品德课老师默哀三分钟",
		"imageUrl": "../image/06.gif"
	},
	{
		"words": "你的节操很高，非常高，大概20层楼那么高，然后又从那么高的地方掉下来了。。。",
		"imageUrl": "../image/06.gif"
	},
	{
		"words": "你上辈子一定是折翼的天使，从天而降，节操先着的地。。。",
		"imageUrl": "../image/07.gif"
	},
	{
		"words": "也许二百年后的科学家，只剩下两件事要考虑——1，怎么制造时间机器；2，你的节操在哪。",
		"imageUrl": "../image/07.gif"
	},
	{
		"words": "你的节操彻底碎了，把这些碎片连起来，能绕地球十二圈",
		"imageUrl": "../image/07.gif"
	},
	{
		"words": "不用再侥幸有人比你再没节操了，恭喜你被评为世界上最没节操的物种，纯情妹子看你一眼都能怀孕的那种，祝你幸福！",
		"imageUrl": "../image/07.gif"
	},
];