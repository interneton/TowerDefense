# 7조의 환상적인 타워 디펜스 게임 프로젝트 

## 👥 우리의 영웅들
- 김형구 
- 변우영 
- 이동은 
- 정효상 
- 김현하 
- 임동혁 

## 🌟 게임 소개
타워 디펜스 게임은 전략과 액션이 어우러진 흥미진진한 장르입니다! 
여러분은 강력한 타워들을 맵 곳곳에 배치하여 끊임없이 밀려오는 적들을 물리쳐야 합니다.

우리 팀이 만든 이 특별한 타워 디펜스 게임은 기본에 충실하면서도 
독특하고 재미있는 요소들을 가득 담아 여러분을 기다리고 있습니다!

다음은 `game.js` 파일에 있는 `sendEvent` 함수들에 대한 한국어 문서입니다:

---

## Send Event 함수

### `sendEvent(handlerId, payload)`
- **설명**: 이 함수는 이벤트를 서버로 보내기 위해 사용되며, 사용자 ID, 클라이언트 버전, 핸들러 ID, 그리고 사용자 정의 데이터를 포함한 payload를 전달합니다.
- **매개변수**:
  - `handlerId`: 보내는 이벤트 유형을 식별하는 고유 ID.
  - `payload`: 이벤트에 포함될 사용자 정의 데이터.
- **사용 예시**:
  ```js
  sendEvent(21, { towerInven: towers });
  ```
---

### 주요 이벤트 핸들러

1. **이벤트 11**: 
   - **역할**: 스테이지 클리어 확인 후, 다음 스테이지로 이동할 때.
   - **전달 데이터**: `timeStamp`, `currentStage`, `targetStage`.
   - **예시**:
     ```js
     sendEvent(11, { timeStamp: Date.now(), currentStage: stage, targetStage: stage + 1 });
     ```

2. **이벤트 21**:
   - **역할**: 초기 타워를 배치한 후.
   - **전달 데이터**: `towerInven` (타워 배열).
   - **예시**:
     ```js
     sendEvent(21, { towerInven: towers });
     ```

3. **이벤트 22**:
   - **역할**: 새 타워를 배치할 때.
   - **전달 데이터**: `towerInven` (타워 배열), `towerCost` (배치한 타워의 비용).
   - **예시**:
     ```js
     sendEvent(22, { towerInven: towers, towerCost: tower.cost });
     ```

4. **이벤트 23**:
   - **역할**: 타워를 업그레이드할 때.
   - **전달 데이터**: `towerInven` (타워 배열), `towercost` (업그레이드 비용).
   - **예시**:
     ```js
     sendEvent(23, { towerInven: towers, towercost: newTower.cost });
     ```

5. **이벤트 24**:
   - **역할**: 타워를 판매할 때.
   - **전달 데이터**: `towerInven` (타워 배열), `towercost` (판매 금액).
   - **예시**:
     ```js
     sendEvent(24, { towerInven: towers, towercost: salePrice });
     ```

6. **이벤트 32**:
   - **역할**: 몬스터를 처치했을 때.
   - **전달 데이터**: `spawnId` (처치된 몬스터의 ID).
   - **예시**:
     ```js
     sendEvent(32, { spawnId: monster.id });
     ```

## 🚀 구현한 도전 기능들
1. 타워 환불 시스템
2. 특정 타워 업그레이드
3. 보물을 가진 고블린 몬스터 등장
