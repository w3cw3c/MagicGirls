/*---------------------------------------------------------------------------*
 * 2020/01/7 shimo8
 *---------------------------------------------------------------------------*/

/*:
 * @plugindesc カットイン表示プラグイン
 * @author しもや
 * @help
 * ・プラグインコマンド
 *   callcutin ID アニメX アニメY SE(1以上でオン) BGS(1以上でオン)
 */


(function(){
  const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'CallCutin') {
    //プラグインコマンド


    if (args[0].match(/\\v/)) {//変数を含む場合の処理
      array = args[0].match(/[0-9]+\.?[0-9]*/g);
      for(var i = 0; i < array.length; i++) {//戦闘の場合自動加算したい？
          args[0] = array;
          var EroCutinAddID = $gameVariables.value(args[0]);//カットイン名
      }
    }else{
      var EroCutinAddID = args[0]//カットイン名
    }

if(args[1] != null){var AnimeX = Number(args[1])}else{var AnimeX = 0};//アニメーション座標X
if(args[2] != null){var AnimeY = Number(args[2])}else{var AnimeY = 0};//アニメーション座標Y
if(args[3] != null){var CutinSE = args[3]}else{var CutinSE = 0};//SEフラグ
if(args[4] != null){var CutinBGS = args[4]}else{var CutinBGS = 0};//BGSフラグ

//ゲーム中の装備番号
var EqCloth = 1
var EqLeg =7


//表示中
$gameSwitches.setValue(155,true)

//呼び出しファイル名入力用
var Dif2ID = "なし"
var DifID = "なし"
var DifSE = "なし"
var DifSemen = "なし"
var DifBGS = "なし"//未使用

//座標
var Cutin1X = 248
var Cutin1Y = 256
var Cutin2X = 412
var Cutin2Y = 464

//着用中衣装パラメータ
if($gameActors._data[1]._equips[EqCloth]._itemId >= 5){
var EqNum = $gameActors._data[1]._equips[EqCloth]._itemId
var CLOTHTAG = $dataArmors[EqNum].meta.ClothName
var CLOTHID = Number($dataArmors[EqNum].meta.ClothPicNum); //衣装ピクチャ番号
var UNDERFLAG = Number($dataArmors[EqNum].meta.ClothUnderFlag); //下着
}else{
var CLOTHTAG = 'Naked'//全裸の場合
var CLOTHID = 0; //衣装ピクチャ番号
var UNDERFLAG = 1; //下着
}

//変身中か否か
if($gameSwitches.value(131)){
  var ChangeFlag = true
}else{
  var ChangeFlag = false
}

//下着つけていない、かつ下着フラグオンの時
if($gameVariables.value(756) == 0 && UNDERFLAG >= 1){
    UNDERFLAG = 0; //下着
    }
    
    //定義
    var CUTINBASENUM = 0//部位ベース名
    var CUTINFILENUM = 0//ファイル名末尾の番号
    var CUTINCLOTHFLAG = 0//衣装反映の有無
    var CUTINTITESFLAG = 0//タイツ反映
    var CUTINOPTIONFLAG = 0//下着反映(タイツが優先)
    var CUTINALTFLAG = 0//変身差分(ベース番号に加算)




//相手タイプ
//胸
if(EroCutinAddID == "乳首弄り"){
  var Dif2ID = "なし"
  var DifID = "finger_0001"
  var DifSE = "Knead01"//SE
  CUTINBASENUM = "breast"
  CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "胸揉み前"){
    var Dif2ID = "なし"
    var DifID = "knead_0001"
    var DifSE = "Knead01"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "胸揉み後ろ"){
    var Dif2ID = "なし"
    var DifID = "knead_0002"
    var DifSE = "Knead01"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "花弁触手_胸"){
    var Dif2ID = "なし"
    var DifID = "tentacle_0001"
    var DifSE = "Tentacle01"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "繊毛触手_胸"){
    var Dif2ID = "なし"
    var DifID = "tentacle_0002"
    var DifSE = "Tentacle01"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "怪魔舌_胸"){
    var Dif2ID = "なし"
    var DifID = "tongue_0001"
    var DifSE = "Tentacle01"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "スライム_胸"){
    var Dif2ID = "なし"
    var DifID = "slime_0001"
    var DifSE = "Slime01"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "噴乳"){
    var Dif2ID = "なし"
    var DifID = "milk"
    var DifSE = "Splash01"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "胸撮影"){
    var Dif2ID = "なし"
    var DifID = "なし"
    var DifSE = "なし"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "胸注射"){
    var Dif2ID = "なし"
    var DifID = "なし"
    var DifSE = "なし"//SE
    CUTINBASENUM = "breast"
    CUTINFILENUM = 1//ベースファイル開始番号
  }

//あそこ
  else if(EroCutinAddID == "膣触り"){
    var Dif2ID = "なし"
    var DifID = "0001"
    var DifSE = "TouchWet01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "手マン"){
    var Dif2ID = "なし"
    var DifID = "0002"
    var DifSE = "TouchWet01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "手マン潮吹き"){
    var Dif2ID = "なし"
    var DifID = "0003"
    var DifSE = "Spouts01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "繊毛触手_膣"){
    var Dif2ID = "なし"
    var DifID = "0011"
    var DifSE = "Tentacle01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "イソギンチャク触手_膣"){
    var Dif2ID = "なし"
    var DifID = "0012"
    var DifSE = "Tentacle01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "イソギンチャク触手_膣内"){
    var Dif2ID = "なし"
    var DifID = "0013"
    var DifSE = "Tentacle01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "デモンハンド膣"){
    var Dif2ID = "なし"
    var DifID = "0016"
    var DifSE = "TouchWet01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "綱渡り"){
    var Dif2ID = "なし"
    var DifID = "0005"
    var DifSE = "TouchWet01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }
  else if(EroCutinAddID == "電マ"){
    var Dif2ID = "なし"
    var DifID = "0004"
    var DifSE = "Vibe01"//SE
    CUTINBASENUM = "vagina"
    CUTINFILENUM = 1//ベースファイル開始番号
  }

  else if(EroCutinAddID == "タイツ"){
    var Dif2ID = "なし"
    var DifID = "なし"
    var DifSE = "Rustle01"//SE
    CUTINBASENUM = "tites"
    CUTINFILENUM = 1//ベースファイル開始番号
  }

//尻
else if(EroCutinAddID == "尻覗かれ"){
  var Dif2ID = "なし"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "hip"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "尻触り"){
  var Dif2ID = "なし"
  var DifID = "handL"
  var DifSE = "HardTouch01"//SE
  CUTINBASENUM = "hip"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "尻触りダブル"){
  var Dif2ID = "なし"
  var DifID = "handLR"
  var DifSE = "HardTouch01"//SE
  CUTINBASENUM = "hip"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "尻穴責め"){
  var Dif2ID = "なし"
  var DifID = "handanus"
  var DifSE = "TouchAnus01"//SE
  CUTINBASENUM = "hip"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "イボ触手_尻"){
  var Dif2ID = "なし"
  var DifID = "tentacle_0001"
  var DifSE = "Tentacle01"//SE
  CUTINBASENUM = "hip"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "素股"){
  var Dif2ID = "なし"
  var DifID = "penis_0001"
  var DifSE = "Knead01"//SE
  CUTINBASENUM = "hip"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "ローター"){
  var Dif2ID = "なし"
  var DifID = "rotor_0001"
  var DifSE = "なし"//SE
  CUTINBASENUM = "hip"
  CUTINFILENUM = 1//ベースファイル開始番号
}

//キス
else if(EroCutinAddID == "キス_人間" || EroCutinAddID == "キス"){
  var Dif2ID = "なし" 
  var DifID = "0001"
  var DifSE = "Kiss01"//SE
  CUTINBASENUM = "kiss"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "ベロチュー_人間" || EroCutinAddID == "キス"){
  var Dif2ID = "なし" 
  var DifID = "0003"
  var DifSE = "Kiss01"//SE
  CUTINBASENUM = "kiss"
  CUTINFILENUM = 4//ベースファイル開始番号
}
else if(EroCutinAddID == "キス_人間_事後" || EroCutinAddID == "キス_事後"){
  var Dif2ID = "なし"
  var DifID = "0002"
  var DifSE = "なし"//SE
  CUTINBASENUM = "kiss"
  CUTINFILENUM = 4//ベースファイル開始番号
}
else if(EroCutinAddID == "トマト"){
  var Dif2ID = "なし"
  var DifID = "0004"
  var DifSE = "なし"//SE
  CUTINBASENUM = "kiss"
  CUTINFILENUM = 4//ベースファイル開始番号
}

//手奉仕
else if(EroCutinAddID == "手奉仕_ペニスのみ"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 91//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_人間_浅"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_人間_中"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 4//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_人間_深"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_人間_射精"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  var DifSemen = "Semen_0001"//汁
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_怪魔_浅"){
  var Dif2ID = "demonpenis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_怪魔_中"){
  var Dif2ID = "demonpenis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 4//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_怪魔_深"){
  var Dif2ID = "demonpenis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_怪魔_射精"){
  var Dif2ID = "demonpenis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  var DifSemen = "Semen_0001"//汁
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}

else if(EroCutinAddID == "手奉仕_触手_浅"){
  var Dif2ID = "tentacle_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_触手_中"){
  var Dif2ID = "tentacle_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 4//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_触手_深"){
  var Dif2ID = "tentacle_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}
else if(EroCutinAddID == "手奉仕_触手_射精"){
  var Dif2ID = "tentacle_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  var DifSemen = "Semen_0001"//汁
  CUTINBASENUM = "handjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}

//口奉仕

else if(EroCutinAddID == "口奉仕_人間_浅"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_人間_中"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 4//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_人間_深"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_人間_射精"){
  var Dif2ID = "penis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  var DifSemen = "Semen_0001"//汁
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_怪魔_浅"){
  var Dif2ID = "demonpenis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_怪魔_中"){
  var Dif2ID = "demonpenis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 4//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_怪魔_深"){
  var Dif2ID = "demonpenis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_怪魔_射精"){
  var Dif2ID = "demonpenis_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  var DifSemen = "Semen_0001"//汁
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_触手_浅"){
  var Dif2ID = "tentacle_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_触手_中"){
  var Dif2ID = "tentacle_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 4//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_触手_深"){
  var Dif2ID = "tentacle_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 7//ベースファイル開始番号
}
else if(EroCutinAddID == "口奉仕_触手_射精"){
  var Dif2ID = "tentacle_0001"
  var DifID = "なし"
  var DifSE = "なし"//SE
  var DifSemen = "Semen_0001"//汁
  CUTINBASENUM = "blowjob"
  CUTINFILENUM = 1//ベースファイル開始番号
}

//アクメ
else if(EroCutinAddID == "絶頂"){
  var Dif2ID = "なし"
  var DifID = "なし"
  var DifSE = "なし"//SE
  CUTINBASENUM = "acme"
  CUTINFILENUM = 1//ベースファイル開始番号
}

//なしの場合
  else if(EroCutinAddID == "なし"){
    var Dif2ID = "なし"
    var DifID = "なし"
  }
  else{
    var DifID = "なし"
  }









//ベースファイル指定
if(CUTINBASENUM == "kiss"){
  CUTINCLOTHFLAG = 0//衣装差分の有無
  CUTINTITESFLAG = 0//タイツ差分の有無
  CUTINOPTIONFLAG = 0//オプション差分の有無
  CUTINALTFLAG = 1//変身差分の有無
  }
  else if(CUTINBASENUM == "breast")
  {
  CUTINCLOTHFLAG = 1
  CUTINTITESFLAG = 0
  CUTINOPTIONFLAG = 1
  }
  else if(CUTINBASENUM == "vagina")
  {
  CUTINCLOTHFLAG = 1
  CUTINTITESFLAG = 1
  CUTINOPTIONFLAG = 1
  }
  else if(CUTINBASENUM ==  "hip")
  {
  CUTINCLOTHFLAG = 1
  CUTINTITESFLAG = 1
  CUTINOPTIONFLAG = 1
  }
  else if(CUTINBASENUM == "handjob")
  {
  CUTINCLOTHFLAG = 0
  CUTINTITESFLAG = 0
  CUTINOPTIONFLAG = 0
  CUTINALTFLAG = 1
  }
  else if(CUTINBASENUM == "tites")
  {
  CUTINCLOTHFLAG = 0
  CUTINTITESFLAG = 0
  CUTINOPTIONFLAG = 0
  CUTINALTFLAG = 0
  }
  else if(CUTINBASENUM == "blowjob")
  {
  CUTINCLOTHFLAG = 0
  CUTINTITESFLAG = 0
  CUTINOPTIONFLAG = 0
  CUTINALTFLAG = 1
  }
  else if(CUTINBASENUM == "acme")
  {
  CUTINCLOTHFLAG = 0
  CUTINTITESFLAG = 0
  CUTINOPTIONFLAG = 0
  CUTINALTFLAG = 1
  }else{{console.error(CUTINBASENUM + 'ベースファイル名未指定');}};
  







//SE演奏
  if (CutinSE == 1 && DifSE != "なし"){
    var seindex = $se_list.seID.indexOf(DifSE);
    if(seindex != -1){
      var file =  $se_list.File[seindex];
      AudioManager.playSe({name: file,volume: 90, pitch: 100, pan: 0})
      }else{}
    }



//スプライト表示

//表示番号判定　アニメーションの兼ね合いもあるため今のところ1固定
var CutinLine = 1
//  if(SceneManager._scene.Cutin1Base && SceneManager._scene.Cutin2Base){
//    if($gameVariables.value(980) == 0){var CutinLine = 1}
//    else if($gameVariables.value(980) == 1){var CutinLine = 2}
//    else{CutinLine = 1}
//  }else if(SceneManager._scene.Cutin1Base){
//    var CutinLine = 2
// }else{
//    var CutinLine = 1
//  }
//$gameVariables._data[980] = CutinLine//今回表示した番号


//後ろ(Dif2)
if(CutinLine == 1){EraceCutin1Dif2()}else if(CutinLine == 2){EraceCutin2Dif2()} 
if(Dif2ID != "なし"){
  DIF2FILENAME = "actor01_cutin_" + CUTINBASENUM + "_h_" + Dif2ID//ファイル名
  var bitmap = ImageManager.loadPicture(DIF2FILENAME);//ファイル名
  var spriteDif2 = new Sprite(bitmap);//スプライト名
  if(CutinLine == 1){
  SceneManager._scene._spriteset.addChild(spriteDif2); spriteDif2.x = Cutin1X; spriteDif2.y = Cutin1Y;//スプライト名
  SceneManager._scene.Cutin1Dif2 = spriteDif2;//シーン名、スプライト名
  }else if(CutinLine == 2){
    SceneManager._scene._spriteset.addChild(spriteDif2); spriteDif2.x = Cutin2X; spriteDif2.y = Cutin2Y;//スプライト名
    SceneManager._scene.Cutin2Dif2 = spriteDif2;//シーン名、スプライト名
  }else{{console.error('ラインのエラー')}}
}


//素体表示(base、全裸の場合消去
if(CutinLine == 1){EraceCutin1Base()}else if(CutinLine == 2){EraceCutin2Base()} 
if(CLOTHTAG == "Change" && CUTINALTFLAG >= 1){//変身中は素体ナンバー+1
  CUTINFILENUM += 1
};
if(CUTINFILENUM >= 10){
  BASEFILENAME = "actor01_cutin_" + CUTINBASENUM + "_00" + CUTINFILENUM
}else{
  BASEFILENAME = "actor01_cutin_" + CUTINBASENUM + "_000" + CUTINFILENUM
}

var bitmap = ImageManager.loadPicture(BASEFILENAME);//ファイル名
var spriteBase = new Sprite(bitmap);//スプライト名
if(CutinLine == 1){
  SceneManager._scene._spriteset.addChild(spriteBase); spriteBase.x = Cutin1X; spriteBase.y = Cutin1Y;//スプライト名
  SceneManager._scene.Cutin1Base = spriteBase;//シーン名、スプライト名
}else if(CutinLine == 2){
  SceneManager._scene._spriteset.addChild(spriteBase); spriteBase.x = Cutin2X; spriteBase.y = Cutin2Y;//スプライト名
  SceneManager._scene.Cutin2Base = spriteBase;//シーン名、スプライト名
}else{{console.error('ラインのエラー')}};
    
  

  //オプション
  if(CutinLine == 1){EraceCutin1Option()}else if(CutinLine == 2){EraceCutin2Option()}
if(CUTINOPTIONFLAG >= 1 && UNDERFLAG >= 1 && ChangeFlag == false){//タイツオフ、下着オンかつ未返信
  //console.log(CUTINOPTIONFLAG, UNDERFLAG,ChangeFlag,"ぱんつのみ")
  var UNDERFILENAME = "actor01_cutin_" + CUTINBASENUM + "_option_" + "0001"
  var bitmap = ImageManager.loadPicture(UNDERFILENAME);//ファイル名
  var spriteOption = new Sprite(bitmap);//スプライト名
  if(CutinLine == 1){
  SceneManager._scene._spriteset.addChild(spriteOption); spriteOption.x = Cutin1X; spriteOption.y = Cutin1Y;//スプライト名
  SceneManager._scene.Cutin1Option = spriteOption;//シーン名、スプライト名
}else if(CutinLine == 2){
  SceneManager._scene._spriteset.addChild(spriteOption); spriteOption.x = Cutin2X; spriteOption.y = Cutin2Y;//スプライト名
  SceneManager._scene.Cutin2Option = spriteOption;//シーン名、スプライト名
}else{{console.error('ラインのエラー')}};
}
//console.log(CUTINOPTIONFLAG, UNDERFLAG,ChangeFlag,"ぱんつのみ")


//タイツ・足装備
if(CutinLine == 1){EraceCutin1Tites()}else if(CutinLine == 2){EraceCutin2Tites()} 
  if(CUTINTITESFLAG >= 1 && $gameActors._data[1]._equips[EqLeg]._itemId  == 300 && ChangeFlag == false){//タイツフラグonかつ足装備ID300かつ未変身
  var LEGEQNUM = $gameActors._data[1]._equips[EqLeg]._itemId//足装備番号代入//黒タイツ以外たぶん落ちるので暫定的に↑でID300の場合のみにした
  var FileNameLeg = $dataArmors[LEGEQNUM].meta.FileNumOption//足装備のタグからファイル番号読み込み
  if($gameVariables.value(756) >= 1 && FileNameLeg == "0011"){FileNameLeg = "0012"}//下着着用中の処理
  var LEGFILENAME = "actor01_cutin_" + CUTINBASENUM + "_option_" + FileNameLeg//ファイル名結合
  var bitmap = ImageManager.loadPicture(LEGFILENAME);//ファイル名
  var spriteTites = new Sprite(bitmap);//スプライト名
  if(CutinLine == 1){
  SceneManager._scene._spriteset.addChild(spriteTites); spriteTites.x = Cutin1X; spriteTites.y = Cutin1Y;//スプライト名
  SceneManager._scene.Cutin1Tites = spriteTites;//シーン名、スプライト名
}else if(CutinLine == 2){
  SceneManager._scene._spriteset.addChild(spriteTites); spriteTites.x = Cutin2X; spriteTites.y = Cutin2Y;//スプライト名
  SceneManager._scene.Cutin2Tites = spriteTites;//シーン名、スプライト名
}else{{console.error('ラインのエラー')}};
  }



  //衣装表示
  if(CutinLine == 1){EraceCutin1Cloth()}else if(CutinLine == 2){EraceCutin2Cloth()}
if(EqNum >= 5 && CUTINCLOTHFLAG >= 1){//衣装フラグオンかつ5以上
  if(EqNum == 71 && $gameActors.actor(1).isStateAffected(95)){//衣装全損
  var FileNameCloth = "0023"
  }
  else if(EqNum == 71 && $gameActors.actor(1).isStateAffected(94)){//衣装半壊
  var FileNameCloth = "0022"
  }else{
  var FileNameCloth = $dataArmors[EqNum].meta.FileNumCloth//衣装装備のタグからファイル番号読み込み
  }
  var CLOTHFILENAME = "actor01_cutin_" + CUTINBASENUM + "_cloth_" + FileNameCloth
  var bitmap = ImageManager.loadPicture(CLOTHFILENAME);//ファイル名
  var spriteCloth = new Sprite(bitmap);//スプライト名
  if(CutinLine == 1){
  SceneManager._scene._spriteset.addChild(spriteCloth); spriteCloth.x = Cutin1X; spriteCloth.y = Cutin1Y;//スプライト名
  SceneManager._scene.Cutin1Cloth = spriteCloth;//シーン名、スプライト名
}else if(CutinLine == 2){
  SceneManager._scene._spriteset.addChild(spriteCloth); spriteCloth.x = Cutin2X; spriteCloth.y = Cutin2Y;//スプライト名
  SceneManager._scene.Cutin2Cloth = spriteCloth;//シーン名、スプライト名
}else{{console.error('ラインのエラー')}};
}
  


//前
if(CutinLine == 1){EraceCutin1Dif1()}else if(CutinLine == 2){EraceCutin2Dif1()}
  if(DifID != "なし"){
    DIFFILENAME = "actor01_cutin_" + CUTINBASENUM + "_h_" + DifID//ファイル名
    var bitmap = ImageManager.loadPicture(DIFFILENAME);//ファイル名
    var spriteDif1 = new Sprite(bitmap);//スプライト名
    if(CutinLine == 1){
    SceneManager._scene._spriteset.addChild(spriteDif1); spriteDif1.x = Cutin1X; spriteDif1.y = Cutin1Y;//スプライト名
    SceneManager._scene.Cutin1Dif1 = spriteDif1;//シーン名、スプライト名
  }else if(CutinLine == 2){
    SceneManager._scene._spriteset.addChild(spriteDif1); spriteDif1.x = Cutin2X; spriteDif1.y = Cutin2Y;//スプライト名
    SceneManager._scene.Cutin2Dif1 = spriteDif1;//シーン名、スプライト名
  }else{{console.error('ラインのエラー')}};
};


//汁
if(CutinLine == 1){EraceCutin1Semen1()}else if(CutinLine == 2){EraceCutin2Semen1()}
if(DifSemen != "なし"){
  SEMENFILENAME = "actor01_cutin_" + CUTINBASENUM + "_" + DifSemen
  var bitmap = ImageManager.loadPicture(SEMENFILENAME);//ファイル名
  var spriteSemen1 = new Sprite(bitmap);//スプライト名
  if(CutinLine == 1){
  SceneManager._scene._spriteset.addChild(spriteSemen1); spriteSemen1.x = Cutin1X; spriteSemen1.y = Cutin1Y;//スプライト名
  SceneManager._scene.Cutin1Semen1 = spriteSemen1;//シーン名、スプライト名
}else if(CutinLine == 2){
  SceneManager._scene._spriteset.addChild(spriteSemen1); spriteSemen1.x = Cutin2X; spriteSemen1.y = Cutin2Y;//スプライト名
  SceneManager._scene.Cutin2Semen1 = spriteSemen1;//シーン名、スプライト名
}else{{console.error('ラインのエラー')}};
}

    


//アニメーション座標
if(CutinLine == 1){
var CutinAnimeX = 0 + Cutin1X
var CutinAnimeY = 0 + Cutin1Y
}
else if(CutinLine == 2){
var CutinAnimeX = 0 + Cutin2X
var CutinAnimeY = 0 + Cutin2Y
}
if (AnimeX != 0){
CutinAnimeX += AnimeX
}
if (AnimeY != 0){
CutinAnimeY += AnimeY
}
if (AnimeX != 0 || AnimeY != 0){

//番号、原点、X,Y,拡大、不透明、合成、移動ウェイト
//アニメウェイト
var AnimeWait = 10;

//動かす処理、スプライトに置き換える場合上部の処理変更
//ライン1
  if(CutinLine == 1){
    if(SceneManager._scene.Cutin1Dif2){
      Torigoya.Tween.create(SceneManager._scene.Cutin1Dif2)
      .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
      .to({x: Cutin1X,y: Cutin1Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
      }
      if(SceneManager._scene.Cutin1Base){
        Torigoya.Tween.create(SceneManager._scene.Cutin1Base)
        .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
        .to({x: Cutin1X,y: Cutin1Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
      }
      if(SceneManager._scene.Cutin1Option){
        Torigoya.Tween.create(SceneManager._scene.Cutin1Option)
        .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
        .to({x: Cutin1X,y: Cutin1Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
      }
      if(SceneManager._scene.Cutin1Tites){
        Torigoya.Tween.create(SceneManager._scene.Cutin1Tites)
        .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
        .to({x: Cutin1X,y: Cutin1Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
      }
      if(SceneManager._scene.Cutin1Cloth){
        Torigoya.Tween.create(SceneManager._scene.Cutin1Cloth)
        .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
        .to({x: Cutin1X,y: Cutin1Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
      }
      if(SceneManager._scene.Cutin1Dif1){
        Torigoya.Tween.create(SceneManager._scene.Cutin1Dif1)
      .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
      .to({x: Cutin1X,y: Cutin1Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
      }
      if(SceneManager._scene.Cutin1Semen1){
        Torigoya.Tween.create(SceneManager._scene.Cutin1Semen1)
      .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
      .to({x: Cutin1X,y: Cutin1Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
      }
    }

//ライン2
if(CutinLine == 2){
  if(SceneManager._scene.Cutin2Dif2){
    Torigoya.Tween.create(SceneManager._scene.Cutin2Dif2)
    .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
    .to({x: Cutin2X,y: Cutin2Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
    }
    if(SceneManager._scene.Cutin2Base){
      Torigoya.Tween.create(SceneManager._scene.Cutin2Base)
      .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
      .to({x: Cutin2X,y: Cutin2Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
    }
    if(SceneManager._scene.Cutin2Option){
      Torigoya.Tween.create(SceneManager._scene.Cutin2Option)
      .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
      .to({x: Cutin2X,y: Cutin2Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
    }
    if(SceneManager._scene.Cutin2Tites){
      Torigoya.Tween.create(SceneManager._scene.Cutin2Tites)
      .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
      .to({x: Cutin2X,y: Cutin2Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
    }
    if(SceneManager._scene.Cutin2Cloth){
      Torigoya.Tween.create(SceneManager._scene.Cutin2Cloth)
      .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
      .to({x: Cutin2X,y: Cutin2Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
    }
    if(SceneManager._scene.Cutin2Dif1){
      Torigoya.Tween.create(SceneManager._scene.Cutin2Dif1)
    .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
    .to({x: Cutin2X,y: Cutin2Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
    }
    if(SceneManager._scene.Cutin2Semen1){
      Torigoya.Tween.create(SceneManager._scene.Cutin2Semen1)
    .to({x: CutinAnimeX,y: CutinAnimeY},AnimeWait, Torigoya.Tween.Easing.easeOutSine)
    .to({x: Cutin2X,y: Cutin2Y},AnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
    }
  }
}

this.wait(5)

//おわり
};





//消去コマンド
if (command === 'EraceCutin1' || command === 'eracecutin1') {//消去1
  EraceCutin1Base()
  EraceCutin1Cloth()
  EraceCutin1Semen1()
  EraceCutin1Dif1()
  EraceCutin1Dif2()
  EraceCutin1Option()
  EraceCutin1Tites()
}
if (command === 'EraceCutin2' || command === 'eracecutin2') {
  EraceCutin2Base()
  EraceCutin2Cloth()
  EraceCutin2Semen1()
  EraceCutin2Dif1()
  EraceCutin2Dif2()
  EraceCutin2Option()
  EraceCutin2Tites()
}
if (command === 'EraceCutinAll' || command ==='eracecutinall') {//全消去
  EraceCutin1Base()
  EraceCutin1Cloth()
  EraceCutin1Semen1()
  EraceCutin1Dif1()
  EraceCutin1Dif2()
  EraceCutin1Option()
  EraceCutin1Tites()
  EraceCutin2Base()
  EraceCutin2Cloth()
  EraceCutin2Semen1()
  EraceCutin2Dif1()
  EraceCutin2Dif2()
  EraceCutin2Option()
  EraceCutin2Tites()
  }
};



//消去用関数
function EraceCutin1Base() {
  if(SceneManager._scene.Cutin1Base) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin1Base)//シーン名変更
    SceneManager._scene.Cutin1Base = null;//シーン名変更
  }
};

function EraceCutin1Cloth() {
  if(SceneManager._scene.Cutin1Cloth) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin1Cloth)//シーン名変更
    SceneManager._scene.Cutin1Cloth = null;//シーン名変更
  }
};

function EraceCutin1Dif1() {
  if(SceneManager._scene.Cutin1Dif1) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin1Dif1)//シーン名変更
    SceneManager._scene.Cutin1Dif1 = null;//シーン名変更
  }
};

function EraceCutin1Dif2() {
  if(SceneManager._scene.Cutin1Dif2) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin1Dif2)//シーン名変更
    SceneManager._scene.Cutin1Dif2 = null;//シーン名変更
  }
};

function EraceCutin1Tites() {
  if(SceneManager._scene.Cutin1Tites) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin1Tites)//シーン名変更
    SceneManager._scene.Cutin1Tites = null;//シーン名変更
  }
};

function EraceCutin1Option() {
  if(SceneManager._scene.Cutin1Option) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin1Option)//シーン名変更
    SceneManager._scene.Cutin1Option = null;//シーン名変更
  }
};

function EraceCutin1Semen1() {
  if(SceneManager._scene.Cutin1Semen1) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin1Semen1)//シーン名変更
    SceneManager._scene.Cutin1Semen1 = null;//シーン名変更
  }
};

//カットイン2
function EraceCutin2Base() {
  if(SceneManager._scene.Cutin2Base) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin2Base)//シーン名変更
    SceneManager._scene.Cutin2Base = null;//シーン名変更
  }
};

function EraceCutin2Cloth() {
  if(SceneManager._scene.Cutin2Cloth) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin2Cloth)//シーン名変更
    SceneManager._scene.Cutin2Cloth = null;//シーン名変更
  }
};

function EraceCutin2Dif1() {
  if(SceneManager._scene.Cutin2Dif1) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin2Dif1)//シーン名変更
    SceneManager._scene.Cutin2Dif1 = null;//シーン名変更
  }
};

function EraceCutin2Dif2() {
  if(SceneManager._scene.Cutin2Dif2) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin2Dif2)//シーン名変更
    SceneManager._scene.Cutin2Dif2 = null;//シーン名変更
  }
};

function EraceCutin2Option() {
  if(SceneManager._scene.Cutin2Option) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin2Option)//シーン名変更
    SceneManager._scene.Cutin2Option = null;//シーン名変更
  }
};

function EraceCutin2Tites() {
  if(SceneManager._scene.Cutin2Tites) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin2Tites)//シーン名変更
    SceneManager._scene.Cutin2Tites = null;//シーン名変更
  }
};

function EraceCutin2Semen1() {
  if(SceneManager._scene.Cutin2Semen1) {//既に表示がある場合消す処理//シーン名変更
    SceneManager._scene._spriteset.removeChild(SceneManager._scene.Cutin2Semen1)//シーン名変更
    SceneManager._scene.Cutin2Semen1 = null;//シーン名変更
  }
};


})();