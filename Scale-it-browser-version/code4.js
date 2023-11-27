gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.GDNewButtonObjects1= [];
gdjs.Untitled_32scene2Code.GDNewButtonObjects2= [];
gdjs.Untitled_32scene2Code.GDNewButton2Objects1= [];
gdjs.Untitled_32scene2Code.GDNewButton2Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene2Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite11Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite11Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite12Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite12Objects2= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite18Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite18Objects2= [];
gdjs.Untitled_32scene2Code.GDMonkeyObjects1= [];
gdjs.Untitled_32scene2Code.GDMonkeyObjects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite10Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite10Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite9Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite9Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite8Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite8Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite7Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite7Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite6Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite6Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite5Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite5Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite4Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite4Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite3Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite3Objects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects2= [];
gdjs.Untitled_32scene2Code.GDMain_9595Menu_9595MonkeyObjects1= [];
gdjs.Untitled_32scene2Code.GDMain_9595Menu_9595MonkeyObjects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects2= [];


gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite19"), gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1[i].setXOffset(gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1[i].getXOffset() - (30));
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1[i].setYOffset(gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1[i].getYOffset() - (30));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.Untitled_32scene2Code.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene2Code.GDNewButtonObjects1[k] = gdjs.Untitled_32scene2Code.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Untitled scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monkey"), gdjs.Untitled_32scene2Code.GDMonkeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDMonkeyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDMonkeyObjects1[i].getY() >= 3000 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene2Code.GDMonkeyObjects1[k] = gdjs.Untitled_32scene2Code.GDMonkeyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDMonkeyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton2"), gdjs.Untitled_32scene2Code.GDNewButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewButton2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene2Code.GDNewButton2Objects1[k] = gdjs.Untitled_32scene2Code.GDNewButton2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDNewButtonObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewButtonObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewButton2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewButton2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite11Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite11Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite12Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite12Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite18Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite18Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDMonkeyObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDMonkeyObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite10Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite10Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite9Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite9Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite8Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite8Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite7Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite7Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite6Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite6Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite5Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite5Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite4Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite4Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite3Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite3Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDMain_9595Menu_9595MonkeyObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDMain_9595Menu_9595MonkeyObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite19Objects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
