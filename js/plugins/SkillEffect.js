

(function(){
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        var ActorID = 1

        if (command === 'SkillSemenDrunker') {
            var SkillLV = $gameVariables.value(1240)
            if(SkillLV != 0){
                $gameVariables._data[2027] = $gameVariables.value(2027) + SkillLV
            }//飲精スキル
        }

        if (command === 'SkillSemenHeal') {
            var SkillLV = $gameVariables.value(1212)
            if(SkillLV != 0){
                var HealMathHP = $gameVariables.value(612)
                var HealMathMP = $gameVariables.value(612)
                HealMathHP *= 100
                HealMathMP *= 10
                $gameActors.actor(ActorID).gainHp(HealMathHP)
                $gameActors.actor(ActorID).gainMp(HealMathMP)
            }//吸精
        }

        if (command === 'SkillDrainSl') {
            var SkillLV = $gameVariables.value(1206) 
            if(SkillLV != 0){
                $gameVariables._data[2217] = $gameVariables.value(2217) + $gameVariables.value(612)
            }//吸魂
        }

        if (command === 'SkillSexualAppeal') {
            var SkillLV = $gameVariables.value(1200) 
            if(SkillLV != 0){
                $gameVariables._data[1502] = $gameVariables.value(1502) + SkillLV//痴漢
                //その他変質者
            }//痴漢遭遇率など
        }






    
    
    };          
})();