---
title: "Reasoning Token을 어떻게 줄일 수 있을까?"
description: "품질을 유지하면서 비용을 줄이려는 고민"
pubDate: 2026-06-29
---

# Reasoning Token을 줄여야 하는 이유

비슷한 출력을 내는 두 모델을 비교할 때, Reasoning Token을 적게 출력하는 모델이 더 좋다고 말할 수 있다.
Reasoning token이 늘어날수록 응답 시간이 지연된다.
같은 결론을 내리는 데 더 많은 계산 비용이 들어간다는 것을 뜻한다.

모델 개발자 입장에서 많은 연구가 이뤄지고 있는 분야이기도 하다.
Qwen 모델이, 특히나 양자화된 경우, 돌고 도는 reasoning을 계속 한다는 문제를 익히 들어 왔다.
실제로 사이드 프로젝트를 진행하면서도 Qwen3.5 모델을 사용할 때 과도하게 응답시간이 늘어지고,
그동안 다른 요청을 받지 못해서 TPS가 줄어드는 문제를 발견했다.

이를 처리하기 위해 모델 학습 과정에서 불필요한 reasoning을 줄이는 방법에 대한 논문들도 나오고 있다.
[이런거](https://arxiv.org/pdf/2606.03503),
[저런거](https://arxiv.org/pdf/2604.10072),
[요런것들](https://github.com/ZLKong/Awesome-Collection-Token-Reduction#language)

불필요한 reasoning을 줄이는 과업은 모델 개발자뿐만 아니라 API 사용자에게도 중요한 일이다.
Reasoning 토큰은 통상 Output Token으로 처리되며, LLM Provider는 Output token에 Input token보다 더 많은 가격을 매긴다.
또 중간 사고 과정은 API 호출자에게 주어지지 않아서 이후 호출에 활용될 수 없다.
같은 맥락에 대해 조금씩 다르게 병렬 요청을 보낸다고 하자.
맥락이 같기 때문에 reasoning 과정은 비슷할 가능성이 높다.
그러나 이 reasoning 과정은 공유되지 않기 때문에 n개의 요청에서 n개의 reasoning 과정이 중복으로 일어나게 된다.
비슷한 reasoning을 한 번으로 줄이는 방법을 찾을 수만 있다면, API 호출자 입장에서는 좋은 비용 절약의 기회가 될 수 있다.
