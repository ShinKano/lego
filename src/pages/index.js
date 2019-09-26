import React from 'react';
import styled from 'styled-components';
//
import titleImage from '../images/legopink.jpg';
import childPlayImage from '../images/child_play.jpg';
import TitleH1 from '../components/atom/TitleH1';
import Img from '../components/atom/Img';


export default () => (
    <SampleSite>
        <DivTitleBg className="is-flex">
            <TitleH1>ひらめきは</TitleH1>
            <TitleH1>手のひらの中に</TitleH1>
        </DivTitleBg>

        <h1 className="is-align-center">サブタイトル</h1>
        <p className="padding-side padding-bottom">この記事は大幅に加筆・修正して「上下中央揃えのCSSまとめ。Flexboxがたった3行で最も手軽 - ICS MEDIA」に引っ越しました。 10万PV、370いいねとフロントエンド界隈でご好評いただいた内容です。ぜひご覧ください。</p>
    
        <div className="is-flex padding-side">
            <div className="is-flex-1 is-align-center">
                <h2>サブタイトル</h2>
                <p>この記事は大幅に加筆・修正して「上下中央揃えのCSSまとめ。Flexboxがたった3行で最も手軽 - ICS MEDIA」に引っ越しました。 10万PV、370いいねとフロントエンド界隈でご好評いただいた内容です。ぜひご覧ください。</p>

            </div>
            
            <div className="is-flex-1 is-align-center padding-left">
                <Img src={childPlayImage}/>
            </div>
        </div>
    
    </SampleSite>
);

const SampleSite = styled.div`
  font-family: 'Muli', sans-serif;
`;

const DivTitleBg = styled.div`
    background-image: url(${titleImage});
    background-size: cover;
    height: 70vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin-bottom: 3rem;
`;


