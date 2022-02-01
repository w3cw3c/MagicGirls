/*---------------------------------------------------------------------------*
 * 2020/01/7 shimo8
 *---------------------------------------------------------------------------*/

/*:
 * @plugindesc 立ち絵表示プラグイン
 * @author しもや
 * @help
 * ・プラグインコマンド
 *   CallStand 立ち絵IDor立ち絵エロ名 アニメX アニメY //衣装指定とかもできると〇
 * 
 * 戦闘エロのメモ
 * v[351] = 口を塞いでいる相手のID
 * v[352] = 前の以下略
 * v[353] = 後ろの以下略
 * v[415] = 拘束相手
 * 
 * 種族[1,human][2,tentacle][3,demon][4,worm?]
 */


(function(){
  const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'CallStand' || command === 'CallStandForce') {

      

      //プラグインコマンド


      if (args[0].match(/\\v/)) {
        //args[1]に\vを含む場合の処理
        array = args[0].match(/[0-9]+\.?[0-9]*/g);
        for(var i = 0; i < array.length; i++) {
        args[0] = Number(array);
        var StandPoseID = $gameVariables.value(args[0]);
          }
        }else{var StandPoseID = args[0]
          }
      if(args[1] != null){var StandAnimeX = Number(args[1])}else{var StandAnimeX = 0};//アニメーション座標X
      if(args[2] != null){var StandAnimeY = Number(args[2])}else{var StandAnimeY = 0};//アニメーション座標Y
      if(args[3] != null){var StandAnimeWait = Number(args[3])}else{var StandAnimeWait = 1};//アニメーションウェイト

      //立ち絵基本座標
      var Stand1X = 380
      var Stand1Y = 0
      $gameVariables._data[902] = Stand1X
      $gameVariables._data[903] = Stand1Y



      //立ち絵エロの指定コモン228
      var Dif1PicFileName = 0;
      var Dif2PicFileName = 0;
      if(StandPoseID == "0" || StandPoseID == 0 || StandPoseID == null){StandPoseID = 1}
      else if(StandPoseID >= 1){}
      else if(StandPoseID == "1" || StandPoseID == "2" || StandPoseID == "3" || StandPoseID == "4" || StandPoseID == "5" || StandPoseID == "6" || StandPoseID == "7" || StandPoseID == "8" || StandPoseID == "9" || StandPoseID == "10"){StandPoseID = Number(StandPoseID);}
      else if(StandPoseID == "拘束_触手"){StandPoseID = 4;$gameVariables._data[415] = 2}
      else if(StandPoseID == "拘束_人間"){StandPoseID = 4;$gameVariables._data[415] = 1}
      else if(StandPoseID == "拘束_触手壁"){StandPoseID = 4;$gameVariables._data[415] = 3}
      else if(StandPoseID == "拘束_ワーム"){StandPoseID = 4;$gameVariables._data[415] = 4}
      else if(StandPoseID == "拘束_怪魔"){StandPoseID = 4;$gameVariables._data[415] = 5}
      else if(StandPoseID == "拘束_鎖"){StandPoseID = 4;$gameVariables._data[415] = 10}
      else if(StandPoseID == "拘束_くすぐり"){StandPoseID = 4;$gameVariables._data[415] = 11}

      else if(StandPoseID == "挿入前脚上げ_人間"){StandPoseID = 5;$gameVariables._data[354] = 1}//415は拘束351-は穴
      else if(StandPoseID == "セックス脚上げ_人間"){StandPoseID = 5;$gameVariables._data[352] = 1}//415は拘束351-は穴
      else if(StandPoseID == "触手拘束脚上げ"){StandPoseID = 5;$gameVariables._data[415] = 2}//415は拘束351-は穴
      else if(StandPoseID == "触手イラマセックス"){StandPoseID = 5;$gameVariables._data[351] = 2;$gameVariables._data[352] = 2}//415は拘束351-は穴
      else if(StandPoseID == "触手イラマアナルセックス"){StandPoseID = 5;$gameVariables._data[351] = 2;$gameVariables._data[353] = 2}//415は拘束351-は穴
      else if(StandPoseID == "触手セックス"){StandPoseID = 5;$gameVariables._data[352] = 2}//415は拘束351-は穴
      else if(StandPoseID == "触手アナルセックス"){StandPoseID = 5;$gameVariables._data[353] = 2}//415は拘束351-は穴
      else if(StandPoseID == "触手両穴セックス"){StandPoseID = 5;$gameVariables._data[352] = 2;$gameVariables._data[353] = 2}//415は拘束351-は穴
      else if(StandPoseID == "触手三穴セックス"){StandPoseID = 5;$gameVariables._data[352] = 2;$gameVariables._data[353] = 2;$gameVariables._data[354] = 2}//415は拘束351-は穴

      else if(StandPoseID == "セックス後背位_人間"){StandPoseID = 6;$gameVariables._data[352] = 1}//415は拘束351-は穴
      else if(StandPoseID == "アナルセックス後背位_人間"){StandPoseID = 6;$gameVariables._data[353] = 1}//415は拘束351-は穴
      
      else if(StandPoseID == "鎖セックス_人間"){StandPoseID = 7;$gameVariables._data[352] = 1;$gameVariables._data[415] = 10}//415は拘束351-は穴
      else if(StandPoseID == "鎖二穴セックス_人間"){StandPoseID = 7;$gameVariables._data[352] = 1;$gameVariables._data[353] = 1;$gameVariables._data[415] = 10}//415は拘束351-は穴
      else if(StandPoseID == "二穴セックス_人間"){StandPoseID = 7;$gameVariables._data[352] = 1;$gameVariables._data[353] = 1}//415は拘束351-は穴

      else if(StandPoseID == "セックス開脚_人間"){StandPoseID = 8;$gameVariables._data[352] = 1}//415は拘束351-は穴
      else if(StandPoseID == "アナルセックス開脚_人間"){StandPoseID = 8;$gameVariables._data[353] = 1}//415は拘束351-は穴
      else if(StandPoseID == "イラマセックス開脚_人間"){StandPoseID = 8;$gameVariables._data[351] = 1;$gameVariables._data[352] = 1}//415は拘束351-は穴
      else if(StandPoseID == "イラマアナルセックス開脚_人間"){StandPoseID = 8;$gameVariables._data[351] = 1;$gameVariables._data[353] = 1}//415は拘束351-は穴
      else if(StandPoseID == "催眠洗脳"){StandPoseID = 8;$gameVariables._data[415] = 8}//415は拘束351-は穴
      else if(StandPoseID == "触手椅子"){StandPoseID = 8;$gameVariables._data[415] = 9}//415は拘束351-は穴
      else if(StandPoseID == "触手椅子_両穴"){StandPoseID = 8;$gameVariables._data[415] = 9;$gameVariables._data[352] = 1;$gameVariables._data[353] = 1}//415は拘束351-は穴

      else if(StandPoseID == "奉仕_人間"){StandPoseID = 9;$gameVariables._data[351] = 1}
      else if(StandPoseID == "奉仕_触手"){StandPoseID = 9;$gameVariables._data[351] = 2}
      else if(StandPoseID == "催眠奉仕_触手"){StandPoseID = 9;$gameVariables._data[351] = 2}
      else{console.error('ポーズIDが不正'); StandPoseID = 1;}

      $gameVariables._data[915] = StandPoseID//ゲーム内変数に入れておく
      $gameVariables._data[916] = StandPoseID//ゲーム内変数に入れておく

      if(command == 'CallStandForce'){$gameVariables._data[912] = StandPoseID}
      else{$gameVariables._data[912] = 0}

      //ゲーム中の装備番号
      var StandEqCloth = 1
      var StandEqLeg = 7

      //フラグ
      if($gameSwitches.value(131)){
        var StandAltFlag = 1
      }else{
        var StandAltFlag = 0
      }

      if($gameSwitches.value(98)){
        var AbyssAlt = 1
      }else{
        var AbyssAlt = 0
      }

      //衣装耐久
      $gameVariables._data[741] = $gameVariables.value(702)
      $gameVariables._data[742] = $gameVariables.value(722)



      //状態の確認
      if($gameVariables.value(1027) >= 50 || $gameVariables.value(1026) >= 500){ //発情50or快感500
        var SweatFlag = 1
        var LovejuiceFlag = 1
        var BreathFlag = 1
      }else if(StandPoseID >= 3){
        var SweatFlag = 1
        var LovejuiceFlag = 0
        var BreathFlag = 1
      }else{//それ以外の場合
        var SweatFlag = 0
        var LovejuiceFlag = 0
        var BreathFlag = 0
      }

      if($gameActors.actor(1).hasArmor($dataArmors[222])){
        var MarkFlag = 1
      }else{
        var MarkFlag = 0
      }
      //精液汚れ度
      var SemenBody = $gameVariables.value(942)
      var SemenFace = $gameVariables.value(941)
      var SemenAnus = $gameVariables.value(945)
      var SemenVagina = $gameVariables.value(944)
      var SemenMouth = $gameVariables.value(943)



      //呼び出しファイル名入力用
      var FileName = 0



      //ピクチャ番号指定
      //開始番号
      var stand_bigin = 35
      var stand_difback = stand_bigin + 1
      var stand_cloth_back = stand_bigin + 2
      //var brank1 = 38
      //var brank2 = 39
      var stand_base = stand_bigin + 5//淫紋などはここ？
      var stand_sweat = stand_bigin + 6
      var stand_lovejuice = stand_bigin + 7
      
      var stand_pierce = stand_bigin + 9 //ビアス
      //var brank3 = 43ピアスなど？
      //var brank4 = 44ローターなど？
      var stand_leg = stand_bigin + 11
      var stand_under = stand_bigin + 10
      var stand_cloth = stand_bigin + 12
      var stand_mark = stand_bigin + 13 //淫紋など
      var stand_face = stand_bigin + 14
      var effect_breath = stand_bigin + 15
      var effect_splash = stand_bigin + 16
      //var brank5 = 51
      var stand_weapon = stand_bigin + 17
      var stand_semenbody = stand_bigin + 18
      var stand_semenface = stand_bigin + 19
      var stand_semenmouth = stand_bigin + 20
      var stand_semenhole = stand_bigin + 21
      var stand_diffront = stand_bigin + 22
      var stand_effect = stand_bigin + 23










      //装備情報取得
      
      
      var ClothUpdate = 0
      if($gameActors._data[1]._equips[StandEqCloth]._itemId >= 5){
        
        var StandEqNum = $gameActors._data[1]._equips[StandEqCloth]._itemId//衣装指定する場合はここの処理変更
        var EqClothOpacity = $dataArmors[StandEqNum].meta.ClothOpacity
        if($gameActors.actor(1).isStateAffected(55) || $gameActors.actor(1).addedSkills().contains(722) || $gameActors.actor(1).isLearnedSkill(722)){
          EqClothOpacity = EqClothOpacity / 2
        }//すけすけステート食らっている場合
        if($gameVariables.value(4964) != EqClothOpacity){
          ClothUpdate = 1
        }else{ClothUpdate = 0}//透過度が違う場合保存して更新フラグオン
        $gameVariables._data[4964] = EqClothOpacity

        if(StandEqNum == 71 && $gameActors.actor(1).isStateAffected(94)){StandEqNum = 72}
        if(StandEqNum == 71 && $gameActors.actor(1).isStateAffected(95)){StandEqNum = 73}
      // var StandClothTag = $dataArmors[StandEqNum].meta.ClothName
      // var StandClothID = Number($dataArmors[StandEqNum].meta.ClothPicNum); //衣装ピクチャ番号　現状使わない
        var UnderPicFlag = Number($dataArmors[StandEqNum].meta.ClothUnderFlag); //衣装の下着フラグ
        var ClothPicFileNum = $dataArmors[StandEqNum].meta.FileNumCloth
        var ClothNippleEx = Number($dataArmors[StandEqNum].meta.ClothNipple)
      }else{
        // var StandClothTag = Naked
        // var StandClothID = 0
        var EqClothOpacity = 255 //衣装透過度
        var UnderPicFlag = 1; //下着
        var ClothPicFileNum = 0
        var ClothNippleEx = 1
      }
      
      //変身衣装コス
      var Cosplay = 0
      if($gameActors._data[1]._equips[StandEqCloth]._itemId >= 5 && $dataArmors[StandEqNum].meta.Cosplay){//コス着てる場合
        var StandAltFlag = 1
        var Cosplay = 1
      }


      if($gameActors.actor(1).hasArmor($dataArmors[224]) || $gameActors.actor(1).hasArmor($dataArmors[225]) || $gameActors.actor(1).hasArmor($dataArmors[226])){
        var PierceFlag = 1
      }else{
        var PierceFlag = 0
      }//ピアス

      //下着のオンオフ
      if(UnderPicFlag >= 1 && $gameVariables.value(756) >= 1){
        var UnderPicFileNum = "0001"
        ClothNippleEx = 0
      }else{
        var UnderPicFileNum = 0
      }
      
      //console.error(ClothNippleEx);

      //足装備取得
      if($gameActors._data[1]._equips[StandEqLeg]._itemId >= 5){
        var LegEqNum = $gameActors._data[1]._equips[StandEqLeg]._itemId
        var LegPicFileNum = $dataArmors[LegEqNum].meta.FileNumOption
        if($gameVariables.value(756) >= 1 && LegPicFileNum == "0011" && UnderPicFlag >= 1){LegPicFileNum = "0012"}//下着着用中の処理
      }else{
        var LegPicFileNum = 0};





      //立ち絵ポーズ基本ファイル名
      StandPoseID = ( '00' + StandPoseID ).slice( -2 );//ゼロ埋め
      var BasePoseFileName = 'actor01_pose'
      BasePoseFileName += StandPoseID//ポーズ名を結合

      //立ち絵素体//変身中か乳首見えてるかなど
      if(StandAltFlag >= 1){
        if(AbyssAlt >= 1){
          if(ClothNippleEx >= 1){
            var BaseID = "0005"
          }else{
            var BaseID = "0006"
          }
        }else{
          if(ClothNippleEx >= 1){
            var BaseID = "0003"
          }else{
            var BaseID = "0004"
          }
        }
        
      }else{
        if(ClothNippleEx >= 1){
          var BaseID = "0001"
        }else{
          var BaseID = "0002"
        }
      }


      FileName = BasePoseFileName + "_body_" + BaseID//ファイル名指定
      if($gameScreen.picture(stand_base) && $gameScreen.picture(stand_base)._name == FileName){
        //既に同じファイル名が表示されてる場合はスルー
      }else{
        $gameScreen.showPicture(stand_base,FileName,0,Stand1X,Stand1Y,100,100,255,0)
      }

      //衣装
      FileName = BasePoseFileName + "_cloth_" + ClothPicFileNum//ファイル名指定
      if($gameScreen.picture(stand_cloth) && $gameScreen.picture(stand_cloth)._name == FileName && ClothUpdate == 0){
        //既に同じファイル名が表示されてる場合はスルー
      }else{
        if(ClothPicFileNum != 0){//取得した装備タグの衣装ファイル名が0(全裸)以外の場合      
          $gameScreen.showPicture(stand_cloth,FileName,0,Stand1X,Stand1Y,100,100,EqClothOpacity,0)
        }else{
          $gameScreen.erasePicture(stand_cloth)//全裸の場合消去
        }
      }





      //脚　変身中は反映なし
      FileName = BasePoseFileName + "_option_" + LegPicFileNum//ファイル名指定
      if($gameScreen.picture(stand_leg) && $gameScreen.picture(stand_leg)._name == FileName){
        if(StandAltFlag == 0 || Cosplay == 1){//取得した装備タグの衣装ファイル名が0(全裸)以外、かつ未変身　またはコスプレの場合
        }else{
          $gameScreen.erasePicture(stand_leg)//全裸の場合消去
        }
        //既に同じファイル名が表示されてる場合はスルー
      }else{
        if(LegPicFileNum != 0 && StandAltFlag == 0 || LegPicFileNum != 0 && Cosplay == 1){//取得した装備タグの衣装ファイル名が0(全裸)以外、かつ未変身        
          $gameScreen.showPicture(stand_leg,FileName,0,Stand1X,Stand1Y,100,100,255,0)
        }else{
          $gameScreen.erasePicture(stand_leg)//全裸の場合消去
        }
      }

      

      //下着
      FileName = BasePoseFileName + "_option_" + UnderPicFileNum//ファイル名指定
      if($gameScreen.picture(stand_under) && $gameScreen.picture(stand_under)._name == FileName){
        //既に同じファイル名が表示されてる場合はスルー
      }else{
        if(UnderPicFileNum != 0){//取得した装備タグの衣装ファイル名が0(全裸)以外の場合        
          $gameScreen.showPicture(stand_under,FileName,0,Stand1X,Stand1Y,100,100,255,0)
        }else{
          $gameScreen.erasePicture(stand_under)//全裸の場合消去
        }
      }


      

      //汗
      FileName = BasePoseFileName + "_option_" + "0036"//ファイル名指定      
      if($gameScreen.picture(stand_sweat) && $gameScreen.picture(stand_sweat)._name == FileName){
          //既に同じファイル名が表示されてる場合はスルー
      }else{
          if(SweatFlag >= 1){    
            $gameScreen.showPicture(stand_sweat,FileName,0,Stand1X,Stand1Y,100,100,255,0)
          }else{
            $gameScreen.erasePicture(stand_sweat)//全裸の場合消去
          }
      }

      //愛液
      FileName = BasePoseFileName + "_option_" + "0031"//ファイル名指定            
      if($gameScreen.picture(stand_lovejuice) && $gameScreen.picture(stand_lovejuice)._name == FileName){
          //既に同じファイル名が表示されてる場合はスルー
      }else{
          if(LovejuiceFlag >= 1){    
            $gameScreen.showPicture(stand_lovejuice,FileName,0,Stand1X,Stand1Y,100,100,255,0)
          }else{
            $gameScreen.erasePicture(stand_lovejuice)
          }
      }

      //息
      FileName = BasePoseFileName + "_option_" + "0035"//ファイル名指定            
      if($gameScreen.picture(effect_breath) && $gameScreen.picture(effect_breath)._name == FileName){
          //既に同じファイル名が表示されてる場合はスルー
      }else{
          if(BreathFlag >= 1){
            $gameSwitches._data[52] = true;//吐息アニメ    
            $gameScreen.showPicture(effect_breath,FileName,0,Stand1X,Stand1Y,100,100,255,0)
            
          }else{
            $gameSwitches._data[52] = false;//吐息アニメ
            $gameScreen.erasePicture(effect_breath)
          }
      }

      //表情
      
      var FaceId = AutoFaceId()
      FaceId = ( '0000' + FaceId ).slice( -4 );//ゼロ埋め
      FileName = BasePoseFileName + "_face_" + FaceId

                
      if($gameScreen.picture(stand_face) && $gameScreen.picture(stand_face)._name == FileName){
          //既に同じファイル名が表示されてる場合はスルー
      }else{
        if($gameScreen.picture(stand_base)){//素体が表示されてる時   
          
          if(FaceId != 0 && StandPoseID != 10){//0の場合イベント中||PoseID10は表情がない
            $gameScreen.showPicture(stand_face,FileName,0,Stand1X,Stand1Y,100,100,255,0)
          }else{$gameScreen.erasePicture(stand_face)}
        }else{
          $gameScreen.erasePicture(stand_face)
        }
      }

//      //淫紋
//      FileName = BasePoseFileName + "_option_" + "0040"//ファイル名指定            
//      if($gameScreen.picture(stand_mark) && $gameScreen.picture(stand_mark)._name == FileName){
//          //既に同じファイル名が表示されてる場合はスルー
//      }else{
//          if(MarkFlag >= 1){    
//            $gameScreen.showPicture(stand_mark,FileName,0,Stand1X,Stand1Y,100,100,255,0)
//            $gameScreen.picture(stand_mark)._blendMode = PIXI.BLEND_MODES.MULTIPLY;
//          }else{
//            $gameScreen.erasePicture(stand_mark)
//          }
//      }
//
//
      //淫紋
              
      
          //既に同じファイル名が表示されてる場合はスルー
      
      
      FileName = BasePoseFileName + "_option_" + "0040"//ファイル名指定
      if($gameScreen.picture(stand_mark) && $gameScreen.picture(stand_mark)._name == FileName){
        if(MarkFlag >= 1){
          //既に同じファイル名が表示されてる場合はスルー
        }else{
          $gameScreen.erasePicture(stand_mark)
        }
      }else{
        if(MarkFlag >= 1){
          $gameScreen.showPicture(stand_mark,FileName,0,Stand1X,Stand1Y,100,100,255,0)
          $gameScreen.picture(stand_mark)._blendMode = PIXI.BLEND_MODES.MULTIPLY;
        }else{
          $gameScreen.erasePicture(stand_mark)
        }
      }

      //ピアス
      FileName = BasePoseFileName + "_option_" + "0028"//ファイル名指定
      if($gameScreen.picture(stand_pierce) && $gameScreen.picture(stand_pierce)._name == FileName){
        if(PierceFlag >= 1){    
          //既に同じファイル名が表示されてる場合はスルー
        }else{
          $gameScreen.erasePicture(stand_pierce)
        }
      }else{
          if(PierceFlag >= 1){    
            $gameScreen.showPicture(stand_pierce,FileName,0,Stand1X,Stand1Y,100,100,255,0)
          }else{
            $gameScreen.erasePicture(stand_pierce)
          }
      }


      //精液
      
      if(SemenBody >= 15){var SemenBodyPicFileNum = "0006"}
      else if(SemenBody >= 10){var SemenBodyPicFileNum = "0005"}
      else if(SemenBody >= 1){var SemenBodyPicFileNum = "0004"}
      else{}
      FileName = BasePoseFileName + "_semen_" + SemenBodyPicFileNum//ファイル名指定
      if($gameScreen.picture(stand_semenbody) && $gameScreen.picture(stand_semenbody)._name == FileName){
        if(SemenBody >= 1){    
          //既に同じファイル名が表示されてる場合はスルー
        }else{
          $gameScreen.erasePicture(stand_semenbody)
        }
      }else{
        if(SemenBody >= 1){    
          $gameScreen.showPicture(stand_semenbody,FileName,0,Stand1X,Stand1Y,100,100,255,0)
        }else{
          $gameScreen.erasePicture(stand_semenbody)
        }
      }

      if(SemenFace >= 15){var SemenFacePicFileNum = "0003"}
      else if(SemenFace >= 10){var SemenFacePicFileNum = "0002"}
      else if(SemenFace >= 1){var SemenFacePicFileNum = "0001"}
      else{}
      FileName = BasePoseFileName + "_semen_" + SemenFacePicFileNum//ファイル名指定
      if($gameScreen.picture(stand_semenface) && $gameScreen.picture(stand_semenface)._name == FileName){
        if(SemenFace >= 1){    
          //既に同じファイル名が表示されてる場合はスルー
        }else{
          $gameScreen.erasePicture(stand_semenface)
        }
      }else{
        if(SemenFace >= 1){    
          $gameScreen.showPicture(stand_semenface,FileName,0,Stand1X,Stand1Y,100,100,255,0)
        }else{
          $gameScreen.erasePicture(stand_semenface)
        }
      }

      if(SemenVagina >= 1 && SemenAnus >= 1){var SemenHolePicFileNum = "0009"}
      else if(SemenVagina >= 1 && SemenAnus == 0){var SemenHolePicFileNum = "0007"}
      else if(SemenVagina == 0 && SemenAnus >= 1){var SemenHolePicFileNum = "0008"}
      else{}
      FileName = BasePoseFileName + "_semen_" + SemenHolePicFileNum//ファイル名指定
      if($gameScreen.picture(stand_semenhole) && $gameScreen.picture(stand_semenhole)._name == FileName){
        if(SemenVagina >= 1 || SemenAnus >= 1){    
          //既に同じファイル名が表示されてる場合はスルー
        }else{
          $gameScreen.erasePicture(stand_semenhole)
        }
      }else{
        if(SemenVagina >= 1 || SemenAnus >= 1){    
          $gameScreen.showPicture(stand_semenhole,FileName,0,Stand1X,Stand1Y,100,100,255,0)
        }else{
          $gameScreen.erasePicture(stand_semenhole)
        }
      }


      var SemenHolePicFileNum = "0010"
      FileName = BasePoseFileName + "_semen_" + SemenHolePicFileNum//ファイル名指定
      if($gameScreen.picture(stand_semenmouth) && $gameScreen.picture(stand_semenmouth)._name == FileName){
        if(SemenMouth >= 1){    
          //既に同じファイル名が表示されてる場合はスルー
        }else{
          $gameScreen.erasePicture(stand_semenmouth)
        }
      }else{
        if(SemenMouth >= 1){    
          $gameScreen.showPicture(stand_semenmouth,FileName,0,Stand1X,Stand1Y,100,100,255,0)
        }else{
          $gameScreen.erasePicture(stand_semenmouth)
        }
      }


      //立ち絵エロ

      var BindType = $gameVariables.value(415)//拘束の相手種族
      var MouthStateID = $gameVariables.value(351)//口塞ぎの相手番号
      var VaginaStateID = $gameVariables.value(352)//前の相手番号
      var AnusStateID = $gameVariables.value(353)//後ろの相手番号
      var WaitStateID = $gameVariables.value(354)//挿入前相手番号
      //4(拘束)
      if(StandPoseID == 4 && BindType == 2){; Dif1PicFileName = "tentacle";}
      else if(StandPoseID == 4 && BindType == 1){Dif1PicFileName = "manhand";Dif2PicFileName = "man";}
      else if(StandPoseID == 4 && BindType == 3){Dif1PicFileName = "tentaclewall";Dif2PicFileName = "tentaclewallback";}
      else if(StandPoseID == 4 && BindType == 4){Dif1PicFileName = "worm";}
      //else if(StandPoseID == 4 && BindType == 5){Dif1PicFileName = "demonhand";Dif2PicFileName = "demon";}
      else if(StandPoseID == 4 && BindType == 10){Dif1PicFileName = "chain";}
      else if(StandPoseID == 4 && BindType == 11){Dif1PicFileName = "tickle";}
      //5(片足上げ)
      else if(StandPoseID == 5 && VaginaStateID == 2 && AnusStateID == 2 && MouthStateID == 2){Dif1PicFileName = "tentacle_07";}//触手三穴
      else if(StandPoseID == 5 && VaginaStateID == 2 && AnusStateID == 2){Dif1PicFileName = "tentacle_04";}
      else if(StandPoseID == 5 && VaginaStateID == 2 && MouthStateID == 2){Dif1PicFileName = "tentacle_05";}//触手口膣
      else if(StandPoseID == 5 && AnusStateID == 2 && MouthStateID == 2){Dif1PicFileName = "tentacle_06";}//触手口尻
      else if(StandPoseID == 5 && VaginaStateID == 2){Dif1PicFileName = "tentacle_02";}
      else if(StandPoseID == 5 && AnusStateID == 2){Dif1PicFileName = "tentacle_03";}
      else if(StandPoseID == 5 && BindType == 2){Dif1PicFileName = "tentacle_01";}
      else if(StandPoseID == 5 && VaginaStateID == 1){Dif1PicFileName = "man01_penis_v";Dif2PicFileName = "man01";}
      else if(StandPoseID == 5 && WaitStateID == 1){Dif1PicFileName = "man01_penis";Dif2PicFileName = "man01";}
      
      //6(バック)
      else if(StandPoseID == 6 && VaginaStateID == 1){Dif1PicFileName = "man01";}
      else if(StandPoseID == 6 && AnusStateID == 1){Dif1PicFileName = "man01";}
      //7(二穴)
      else if(StandPoseID == 7 && VaginaStateID == 1 && AnusStateID == 1 && BindType == 10){Dif1PicFileName = "man01_hand02";Dif2PicFileName = "man01";}
      else if(StandPoseID == 7 && VaginaStateID == 1 && BindType == 10){Dif1PicFileName = "man02_hand";Dif2PicFileName = "man02";}
      else if(StandPoseID == 7 && VaginaStateID == 1 && AnusStateID == 1){Dif1PicFileName = "man01_hand";Dif2PicFileName = "man01";}
      //8(開脚))
      //注意・パラメータにかぶりがある場合より多い方を上にする
      else if(StandPoseID == 8 && VaginaStateID == 1 && AnusStateID == 1 && BindType == 9){Dif1PicFileName = "tentaclechair_w";;Dif2PicFileName = "tentaclechair";}
      else if(StandPoseID == 8 && BindType == 9){Dif1PicFileName = "tentaclechair_f";;Dif2PicFileName = "tentaclechair";}
      
      else if(StandPoseID == 8 && BindType == 8){Dif1PicFileName = "tentaclehypnosis";}
      
      else if(StandPoseID == 8 && VaginaStateID == 1 && MouthStateID == 1){Dif1PicFileName = "penis_m";;Dif2PicFileName = "man01";}
      else if(StandPoseID == 8 && AnusStateID == 1 && MouthStateID == 1){Dif1PicFileName = "penis_ma";;Dif2PicFileName = "man01";}
      else if(StandPoseID == 8 && VaginaStateID == 1){Dif1PicFileName = "man01_penis_v";;Dif2PicFileName = "man01";}
      else if(StandPoseID == 8 && AnusStateID == 1){Dif1PicFileName = "man01_penis_a";;Dif2PicFileName = "man01";}
      
      //9(奉仕)
      else if(StandPoseID == 9 && MouthStateID == 1){Dif1PicFileName = "mouthhuman";}
      else if(StandPoseID == 9 && MouthStateID == 2){Dif1PicFileName = "mouthtentacle";}
      else{}




      FileName = BasePoseFileName + "_sexual_" + Dif1PicFileName//ファイル名指定
      if($gameScreen.picture(stand_diffront) && $gameScreen.picture(stand_diffront)._name == FileName){
        //既に同じファイル名が表示されてる場合はスルー
      }else{
        if(Dif1PicFileName != 0){    
          $gameScreen.showPicture(stand_diffront,FileName,0,Stand1X,Stand1Y,100,100,255,0)
        }else{
          $gameScreen.erasePicture(stand_diffront)
        }
      }

      FileName = BasePoseFileName + "_sexual_" + Dif2PicFileName//ファイル名指定
      if($gameScreen.picture(stand_difback) && $gameScreen.picture(stand_difback)._name == FileName){
        //既に同じファイル名が表示されてる場合はスルー
      }else{
        if(Dif2PicFileName != 0){    
          $gameScreen.showPicture(stand_difback,FileName,0,Stand1X,Stand1Y,100,100,255,0)
        }else{
          $gameScreen.erasePicture(stand_difback)
        }
      }





      //アニメーション座標
      if (StandAnimeX != 0 || StandAnimeY != 0){
        $gameVariables._data[902] = Stand1X
        $gameVariables._data[903] = Stand1Y
        var StandMoveX = Stand1X
        var StandMoveY = Stand1Y
        StandMoveX = Stand1X + StandAnimeX
        StandMoveY = Stand1Y + StandAnimeY
        this.wait(5)

        //入力済み
        //console.error(args[1])
        //console.error(Stand1Y)
        //console.error(Stand1X)
        //console.error(Stand1Y)
        //console.error(StandMoveX)


        //動かす処理
        

        MovePic(stand_difback,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_cloth_back,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        
        MovePic(stand_base,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_sweat,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_lovejuice,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_leg,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_under,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_cloth,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_face,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(effect_breath,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(effect_splash,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_weapon,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_semenbody,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_semenface,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_mark,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_pierce,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        
        
        MovePic(stand_semenmouth,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_semenhole,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_diffront,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        MovePic(stand_effect,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
        this.wait(5)

      }
    




    };//おわり





//消去コマンド
if (command === 'ResetStandEro') {//消去1
  $gameVariables._data[912] = 0//強制指定解除
  $gameVariables._data[415] = 0//拘束相手
  $gameVariables._data[351] = 0//口
  $gameVariables._data[352] = 0//膣
  $gameVariables._data[353] = 0//尻
  $gameVariables._data[354] = 0//挿入まち
  //$gameSwitches._data[34] = false;//立ち絵えろスイッチおふ？
  $gameScreen.erasePicture(35)
  $gameScreen.erasePicture(57)
}

    if (command === 'EraceStand1' || command === 'EraceStand') {//消去1
      for(var i = 35; i <= 59; i++){$gameScreen.erasePicture(i)}
    }
  

    if (command === 'TempEraceStand1' || command === 'イベント中一時立ち絵消去') {//消去1
      $gameSwitches._data[46] = true;
    }


    if (command === 'StandAnimation') {//アニメーションのみ
      var Stand1X = 450
      var Stand1Y = 50
      //ピクチャ番号指定
      //開始番号
      var stand_bigin = 35
      var stand_difback = stand_bigin + 1
      var stand_cloth_back = stand_bigin + 2
      //var brank1 = 38
      //var brank2 = 39
      var stand_base = stand_bigin + 5//淫紋などはここ？
      var stand_sweat = stand_bigin + 6
      var stand_lovejuice = stand_bigin + 7
      //var brank3 = 43ピアスなど？
      var stand_semenhole = stand_bigin + 9//var brank4 = 44ローターなど？ひとまず精液
      var stand_leg = stand_bigin + 10
      var stand_under = stand_bigin + 11
      var stand_cloth = stand_bigin + 12
      var stand_face = stand_bigin + 13
      var effect_breath = stand_bigin + 14
      var effect_splash = stand_bigin + 15
      //var brank5 = 51
      var stand_weapon = stand_bigin + 17
      var stand_semenbody = stand_bigin + 18
      var stand_semenface = stand_bigin + 19
      var stand_semenmouth = stand_bigin + 20
      
      var stand_diffront = stand_bigin + 22
      var stand_effect = stand_bigin + 23
      if(args[0] != null){var StandAnimeX = Number(args[0])}else{var StandAnimeX = 0};//アニメーション座標X
      if(args[1] != null){var StandAnimeY = Number(args[1])}else{var StandAnimeY = 0};//アニメーション座標Y
      if(args[2] != null){var StandAnimeWait = Number(args[2])}else{var StandAnimeWait = 1};//アニメーションウェイト
      if (StandAnimeX != 0 || StandAnimeY != 0){
        var StandMoveX = Stand1X + StandAnimeX
        var StandMoveY = Stand1Y + StandAnimeY
      MovePic(stand_difback,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_cloth_back,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      
      MovePic(stand_base,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_sweat,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_lovejuice,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_leg,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_under,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_cloth,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_face,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(effect_breath,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(effect_splash,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_weapon,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_semenbody,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_semenface,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      
      
      MovePic(stand_semenmouth,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_semenhole,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_diffront,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      MovePic(stand_effect,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait)
      }
    }
  };


  function MovePic(TempPicNum,Stand1X,Stand1Y,StandMoveX,StandMoveY,StandAnimeWait) {
    if($gameScreen.picture(TempPicNum)){
      Torigoya.Tween.create($gameScreen.picture(TempPicNum))
      .to({_x: StandMoveX,_y: StandMoveY},StandAnimeWait, Torigoya.Tween.Easing.easeOutSine)
      .to({_x: Stand1X,_y: Stand1Y},StandAnimeWait, Torigoya.Tween.Easing.easeOutSine).start()
    }
  }


  function AutoFaceId() {
    if($gameSwitches.value(15) || $gameSwitches.value(34)){var FaceId = $gameVariables.value(895)}//イベント中or立ち絵エロ中はFaceIdで指定
    else{  
      var FaceId = 2    
      var Estrus = 35
      var Battle = 13
      var Extasy = 34
      var ShameSmile = 33
      var ShameUnhappy = 32
      var Shame = 31
      var Jito = 17
      var Joy = 5
      var Stern = 7
      var Yoin = 37
      var PokerFace = 2
      var MouthOpen = 25
      var Damage = 15

      if($gameVariables.value(916) == 9 && $gameVariables.value(351) >= 1){FaceId = MouthOpen}//奉仕
      else if($gameActors.actor(1).isStateAffected(165)){FaceId = Yoin}//絶頂余韻
      else if($gameVariables.value(1027) >= 50){FaceId = Estrus}//発情中
      else if($gameActors.actor(1).isStateAffected(189)){FaceId = Estrus}//発情呪い
      else if($gameActors.actor(1).hasArmor($dataArmors[222])){FaceId = Estrus} //淫紋
      else if($gameVariables.value(1026) >= 500){FaceId = Extasy}//快感高
      else if($gameActors.actor(1).isStateAffected(51)){FaceId = Estrus}//デモンズブラッド
      else if($gameVariables.value(1020) >= 1){FaceId = ShameUnhappy}//ぶっかけ
      else if($gameActors.actor(1).isStateAffected(28)){FaceId = Shame}//羞恥
      else if($gameActors.actor(1).isStateAffected(55)){FaceId = Shame}//すけすけ
      else if($gameActors.actor(1).isStateAffected(166)){FaceId = Shame}//拘束中
      else if($gameParty.inBattle()){
        if($gameSwitches.value(38)){FaceId = Joy}//戦闘終了時
        else if($gameSwitches.value(170)){FaceId = Damage}//ダメージ
        else{FaceId = Battle}//戦闘中
      }//暫定
      else if($gameActors.actor(1).isStateAffected(219)){FaceId = Jito}//感情じとー
      else if($gameActors.actor(1).isStateAffected(216)){FaceId = Yoin}//感情余韻
      else if($gameActors.actor(1).isStateAffected(221)){FaceId = Shame}//感情羞恥
      else if($gameSwitches.value(228)){FaceId = Shame}//露出中オン
      else if($gameActors._data[1]._equips[1]._itemId == 0 && $dataMap.meta["PubricSpot"]){
        if($gameVariables.value(1021) >= 100){
          FaceId = ShameSmile
          }else{FaceId = Shame}
            }//全裸
      else if($dataMap.meta["EnemyBase"]){FaceId = Stern}//平常敵ダンジョン攻略中
      else{FaceId = PokerFace};//平常
    }
    $gameVariables._data[895] = FaceId //変数に代入しておく
    return FaceId    
  }




})();