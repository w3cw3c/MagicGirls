(function(){
  const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'CallSemen') {
        var SemenPart = args[0]
        if(args[2] != null){
            if (args[2].match(/\\v/)) {//変数を含む場合の処理
                array = args[2].match(/[0-9]+\.?[0-9]*/g);
                for(var i = 0; i < array.length; i++) {//戦闘の場合自動加算したい？
                    args[2] = Number(array);
                    var SemenMath = $gameVariables.value(args[2]);
                }
            }else{
                var SemenMath = Number(args[2])
            }
        }else{
            var SemenMath = 1
        }

        if(args[3] >= 1 || $gameSwitches.value(1982)){//1の場合回想
            var SemenScene = 1
        }else{
            var SemenScene = 0
        }

        //射精エフェクト
        var semenseid = args[1];
        //ランダム
        if(semenseid === "Random"){
            semenseid = "Semen01"
        }else if(semenseid === "RandomMulti"){
            semenseid = "SemenMulti01"
        }else if(semenseid === "0"){
            semenseid = "NoEffect"
        }else{}

        if(semenseid === "NoEffect"){
        }
        else if(semenseid != 0 || semenseid != null){
            
            var volume = 90;
            var pitch = 100;
            var pan = 0;
            var index = $se_list.seID.indexOf(semenseid);
            
            if(index != -1){
              var file =  $se_list.File[index];
              AudioManager.playSe({
                name: file,
                volume: isNaN(volume) ? 90 : volume,
                pitch: isNaN(pitch) ? 100 : pitch,
                pan: isNaN(pan) ? 0 : pan
              });
            }else{
              console.error(semenseid + ' は見つかりません');
            }
        }

        if(semenseid === "NoEffect"){
        }else{
            $gameScreen.startFlash([221,221,221,170], 60)
            this.wait(60)
        }
        

        //回想中分岐
        if(SemenScene == 0){
            
            
            if(SemenPart == '顔' || SemenPart == 'Face'){
                $gameVariables._data[941] = $gameVariables.value(941) + SemenMath
                $gameActors.actor(1).addState(39)
                $gameVariables._data[2020] = $gameVariables.value(2020) + SemenMath//ぶっかけ値
            }
            else if(SemenPart == '身体' || SemenPart == 'Body'){
                $gameVariables._data[942] = $gameVariables.value(942) + SemenMath
                $gameActors.actor(1).addState(36)
                $gameVariables._data[2020] = $gameVariables.value(2020) + SemenMath//ぶっかけ値
            }
            else if(SemenPart == '膣' || SemenPart == 'Vagina'){
                $gameVariables._data[944] = $gameVariables.value(944) + SemenMath
                $gameActors.actor(1).addState(37)
                if($gameSwitches.value(200)){$gameVariables._data[360] = 1}//戦闘中、射精で解放する処理
            }
            else if(SemenPart == '肛穴' || SemenPart == 'Anus'){
                $gameVariables._data[945] = $gameVariables.value(945) + SemenMath
                $gameActors.actor(1).addState(38)
                if($gameSwitches.value(200)){$gameVariables._data[360] = 2}//戦闘中、射精で解放する処理
            }
            else if(SemenPart == '口' || SemenPart == 'Mouth'){
                $gameVariables._data[943] = $gameVariables.value(943) + SemenMath
                $gameActors.actor(1).addState(39)
                if($gameSwitches.value(200)){$gameVariables._data[360] = 3}//戦闘中、射精で解放する処理
                this.pluginCommand('SkillSemenDrunker',[0]);//飲精スキル
            }

            if($gameVariables.value(360) == 1){$gameVariables._data[352] = 0}
            if($gameVariables.value(360) == 2){$gameVariables._data[353] = 0}
            if($gameVariables.value(360) == 3){$gameVariables._data[351] = 0}

            $gameVariables._data[360] = 0

            this.pluginCommand('SkillSemenHeal',[0]);//吸精スキル
            this.pluginCommand('SkillDrainSl',[0]);//吸魂スキル



        }else{
            if(SemenPart == '顔' || SemenPart == 'Face'){$gameVariables._data[2517] = $gameVariables.value(2517) + SemenMath}
            else if(SemenPart == '身体' || SemenPart == 'Body'){$gameVariables._data[2516] = $gameVariables.value(2516) + SemenMath}
            else if(SemenPart == '膣' || SemenPart == 'Vagina'){
                $gameVariables._data[2519] = $gameVariables.value(2519) + SemenMath
            }
            else if(SemenPart == '肛穴' || SemenPart == 'Anus'){
                $gameVariables._data[2520] = $gameVariables.value(2520) + SemenMath
            }
            else if(SemenPart == '口' || SemenPart == 'Mouth'){
                $gameVariables._data[2518] = $gameVariables.value(258) + SemenMath
            }
        }



        $gameVariables._data[612] = 0


            
    }
  };
})();