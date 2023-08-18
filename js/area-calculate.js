//  triangle calculation 
document.getElementById('triangle-btn').addEventListener('click', function(){
    const base = getInputFieldValue('triangle-base');
    const height= getInputFieldValue('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return;
    }
    const area = 0.5 * base * height;
    setElementValueById('triangle-area', area);
    addToCalculationEntry('triangle', area);
});

// rectangle calculation 
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const width = getInputFieldValue('rectangle-width');
    const length = getInputFieldValue('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert('please insert number');
        return;
    }
    const area = width * length;
    setElementValueById('rectangle-area', area);
    addToCalculationEntry('rectangle', area);
});

// parallelogram calculation 
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const base= getInputFieldValue('parallelogram-base');
    const height = getInputFieldValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return;
    }
    const area = base * height;
    setElementValueById('parallelogram-area', area);

    addToCalculationEntry('parallelogram', area);
});
// rhombus calculation 
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const d1 = getInputFieldValue('rhombus-d1');
    const d2 = getInputFieldValue('rhombus-d2');
    if(isNaN(d1) || isNaN(d2)){
        alert('please insert number');
        return;
    }
    const area = 0.5 * d1 * d2;
    setElementValueById('rhombus-area', area);
    addToCalculationEntry('rhombus', area);
});
// pentagon calculation 
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const p = getInputFieldValue('pentagon-p');
    const b = getInputFieldValue('pentagon-b');
    if(isNaN(p) || isNaN(b)){
        alert('please insert number');
        return;
    }
    const area = 0.5 * p * b;
    setElementValueById('pentagon-area', area);
    addToCalculationEntry('pentagon', area);
});
// ellipse calculation 
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const a = getInputFieldValue('ellipse-a');
    const b = getInputFieldValue('ellipse-b');
    if(isNaN(a) || isNaN(b)){
        alert('please insert number');
        return;
    }
    const area = 3.1416 * a * b;
    setElementValueById('ellipse-area', area);
    addToCalculationEntry('ellipse', area);
});
