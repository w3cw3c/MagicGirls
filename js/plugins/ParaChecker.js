/*---------------------------------------------------------------------------*
 * 2020 shimo8
 *---------------------------------------------------------------------------*/

/*:
 * @plugindesc パラメータチェック
 * @author しもや
 * @help
 * 主人公のパラメータ判定、上限の処理などを円滑に行う。
 * ・プラグインコマンド
 *   ParaCheck
 */

(function(){
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'ParaCheck') {

            $gameVariables._data[1006] = $gameActors.actor(1).level//レベル　おそらくレベルアップメッセージに使用
            $gameVariables._data[215] = $gameParty._gold //所持金
            $gameVariables._data[722] = $gameVariables.value(1209) //衣装耐久スキル
            $gameVariables._data[1178] = $gameVariables.value(1280) / 15//魂の侵蝕
            if($gameVariables.value(1178) >= 6){$gameVariables._data[1178] = 5}


            if($gameVariables.value(1178) >= 1){$gameSwitches.setValue(1031,true)}else{$gameSwitches.setValue(1031,false)}
            if($gameVariables.value(1178) >= 2){$gameSwitches.setValue(1032,true)}else{$gameSwitches.setValue(1032,false)}
            if($gameVariables.value(1178) >= 3){$gameSwitches.setValue(1033,true)}else{$gameSwitches.setValue(1033,false)}
            if($gameVariables.value(1178) >= 4){$gameSwitches.setValue(1034,true)}else{$gameSwitches.setValue(1034,false)}
            if($gameVariables.value(1178) >= 5){$gameSwitches.setValue(1035,true)}else{$gameSwitches.setValue(1035,false)}


            if($gameActors.actor(1).isStateAffected(53)){$gameSwitches.setValue(295,true)}else{$gameSwitches.setValue(295,false)}

            var ClothLevel = Math.floor($gameActors.actor(1).level / 5 + 1)
            if(ClothLevel > 10){ClothLevel = 10}
            $gameVariables._data[3432] = ClothLevel
            if($gameVariables.value(3431) != ClothLevel){$gameVariables._data[3431] = ClothLevel}

            

            if($gameParty.inBattle()){
            }else{//戦闘中以外の場合座標などをチェック
                $gameVariables._data[210] = $gameMap.mapId()
                $gameVariables._data[177] = $dataMap.meta["MapName"]
                $gameVariables._data[179] = $gamePlayer.x
                $gameVariables._data[180] = $gamePlayer.y
                $gameVariables._data[178] = $gameMap.regionId($gameVariables.value(179),$gameVariables.value(180))
            }

            //スキル入力
            $gameVariables._data[1110] = $gameVariables.value(1271)//羞恥
            $gameVariables._data[1111] = $gameVariables.value(1272)//精液
            $gameVariables._data[1112] = $gameVariables.value(1273)//被虐
            $gameVariables._data[1113] = $gameVariables.value(1274)//変態
            $gameVariables._data[1114] = $gameVariables.value(1275)//奉仕




            //スキルによるパラメータ上限変動
            $gameVariables._data[722] = $gameVariables.value(1209) //衣装耐久スキル
            $gameVariables._data[1034] = $gameVariables.value(1260)
            $gameVariables._data[1037] = $gameVariables.value(1259)

            //ステート
            if($gameMap.isEventRunning()){

            }else{
                if($gameActors.actor(1).isStateAffected(123) &&  $gamePlayer._moveSpeed != $gameVariables.value(172)){
                    $gamePlayer._moveSpeed = $gameVariables.value(172);
                }else if($gamePlayer._moveSpeed != $gameVariables.value(173)){
                    $gamePlayer._moveSpeed = $gameVariables.value(173);
                }else{}
            }

            //装備情報の取得
            var ClothEqNum = 1//変身衣装変更でも使う
            if($gameActors._data[1]._equips[ClothEqNum]._itemId >= 5){
                var StandEqNum = $gameActors._data[1]._equips[ClothEqNum]._itemId//衣装指定する場合はここの処理変更
                $gameVariables._data[762] = $dataArmors[StandEqNum].meta.ClothName
                //var StandClothID = Number($dataArmors[StandEqNum].meta.ClothPicNum); //衣装ピクチャ番号　現状使わない
                //var UnderPicFlag = Number($dataArmors[StandEqNum].meta.ClothUndeFlag); //衣装の下着フラグ
                //var ClothPicFileNum = $dataArmors[StandEqNum].meta.FileNumCloth
                //var ClothNippleEx = Number($dataArmors[StandEqNum].meta.ClothNipple)
            }else{
                $gameVariables._data[762] = "Naked"
                // var StandClothTag = "Naked"
                // var StandClothID = 0
                //var UnderPicFlag = 1; //下着
                //var ClothPicFileNum = 0
                //var ClothNippleEx = 1
            }

            if($gameSwitches.value(131)){//変身中の場合
                $gameVariables._data[235] = 1//変身フラグオン
                var ClothHP = $gameVariables.value(702)//衣装耐久代入
                var ClothHPHalf = $gameVariables.value(722) / 2//衣装の半減値を代入
                if(ClothHP <= 0){//衣装耐久ゼロの場合
                    //衣装全損
                    if($gameActors.actor(1).isStateAffected(95)){}else{
                        $gameActors.actor(1).removeState(94)
                        $gameActors.actor(1).addState(95)
                    }                    
                }
                else if(ClothHPHalf > ClothHP){//衣装耐久が半減値以下
                    //衣装半壊
                    if($gameActors.actor(1).isStateAffected(94)){}else{
                        $gameActors.actor(1).removeState(95)
                        $gameActors.actor(1).addState(94)
                    }              
                }
                else{
                    //衣装万全
                    if($gameActors.actor(1).isStateAffected(94) || $gameActors.actor(1).isStateAffected(95)){
                        $gameActors.actor(1).removeState(94)
                        $gameActors.actor(1).removeState(95)
                    }
                    
                }
            }else{$gameVariables._data[235] = 0}//変身フラグ

            //ステルス？
            if($gameActors.actor(1).isStateAffected(50)){
                //$gameSwitches.setValue(162,true)
                $gameSwitches._data[162] = true;
            }else{
                //$gameSwitches.setValue(162,false)
                $gameSwitches._data[162] = false;
            }

            if($gameActors.actor(1).isStateAffected(49)){
                //$gameSwitches.setValue(162,true)
                $gameSwitches._data[70] = true;
            }else{
                //$gameSwitches.setValue(162,false)
                $gameSwitches._data[70] = false;
            }            


            //衣装損壊による羞恥付与
            if($gameActors.actor(1).isStateAffected(95) && $gameVariables.value(1093) < 100 && $gameSwitches.value(131)){
                if($gameActors.actor(1).isStateAffected(28)){
                }else{
                    $gameActors.actor(1).addState(28)
                }
            }else if($gameActors.actor(1).isStateAffected(94) && $gameVariables.value(1093) < 50 && $gameSwitches.value(131)){
                if($gameActors.actor(1).isStateAffected(28)){
                }else{
                    $gameActors.actor(1).addState(28)
                }
            }else if($gameActors.actor(1).isStateAffected(28)){
                $gameActors.actor(1).removeState(28)
            }


        //パラメータ上限チェック
        Sub = 1027//発情
        ParamaxEstrus(Sub)
        Sub = 1021//淫欲
        ParamaxLust(Sub)
        Sub = 1029//戦意
        Paramax0_100(Sub)
        Sub = 1030//瘴気
        ParamaxMiasma(Sub)
        Sub = 1022//侵蝕
        ParamaxErosion(Sub)
        Sub = 1025//知名度
        Paramax0_100(Sub)
        Sub = 217//魂
        Paramax0_99999(Sub)
        Sub = 1023//学園評価
        ParamaxUnder100(Sub)
        Sub = 1024//市民評価
        ParamaxUnder100(Sub)
        Sub = 212//支配度
        Paramax0_100(Sub)
        Sub = 1026//性感
        ParamaxExtasy(Sub)
        Sub = 702//衣装耐久
        ParamaxCloth(Sub)
        Sub = 202//ターン
        Paramax0_999(Sub)
        Sub = 1019//催眠
        Paramax0_100(Sub)
    }
}





function ParamaxExtasy(Sub) {
    var high = $gameVariables.value(1031)
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function ParamaxLust(Sub) {
    var high = $gameVariables.value(1034)
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }
function ParamaxMiasma(Sub) {
    var high = $gameVariables.value(1037)
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function ParamaxErosion(Sub) {//侵蝕度
    if($gameSwitches.value(597) || $gameVariables.value(409) <= 2){//クリア後、或いはチャプター2以下の場合、99まで？
        var high = 99
    }else{
        var high = 100}
    var low = $gameVariables.value(1280)
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
        }

function ParamaxEstrus(Sub) {
    var high = 200
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function ParamaxCloth(Sub) {
    var high = $gameVariables.value(722)
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function Paramax0_999(Sub) {
    var high = 999
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function Paramax0_9999(Sub) {
    var high = 9999
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function Paramax0_99999(Sub) {
    var high = 99999
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function Paramax0_100(Sub) {
    var high = 100
    var low = 0
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function ParamaxUnder100(Sub) {
    var high = 100
    var low = -100
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

function ParamaxUnder999(Sub) {
    var high = 999
    var low = -999
    $gameVariables._data[Sub] = $gameVariables.value(Sub).clamp(low,high)
    }

})();
