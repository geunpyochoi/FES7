class ColaGenerator{
  constructor(){
    this.itemList = document.querySelector('.cola-list');
  }

  async setup(){
    const response = await this.loadData();
    this.colaFactory(response);
  }

  async loadData(){

    try{
      const response = await fetch('./items.json');

    if (!response.ok){
      throw new Error("HTTP ERROR !! : " + response.status);
    }
    return await response.json();
  }
    catch(error) {
      console.log("콜라 데이터를 로딩하는 중에 문제가 발생했습니다." + error);
    }
  }
  // <li>
  //         <!-- JS : 클래스 on 유/무 제어 -->
          // <button type="button" class="btn-cola on">
          //   <img src="./img/cola-original.png" alt="" />
          //   <span class="cola-name">Original_Cola</span>
          //   <strong class="cola-price">1000원</strong>
          // </button>
  //       </li>
  colaFactory(data){
    const docFrag = new DocumentFragment(); // 프래그먼트 쓰면 메모리 절약되니까 이걸로 append하자.
    data.forEach((el)=>{
      const item = document.createElement('li');
      const itemTemplate = `<button type="button" class="btn-cola on">
            <img src="./img/cola-original.png" alt="" />
            <span class="cola-name">Original_Cola</span>
            <strong class="cola-price">1000원</strong>
          </button>`;
      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}

export default ColaGenerator; // 콜라제너레이터를 밖으로 빼줄거임.