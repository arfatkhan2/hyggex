const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[90.4px] pr-0 pl-1 box-border max-w-full text-left text-smi-4 text-dimgray font-med">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
        <div className="h-[80.6px] w-[217px] flex flex-row items-start justify-start gap-[21.3px]">
          <div className="h-[80.6px] w-[80.6px] relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.769)]"
              loading="lazy"
              alt=""
              src="/group-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10.6px]">
            <b className="relative inline-block min-w-[79px]">Published by</b>
            <img
              className="self-stretch h-[34.5px] relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/component-40-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[299px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-9xl">
          <div className="self-stretch items-center flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-6.svg"
            />
           <div className="flex-1 flex flex-col items-start justify-start pt-13px px-0 pb-0">
  <h3 className="m-0 relative text-inherit font-semibold text-transparent bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text">
    Create Flashcard
  </h3>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
