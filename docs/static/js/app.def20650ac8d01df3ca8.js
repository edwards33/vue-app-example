webpackJsonp([1],{"6iZy":function(t,e){},BOvR:function(t,e){},N7BP:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui centered card"},[i("div",{staticClass:"content",on:{click:function(e){t.viewQuiz(t.quiz)}}},[i("div",{staticClass:"header"},[t._v("\n      "+t._s(t.quiz.title)+"\n    ")]),t._v(" "),i("div",{staticClass:"meta"},[t._v("\n      "+t._s(t.quiz.description)+"\n    ")])]),t._v(" "),i("div",{staticClass:"extra content"},[i("span",{staticClass:"left floated"},[i("i",{staticClass:"sticky note icon"}),t._v("\n      "+t._s(t.quiz.cards.length)+"\n    ")]),t._v(" "),i("span",{staticClass:"right floated",on:{click:function(e){t.deleteQuiz(t.quiz)}}},[i("i",{staticClass:"trash icon"})])])])},staticRenderFns:[]};var a=i("VU/8")({props:["quiz"],methods:{viewQuiz:function(t){this.$emit("view-quiz",t)},deleteQuiz:function(t){this.$emit("delete-quiz",t)}}},n,!1,function(t){i("6iZy")},null,null).exports,r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui centered card"},[i("a",{staticClass:"ui red right corner label",on:{click:function(e){t.deleteCard(t.card)}}},[i("i",{staticClass:"trash icon"})]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[t._v("\n      "+t._s(t.card.term)+"\n    ")]),t._v(" "),i("div",{staticClass:"description"},[t._v("\n      "+t._s(t.card.definition)+"\n    ")])])])},staticRenderFns:[]};var o=i("VU/8")({props:["card"],methods:{deleteCard:function(t){this.$emit("delete-card",t)}}},r,!1,function(t){i("vR3x")},null,null).exports,c=i("M4fF"),u={props:["quizzes"],components:{Quiz:a,FlashCard:o},data:function(){return{selectedQuiz:{cards:[]},viewState:"quizzes"}},methods:{viewQuiz:function(t){this.selectedQuiz=t,this.viewState="cards",this.$emit("change-state",{viewState:"cards",activeQuiz:t.id})},viewQuizzes:function(){this.viewState="quizzes",this.$emit("change-state",{viewState:"quizzes",activeQuiz:0})},deleteQuiz:function(t){var e=t.id,i=this;$("#quiz_"+e).fadeOut("slow",function(){var e=i.quizzes.indexOf(t);i.quizzes.splice(e,1)}),this.deleteQuizAndCardsFromStore(e)},deleteCard:function(t){var e=t.id,i=this;$("#card_"+e).fadeOut("slow",function(){var e=i.selectedQuiz.cards.indexOf(t);i.selectedQuiz.cards.splice(e,1)}),this.deleteCardsFromStore(this.selectedQuiz.id,e)},deleteQuizAndCardsFromStore:function(t){var e=this.$store.getters.quizzes,i=this.$store.getters.cards.filter(function(e){return e.quizId!==t}),s=e.filter(function(e){return e.id!==t});this.$store.dispatch("setQuizzes",s.slice()),this.$store.dispatch("setCards",i.slice())},deleteCardsFromStore:function(t,e){var i=this.$store.getters.cards,s=c.filter(i,{id:e,quizId:t});c.pull(i,s[0]),this.$store.dispatch("setCards",i.slice())}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"fade",mode:"out-in"}},["quizzes"===t.viewState?i("div",{key:"quizzes"},[i("div",{staticClass:"ui hidden divider"}),t._v(" "),t._l(t.quizzes,function(e){return i("quiz",{key:e.id,attrs:{id:"quiz_"+e.id,quiz:e},on:{"view-quiz":t.viewQuiz,"delete-quiz":t.deleteQuiz}})})],2):t._e(),t._v(" "),"cards"===t.viewState?i("div",{key:"cards"},[i("button",{staticClass:"ui labeled icon button back",on:{click:t.viewQuizzes}},[i("i",{staticClass:"arrow circle left icon"}),t._v("\n        Back\n      ")]),t._v(" "),i("div",{staticClass:"ui cards",attrs:{id:"card_view"}},t._l(this.selectedQuiz.cards,function(e){return i("flash-card",{key:e.id,attrs:{id:"card_"+e.id,card:e},on:{"delete-card":t.deleteCard}})}))]):t._e()])],1)},staticRenderFns:[]};var l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui basic content center aligned segment"},[i("button",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],staticClass:"ui basic button icon",on:{click:t.openForm}},[i("i",{staticClass:"plus icon"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCreating,expression:"isCreating"}],staticClass:"ui centered card"},[i("div",{staticClass:"content"},[i("div",{staticClass:"ui form"},[i("div",{staticClass:"field"},[i("label",[t._v("Title")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],attrs:{type:"text"},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"field"},[i("label",[t._v("Description")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.descriptionText,expression:"descriptionText"}],attrs:{type:"text"},domProps:{value:t.descriptionText},on:{input:function(e){e.target.composing||(t.descriptionText=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"ui buttons"},[i("button",{staticClass:"ui green button",on:{click:t.saveQuiz}},[t._v("Save")]),t._v(" "),i("div",{staticClass:"or"}),t._v(" "),i("button",{staticClass:"ui red button",on:{click:t.closeForm}},[t._v("Cancel")])])])])])])},staticRenderFns:[]};var v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui basic content center aligned segment"},[i("button",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],staticClass:"ui basic button icon",on:{click:t.openForm}},[i("i",{staticClass:"plus icon"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCreating,expression:"isCreating"}],staticClass:"ui centered card"},[i("div",{staticClass:"content"},[i("div",{staticClass:"ui form"},[i("div",{staticClass:"field"},[i("label",[t._v("Term")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.termText,expression:"termText"}],attrs:{type:"text"},domProps:{value:t.termText},on:{input:function(e){e.target.composing||(t.termText=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"field"},[i("label",[t._v("Definition")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.definitionText,expression:"definitionText"}],attrs:{type:"text"},domProps:{value:t.definitionText},on:{input:function(e){e.target.composing||(t.definitionText=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"ui buttons"},[i("button",{staticClass:"ui green button",on:{click:t.saveFlashCard}},[t._v("Save")]),t._v(" "),i("div",{staticClass:"or"}),t._v(" "),i("button",{staticClass:"ui red button",on:{click:t.closeForm}},[t._v("Cancel")])])])])])])},staticRenderFns:[]};var f=[{id:1,title:"Chapter 1",description:"This is a sample description.",cards:[{id:1,term:"Some Word",definition:"Some Definition"},{id:2,term:"Another Word",definition:"The definition of another word"}]},{id:2,title:"Chapter 2",description:"This is a another sample description.",cards:[]}],h={name:"app",components:{QuizList:i("VU/8")(u,d,!1,function(t){i("Nao4")},null,null).exports,CreateQuiz:i("VU/8")({data:function(){return{isCreating:!1,titleText:"",descriptionText:""}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},saveQuiz:function(){this.$emit("create-quiz",{title:this.titleText,description:this.descriptionText}),this.titleText="",this.descriptionText="",this.isCreating=!1}}},l,!1,function(t){i("BOvR")},null,null).exports,CreateFlashCard:i("VU/8")({data:function(){return{isCreating:!1,termText:"",definitionText:""}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},saveFlashCard:function(){this.$emit("create-flash-card",{term:this.termText,definition:this.definitionText}),this.termText="",this.definitionText="",this.isCreating=!1}}},v,!1,function(t){i("N7BP")},null,null).exports},mounted:function(){var t=this,e=this.$store.getters.quizzes,i=this.$store.getters.cards;0===e.length&&(this.saveDefaultQuizzesToStore(),e=this.$store.getters.quizzes),e.forEach(function(e){e.cards=i.filter(function(t){return t.quizId===e.id}),t.quizzes.push(e)})},computed:{quizzesStored:function(){return this.$store.getters.quizzes}},methods:{createQuiz:function(t){var e=Math.max.apply(Math,this.quizzes.map(function(t){return t.id}))+1;this.quizzes.push({id:e,title:t.title,description:t.description,cards:[]}),this.saveQuizToStore(e,t.title,t.description)},changeState:function(t){this.viewState=t.viewState,this.activeQuiz=t.activeQuiz},createFlashCard:function(t){var e=this.activeQuiz,i=$.grep(this.quizzes,function(t){return t.id==e});if(0!=i.length){var s=i[0],n=0;s.cards&&s.cards.length>0&&(n=Math.max.apply(Math,s.cards.map(function(t){return t.id})));var a=n+1;s.cards.push({id:a,term:t.term,definition:t.definition}),this.saveCardToStore(a,e,t.term,t.definition)}},saveQuizToStore:function(t,e,i){var s=this.$store.getters.quizzes;s.push({id:t,title:e,description:i}),this.$store.dispatch("setQuizzes",s)},saveCardToStore:function(t,e,i,s){var n=this.$store.getters.cards;n.push({id:t,quizId:e,term:i,definition:s}),this.$store.dispatch("setCards",n)},saveDefaultQuizzesToStore:function(){var t=this;c.forEach(f,function(e){t.saveQuizToStore(e.id,e.title,e.description),c.forEach(e.cards,function(i){t.saveCardToStore(i.id,e.id,i.term,i.definition)})})}},data:function(){return{quizzes:[],viewState:"quizzes",activeQuiz:0}}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("quiz-list",{attrs:{quizzes:t.quizzes},on:{"change-state":t.changeState}}),t._v(" "),i("create-quiz",{directives:[{name:"show",rawName:"v-show",value:"quizzes"===t.viewState,expression:"viewState === 'quizzes'"}],on:{"create-quiz":t.createQuiz}}),t._v(" "),i("create-flash-card",{directives:[{name:"show",rawName:"v-show",value:"cards"===t.viewState,expression:"viewState === 'cards'"}],on:{"create-flash-card":t.createFlashCard}})],1)},staticRenderFns:[]};var p=i("VU/8")(h,z,!1,function(t){i("sutL")},null,null).exports,m=i("NYxO"),C=i("bOdI"),_=i.n(C),g={cards:new Array},w={setCards:function(t,e){(0,t.commit)("SET_CARDS",e)}},x=_()({},"SET_CARDS",function(t,e){t.cards=e}),q={state:g,getters:{cards:function(t){return t.cards}},actions:w,mutations:x},T={state:{quizzes:new Array},getters:{quizzes:function(t){return t.quizzes}},actions:{setQuizzes:function(t,e){(0,t.commit)("SET_QUIZZES",e)}},mutations:_()({},"SET_QUIZZES",function(t,e){t.quizzes=e})},S=i("v/L+"),Q=i.n(S);s.a.use(m.a);var b=new Q.a({key:"vuex",storage:window.localStorage}),F=new m.a.Store({modules:{Cards:q,Quizzes:T},plugins:[b.plugin]});s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:p},template:"<App/>",store:F})},Nao4:function(t,e){},sutL:function(t,e){},vR3x:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.def20650ac8d01df3ca8.js.map