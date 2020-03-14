function solution(arr)
{
    var answer=[];
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(count==0){
            answer[count]=arr[i];
            count++;
        }else{
            if(answer[count-1]!==arr[i]){
             answer[count]=arr[i];
                count++;
            }
        }
    }
    return answer;
}
