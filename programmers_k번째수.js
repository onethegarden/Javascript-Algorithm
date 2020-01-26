
function solution(array, commands) {

   var answer = [];
	var newArr = [];
	for(let i =0; i<commands.length; i++){
		newArr = array.slice(commands[i][0]-1,commands[i][1]);
		newArr.sort(function(a,b){return a-b;});
		//console.log(newArr);
		answer[i]=newArr[commands[i][2]-1];
		//console.log(answer);
	}

    return answer;

}

var array = [1, 5, 2, 6, 3, 7, 4];
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

solution(array, commands);

//2번 테스트케이스에서 실패를 해서 찾아봤더니 js의 sort함수는 string으로 비교를 하기 때문에 100과 20을 비교했을 때 20을 더 크다고 비교한다. 그래서 sort안에 비교함수를 넣어준다.


//다른 사람의 풀이
//메서드 체이닝으로 line수를 줄였고 데이터를 담을 공간을 생성하지 않고 바로 리턴.

function solution2(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}

