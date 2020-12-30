<template>
    <div>
        <div id="map" class="map"></div>
    </div>
</template>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=da7c04f311af091ae76c3ea79b4a72b7"></script>
<script>
export default {
    data(){
        return{
            lat: 37.271098002294366,
            lng: 127.06706556639588
        }
    },
    mounted() {
        window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript();
    },
    methods: {
        addKakaoMapScript() {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=da7c04f311af091ae76c3ea79b4a72b7";
            document.head.appendChild(script);
        },
        initMap() {
            var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
            var options = {
                //지도를 생성할 때 필요한 기본 옵션
                center: new kakao.maps.LatLng(this.lat, this.lng), //지도의 중심좌표.
                level: 4 //지도의 레벨(확대, 축소 정도)
            };

            var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

            // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
            var mapTypeControl = new kakao.maps.MapTypeControl();
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            var imageSrc = 'http://localhost:8000/img/maker.d62dcd75.png', // 마커이미지의 주소입니다    
                imageSize = new kakao.maps.Size(50, 55), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                
            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new kakao.maps.LatLng(this.lat, this.lng); // 마커가 표시될 위치입니다

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition, 
                image: markerImage, // 마커이미지 설정 
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            var content = '<div class="customoverlay">' +
                '  <span href="https://map.kakao.com/link/map/11394059" target="_blank">' +
                '    <span class="title">㈜인실리코젠</span>' +
                '  </span>' +
                '</div>';

            // 커스텀 오버레이가 표시될 위치입니다 
            var position = new kakao.maps.LatLng(this.lat, this.lng);  

            // 커스텀 오버레이를 생성합니다
            var customOverlay = new kakao.maps.CustomOverlay({
                map: map,
                position: position,
                content: content,
                yAnchor: 1 
            });
        }
    }
}
</script>

<style>
.map {
    width: 100%;
    height: 500px;
}
.customoverlay {
    position:relative;
    bottom:85px;
    border-radius:6px;
    border: 1px solid #ccc;
    border-bottom:2px solid #ddd;
    float:left;
}
.customoverlay:nth-of-type(n) {
    border:0; 
    box-shadow:0px 1px 2px #888;
}
.customoverlay span {
    display:block;
    text-decoration:none;
    color:#000;
    text-align:center;
    border-radius:6px;
    font-size:14px;
    font-weight:bold;
    overflow:hidden;
    background: #6ab66a;
    background: #6ab66a url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;
}
.customoverlay .title {
    display:block;
    text-align:center;
    background:#fff;
    margin-right:35px;
    padding:10px 15px;
    font-size:14px;
    font-weight:bold;
}
.customoverlay:after {
    content:'';
    position:absolute;
    margin-left:-12px;
    left:50%;
    bottom:-12px;
    width:22px;
    height:12px;
    background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')
}
</style>