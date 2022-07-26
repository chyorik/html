//1부터 10까지 출력
document.write('1 2 3 4 5 6 7 8 9 10');
document.write('<br><br>');

//1부터 10까지 출력
let  i;
for( i = 1; i <= 10; i++){
    document.write(i + ' ');
}
document.write('<br><br>');
document.write(i);

//1~100, 3의 배수 출력
for(i = 1; i <= 100; i++){
    if(i%3 == 0)
        document.write( i + ' ');
}
document.write('<br><br>');

//1~100, 3의 배수 출력 한 라인에 10개씩 
let  cnt;
for(i = 1, cnt = 0; i <= 100; i++){
    if(i%3 == 0){
        document.write( i + ' ');
        cnt++;
        if(cnt%10 == 0)
            document.write( '<br>');
    }
}
document.write('<br><br>');

//1~100 합
let  hap;
for(i = 1, hap = 0; i <= 100; i++)
    hap += i;
document.write('1~100 합 = ' + hap);
document.write('<br><br>');

//1~100 합
for(i = 1, hap = 0; i <= 100; i++)
    if(i%3 == 0)
        hap += i;
document.write('1~100, 3의 합 = ' + hap);
document.write('<br><br><br><br>');

//1~100 합에서 처음으로 300을 넘는 숫자는
for(i = 1, hap = 0; i <= 100; i++){
    hap += i;
    if (hap >= 300)
        break;
}
document.write('1~100, 300 이상의 첫번째 합= ' + hap);
document.write('<br><br>');
document.write('1~100, 300 이상의 첫번째 수= ' + i)
document.write('<br></br>');

//1~100, 8의 배수를 생략한 합
for(i = 1, hap = 0; i <= 100; i++){
    if (i%8 == 0)
        continue;
        hap+= i;
}
    document.write('1~100, 8의 배수 제외 합=' + hap)



