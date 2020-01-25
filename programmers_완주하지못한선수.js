function solution(participant, completion) {

    var answer = '';

    participant.sort();
    completion.sort();
    
    for(let i in participant){
        if(participant[i]!==completion[i])
           { answer = participant[i];}
	 
	console.log('비교'+participant[i]+':'+ completion[i]);
    }
	console.log('그래서 출력'+answer);
    return answer;

}
​

function solution2(participant, completion) {

    participant.sort();
    completion.sort();
   
    for(let i in participant){

        if(participant[i]!==completion[i]){

            console.log(participant[i]);

            return participant[i];}

    }
}

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

​

console.log('solution1 '+solution(participant, completion));
console.log('solution2 '+solution2(participant, completion));

//답은 solution2 , 1일 경우 비교하고 남은 마지막 값이 정답으로 리턴되어서 안됨