import PhotoCarousel from "@/components/PhotoCarousel";

// ============ 수정할 정보 ============
const WEDDING_INFO = {
  // 사진: public/wedding/ 폴더에 1.jpg, 2.jpg, 3.jpg 넣고 아래 주석 해제
  // images: ["/wedding/1.jpg", "/wedding/2.jpg", "/wedding/3.jpg"],
  images: ["/wedding/3.jpeg", "/wedding/4.jpeg", "/wedding/5.jpeg"],

  mapUrl: "https://map.kakao.com/?q=낙성대공원",
};

// ================================================================

export default function WeddingInvitationPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-8">
      {/* 1. 상단 날짜 & 이름 */}
      <section className="w-full max-w-[500px] mx-auto px-6 py-10 bg-[#f5f3ef]">
        <div className="flex justify-between items-center gap-4">
          <p className="text-stone-600 text-sm font-medium shrink-0">
            Insang Cho
          </p>
          <div className="flex flex-col items-center">
            <span className="text-stone-500 text-2xl font-light tracking-widest">04</span>
            <span className="w-8 border-t border-stone-400 my-1" />
            <span className="text-stone-500 text-2xl font-light tracking-widest">18</span>
          </div>
          <p className="text-stone-600 text-sm font-medium shrink-0">
            Holly Gregory
          </p>
        </div>
        <p className="text-center text-stone-400 text-xs mt-3">2026</p>
      </section>

      {/* 2. 사진 캐러셀 */}
      <section className="w-full max-w-[500px] mx-auto">
        <PhotoCarousel images={WEDDING_INFO.images} />
      </section>

      {/* 3. 결혼합니다 */}
      <section className="px-6 pt-12 pb-8 max-w-[500px] mx-auto">
        <h1 className="text-center font-[var(--font-serif)] text-2xl font-semibold text-stone-800 tracking-tight">
          결혼합니다
        </h1>
        <div className="flex justify-center items-center gap-4 mt-6">
          <p className="font-[var(--font-serif)] text-xl font-medium text-stone-800">
            Holly Gregory
          </p>
          <span className="text-xl text-stone-400">×</span>
          <p className="font-[var(--font-serif)] text-xl font-medium text-stone-800">
            Insang Cho
          </p>
        </div>
      </section>

      {/* 4. 초대의 글 */}
      <section className="px-6 py-8 max-w-[500px] mx-auto">
        <p className="text-center text-stone-600 leading-loose whitespace-pre-line font-[var(--font-serif)] text-[15px]">
          {`서로 다른 길을 걸어온 두 사람이
이제 하나의 길 위에 서려 합니다.
사랑과 믿음으로 쌓아온 시간 끝에
평생을 함께하겠다는 약속을 나누는 자리에
소중한 분들을 초대합니다.
따뜻한 축복으로 함께해 주시면
큰 기쁨이 되겠습니다.`}
        </p>
      </section>

      {/* 5. 혼주 */}
      <section className="px-6 py-8 max-w-[500px] mx-auto">
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <p className="text-stone-500 text-sm mb-2">신랑 측 혼주</p>
            <p className="font-[var(--font-serif)] text-stone-800">
              조한국 · 신길호
            </p>
          </div>
          <div className="text-center">
            <p className="text-stone-500 text-sm mb-2">신부 측 혼주</p>
            <p className="font-[var(--font-serif)] text-stone-800">
              Sally Gregory · John Gregory
            </p>
          </div>
        </div>
      </section>

      {/* 6. 장소 & 일시 */}
      <section className="px-6 py-8 max-w-[500px] mx-auto">
        <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-stone-100 space-y-6">
          <div>
            <p className="text-stone-500 text-sm mb-2 flex items-center gap-1">
              <span>📍</span> 장소
            </p>
            <p className="font-[var(--font-serif)] text-stone-800 font-medium">
              낙성대공원
            </p>
            <p className="text-stone-600 text-sm mt-1">
              (서울특별시 관악구)
            </p>
          </div>
          <div className="border-t border-stone-100 pt-6">
            <p className="text-stone-500 text-sm mb-2 flex items-center gap-1">
              <span>📅</span> 일시
            </p>
            <p className="font-[var(--font-serif)] text-stone-800 font-medium">
              2026년 4월 18일
            </p>
          </div>
          <a
            href={WEDDING_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center mt-4 px-6 py-3 bg-stone-800 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
          >
            지도 보기
          </a>
        </div>
      </section>

      {/* 7. 오시는 길 */}
      <section className="px-6 py-8 max-w-[500px] mx-auto">
        <div className="space-y-6">
          <p className="text-stone-500 text-sm flex items-center gap-1">
            <span>📍</span> 오시는 길
          </p>
          <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-stone-100 space-y-5">
            <div>
              <p className="font-[var(--font-serif)] text-stone-800 font-medium">
                낙성대공원
              </p>
              <p className="text-stone-600 text-sm mt-1">
                서울특별시 관악구 낙성대로 77
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-stone-700 text-sm font-medium flex items-center gap-1">
                <span>🚇</span> 지하철 이용 시
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                2호선 낙성대역 하차<br />
                4번 출구로 나와 도보 약 10분
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-stone-700 text-sm font-medium flex items-center gap-1">
                <span>🚌</span> 버스 이용 시
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                낙성대공원 정류장 하차<br />
                간선: 2, 21<br />
                지선: 5413, 5414<br />
                도보 약 3–5분
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-stone-700 text-sm font-medium flex items-center gap-1">
                <span>🚗</span> 자가용 이용 시
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                내비게이션에 &quot;낙성대공원&quot; 검색<br />
                공원 인근 공영주차장 이용 가능<br />
                <span className="text-stone-500 text-xs">
                  (주차 공간이 제한될 수 있으니 대중교통 이용을 권장드립니다)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 마음 전하기 */}
      <section className="px-6 py-8 max-w-[500px] mx-auto">
        <div className="space-y-4">
          <h2 className="text-center font-[var(--font-serif)] text-lg font-semibold text-stone-800">
            마음 전하기
          </h2>
          <p className="text-center text-stone-500 text-sm">
            축복의 의미로 축의금을 전달해 보세요
          </p>
          <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-stone-100 space-y-5">
            <p className="text-stone-500 text-xs text-center">계좌번호</p>
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <p className="font-[var(--font-serif)] text-stone-800 font-medium shrink-0">
                  신길호
                </p>
                <div className="text-right text-sm text-stone-600">
                  <p>농협은행</p>
                  <p className="font-mono mt-1">044-12-062231</p>
                </div>
              </div>
              <div className="border-t border-stone-100 pt-4 flex justify-between items-start gap-4">
                <p className="font-[var(--font-serif)] text-stone-800 font-medium shrink-0">
                  조한국
                </p>
                <div className="text-right text-sm text-stone-600">
                  <p>국민은행</p>
                  <p className="font-mono mt-1">503202-01-196571</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <p className="text-stone-400 text-sm">감사합니다</p>
      </footer>
    </div>
  );
}
