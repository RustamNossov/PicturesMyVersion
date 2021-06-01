const calc = () => {
    const calculator = document.querySelector('.calc'),
          selects = calculator.querySelectorAll('select'),
          promoCode = calculator.querySelector('.promocode'),
          priceField = calculator.querySelector('.calc-price'),
          prices = {
              'size': {
                  'Выберите размер картины': 0,
                  '40x50': 100,
                  '50x70': 200,
                  '70x70': 300,
                  '70x100': 400
              },
              'material': {
                  'Выберите материал картины': 0,
                  'Холст из волокна': 100,
                  'Льняной холст': 200,
                  'Холст из натурального хлопка': 300
              },
              'options': {
                  'Дополнительные услуги':0, 
                  'Покрытие арт-гелем': 100,
                  'Экспресс-изготовление': 200,
                  'Доставка готовых работ': 300

              }
          },
          promocodesList = {
              'IWANTPOPART': 0.3
          };

    function calculation(){
        let price = 0;
        if (selects[0].value != 'Выберите размер картины' &&
            selects[1].value != 'Выберите материал картины') {
                price = prices.size[selects[0].value] + prices.material[selects[1].value];


                if (selects[2].value != 'Дополнительные услуги') {
                    price += prices.options[selects[2].value];
                }
        
                if (promoCode.value) {
                    for (let key in promocodesList) {
                        if (promoCode.value == key) {
                            price = price - price * promocodesList[key];
                        }
                    }
                }
                priceField.style.fontSize = '22px';
                priceField.innerHTML = `Стоимость будет составлять <br><b>${price}</b> руб.`;
            }
        
        

    }

    selects.forEach( element => {
        element.addEventListener('change', (e)=> {
            calculation();
        })
    })
    
    promoCode.addEventListener('input', (e)=> {
        calculation();
    })




}

export default calc;