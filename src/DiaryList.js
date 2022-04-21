import DiaryData from "./DiaryData";

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryData key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};
// 디폴트 props []로 설정;
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
