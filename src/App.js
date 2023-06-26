import React, { useState, useEffect } from 'react';
import StationSelector from './components/StationSelector';
import Game from './components/Game';
import './App.css';
import icon_train from './images/train.png';

function App() {
  const [selectedLine, setSelectedLine] = useState('山手線');
  const [stations, setStations] = useState([]);

  const handleLineChange = (event) => {
    setSelectedLine(event.target.value);
    loadStations();
  };

  useEffect(() => {
    loadStations();
  }, [selectedLine]);

  const loadStations = () => {
    // 路線ごとの駅の配列をここで設定する
    if (selectedLine === '山手線') {
      setStations(['東京', '有楽町', '新橋', '浜松町', '田町', '高輪ゲートウェイ', '品川', '大崎', '五反田', '目黒', '恵比寿', '渋谷', '原宿', '代々木', '新宿', '新大久保', '高田馬場', '目白', '池袋', '大塚', '巣鴨', '駒込', '田端', '西日暮里', '日暮里', '鶯谷', '上野', '御徒町', '秋葉原', '神田']);
    } else if (selectedLine === '銀座線') {
      setStations(['渋谷', '表参道', '外苑前', '青山一丁目', '赤坂', '見附溜池', '山王', '虎ノ門', '新橋', '銀座', '京橋（東京）', '日本橋（東京）', '三越前', '神田（東京）', '末広町（東京）', '上野', '広小路', '上野稲荷町（東京）', '田原町（東京）', '浅草']);
    } else if (selectedLine === '丸ノ内線') {
      setStations(['池袋', '新大塚', '茗荷谷', '後楽園', '本郷三丁目', '御茶ノ水', '淡路町', '大手町（東京）', '東京', '銀座', '霞ヶ関（東京）', '国会議事堂前', '赤坂見附', '四ッ谷', '四谷三丁目', '新宿御苑前', '新宿三丁目', '新宿', '西新宿', '中野坂上', '新中野', '東高円寺', '新高円寺', '南阿佐ヶ谷', '荻窪', '中野新橋', '中野富士見町', '方南町']);
    } else if (selectedLine === '日比谷線') {
      setStations(['北千住', '南千住', '三ノ輪', '入谷（東京）', '上野', '仲御徒町', '秋葉原', '小伝馬町', '人形町', '茅場町', '八丁堀（東京）', '築地', '東銀座', '銀座', '日比谷', '霞ヶ関（東京）', '虎ノ門ヒルズ', '神谷町', '六本木', '広尾', '恵比寿（東京）', '中目黒']);
    } else if (selectedLine === '東西線') {
      setStations(['西船橋', '原木中山', '妙典', '行徳', '南行徳', '浦安（千葉）', '葛西', '西葛西', '南砂町', '東陽町', '木場（東京）', '門前仲町', '茅場町', '日本橋（東京）', '大手町（東京）', '竹橋', '九段下', '飯田橋', '神楽坂', '早稲田（東京メトロ）', '高田馬場', '落合（東京）', '中野（東京）', '高円寺', '阿佐ヶ谷', '荻窪', '西荻窪', '吉祥寺', '三鷹']);
    } else if (selectedLine === '千代田線') {
      setStations(['代々木上原', '代々木公園', '明治神宮前', '表参道', '乃木坂', '赤坂（東京）', '国会議事堂前', '霞ヶ関（東京）', '日比谷', '二重橋前', '大手町（東京）', '新御茶ノ水', '湯島', '根津', '千駄木', '西日暮里', '町屋', '北千住', '綾瀬', '北綾瀬', '亀有', '金町（東京）', '松戸', '北松戸', '馬橋', '新松戸', '北小金', '南柏', '柏', '北柏', '我孫子', '天王台', '取手']);
    } else if (selectedLine === '有楽町線') {
      setStations(['新木場', '辰巳', '豊洲', '月島', '新富町（東京）', '銀座一丁目（東京）', '有楽町', '桜田門', '永田町', '麹町', '市ヶ谷', '飯田橋', '江戸川橋', '護国寺', '東池袋', '池袋', '要町', '千川', '小竹向原', '氷川台', '平和台（東京）', '地下鉄赤塚', '地下鉄成増', '和光市']);
    } else if (selectedLine === '半蔵門線') {
      setStations(['押上', '錦糸町', '住吉（東京）', '清澄白河', '水天宮前（東京）', '三越前', '大手町（東京）', '神保町', '九段下', '半蔵門', '永田町', '青山一丁目', '表参道', '渋谷']);
    } else if (selectedLine === '南北線') {
      setStations(['目黒', '白金台', '白金高輪', '麻布十番', '六本木一丁目', '溜池山王', '永田町', '四ッ谷', '市ヶ谷', '飯田橋', '後楽園', '東大前', '本駒込', '駒込', '西ヶ原', '王子', '王子神谷', '志茂', '赤羽岩淵']);
    } else if (selectedLine === '副都心線') {
      setStations(['和光市', '地下鉄成増', '地下鉄赤塚', '平和台（東京）', '氷川台', '小竹向原', '千川', '要町', '池袋', '雑司が谷（東京メトロ）', '西早稲田', '東新宿', '新宿三丁目', '北参道', '明治神宮前', '渋谷']);
    } else if (selectedLine === '御堂筋線') {
      setStations(['千里中央', '桃山台', '緑地公園', '江坂', '東三国', '新大阪', '西中島南方', '中津', '梅田', '淀屋橋', '本町', '心斎橋', 'なんば', '大国町', '動物園前', '天王寺', '昭和町', '西田辺', '長居', 'あびこ', '北花田', '新金岡', 'なかもず']);
    }
  };

  return (
    <div className="common">
      <div className="common_inner">
        <div className='title'>
          <img className='icon' src={icon_train} />山手線ゲーム<img className='icon' src={icon_train} />
        </div>
        <div className='detail'>選択した路線の駅の中から<br />ランダムに1つ選びます。</div>
        <StationSelector selectedLine={selectedLine} onLineChange={handleLineChange} />
        <Game stations={stations} />
      </div>
    </div>
  );
};

export default App;
