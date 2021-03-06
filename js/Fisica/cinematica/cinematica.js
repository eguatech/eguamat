//Função Espaço Percorrido
function deltas(s0, s){
    return ds=s-s0;
}

//Função Tempo Percorrido
function deltat(t0, t){
    return dt=t-t0;
}

//Função Velocidade Média
function vmed(s,t){
    return (s/t);
}

//Função Aceleração
function acel(v, v0, t, t0) {
    return (v-v0)/(t-t0)+'m/s²';
}

//Função Horária MRU
function mrufh(s0,v,t){
    t=t+1;
    var s = new Array();
    var index = 0;
    for(var i=0;i<t;i++){
        s[index]=s0+v*i;
        index++;
        console.log(s[i]);
    }
    return ["Função: "+s0+"+("+v+")*t"+"<br>"+"Posições: "+s];
}

//Função Horária da Posição MRUV (output: Plotagem Gráfica)
function mrufhp(s0,v, t){
    var s = new Array();
    var x = new Array();
    var index = 0;
    for(var i=0;i<=t;i++){
        s[index]=s0+v*i;
        x[index] = i;
        index++;
        console.log(s[i]);
    }
    return plot(x,s);
}
//Função Gráfico para velocidade em MRU
function mruvel(s0,s,t){
    var v = new Array();
    var x = new Array();
    var index = 0;
    for(var i=0;i<t;i++){
        v[index]=(s-s0)/t;
        x[index]=i;
        index++;
        console.log(v[i]);
    }
    return plot(x,v);
}

//Função Horária da Posição MRUV (output: Espaços)
function mruvfh(s0,v0, t, a){
    var index = 0;
    var s = new Array(t);
    for(var i=0;i<t;i++){
        s[index]=s0+v0*i+((a*i*i)/2);
        index++;
        console.log(s[i]);
    }
    return s;
}
//Função Horária da Posição MRUV (output: Plotagem Gráfica)
function mruvfhp(s0,v0, t, a){
    var index = 0;
    var s = new Array(t);
    var x = new Array();
    for(var i=0;i<t;i++){
        s[i]=s0+v0*i+((a*i*i)/2);
        x[index] = i;
        index++;
        console.log(s[i]);
    }
    return plot(x,s);
}
//Função Gráfico para velocidade em MRUV
function mruvvelp(s0,s,a){
    var vf = new Array();
    var x = new Array();
    var v = new Array();
    var index = 0;
    for(var i=0;i<s;i++){
        v=index;
        vf[index]=Math.sqrt(2*a*(index-s0));
        x[index]=i;
        index++;
        console.log(vf[i]);
    }
    return plot(x,vf);
}

function mruvvel(s0,s,a){
    var vf = new Array();
    var x = new Array();
    var v = new Array();
    var index = 0;
    for(var i=0;i<s;i++){
        v=index;
        vf[index]=Math.sqrt(2*a*(index-s0));
        x[index]=i;
        index++;
        console.log(vf[i]);
    }
    return vf;
}
//Função Inércia
//Função em desenvolvimento
function inercia(m,a) {
    return f=m*a;
}


//Movimento Harmônico Simples (MHS)

//Velocidade Média
//Função em desenvolvimento
function vmmv(s,t){
    return v=s/t;
}
//Velocidade Angular
//Função em desenvolvimento
function van(t){
    return w=(2*Math.PI)/t;
}

//Função Período
//Função em desenvolvimento
function periodo(f){
    return t=1/f;
}