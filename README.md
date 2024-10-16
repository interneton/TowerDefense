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

## Send Event 핸들러

### 1. `sendEvent(2, { timeStamp })` - **게임 시작**
- **핸들러 함수**: `gameStart`
- **위치**: `game.handler.js`
- **설명**: 게임을 초기화하고 타워, 스테이지, 유저의 골드와 같은 데이터를 Redis에 동기화합니다. 초기 게임 상태를 클라이언트로 전송합니다.
- **관련 Redis 작업**: 타워, 타워 스탯, 몬스터, 스테이지 동기화.
- **응답**: 게임 시작과 관련된 정보를 클라이언트로 전송 (`gameStart` 이벤트).

---

### 2. `sendEvent(3, {})` - **게임 종료**
- **핸들러 함수**: `gameEnd`
- **위치**: `game.handler.js`
- **설명**: 게임 종료 처리. 유저의 골드와 스테이지를 데이터베이스에 저장하고, Redis에서 캐시 데이터를 제거합니다.
- **응답**: 게임 종료 확인 후 성공 메시지 반환.

---

### 3. `sendEvent(11, { timeStamp, currentStage, targetStage })` - **스테이지 이동**
- **핸들러 함수**: `moveStageHandler`
- **위치**: `stage.handler.js`
- **설명**: 다음 스테이지로 이동을 처리하며, 데이터베이스에 스테이지를 업데이트하고 새로운 몬스터를 생성합니다.
- **응답**: `moveStage` 이벤트를 통해 새로운 몬스터와 스테이지 이동 정보를 클라이언트로 전송.

---

### 4. `sendEvent(21, { towerInven })` - **타워 초기화**
- **핸들러 함수**: `initTowerHandler`
- **위치**: `tower.handler.js`
- **설명**: 유저의 타워를 초기화하고, 이를 데이터베이스의 인벤토리에 저장합니다.
- **응답**: 타워 초기화 성공 후 업데이트된 인벤토리를 클라이언트로 전송.

---

### 5. `sendEvent(22, { towerInven, towerCost })` - **타워 구매**
- **핸들러 함수**: `purchaseTowerHandler`
- **위치**: `tower.handler.js`
- **설명**: 새로운 타워를 구매하는 과정에서 유저의 골드를 차감하고 타워를 인벤토리에 추가합니다.
- **응답**: 타워 구매 성공 후 유저의 골드와 인벤토리를 업데이트.

---

### 6. `sendEvent(23, { towerInven, towercost })` - **타워 업그레이드**
- **핸들러 함수**: `upgradeTowerHandler`
- **위치**: `tower.handler.js`
- **설명**: 타워를 업그레이드하며, 업그레이드 비용을 차감하고 인벤토리를 갱신합니다.
- **응답**: 타워 업그레이드 성공 후 유저 인벤토리와 골드 업데이트.

---

### 7. `sendEvent(24, { towerInven, towercost })` - **타워 판매**
- **핸들러 함수**: `sellTowerHandler`
- **위치**: `tower.handler.js`
- **설명**: 타워를 판매하고, 인벤토리와 골드를 업데이트합니다.
- **응답**: 타워 판매 처리 확인 (현재 해당 핸들러는 구현이 완료되지 않음).

---

### 8. `sendEvent(31, {})` - **몬스터 생성**
- **핸들러 함수**: `spawnMonsterHandler`
- **위치**: `monster.handler.js`
- **설명**: (아직 구현되지 않음) 몬스터 생성을 처리하기 위한 핸들러.
- **응답**: 현재 `null`을 반환.

---

### 9. `sendEvent(32, { spawnId })` - **몬스터 처치**
- **핸들러 함수**: `killMonsterHandler`
- **위치**: `monster.handler.js`
- **설명**: 몬스터를 처치한 후 게임 상태에서 해당 몬스터를 제거하고, 유저에게 골드를 지급하며 Redis에 남은 몬스터 정보를 갱신합니다.
- **응답**: 몬스터 처치 확인 후 클라이언트에 골드 업데이트 전송.

---

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
1. **타워 환불 시스템**
2. **특정 타워 업그레이드**
3. **보물을 가진 고블린 몬스터 등장**

    캐시에 필드에 소환하는 몬스터 리스트를 업로드합니다.
    이 때 stage에 설정된 totalSpawn 양 만큼 몬스터를 리스트에 추가합니다.
    
    마지막으로 spawnGoblin 확률을 가져와서 추가로 확률적으로 황금고블린을 생성 리스트에 추가합니다.

    - **monster.model.js / spawnMonsters() 함수**:
    ```javascript
        if (Math.random() < stageInfo.spawnGoblin / 100) {
            monsters.push({ monster: goldGolin, spawnId: stageInfo,totalSpawn });
        }
    ```