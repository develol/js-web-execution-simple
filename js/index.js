var fontSize = 16;
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setAutoScrollEditorIntoView(true);
editor.setFontSize(fontSize);

if(localStorage.JScode!=null){
    editor.setValue(localStorage.JScode);
}

editor.setOptions({
    wrap: true
});

function setFontSize(plus){
    if(plus){
        fontSize=fontSize+4;
        editor.setFontSize(fontSize);
    }else{
        if((fontSize-4)>0){
            fontSize=fontSize-4;
            editor.setFontSize(fontSize);
        }
    }
}

document.getElementById('btnRun').onclick = function(){
    var text = editor.getValue();
    localStorage.setItem('JScode', text);
    try{
        if(text==''){
            alert('EMPTY CODE');
        }else{
            eval(text);
        }
    }catch(e){
        alert('ERROR -> '+e);
    }
}

if(window.screen.width < window.screen.height){
    editor.on("focus", function(){
        document.getElementById('editor').style.height = 'calc(50% - 36px)';
        editor.resize();
    });
    
    editor.on("blur", function(){
        document.getElementById('editor').style.height = 'calc(100% - 48px)';
        editor.resize();
    });
}