var doc = document;

// 通用，获取dom
function gId(n){
    return doc.getElementById(n)
}

// 飞机移动
gId('wrapId').onmouseover = function(e){
    var eL = e.pageX - gId('wrapId').offsetLeft - 20;
    var eT = e.pageY - gId('wrapId').offsetTop - 20;

    gId('planeId').style.left = eL + 'px';
    gId("planeId").style.top = eT + 'px';
}

// 射击dom节点
gId("wrapId").onclick = function(e){
    createBulletFn(e);
}

// 选择x的目标
var _target_x = [];
var _lis = gId('wrapId').querySelectorAll('li');

for(var i =0;i<_lis.length;i++){
    if(_bullet.offsetLeft > _lis[i].offsetLeft
        &&_bullet.offsetLeft<_lis[i].offsetLeft + 60){
            _target_x.push(_lis[i])
        }
}
// 生成目标
function targetListObj(){
    var _arrs = [];
	for(var i=0; i<10;i++){
		var _obj = {}
		_obj._x = Math.floor(Math.random() * 10);
		_obj._y = Math.floor(Math.random() * 10);
		_arrs.push( _obj );
	}
	console.log( _arrs )
	createTargetFn( _arrs )
}
targetListObj()
function createTargetFn(_arrs){
    for(var i=0; i<_arrs.length; i++){
		var _targetBlock = doc.createElement('li');
		_targetBlock.setAttribute('class', 'targetDiv no_boom');
		_targetBlock.style.left = _arrs[i]._x * 80 + 'px';
		gId('wrapId').appendChild( _targetBlock )
	}

	// 获得所有的li
	var _lis = gId('wrapId').querySelectorAll('li');

	// 目标向下移动
	var n = 0;
	var _s = setInterval(function(){
		for(var j = 0; j<_lis.length; j++){
			_lis[j].style.top = ( _arrs[j]._y++ ) * 5 +'px';
			n++;

			if(n>500){
				clearInterval( _s );
				gId('wrapId').removeChild( _lis[j] );
			}
		}
	},100);
}

// 生成子弹
function createBulletFn(e){
    var _bullet = doc.createElement('div');
	_bullet.style.left = e.pageX - gId('wrapId').offsetLeft + 'px';
	_bullet.style.top = e.pageY - gId('wrapId').offsetTop + 'px';
	_bullet.setAttribute('class', 'bulletDiv');

	gId('wrapId').appendChild( _bullet );

    // 目标和子弹y
    var _target_x = [];
	var _lis =gId('wrapId').querySelectorAll('li');

	for(var i=0; i<_lis.length; i++){
		if( _bullet.offsetLeft > _lis[i].offsetLeft 
			&& _bullet.offsetLeft < _lis[i].offsetLeft + 60 ){
			_target_x.push( _lis[i] )
		}
	}

    // 子弹向上运行，消失
    var n = _bullet.offsetTop;
    var _s = setInterval(function(){
        _bullet.style.top = n-- + 'px';

        // 判断是否击中
        if(_target_x.length >=0){
            for(var i = 0;i<_target_x.length;i++){
                if(n == _target_x[i].offsetTop
                    &&_target_x[i].getAttribute('class') != 'targetDiv yes_boom'){
                        _target_x[i].setAttribute('class','targetDiv yes_boom')

                        // 击中清除
                        clearInterval(_s);

                        var _c = setTimeout(function(){
                            gId('wrapId').removeChild( _bullet );
                            clearTimeout( _c );
                        },5);
                }
            }
        }
        // 未击中
        if(n <= 0){
            clearInterval(_s);
            gId('wrapId').removeChild(_bullet);
        }
    },1)
}