window.BENCHMARK_DATA = {
  "lastUpdate": 1721014294515,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd705f8031f944afb22d53c6d7c52ad070ce6bb",
          "message": "Merge pull request #3690 from riemannulus/ci/benchmark/use-large-runner\n\n🔀 ci: use large runner",
          "timestamp": "2024-03-08T16:33:12+09:00",
          "tree_id": "338c9f6bc38dfb9bc884984ee4efbfe67e0e2cbf",
          "url": "https://github.com/planetarium/libplanet/commit/1cd705f8031f944afb22d53c6d7c52ad070ce6bb"
        },
        "date": 1709883755402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967698.6989247312,
            "unit": "ns",
            "range": "± 70075.34762168271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1836328.8648648649,
            "unit": "ns",
            "range": "± 61376.73097815299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1622449.6489361702,
            "unit": "ns",
            "range": "± 127023.67594709258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7766928.339285715,
            "unit": "ns",
            "range": "± 334275.1189793862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5615271.357142857,
            "unit": "ns",
            "range": "± 23778.785114393115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14246643.785714285,
            "unit": "ns",
            "range": "± 84304.12466907999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36683859.64285714,
            "unit": "ns",
            "range": "± 222227.33543200485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75673326.07142857,
            "unit": "ns",
            "range": "± 357894.5544824974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148623854.42857143,
            "unit": "ns",
            "range": "± 322868.1478002375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739357.636418269,
            "unit": "ns",
            "range": "± 3227.017910435657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219426.7916666667,
            "unit": "ns",
            "range": "± 2239.070145011453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756453.5592215402,
            "unit": "ns",
            "range": "± 1264.8004941476593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942070.5128348214,
            "unit": "ns",
            "range": "± 2688.7798620683657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613913.4108072916,
            "unit": "ns",
            "range": "± 683.5874207780245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573732.2595052083,
            "unit": "ns",
            "range": "± 679.967272685228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417277.4411764704,
            "unit": "ns",
            "range": "± 38826.14568411116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489799.25,
            "unit": "ns",
            "range": "± 72375.02459407428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3144289.48,
            "unit": "ns",
            "range": "± 81967.71913641777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3162789.6447368423,
            "unit": "ns",
            "range": "± 160552.2139413181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8689520.4,
            "unit": "ns",
            "range": "± 167258.05648009904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36389.01724137931,
            "unit": "ns",
            "range": "± 1973.8769244994407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203061.95,
            "unit": "ns",
            "range": "± 6648.516622487094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195270.03333333333,
            "unit": "ns",
            "range": "± 5715.241205175275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161936.92307692306,
            "unit": "ns",
            "range": "± 1957.4131509698566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3200198.566666667,
            "unit": "ns",
            "range": "± 52810.568524906164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802839.5,
            "unit": "ns",
            "range": "± 16817.569918437635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12853.301075268817,
            "unit": "ns",
            "range": "± 1151.62265280575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60571.4625,
            "unit": "ns",
            "range": "± 2997.8142984841816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96256.38144329897,
            "unit": "ns",
            "range": "± 8825.785856704324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56526.510416666664,
            "unit": "ns",
            "range": "± 8224.19289080415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2829.413043478261,
            "unit": "ns",
            "range": "± 349.9898319456735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11911.75974025974,
            "unit": "ns",
            "range": "± 610.6348810566667"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5716038dda700b49d47668e22fa8a6637d2e63a",
          "message": "Merge pull request #3688 from riemannulus/introduce/libplanet.store.remote",
          "timestamp": "2024-03-08T18:20:31+09:00",
          "tree_id": "56c5ac4603fa37d1f9bb8d744b3c1951d8b80316",
          "url": "https://github.com/planetarium/libplanet/commit/b5716038dda700b49d47668e22fa8a6637d2e63a"
        },
        "date": 1709890219844,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996628.43,
            "unit": "ns",
            "range": "± 99514.7108025048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870161.861111111,
            "unit": "ns",
            "range": "± 60375.68987604804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612778.7234042552,
            "unit": "ns",
            "range": "± 146343.60137603426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7781932.76744186,
            "unit": "ns",
            "range": "± 288489.0102303839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5614312.833333333,
            "unit": "ns",
            "range": "± 12387.933005611352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14293182.733333332,
            "unit": "ns",
            "range": "± 80227.22103898462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36548835.766666666,
            "unit": "ns",
            "range": "± 151461.12953091614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74874284.78571428,
            "unit": "ns",
            "range": "± 246327.74879359367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151441538.2142857,
            "unit": "ns",
            "range": "± 638865.1537755689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3651342.689453125,
            "unit": "ns",
            "range": "± 3601.307741219418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203414.191796875,
            "unit": "ns",
            "range": "± 1808.7198416343492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761738.1198567708,
            "unit": "ns",
            "range": "± 975.9623332030963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925663.6208333333,
            "unit": "ns",
            "range": "± 4528.878889598706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611843.5336216518,
            "unit": "ns",
            "range": "± 415.94317444130775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579314.1059570312,
            "unit": "ns",
            "range": "± 410.88342873488523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2350218.827586207,
            "unit": "ns",
            "range": "± 47365.82435535213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2461988.4285714286,
            "unit": "ns",
            "range": "± 41143.23331784415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3087009.8571428573,
            "unit": "ns",
            "range": "± 35453.90009273612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3192625.2,
            "unit": "ns",
            "range": "± 129963.31751083542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8888759,
            "unit": "ns",
            "range": "± 227430.2450321518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35659.79761904762,
            "unit": "ns",
            "range": "± 1605.6085794351336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205168.5,
            "unit": "ns",
            "range": "± 8280.726925105262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191235.6181818182,
            "unit": "ns",
            "range": "± 7309.964798240491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163811.31578947368,
            "unit": "ns",
            "range": "± 3183.772867607647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3179576.1333333333,
            "unit": "ns",
            "range": "± 24864.02828777425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878024.3571428573,
            "unit": "ns",
            "range": "± 36835.29646038125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12200.636363636364,
            "unit": "ns",
            "range": "± 637.0676843552502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60322.782608695656,
            "unit": "ns",
            "range": "± 2706.103123277223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61883.833333333336,
            "unit": "ns",
            "range": "± 1828.8632249029172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58415.15306122449,
            "unit": "ns",
            "range": "± 9715.924682452704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2994.305263157895,
            "unit": "ns",
            "range": "± 334.07516270101047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11982.084415584415,
            "unit": "ns",
            "range": "± 626.814132415691"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d95f209e8358f2f90568cfc4de9ff819c8eea40",
          "message": "Merge pull request #3691 from riemannulus/release/4.1.0\n\n🚀  release: 4.1.0",
          "timestamp": "2024-03-08T18:41:55+09:00",
          "tree_id": "47ecf2c1422b8b0c0364b1cf8110a0853147d579",
          "url": "https://github.com/planetarium/libplanet/commit/7d95f209e8358f2f90568cfc4de9ff819c8eea40"
        },
        "date": 1709891509902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976564.6979166666,
            "unit": "ns",
            "range": "± 92835.37502716354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841703.7073170731,
            "unit": "ns",
            "range": "± 66075.77366336467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1630436.1979166667,
            "unit": "ns",
            "range": "± 137958.610618404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7651758.020833333,
            "unit": "ns",
            "range": "± 299031.2044207761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5598685.653846154,
            "unit": "ns",
            "range": "± 12162.809940183462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14156283.066666666,
            "unit": "ns",
            "range": "± 89305.41670779204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37049518.071428575,
            "unit": "ns",
            "range": "± 99888.17647862673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72871500.16666667,
            "unit": "ns",
            "range": "± 151329.7806600078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151399982.35714287,
            "unit": "ns",
            "range": "± 688418.8506242858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718532.009765625,
            "unit": "ns",
            "range": "± 6796.272465074804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216527.7349330357,
            "unit": "ns",
            "range": "± 2360.8629785445482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771469.6642127404,
            "unit": "ns",
            "range": "± 609.9254890989702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942909.9677083334,
            "unit": "ns",
            "range": "± 7119.205982827709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618676.277204241,
            "unit": "ns",
            "range": "± 626.9174542238933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572477.9785853794,
            "unit": "ns",
            "range": "± 674.6613366401938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2340625.936170213,
            "unit": "ns",
            "range": "± 91127.5861226408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492479.6,
            "unit": "ns",
            "range": "± 53727.159597229846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3169832.923076923,
            "unit": "ns",
            "range": "± 86207.13439207828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3209231.1341463416,
            "unit": "ns",
            "range": "± 115458.82243071686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8778044.216216216,
            "unit": "ns",
            "range": "± 232461.0135622668"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35735.67415730337,
            "unit": "ns",
            "range": "± 1873.2800340050176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204320.42105263157,
            "unit": "ns",
            "range": "± 4427.6572977364485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190119.42857142858,
            "unit": "ns",
            "range": "± 7780.576545258288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167525.5,
            "unit": "ns",
            "range": "± 2625.644382447273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3178143.5,
            "unit": "ns",
            "range": "± 36848.53420422582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834383.3,
            "unit": "ns",
            "range": "± 41691.66215581103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13914.848484848484,
            "unit": "ns",
            "range": "± 3006.9903909894333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60682.57831325301,
            "unit": "ns",
            "range": "± 3133.237665934595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52981.3,
            "unit": "ns",
            "range": "± 763.7972469724925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57572.5918367347,
            "unit": "ns",
            "range": "± 8600.894238855277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2927.3023255813955,
            "unit": "ns",
            "range": "± 269.8972819760463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11934.904761904761,
            "unit": "ns",
            "range": "± 557.2030010075297"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b96bef3ed28520b43e8779dbec5087131d48cf98",
          "message": "Merge pull request #3692 from riemannulus/prepare/4.2.0\n\n🚀 prepare: 4.2.0",
          "timestamp": "2024-03-08T19:32:11+09:00",
          "tree_id": "a1e22e4e11ca2f7252c1d598507a159fff85889d",
          "url": "https://github.com/planetarium/libplanet/commit/b96bef3ed28520b43e8779dbec5087131d48cf98"
        },
        "date": 1709894483733,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928284.0253164558,
            "unit": "ns",
            "range": "± 47799.05910402547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861755.9130434783,
            "unit": "ns",
            "range": "± 71666.83020751142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1629787.96,
            "unit": "ns",
            "range": "± 163308.7122221746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7700382.32,
            "unit": "ns",
            "range": "± 201890.80661724048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5573828.833333333,
            "unit": "ns",
            "range": "± 36480.085881921674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14253235.285714285,
            "unit": "ns",
            "range": "± 69192.27130937783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36975624.266666666,
            "unit": "ns",
            "range": "± 395030.5452608275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73852720.66666667,
            "unit": "ns",
            "range": "± 642928.4123324936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149022380,
            "unit": "ns",
            "range": "± 1023606.1084185881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718705.001201923,
            "unit": "ns",
            "range": "± 8705.931837160551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206184.2998697916,
            "unit": "ns",
            "range": "± 13841.63192717928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753830.5583984375,
            "unit": "ns",
            "range": "± 7195.431028290295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921766.83984375,
            "unit": "ns",
            "range": "± 12767.484827050035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608481.3503255208,
            "unit": "ns",
            "range": "± 6473.600630365027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569133.0618489584,
            "unit": "ns",
            "range": "± 6283.490913645994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2383039.310810811,
            "unit": "ns",
            "range": "± 79381.63310756667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2544294.48,
            "unit": "ns",
            "range": "± 36197.947458062685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3131674,
            "unit": "ns",
            "range": "± 98686.75707365343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3164934.196969697,
            "unit": "ns",
            "range": "± 139720.20908242848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9124443.88372093,
            "unit": "ns",
            "range": "± 258977.56001733776"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35984.090361445786,
            "unit": "ns",
            "range": "± 1798.581616204799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198658.92307692306,
            "unit": "ns",
            "range": "± 5138.8215218906125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191998.93181818182,
            "unit": "ns",
            "range": "± 6316.268056220684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166880.4375,
            "unit": "ns",
            "range": "± 3264.3043152408445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166985.7,
            "unit": "ns",
            "range": "± 30527.8075067868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808923.2333333334,
            "unit": "ns",
            "range": "± 36635.61297322333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12563.372093023256,
            "unit": "ns",
            "range": "± 694.4034603890403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69644.79545454546,
            "unit": "ns",
            "range": "± 2571.663705269823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52702.93548387097,
            "unit": "ns",
            "range": "± 1581.4277923337477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57456.885416666664,
            "unit": "ns",
            "range": "± 8514.61746258168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2856.18085106383,
            "unit": "ns",
            "range": "± 250.18895924540743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11530.597014925374,
            "unit": "ns",
            "range": "± 561.573602388899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9671f7952a37890619ef9b0fd41709719331afbe",
          "message": "Merge pull request #3695 from riemannulus/ci/use/self-hosted-macos\n\nci: use self-hosted macos",
          "timestamp": "2024-03-14T14:54:36+09:00",
          "tree_id": "703011aae57abc4e5aa6fa7b1e4ced12b79af3d1",
          "url": "https://github.com/planetarium/libplanet/commit/9671f7952a37890619ef9b0fd41709719331afbe"
        },
        "date": 1710396245170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989410.75,
            "unit": "ns",
            "range": "± 74311.1161598742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1980198.593220339,
            "unit": "ns",
            "range": "± 87621.25169101755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1751642.9791666667,
            "unit": "ns",
            "range": "± 125250.95701703751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7656100.064516129,
            "unit": "ns",
            "range": "± 230192.400997504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5743065.291666667,
            "unit": "ns",
            "range": "± 148532.73307634456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14842890.933333334,
            "unit": "ns",
            "range": "± 137330.7410817646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38170645.93333333,
            "unit": "ns",
            "range": "± 203180.2493295992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76492919.53333333,
            "unit": "ns",
            "range": "± 486706.7709080029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152154277.26666668,
            "unit": "ns",
            "range": "± 564289.849210931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3769939.6975446427,
            "unit": "ns",
            "range": "± 11275.905329188665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198994.716796875,
            "unit": "ns",
            "range": "± 2274.033461616917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763713.1814313616,
            "unit": "ns",
            "range": "± 1157.8225832195767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966572.603794643,
            "unit": "ns",
            "range": "± 3377.38486953708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614622.7698102678,
            "unit": "ns",
            "range": "± 1348.0964232221133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565129.574358259,
            "unit": "ns",
            "range": "± 587.4743986368401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2461856.923076923,
            "unit": "ns",
            "range": "± 85753.21654252197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2585892.8666666667,
            "unit": "ns",
            "range": "± 41257.143853894595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3263224.5,
            "unit": "ns",
            "range": "± 46592.3687094951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3273996.704225352,
            "unit": "ns",
            "range": "± 159777.44471584703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8955410.352941176,
            "unit": "ns",
            "range": "± 176635.00632165317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36117.967391304344,
            "unit": "ns",
            "range": "± 2086.1821191089293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208974.92,
            "unit": "ns",
            "range": "± 10559.98041659732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195401.8875,
            "unit": "ns",
            "range": "± 9884.110845950263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164899.76923076922,
            "unit": "ns",
            "range": "± 2246.642426446116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3307679.769230769,
            "unit": "ns",
            "range": "± 18671.31463481636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2918649.4285714286,
            "unit": "ns",
            "range": "± 26753.180577166997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15290.275510204081,
            "unit": "ns",
            "range": "± 2981.6292777801395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69394.75531914894,
            "unit": "ns",
            "range": "± 6830.036961968297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88803.33333333333,
            "unit": "ns",
            "range": "± 1141.9880060931491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87693.84375,
            "unit": "ns",
            "range": "± 13898.14896976771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3796.863157894737,
            "unit": "ns",
            "range": "± 739.0934298830591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15124.010638297872,
            "unit": "ns",
            "range": "± 2371.7475556280324"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fc05429fba439add17e3c91f90d4fff3e17bd9f",
          "message": "Merge pull request #3685 from s2quake/chore/split-changeslog\n\nSplit changes.md by major version",
          "timestamp": "2024-03-14T16:36:50+09:00",
          "tree_id": "5ec541d47c2fa91af9db7266b8c10e833a4378cf",
          "url": "https://github.com/planetarium/libplanet/commit/5fc05429fba439add17e3c91f90d4fff3e17bd9f"
        },
        "date": 1710402384173,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984148.2446808511,
            "unit": "ns",
            "range": "± 93589.10161504667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913521.2333333334,
            "unit": "ns",
            "range": "± 85413.92046756517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1622261.0652173914,
            "unit": "ns",
            "range": "± 90901.06446762515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7840416.102040816,
            "unit": "ns",
            "range": "± 309918.61821030563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5618235.538461538,
            "unit": "ns",
            "range": "± 17514.914047821192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14770037.57142857,
            "unit": "ns",
            "range": "± 65615.966410288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37726896.115384616,
            "unit": "ns",
            "range": "± 80450.58590685595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77409111.83333333,
            "unit": "ns",
            "range": "± 473427.59727252705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152685222.2142857,
            "unit": "ns",
            "range": "± 1344473.7867882152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759170.0212053573,
            "unit": "ns",
            "range": "± 5389.068603057117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211293.9514322917,
            "unit": "ns",
            "range": "± 1917.251063278314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771509.7953125,
            "unit": "ns",
            "range": "± 1554.683424626397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973252.78515625,
            "unit": "ns",
            "range": "± 3065.6230096879717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653514.4945963542,
            "unit": "ns",
            "range": "± 751.8497412134815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557804.8436848958,
            "unit": "ns",
            "range": "± 598.9192963061804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423863.962962963,
            "unit": "ns",
            "range": "± 101696.52654797572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2461958.0405405406,
            "unit": "ns",
            "range": "± 48745.82417419899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3191573.1363636362,
            "unit": "ns",
            "range": "± 76181.75296183242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3246341.3263157895,
            "unit": "ns",
            "range": "± 209843.85471235824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8976965.529411765,
            "unit": "ns",
            "range": "± 236699.20662273554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38114.34375,
            "unit": "ns",
            "range": "± 4293.150680421389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196508.7,
            "unit": "ns",
            "range": "± 7332.15571860133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188381.29545454544,
            "unit": "ns",
            "range": "± 7050.8334740028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171346.1923076923,
            "unit": "ns",
            "range": "± 2523.311824587394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3198137.5,
            "unit": "ns",
            "range": "± 45632.42777737278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848094.7,
            "unit": "ns",
            "range": "± 42889.766147315706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12422.719101123595,
            "unit": "ns",
            "range": "± 947.8809259314364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59980.37894736842,
            "unit": "ns",
            "range": "± 3853.490532024587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53480.175,
            "unit": "ns",
            "range": "± 1867.4022596534937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60892.134020618556,
            "unit": "ns",
            "range": "± 13434.071111844742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3067.7157894736843,
            "unit": "ns",
            "range": "± 402.7676766372706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11888.636363636364,
            "unit": "ns",
            "range": "± 845.9785897377491"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bad0ed71b73360b295dab729bb5ff4e9d30e5bc3",
          "message": "Merge pull request #3684 from s2quake/chore/remove-unused-field\n\nRemoved unused field in NullBlockPolicy",
          "timestamp": "2024-03-14T16:56:42+09:00",
          "tree_id": "5156e3d39cee3ea16e56a57e59dc0997b9442757",
          "url": "https://github.com/planetarium/libplanet/commit/bad0ed71b73360b295dab729bb5ff4e9d30e5bc3"
        },
        "date": 1710403596627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021417.6565656565,
            "unit": "ns",
            "range": "± 95869.40093798113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2016002.5614035088,
            "unit": "ns",
            "range": "± 86448.9452364841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728077.99,
            "unit": "ns",
            "range": "± 126102.22058086107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7735068.448275862,
            "unit": "ns",
            "range": "± 223716.15699037447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5962716.571428572,
            "unit": "ns",
            "range": "± 51581.039796934754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15310416,
            "unit": "ns",
            "range": "± 150929.7061586713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37862346.8,
            "unit": "ns",
            "range": "± 273759.7195738837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76813579.13333334,
            "unit": "ns",
            "range": "± 206995.2965345095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154490941.06666666,
            "unit": "ns",
            "range": "± 463317.8505729034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700640.7991071427,
            "unit": "ns",
            "range": "± 7022.796981222071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221418.054296875,
            "unit": "ns",
            "range": "± 3064.7810790944454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765730.9345052083,
            "unit": "ns",
            "range": "± 1225.2051077488088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919329.9609375,
            "unit": "ns",
            "range": "± 3962.9577111965395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633352.0282389323,
            "unit": "ns",
            "range": "± 393.09514722427434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576453.1136997768,
            "unit": "ns",
            "range": "± 622.5935235394151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2564246.9375,
            "unit": "ns",
            "range": "± 48537.909566947426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2765752.1052631577,
            "unit": "ns",
            "range": "± 61203.62786078647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3229987.236842105,
            "unit": "ns",
            "range": "± 68291.26865765011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3321578.14893617,
            "unit": "ns",
            "range": "± 188109.321848365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8940731.55882353,
            "unit": "ns",
            "range": "± 162969.1926614931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40261.95918367347,
            "unit": "ns",
            "range": "± 5399.558559979394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209391.0361445783,
            "unit": "ns",
            "range": "± 11055.373472688694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200897.2794117647,
            "unit": "ns",
            "range": "± 9516.42522223109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173930.7105263158,
            "unit": "ns",
            "range": "± 5854.138430656692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3224648.6666666665,
            "unit": "ns",
            "range": "± 28840.955043297785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2902699.4166666665,
            "unit": "ns",
            "range": "± 14550.38672062351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16338.092783505155,
            "unit": "ns",
            "range": "± 3751.7189146067717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66020.20652173914,
            "unit": "ns",
            "range": "± 5412.097179463522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90027.64285714286,
            "unit": "ns",
            "range": "± 13372.906039382178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73643.33684210526,
            "unit": "ns",
            "range": "± 13564.188014855576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5961.459183673469,
            "unit": "ns",
            "range": "± 1167.0796505328963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14192.21505376344,
            "unit": "ns",
            "range": "± 1567.303748545796"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23ccf45a60ff011dcc112274755f6dcc1cd8e9e",
          "message": "Merge pull request #3697 from greymistcube/refactor/iworld-currency-handling\n\nMove FAV related operations from `IAccount` to `IWorld`",
          "timestamp": "2024-03-19T16:55:40+09:00",
          "tree_id": "243ee74689121f2566388a90479c76b16fd15d7d",
          "url": "https://github.com/planetarium/libplanet/commit/d23ccf45a60ff011dcc112274755f6dcc1cd8e9e"
        },
        "date": 1710835522968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5718395.142857143,
            "unit": "ns",
            "range": "± 35024.830174424154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14923245.233333332,
            "unit": "ns",
            "range": "± 207524.44881764334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37575221.5,
            "unit": "ns",
            "range": "± 205729.9248266822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75542288.16666667,
            "unit": "ns",
            "range": "± 375072.56260501815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151359275.83333334,
            "unit": "ns",
            "range": "± 854230.8834601422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39998.27551020408,
            "unit": "ns",
            "range": "± 5741.425426535317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971202.4673913043,
            "unit": "ns",
            "range": "± 78813.26974222338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1938618.0376344086,
            "unit": "ns",
            "range": "± 102544.35554724166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1662518.9387755103,
            "unit": "ns",
            "range": "± 150447.71399714018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8013875,
            "unit": "ns",
            "range": "± 223780.28588755228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398412,
            "unit": "ns",
            "range": "± 44473.514471295966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2470630.2972972975,
            "unit": "ns",
            "range": "± 83811.90947024204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3087070.2666666666,
            "unit": "ns",
            "range": "± 44680.42095732547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3208990.0483870967,
            "unit": "ns",
            "range": "± 144929.64495167058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8947015.243243244,
            "unit": "ns",
            "range": "± 194429.97559324332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199199.12121212122,
            "unit": "ns",
            "range": "± 8624.780804376604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192572.9245283019,
            "unit": "ns",
            "range": "± 8038.066424230912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161578.38888888888,
            "unit": "ns",
            "range": "± 3297.85700718956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3201662.7333333334,
            "unit": "ns",
            "range": "± 58903.478904617055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2755235.4285714286,
            "unit": "ns",
            "range": "± 32907.776155409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12131.137362637362,
            "unit": "ns",
            "range": "± 767.7918918920603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60125.645161290326,
            "unit": "ns",
            "range": "± 3851.704263234205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51518.52380952381,
            "unit": "ns",
            "range": "± 933.5443009867083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56128.74725274725,
            "unit": "ns",
            "range": "± 7366.718397395149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2908.442105263158,
            "unit": "ns",
            "range": "± 279.54467978396707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11721.269662921348,
            "unit": "ns",
            "range": "± 849.4482669790721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3615931.6395089286,
            "unit": "ns",
            "range": "± 3631.334503819985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194704.3643229166,
            "unit": "ns",
            "range": "± 1912.8596951384336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763210.2518229167,
            "unit": "ns",
            "range": "± 1297.5554964366715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949913.6442708333,
            "unit": "ns",
            "range": "± 2649.780731646518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615097.3508463542,
            "unit": "ns",
            "range": "± 460.7131489553034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576834.2533052885,
            "unit": "ns",
            "range": "± 238.4398778679474"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19ab254e527b7686280b57b8472bc789f64238a4",
          "message": "Merge pull request #3699 from greymistcube/refactor/simplify-iworld-delta\n\n🧹 Removed unnecessary methods and properties from `IWorldDelta`",
          "timestamp": "2024-03-19T18:20:26+09:00",
          "tree_id": "15ab5a662974ada3e2d9b22783e6225f894d7a9b",
          "url": "https://github.com/planetarium/libplanet/commit/19ab254e527b7686280b57b8472bc789f64238a4"
        },
        "date": 1710840616363,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5645604.9,
            "unit": "ns",
            "range": "± 61772.06678449873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14633601.266666668,
            "unit": "ns",
            "range": "± 88462.69330342163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37150908.571428575,
            "unit": "ns",
            "range": "± 178014.63017391588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76737067.96153846,
            "unit": "ns",
            "range": "± 258213.0462401204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156795344.7142857,
            "unit": "ns",
            "range": "± 793501.9556264185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36472.37209302326,
            "unit": "ns",
            "range": "± 2104.456368513432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969228.6304347826,
            "unit": "ns",
            "range": "± 68634.56245780262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1867673.2777777778,
            "unit": "ns",
            "range": "± 78382.62787861371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665795.1914893617,
            "unit": "ns",
            "range": "± 129934.08213969284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7657522.382352941,
            "unit": "ns",
            "range": "± 310473.7709173931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2458135.5897435895,
            "unit": "ns",
            "range": "± 84484.18599319356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2754074.75,
            "unit": "ns",
            "range": "± 62815.70041157997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3182673.2647058824,
            "unit": "ns",
            "range": "± 64481.108063262815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3258718.8936170214,
            "unit": "ns",
            "range": "± 116214.69320900153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8787869.986486487,
            "unit": "ns",
            "range": "± 203474.9612802002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207265.74242424243,
            "unit": "ns",
            "range": "± 9438.050710266241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199477.06896551725,
            "unit": "ns",
            "range": "± 5403.349073432107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172621.28125,
            "unit": "ns",
            "range": "± 5033.223880180992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3252554.8571428573,
            "unit": "ns",
            "range": "± 20722.873125930357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814396.433333333,
            "unit": "ns",
            "range": "± 39918.10260031812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12714.229166666666,
            "unit": "ns",
            "range": "± 1395.3148407526387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59714.90588235294,
            "unit": "ns",
            "range": "± 3131.823679977049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53205.6,
            "unit": "ns",
            "range": "± 2959.6899921171143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58209.88775510204,
            "unit": "ns",
            "range": "± 9219.574279460398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3067.175257731959,
            "unit": "ns",
            "range": "± 314.62752483125706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11806.395604395604,
            "unit": "ns",
            "range": "± 674.0664470892874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3751252.9314903845,
            "unit": "ns",
            "range": "± 7877.044978716444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214324.0908203125,
            "unit": "ns",
            "range": "± 1654.3200941987886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773644.1939174107,
            "unit": "ns",
            "range": "± 1012.92971729204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924120.648158482,
            "unit": "ns",
            "range": "± 1074.640106724083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615194.5192708333,
            "unit": "ns",
            "range": "± 1315.6644722685544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589687.1907784598,
            "unit": "ns",
            "range": "± 774.8152477568397"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50",
          "message": "Merge pull request #3702 from greymistcube/refactor/move-validator-mutation\n\n🚚 Move `Validator` related methods from `IAccount` to `IWorld`",
          "timestamp": "2024-03-21T15:56:52+09:00",
          "tree_id": "a761e93f03edfdcd597e405bad0050b411e979c3",
          "url": "https://github.com/planetarium/libplanet/commit/0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50"
        },
        "date": 1711004785672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5693328.4,
            "unit": "ns",
            "range": "± 24135.206089267784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14780128.933333334,
            "unit": "ns",
            "range": "± 79796.5887003293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39454233.65384615,
            "unit": "ns",
            "range": "± 119139.19827023496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80056054.06666666,
            "unit": "ns",
            "range": "± 415024.6792347701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151886745.66666666,
            "unit": "ns",
            "range": "± 655496.9052512394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40007.43877551021,
            "unit": "ns",
            "range": "± 6359.011446249527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973267.41,
            "unit": "ns",
            "range": "± 91019.29648446626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871185.4152542374,
            "unit": "ns",
            "range": "± 77888.33592023731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538623.2777777778,
            "unit": "ns",
            "range": "± 84481.57558551294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7694372.074074074,
            "unit": "ns",
            "range": "± 321401.3548655033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2489415.3157894737,
            "unit": "ns",
            "range": "± 53298.45403954835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554034.404761905,
            "unit": "ns",
            "range": "± 85499.62145995494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3263118.214285714,
            "unit": "ns",
            "range": "± 44416.390506257885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3200471.5217391304,
            "unit": "ns",
            "range": "± 70797.72654000163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8728848.588235294,
            "unit": "ns",
            "range": "± 206454.23223769382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201207.96835443037,
            "unit": "ns",
            "range": "± 9328.49877695645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193454.66666666666,
            "unit": "ns",
            "range": "± 7639.859414764023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162928.95454545456,
            "unit": "ns",
            "range": "± 5119.4668368084795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3331759,
            "unit": "ns",
            "range": "± 60107.094603834295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2760650.3684210526,
            "unit": "ns",
            "range": "± 56504.02312737516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12617.477528089888,
            "unit": "ns",
            "range": "± 1268.675427522093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63475.70526315789,
            "unit": "ns",
            "range": "± 5773.366597545392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51598.84848484849,
            "unit": "ns",
            "range": "± 1209.513515871467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80254.21348314607,
            "unit": "ns",
            "range": "± 14339.109065983832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4406.625,
            "unit": "ns",
            "range": "± 926.7729552195163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13748.360215053763,
            "unit": "ns",
            "range": "± 1731.5026685273529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3678304.588341346,
            "unit": "ns",
            "range": "± 8565.714562428831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210728.5766927083,
            "unit": "ns",
            "range": "± 2145.0434910804524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773125.5126302083,
            "unit": "ns",
            "range": "± 1013.2027728755996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942843.2627604166,
            "unit": "ns",
            "range": "± 4729.302610832422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614680.5547526042,
            "unit": "ns",
            "range": "± 449.85840571912166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579819.889453125,
            "unit": "ns",
            "range": "± 579.5546784879288"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6815582f07d67a2c4468c2d7723eb8844bd39651",
          "message": "Merge pull request #3704 from greymistcube/refactor/cleanup\n\n♻️ Docs cleanup",
          "timestamp": "2024-03-21T17:53:16+09:00",
          "tree_id": "5a79dee718ab7a05427020dd64f4fa753ef2e2af",
          "url": "https://github.com/planetarium/libplanet/commit/6815582f07d67a2c4468c2d7723eb8844bd39651"
        },
        "date": 1711011754461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5712812.2,
            "unit": "ns",
            "range": "± 52064.35993926858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14875262.357142856,
            "unit": "ns",
            "range": "± 51929.60572456517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37355433.14285714,
            "unit": "ns",
            "range": "± 166318.5042990879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76769708.06666666,
            "unit": "ns",
            "range": "± 467208.2888555728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154737222.92857143,
            "unit": "ns",
            "range": "± 488209.97461881314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36955.67032967033,
            "unit": "ns",
            "range": "± 2067.8111027791097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006641.8913043478,
            "unit": "ns",
            "range": "± 71252.17151006797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1983315.25,
            "unit": "ns",
            "range": "± 29045.548537442173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686426.5656565656,
            "unit": "ns",
            "range": "± 156480.61425041434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7746855.94117647,
            "unit": "ns",
            "range": "± 155559.75820463282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2494667.703703704,
            "unit": "ns",
            "range": "± 68596.03258813084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562074.653846154,
            "unit": "ns",
            "range": "± 68214.93875915586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3281870.5833333335,
            "unit": "ns",
            "range": "± 81514.95575388586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3168513.7258064514,
            "unit": "ns",
            "range": "± 64076.10115620836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8803061.290322581,
            "unit": "ns",
            "range": "± 190478.14754632505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205628.61904761905,
            "unit": "ns",
            "range": "± 9384.706272456082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199603.64,
            "unit": "ns",
            "range": "± 7499.499057447309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168158.2380952381,
            "unit": "ns",
            "range": "± 3944.6157215217036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3316609.1,
            "unit": "ns",
            "range": "± 42313.57187509194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2875286.933333333,
            "unit": "ns",
            "range": "± 47503.28525100233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13309.207865168539,
            "unit": "ns",
            "range": "± 1083.3318890668982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63579.478494623654,
            "unit": "ns",
            "range": "± 4373.56610037108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100976.42307692308,
            "unit": "ns",
            "range": "± 1592.3297115410521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89956.32653061225,
            "unit": "ns",
            "range": "± 19196.468035732974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3272.2916666666665,
            "unit": "ns",
            "range": "± 531.4940197052609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13650.989361702128,
            "unit": "ns",
            "range": "± 1056.1640827911554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3736233.797175481,
            "unit": "ns",
            "range": "± 5872.4670294757225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191395.012109375,
            "unit": "ns",
            "range": "± 1496.003021879255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764281.0122395833,
            "unit": "ns",
            "range": "± 1172.6959261221587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1983671.3130580357,
            "unit": "ns",
            "range": "± 3351.058025187198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616291.2767159598,
            "unit": "ns",
            "range": "± 585.5761351598507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599905.6509915865,
            "unit": "ns",
            "range": "± 554.4518170458958"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3df1917a9739c156d0e9eb0d58fef17b9b6206c",
          "message": "Merge pull request #3705 from greymistcube/refactor/cleanup\n\n🧹 Removed unnecessary test code",
          "timestamp": "2024-03-22T14:32:16+09:00",
          "tree_id": "244b5fe74be3f90bb2e7ed3f92e3709161f56e0d",
          "url": "https://github.com/planetarium/libplanet/commit/e3df1917a9739c156d0e9eb0d58fef17b9b6206c"
        },
        "date": 1711086206584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5675039.566666666,
            "unit": "ns",
            "range": "± 76501.46955961664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14246527.866666667,
            "unit": "ns",
            "range": "± 105636.54116684831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37063737.9,
            "unit": "ns",
            "range": "± 171127.33212510837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76518545.2,
            "unit": "ns",
            "range": "± 263104.6060269565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148600616.64285713,
            "unit": "ns",
            "range": "± 428166.4876640335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36644.956043956045,
            "unit": "ns",
            "range": "± 2172.32925124719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990180.0515463918,
            "unit": "ns",
            "range": "± 97707.59461103522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1864557.575,
            "unit": "ns",
            "range": "± 65127.835297653895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602628.5842105264,
            "unit": "ns",
            "range": "± 129432.70944424342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7500729,
            "unit": "ns",
            "range": "± 244569.2132460082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2428714.214285714,
            "unit": "ns",
            "range": "± 78968.24307782414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534567.1904761903,
            "unit": "ns",
            "range": "± 90516.57272491748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3144816.875,
            "unit": "ns",
            "range": "± 58009.56566851712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3157160.3921568627,
            "unit": "ns",
            "range": "± 115639.69077562919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8644331.235294119,
            "unit": "ns",
            "range": "± 180253.45754815405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201536.1,
            "unit": "ns",
            "range": "± 8639.837366446434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190225.54761904763,
            "unit": "ns",
            "range": "± 5918.647839986315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163400.46153846153,
            "unit": "ns",
            "range": "± 2438.238285298924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3294306.7,
            "unit": "ns",
            "range": "± 42908.13482346409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2721515.285714286,
            "unit": "ns",
            "range": "± 34617.41665344544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12170.144444444444,
            "unit": "ns",
            "range": "± 719.6901691530396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63075.38775510204,
            "unit": "ns",
            "range": "± 7439.113466861371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51229.192307692305,
            "unit": "ns",
            "range": "± 625.4261726502158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59217.43877551021,
            "unit": "ns",
            "range": "± 10562.591531297501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2868.2,
            "unit": "ns",
            "range": "± 213.16281691902537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11701.422222222222,
            "unit": "ns",
            "range": "± 807.424428269168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739040.55078125,
            "unit": "ns",
            "range": "± 4388.170344390095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191151.5665364584,
            "unit": "ns",
            "range": "± 2672.486677671046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755302.4961588542,
            "unit": "ns",
            "range": "± 1269.3622570170962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959067.3252604166,
            "unit": "ns",
            "range": "± 2622.623555622171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620313.4924665178,
            "unit": "ns",
            "range": "± 681.1466340174633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572539.2825753348,
            "unit": "ns",
            "range": "± 403.35673928468185"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5210b9336f9bb6e4f3c79b3c9f9612cad6719342",
          "message": "Merge pull request #3706 from greymistcube/chore/changelog\n\n🧹 Changelog formatting",
          "timestamp": "2024-03-22T17:50:34+09:00",
          "tree_id": "594bbc5288a619fc2040847db66ae22c22e2db13",
          "url": "https://github.com/planetarium/libplanet/commit/5210b9336f9bb6e4f3c79b3c9f9612cad6719342"
        },
        "date": 1711098005608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5823566.366666666,
            "unit": "ns",
            "range": "± 80887.46806597304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14734180.6,
            "unit": "ns",
            "range": "± 58613.307215049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37753961.93333333,
            "unit": "ns",
            "range": "± 169926.36311669438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75439541.26666667,
            "unit": "ns",
            "range": "± 392602.4167568921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149003657.56666666,
            "unit": "ns",
            "range": "± 671952.1620618822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36232.082278481015,
            "unit": "ns",
            "range": "± 1835.5031072174731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956533.6063829787,
            "unit": "ns",
            "range": "± 67918.799818966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837035.7857142857,
            "unit": "ns",
            "range": "± 51796.46102944296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1578716.6043956045,
            "unit": "ns",
            "range": "± 103025.95761466883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7767626.945454545,
            "unit": "ns",
            "range": "± 327003.95299238374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2375705.16,
            "unit": "ns",
            "range": "± 36772.752465514466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497542.302325581,
            "unit": "ns",
            "range": "± 91111.36433391487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3194087.55,
            "unit": "ns",
            "range": "± 54088.134171509955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3154615.7674418604,
            "unit": "ns",
            "range": "± 115869.10906766784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8647389.463414634,
            "unit": "ns",
            "range": "± 268093.7978380046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193977.55970149254,
            "unit": "ns",
            "range": "± 8866.922705714143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199427.4818181818,
            "unit": "ns",
            "range": "± 8441.931597226781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166889.38,
            "unit": "ns",
            "range": "± 4372.10410176458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3230099.7333333334,
            "unit": "ns",
            "range": "± 49833.72484066627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2806197.7333333334,
            "unit": "ns",
            "range": "± 34243.015184469514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12008.731182795698,
            "unit": "ns",
            "range": "± 744.3957301320335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66176.75,
            "unit": "ns",
            "range": "± 9052.235233059648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51318.77272727273,
            "unit": "ns",
            "range": "± 1216.6815106133563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60192.744897959186,
            "unit": "ns",
            "range": "± 9485.954921319393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4926.606060606061,
            "unit": "ns",
            "range": "± 1800.8292523971904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11845.826086956522,
            "unit": "ns",
            "range": "± 1065.158592212793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3708567.98828125,
            "unit": "ns",
            "range": "± 1890.1319694516494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215586.6495535714,
            "unit": "ns",
            "range": "± 939.6681077641797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764919.8260416667,
            "unit": "ns",
            "range": "± 1284.0674808370113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930414.2786458333,
            "unit": "ns",
            "range": "± 3475.404151508713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613734.6786411831,
            "unit": "ns",
            "range": "± 527.9891479641681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584940.8623046875,
            "unit": "ns",
            "range": "± 1109.207759107124"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30938b465c34003a3ea9268ed23166a34acc301b",
          "message": "Merge pull request #3642 from greymistcube/feature/mocks\n\n✨ Mocks",
          "timestamp": "2024-03-22T19:00:38+09:00",
          "tree_id": "031a5cb565d418e6075c81a74d21d70109ec35ae",
          "url": "https://github.com/planetarium/libplanet/commit/30938b465c34003a3ea9268ed23166a34acc301b"
        },
        "date": 1711102204625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5623656.142857143,
            "unit": "ns",
            "range": "± 18907.95702203844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14584441.42857143,
            "unit": "ns",
            "range": "± 32506.21295102803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36733875.93333333,
            "unit": "ns",
            "range": "± 247991.8047379984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76910365.93333334,
            "unit": "ns",
            "range": "± 444925.1552453139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152832909.06666666,
            "unit": "ns",
            "range": "± 802135.2152821749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36242.956043956045,
            "unit": "ns",
            "range": "± 2134.419374142079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967731.847368421,
            "unit": "ns",
            "range": "± 77042.58787877587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984410.1625,
            "unit": "ns",
            "range": "± 103391.54350435904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1688764.5263157894,
            "unit": "ns",
            "range": "± 97951.258848453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7609817,
            "unit": "ns",
            "range": "± 154203.07020343878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2416922.325,
            "unit": "ns",
            "range": "± 83610.32007546938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2536311.8928571427,
            "unit": "ns",
            "range": "± 72429.70945444115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3185436.625,
            "unit": "ns",
            "range": "± 82321.43672654667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3275226.6129032257,
            "unit": "ns",
            "range": "± 97399.73968879569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8762275.852941176,
            "unit": "ns",
            "range": "± 214563.08453722703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210034.85714285713,
            "unit": "ns",
            "range": "± 8322.280692013857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197378.1170212766,
            "unit": "ns",
            "range": "± 7624.749194886436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174307.88,
            "unit": "ns",
            "range": "± 4625.650885010671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3287211.1315789474,
            "unit": "ns",
            "range": "± 69938.95299013794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2931544.466666667,
            "unit": "ns",
            "range": "± 53172.48545719147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13251.060439560439,
            "unit": "ns",
            "range": "± 946.279653388776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64969.18556701031,
            "unit": "ns",
            "range": "± 5210.211010861862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83821.48453608247,
            "unit": "ns",
            "range": "± 16060.390993264427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82550.68181818182,
            "unit": "ns",
            "range": "± 21708.416621004275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3565.136842105263,
            "unit": "ns",
            "range": "± 515.6196150826758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12466.380434782608,
            "unit": "ns",
            "range": "± 977.8736838626029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662474.7122395835,
            "unit": "ns",
            "range": "± 5478.950340185785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216852.2454427083,
            "unit": "ns",
            "range": "± 1839.564332428291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761432.2170061384,
            "unit": "ns",
            "range": "± 1153.257221004551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2070191.3353794643,
            "unit": "ns",
            "range": "± 3016.6855091990215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613987.0918619792,
            "unit": "ns",
            "range": "± 523.3506932119607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571316.3956380208,
            "unit": "ns",
            "range": "± 605.6428431757623"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711106328914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5548293.8,
            "unit": "ns",
            "range": "± 12089.033638562089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14593327.3,
            "unit": "ns",
            "range": "± 140541.03825329556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37366300.5,
            "unit": "ns",
            "range": "± 157743.2839173778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74354793.03333333,
            "unit": "ns",
            "range": "± 476195.9204717959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152148691.96666667,
            "unit": "ns",
            "range": "± 778317.2882638606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36633.329545454544,
            "unit": "ns",
            "range": "± 2118.4006612102166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963745.0978260869,
            "unit": "ns",
            "range": "± 72095.06206407823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1856162.3148148148,
            "unit": "ns",
            "range": "± 50953.982666140146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596734.9680851065,
            "unit": "ns",
            "range": "± 109859.06215670414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7455797.757142857,
            "unit": "ns",
            "range": "± 240177.35846812464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385841.72,
            "unit": "ns",
            "range": "± 62340.30662722688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2504188,
            "unit": "ns",
            "range": "± 88538.8027926102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3179393.98,
            "unit": "ns",
            "range": "± 61299.59764082197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3160178.7264150945,
            "unit": "ns",
            "range": "± 130445.28797658392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8629963.029411765,
            "unit": "ns",
            "range": "± 178195.67412436104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203368.3409090909,
            "unit": "ns",
            "range": "± 7161.172016403467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192447.96226415093,
            "unit": "ns",
            "range": "± 7502.5968195692185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162840,
            "unit": "ns",
            "range": "± 3036.2124666856143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3191958.846153846,
            "unit": "ns",
            "range": "± 47493.756436760814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2875676.7333333334,
            "unit": "ns",
            "range": "± 38187.80256736187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12377.84065934066,
            "unit": "ns",
            "range": "± 720.8083767514888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60500.04838709677,
            "unit": "ns",
            "range": "± 4344.0731725664455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52114.72727272727,
            "unit": "ns",
            "range": "± 1654.1793711824166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59138.9587628866,
            "unit": "ns",
            "range": "± 10015.657398457766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2978.3229166666665,
            "unit": "ns",
            "range": "± 423.8563434589022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13900.858585858587,
            "unit": "ns",
            "range": "± 2926.548893966675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3724367.816964286,
            "unit": "ns",
            "range": "± 5248.559907660101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209064.1276041667,
            "unit": "ns",
            "range": "± 1221.2837183303025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 784541.7650669643,
            "unit": "ns",
            "range": "± 1087.9468978010545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973808.0496651786,
            "unit": "ns",
            "range": "± 1695.9591404531775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625353.2707170759,
            "unit": "ns",
            "range": "± 1106.705273907028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570512.279436384,
            "unit": "ns",
            "range": "± 280.65190434662816"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e9ea5bd1ebbf2d303391caeee97ac71c23507c1",
          "message": "Merge pull request #3708 from greymistcube/prepare/4.3.0\n\n🔧 Prepare 4.3.0",
          "timestamp": "2024-03-22T22:19:38+09:00",
          "tree_id": "3bd385ff7052df8da1bc5a68e3098fe6e3e329ce",
          "url": "https://github.com/planetarium/libplanet/commit/0e9ea5bd1ebbf2d303391caeee97ac71c23507c1"
        },
        "date": 1711114145701,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5784658.866666666,
            "unit": "ns",
            "range": "± 32004.43434424733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14423946.615384616,
            "unit": "ns",
            "range": "± 51643.15309496258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38067888.46666667,
            "unit": "ns",
            "range": "± 256386.29947485402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75117471.36666666,
            "unit": "ns",
            "range": "± 673047.2114437936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152261423.96666667,
            "unit": "ns",
            "range": "± 824281.5515231489"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40175.536082474224,
            "unit": "ns",
            "range": "± 6903.149868390178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980377.1739130435,
            "unit": "ns",
            "range": "± 77750.56162259386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843128.5,
            "unit": "ns",
            "range": "± 64568.51033254602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1600134.489010989,
            "unit": "ns",
            "range": "± 111584.98205707457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7616845.29032258,
            "unit": "ns",
            "range": "± 224511.878781828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2360019.472222222,
            "unit": "ns",
            "range": "± 56443.60311951649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2549971.888888889,
            "unit": "ns",
            "range": "± 82326.7219221344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3116035.730769231,
            "unit": "ns",
            "range": "± 51582.5280838933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3156274.060240964,
            "unit": "ns",
            "range": "± 168186.4584696684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8691754.445945946,
            "unit": "ns",
            "range": "± 227491.9505125335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197742.09615384616,
            "unit": "ns",
            "range": "± 6975.714132419693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193075.07462686568,
            "unit": "ns",
            "range": "± 9183.611792478625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165534.6,
            "unit": "ns",
            "range": "± 4870.82160703779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3245816.533333333,
            "unit": "ns",
            "range": "± 42642.58880654186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2906058.2666666666,
            "unit": "ns",
            "range": "± 33907.52177923836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12721.184782608696,
            "unit": "ns",
            "range": "± 1182.0992774483489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60882.72631578947,
            "unit": "ns",
            "range": "± 5095.318062529822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51936.730769230766,
            "unit": "ns",
            "range": "± 990.9760262566318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62832.77419354839,
            "unit": "ns",
            "range": "± 9651.625882550468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2907.8146067415732,
            "unit": "ns",
            "range": "± 344.84171584766835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11824.376344086022,
            "unit": "ns",
            "range": "± 1147.3187165127229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717400.630533854,
            "unit": "ns",
            "range": "± 3142.8929121460446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219140.524639423,
            "unit": "ns",
            "range": "± 1023.7125680735511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755771.2392578125,
            "unit": "ns",
            "range": "± 842.1546933557756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969585.8674479167,
            "unit": "ns",
            "range": "± 2683.3873757615397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627539.9813151042,
            "unit": "ns",
            "range": "± 312.17496900898976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571464.7594168527,
            "unit": "ns",
            "range": "± 495.87218740711313"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "757ba26ea62bc3ef51199853d452e4b119a10e5a",
          "message": "Merge pull request #3710 from xiaoxianBoy/fix-typos\n\nchore: fix typos",
          "timestamp": "2024-03-25T17:49:36+09:00",
          "tree_id": "3ac7612ac12e4b8910b4ff8d747654a7bd720f66",
          "url": "https://github.com/planetarium/libplanet/commit/757ba26ea62bc3ef51199853d452e4b119a10e5a"
        },
        "date": 1711357192555,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5854701.807692308,
            "unit": "ns",
            "range": "± 153581.14752612554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15217022.833333334,
            "unit": "ns",
            "range": "± 144305.48415757585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38774003.56666667,
            "unit": "ns",
            "range": "± 179291.78658244165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76592772.93333334,
            "unit": "ns",
            "range": "± 199039.28707184084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152059751.23333332,
            "unit": "ns",
            "range": "± 809243.6926863492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41418.721649484534,
            "unit": "ns",
            "range": "± 5856.41720811145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051808.3402061856,
            "unit": "ns",
            "range": "± 107674.20944333718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1998544.9024390243,
            "unit": "ns",
            "range": "± 70770.82040672019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1738790.606060606,
            "unit": "ns",
            "range": "± 162476.85326273265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7867100.20212766,
            "unit": "ns",
            "range": "± 302244.7797379177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2493985.3095238097,
            "unit": "ns",
            "range": "± 90940.17161291937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2644921.5,
            "unit": "ns",
            "range": "± 62477.98331649555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3196078.65,
            "unit": "ns",
            "range": "± 70726.74791892273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3367239.163265306,
            "unit": "ns",
            "range": "± 132913.13797291118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8773512.470588235,
            "unit": "ns",
            "range": "± 243028.63153187672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225088.32,
            "unit": "ns",
            "range": "± 23914.006250249444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214853.797979798,
            "unit": "ns",
            "range": "± 21794.425509880046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177213.31632653062,
            "unit": "ns",
            "range": "± 13207.435401643905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3264671.625,
            "unit": "ns",
            "range": "± 50040.681745788934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2951463.1428571427,
            "unit": "ns",
            "range": "± 46407.49728157683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17653.484848484848,
            "unit": "ns",
            "range": "± 4651.946459769718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93019.25274725274,
            "unit": "ns",
            "range": "± 7046.161444508329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92669.5,
            "unit": "ns",
            "range": "± 1528.842632227937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85567.00537634408,
            "unit": "ns",
            "range": "± 12276.808759523201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6589.938144329897,
            "unit": "ns",
            "range": "± 580.2475192829528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17000.56,
            "unit": "ns",
            "range": "± 4592.099610717028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3788071.1670673075,
            "unit": "ns",
            "range": "± 4820.172042816463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217189.3255208333,
            "unit": "ns",
            "range": "± 1380.7637625965544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763149.3447963169,
            "unit": "ns",
            "range": "± 935.4649943992931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934117.471484375,
            "unit": "ns",
            "range": "± 3712.6899870971124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614576.0475027902,
            "unit": "ns",
            "range": "± 1327.4067558093095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580629.2399088541,
            "unit": "ns",
            "range": "± 333.2870547218102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "200a0686c37ec092e96f7582fbc6c472d71babd2",
          "message": "Merge pull request #3713 from greymistcube/refactor/add-info-to-action-context\n\n✨ ♻️ Added `Txs` property to `IActionContext`",
          "timestamp": "2024-03-28T14:27:37+09:00",
          "tree_id": "e833efb9d625c8f530880a2800a40c432cc015d4",
          "url": "https://github.com/planetarium/libplanet/commit/200a0686c37ec092e96f7582fbc6c472d71babd2"
        },
        "date": 1711604253474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5832843.266666667,
            "unit": "ns",
            "range": "± 24742.816982096516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14358983.2,
            "unit": "ns",
            "range": "± 92013.83631994856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36164271.307692304,
            "unit": "ns",
            "range": "± 72597.14513255625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73999524.7,
            "unit": "ns",
            "range": "± 361998.6459312087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151776515.53333333,
            "unit": "ns",
            "range": "± 678357.803426551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36942.775862068964,
            "unit": "ns",
            "range": "± 2467.0874113229675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955199.0531914893,
            "unit": "ns",
            "range": "± 69655.81808525525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1850009.8793103448,
            "unit": "ns",
            "range": "± 80983.89248899677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589393.4646464647,
            "unit": "ns",
            "range": "± 146193.40330097207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7684188.579710145,
            "unit": "ns",
            "range": "± 370186.6928396681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393444.48,
            "unit": "ns",
            "range": "± 59292.818296934856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2499252.125,
            "unit": "ns",
            "range": "± 54743.473704855394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3108897.617647059,
            "unit": "ns",
            "range": "± 62727.05672782116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3151179.3,
            "unit": "ns",
            "range": "± 111462.96163995922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8514024.5,
            "unit": "ns",
            "range": "± 195676.44341054445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203617.22641509434,
            "unit": "ns",
            "range": "± 8423.843154179207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189603.15384615384,
            "unit": "ns",
            "range": "± 6051.2098422262525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166355,
            "unit": "ns",
            "range": "± 3829.259472177768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162738.0625,
            "unit": "ns",
            "range": "± 58231.98595098602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807580.1428571427,
            "unit": "ns",
            "range": "± 28711.774798737308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12330.357894736842,
            "unit": "ns",
            "range": "± 809.2814768957612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59320.089887640446,
            "unit": "ns",
            "range": "± 3298.0353161198636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52483.8,
            "unit": "ns",
            "range": "± 1547.735546109107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59911.37113402062,
            "unit": "ns",
            "range": "± 10696.238412326305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5535.845360824742,
            "unit": "ns",
            "range": "± 772.2171993169811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13453.9,
            "unit": "ns",
            "range": "± 2138.46125411557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3862359.366629464,
            "unit": "ns",
            "range": "± 6827.809813113755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194832.809375,
            "unit": "ns",
            "range": "± 1887.1183803091346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765431.4464192708,
            "unit": "ns",
            "range": "± 859.7861316015606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973264.447265625,
            "unit": "ns",
            "range": "± 2209.0118999247684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619029.2837890625,
            "unit": "ns",
            "range": "± 707.7242647437023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568058.3376116072,
            "unit": "ns",
            "range": "± 368.5298128446686"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8c03a16a0d34aa8b3274fef5cbfb64298084a41",
          "message": "Merge pull request #3714 from greymistcube/remove/total-updated-fungible-assets\n\n🧹 Removed `TotalUpdatedFungibleAssets` from `IWorld`",
          "timestamp": "2024-03-28T15:38:23+09:00",
          "tree_id": "33555845d43c83cb9f31a0f0daf13075fab4237b",
          "url": "https://github.com/planetarium/libplanet/commit/c8c03a16a0d34aa8b3274fef5cbfb64298084a41"
        },
        "date": 1711608562534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5652364.714285715,
            "unit": "ns",
            "range": "± 22738.410817985336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14430435.42857143,
            "unit": "ns",
            "range": "± 87008.28399770492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36425067.6,
            "unit": "ns",
            "range": "± 172529.48581031425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75873906.8,
            "unit": "ns",
            "range": "± 368195.91402776714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153032188.1,
            "unit": "ns",
            "range": "± 1034983.7144232752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36780.54838709677,
            "unit": "ns",
            "range": "± 3308.2098519083816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960064.1666666666,
            "unit": "ns",
            "range": "± 66377.21723671375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1834908.7222222222,
            "unit": "ns",
            "range": "± 51078.92851515594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1588116.902173913,
            "unit": "ns",
            "range": "± 109562.04702008849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7614471.84,
            "unit": "ns",
            "range": "± 307610.7382456356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2396122.466666667,
            "unit": "ns",
            "range": "± 30028.521946087632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2461105.152173913,
            "unit": "ns",
            "range": "± 75622.60527116578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3130683.8857142855,
            "unit": "ns",
            "range": "± 100327.69226735177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3211738.0555555555,
            "unit": "ns",
            "range": "± 66075.59923853909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8842321.970588235,
            "unit": "ns",
            "range": "± 199197.28921108478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199216.93548387097,
            "unit": "ns",
            "range": "± 4747.893132295516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195450.5,
            "unit": "ns",
            "range": "± 5533.605217550644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164769.07142857142,
            "unit": "ns",
            "range": "± 2768.8245066005265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3207996.9285714286,
            "unit": "ns",
            "range": "± 11194.768760894085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814445.2666666666,
            "unit": "ns",
            "range": "± 28676.639705184294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13442.845360824742,
            "unit": "ns",
            "range": "± 2154.7155957931654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60079.303797468354,
            "unit": "ns",
            "range": "± 2928.5319869913574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52184.807692307695,
            "unit": "ns",
            "range": "± 1023.1140999607334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58988.36734693877,
            "unit": "ns",
            "range": "± 8502.397401615926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2898.415789473684,
            "unit": "ns",
            "range": "± 262.2908756923209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11927.620689655172,
            "unit": "ns",
            "range": "± 699.2884297191351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3735440.9109933036,
            "unit": "ns",
            "range": "± 2767.736528342971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217904.7859375,
            "unit": "ns",
            "range": "± 1869.8097895870994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775333.8486979167,
            "unit": "ns",
            "range": "± 1560.601167080702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959036.4447916667,
            "unit": "ns",
            "range": "± 7367.403587837503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616520.1525390625,
            "unit": "ns",
            "range": "± 2539.3744570809286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567231.111328125,
            "unit": "ns",
            "range": "± 449.1286623657077"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b15c7261184cdbdbd9cb5850914a0999f9137ab8",
          "message": "Merge pull request #3715 from greymistcube/refactor/iworld-extensions\n\n♻️ 🚚 Moved `Currency` and `Validator` related methods from `IWorldState` and `IWorld` to an extension `class`",
          "timestamp": "2024-03-29T08:57:43+09:00",
          "tree_id": "e5b1e33019de8451e46cbbf3bb85c042d0273f24",
          "url": "https://github.com/planetarium/libplanet/commit/b15c7261184cdbdbd9cb5850914a0999f9137ab8"
        },
        "date": 1711670843919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5538928,
            "unit": "ns",
            "range": "± 17236.506057694034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14681366.733333332,
            "unit": "ns",
            "range": "± 129301.20652374144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37089950,
            "unit": "ns",
            "range": "± 149159.2742313758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75276859.1,
            "unit": "ns",
            "range": "± 468893.162845653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150551070.14285713,
            "unit": "ns",
            "range": "± 807643.9514959173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36503.3021978022,
            "unit": "ns",
            "range": "± 2050.459158442216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997088.72,
            "unit": "ns",
            "range": "± 87330.54452857935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888397.1016949152,
            "unit": "ns",
            "range": "± 82426.57986347291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602886,
            "unit": "ns",
            "range": "± 128638.91330146947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7492745.117647059,
            "unit": "ns",
            "range": "± 206905.5702111714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417692.393939394,
            "unit": "ns",
            "range": "± 75385.90282545346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2577002.125,
            "unit": "ns",
            "range": "± 50358.23769073603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120002.4285714286,
            "unit": "ns",
            "range": "± 30256.62636823235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3227279.066666667,
            "unit": "ns",
            "range": "± 144085.61012577737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8559817.318181818,
            "unit": "ns",
            "range": "± 171002.0354090465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203443.7142857143,
            "unit": "ns",
            "range": "± 5509.267847149947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194094,
            "unit": "ns",
            "range": "± 7307.112202142093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168733.92857142858,
            "unit": "ns",
            "range": "± 2222.3177943581513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3241144.966666667,
            "unit": "ns",
            "range": "± 39387.72936709145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2809701.3571428573,
            "unit": "ns",
            "range": "± 26567.56477826398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12670.117021276596,
            "unit": "ns",
            "range": "± 1232.2065691958985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60415.60752688172,
            "unit": "ns",
            "range": "± 5039.080684061945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53097.942028985504,
            "unit": "ns",
            "range": "± 2550.7798800739233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67037.30808080808,
            "unit": "ns",
            "range": "± 14877.60382127415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3127.088888888889,
            "unit": "ns",
            "range": "± 477.05568526268314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12009.404494382023,
            "unit": "ns",
            "range": "± 860.4626625344847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3740546.165264423,
            "unit": "ns",
            "range": "± 5330.997741622506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1248116.0926339286,
            "unit": "ns",
            "range": "± 2886.568032696557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770904.2580915178,
            "unit": "ns",
            "range": "± 1182.9196196984624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905232.4915364583,
            "unit": "ns",
            "range": "± 2524.524847065424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629509.9802734375,
            "unit": "ns",
            "range": "± 683.3644469856359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578753.4075520834,
            "unit": "ns",
            "range": "± 457.4333909386352"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "362de2c5404515ccb1b22a0d454c87d1db580b79",
          "message": "Merge pull request #3716 from greymistcube/refactor/dumb-action\n\n🧹 Cleanup `DumbAction`",
          "timestamp": "2024-03-29T20:27:00+09:00",
          "tree_id": "7145d7a7252499b8292eaabb2d5a56d421e6c0c3",
          "url": "https://github.com/planetarium/libplanet/commit/362de2c5404515ccb1b22a0d454c87d1db580b79"
        },
        "date": 1711712186936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5666500.533333333,
            "unit": "ns",
            "range": "± 52053.80168752144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14712663.266666668,
            "unit": "ns",
            "range": "± 107080.55460224237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37488233.2,
            "unit": "ns",
            "range": "± 213247.9918549561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74996664.83333333,
            "unit": "ns",
            "range": "± 317946.1094081976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153083988.5,
            "unit": "ns",
            "range": "± 426782.2320297194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36079.364197530864,
            "unit": "ns",
            "range": "± 1589.7866897251215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026009.8608247422,
            "unit": "ns",
            "range": "± 126719.33451013452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933657.196969697,
            "unit": "ns",
            "range": "± 91110.78169129639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1655009.71,
            "unit": "ns",
            "range": "± 154656.28085618958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7553175.305555556,
            "unit": "ns",
            "range": "± 249644.59279347162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2482435.7647058824,
            "unit": "ns",
            "range": "± 49228.20268089397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546356.625,
            "unit": "ns",
            "range": "± 98978.00512484922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3240382.3666666667,
            "unit": "ns",
            "range": "± 52725.459667259514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3175669.063829787,
            "unit": "ns",
            "range": "± 121093.09385944501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8670829.45,
            "unit": "ns",
            "range": "± 236077.93980193412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212715.9,
            "unit": "ns",
            "range": "± 17054.930432889698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200285.7857142857,
            "unit": "ns",
            "range": "± 3520.0830066386748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170901.30434782608,
            "unit": "ns",
            "range": "± 4167.367682741955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3310082.066666667,
            "unit": "ns",
            "range": "± 31574.324798722748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772618.714285714,
            "unit": "ns",
            "range": "± 30771.451847397504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12965.471264367816,
            "unit": "ns",
            "range": "± 930.2088392558835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62696.27173913043,
            "unit": "ns",
            "range": "± 5600.232793637137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55888.28571428572,
            "unit": "ns",
            "range": "± 7054.541010525848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63068.436170212764,
            "unit": "ns",
            "range": "± 11168.283712937102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3594.0795454545455,
            "unit": "ns",
            "range": "± 804.7893452025288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13167.988888888889,
            "unit": "ns",
            "range": "± 1160.0829735381576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3792995.830403646,
            "unit": "ns",
            "range": "± 4061.0831901996016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202364.9913504464,
            "unit": "ns",
            "range": "± 1586.2598864862578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764094.8921223958,
            "unit": "ns",
            "range": "± 713.5282261097335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2022689.5345982143,
            "unit": "ns",
            "range": "± 2439.109806637709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632374.993359375,
            "unit": "ns",
            "range": "± 279.21315284300243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575589.7419921875,
            "unit": "ns",
            "range": "± 961.174039784399"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad08e71a984c56196853c85567a50b7e6ea7e374",
          "message": "Merge pull request #3717 from greymistcube/chore/cleanup\n\n🧹 Minor cleanup",
          "timestamp": "2024-03-29T20:58:16+09:00",
          "tree_id": "e2d7a8ace564d7f0e6b01893b169194ab2e4d640",
          "url": "https://github.com/planetarium/libplanet/commit/ad08e71a984c56196853c85567a50b7e6ea7e374"
        },
        "date": 1711714079473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5780399.166666667,
            "unit": "ns",
            "range": "± 31737.55561084557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14575717.785714285,
            "unit": "ns",
            "range": "± 101047.81802704833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37447618.833333336,
            "unit": "ns",
            "range": "± 105121.75118517622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76838709.5,
            "unit": "ns",
            "range": "± 391862.05730507214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155706917.53333333,
            "unit": "ns",
            "range": "± 639701.406519576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36514.673684210524,
            "unit": "ns",
            "range": "± 2471.991566991853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012658.5612244898,
            "unit": "ns",
            "range": "± 111064.98340718591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1915941.8125,
            "unit": "ns",
            "range": "± 75568.8840360466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1629160.7659574468,
            "unit": "ns",
            "range": "± 118826.6047824168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7580127.121621622,
            "unit": "ns",
            "range": "± 248315.43864579353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470755.523255814,
            "unit": "ns",
            "range": "± 90310.9752536277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2589358.11971831,
            "unit": "ns",
            "range": "± 126516.45329017387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3231785.6923076925,
            "unit": "ns",
            "range": "± 85901.47434719346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3248395.7580645164,
            "unit": "ns",
            "range": "± 146278.11456943818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8775274,
            "unit": "ns",
            "range": "± 191220.59647273587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203918.12068965516,
            "unit": "ns",
            "range": "± 8828.32009228512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194928,
            "unit": "ns",
            "range": "± 7870.892022807445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164536.7894736842,
            "unit": "ns",
            "range": "± 3655.518500674279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3256038.4,
            "unit": "ns",
            "range": "± 22452.561339092572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3002811.2666666666,
            "unit": "ns",
            "range": "± 32185.00820139416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13463.08888888889,
            "unit": "ns",
            "range": "± 1125.8370757900411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67720.64432989691,
            "unit": "ns",
            "range": "± 6838.025322582918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90102.88888888889,
            "unit": "ns",
            "range": "± 2037.9154382194893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72377.67346938775,
            "unit": "ns",
            "range": "± 19993.66969651934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3431.8172043010754,
            "unit": "ns",
            "range": "± 797.7205289507664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12909.255813953489,
            "unit": "ns",
            "range": "± 964.745186547101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710579.326171875,
            "unit": "ns",
            "range": "± 4937.183645240882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219290.9955729167,
            "unit": "ns",
            "range": "± 1915.032457895967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773853.1899088542,
            "unit": "ns",
            "range": "± 1123.6613959345095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917870.6909877232,
            "unit": "ns",
            "range": "± 1600.0157112870897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624716.1305803572,
            "unit": "ns",
            "range": "± 646.1083632837183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580697.9250139509,
            "unit": "ns",
            "range": "± 750.5890373575751"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc",
          "message": "Merge pull request #3718 from greymistcube/refactor/dumb-action\n\n♻️ Overhaul `DumbAction`",
          "timestamp": "2024-04-01T10:34:00+09:00",
          "tree_id": "87a583c1d570c6bc2afb4f2b8f7a1ca01ed70eaa",
          "url": "https://github.com/planetarium/libplanet/commit/ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc"
        },
        "date": 1711935807725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5503117.966666667,
            "unit": "ns",
            "range": "± 20068.436140462203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14100767.2,
            "unit": "ns",
            "range": "± 63327.22511707403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36462476.36666667,
            "unit": "ns",
            "range": "± 169796.69994515993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76114366.1,
            "unit": "ns",
            "range": "± 378801.0625542873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153411208.06666666,
            "unit": "ns",
            "range": "± 1379446.8803339498"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40893.602040816324,
            "unit": "ns",
            "range": "± 6504.21919763807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982932.08,
            "unit": "ns",
            "range": "± 88018.65615606039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1856059.857142857,
            "unit": "ns",
            "range": "± 66863.18246862583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602275.97,
            "unit": "ns",
            "range": "± 149523.5598733561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7613450.055555556,
            "unit": "ns",
            "range": "± 285906.0705636759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2416059.2666666666,
            "unit": "ns",
            "range": "± 36081.94684220642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2591761.382352941,
            "unit": "ns",
            "range": "± 81451.68618379063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3115781.8,
            "unit": "ns",
            "range": "± 50922.5457171407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3055434.0942028984,
            "unit": "ns",
            "range": "± 147451.22230950886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8566420.935483871,
            "unit": "ns",
            "range": "± 206418.44124349864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201281.44827586206,
            "unit": "ns",
            "range": "± 5635.217447865616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194367.37837837837,
            "unit": "ns",
            "range": "± 6483.498452701766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169760.48,
            "unit": "ns",
            "range": "± 4364.0240806698885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3155568.285714286,
            "unit": "ns",
            "range": "± 24759.16205919793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828368,
            "unit": "ns",
            "range": "± 22815.738107381392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12181.69411764706,
            "unit": "ns",
            "range": "± 669.8235201747336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66588.71875,
            "unit": "ns",
            "range": "± 3839.703264859285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53426.84375,
            "unit": "ns",
            "range": "± 1656.4740654888312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89554.71649484536,
            "unit": "ns",
            "range": "± 16886.533903544518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3627.436170212766,
            "unit": "ns",
            "range": "± 276.4275871466389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11740.719178082192,
            "unit": "ns",
            "range": "± 594.941366078656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3815017.743582589,
            "unit": "ns",
            "range": "± 6634.034166117745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217685.1196986607,
            "unit": "ns",
            "range": "± 1176.482909479517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760329.6475306919,
            "unit": "ns",
            "range": "± 2659.8402321613175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930150.7071614584,
            "unit": "ns",
            "range": "± 4875.860663431457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606145.7219401042,
            "unit": "ns",
            "range": "± 1088.1222968718268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566753.3604910715,
            "unit": "ns",
            "range": "± 730.9840270695355"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "421ca95ad9e5ae172247b8b16b9057487bf47028",
          "message": "Merge pull request #3719 from greymistcube/refactor/test-util-bytes-equality\n\n♻️ Changed `AssertBytesEqual()` overloads and use more hex representation",
          "timestamp": "2024-04-01T12:48:45+09:00",
          "tree_id": "407de50a21cfd9ecda31c72e8385cd67126ba4b7",
          "url": "https://github.com/planetarium/libplanet/commit/421ca95ad9e5ae172247b8b16b9057487bf47028"
        },
        "date": 1711943897148,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6119304.357142857,
            "unit": "ns",
            "range": "± 27709.167643877063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15128106.066666666,
            "unit": "ns",
            "range": "± 110152.49050129595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38850050.428571425,
            "unit": "ns",
            "range": "± 582693.108669955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76976148.83333333,
            "unit": "ns",
            "range": "± 392909.4965675332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154296670.06666666,
            "unit": "ns",
            "range": "± 482759.0131021402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47096.5,
            "unit": "ns",
            "range": "± 7102.064789459768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078602.2121212122,
            "unit": "ns",
            "range": "± 95355.46278287457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2021468.648148148,
            "unit": "ns",
            "range": "± 79465.87948614135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1696966.510989011,
            "unit": "ns",
            "range": "± 103893.73894058983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7525508.2272727275,
            "unit": "ns",
            "range": "± 138715.15866118696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2495743.9375,
            "unit": "ns",
            "range": "± 70508.74205873797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2671174.641025641,
            "unit": "ns",
            "range": "± 91008.67095487665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3180786.9615384615,
            "unit": "ns",
            "range": "± 60227.47035247671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3353972.4166666665,
            "unit": "ns",
            "range": "± 129805.13033411559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8777843.629032258,
            "unit": "ns",
            "range": "± 183526.5677987326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224024.66326530612,
            "unit": "ns",
            "range": "± 14854.164282615344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228588.45833333334,
            "unit": "ns",
            "range": "± 7465.595217775591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171620.44736842104,
            "unit": "ns",
            "range": "± 3753.2019585309376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3330991.8666666667,
            "unit": "ns",
            "range": "± 46930.87372305702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2880562.785714286,
            "unit": "ns",
            "range": "± 34556.90915705586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18744.163265306124,
            "unit": "ns",
            "range": "± 3041.9538339213523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85095.41836734694,
            "unit": "ns",
            "range": "± 15014.104396992276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93269.27777777778,
            "unit": "ns",
            "range": "± 2694.3984286039604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88899.5421686747,
            "unit": "ns",
            "range": "± 6318.215596544615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6847.3247422680415,
            "unit": "ns",
            "range": "± 797.5908126235178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18851.408163265307,
            "unit": "ns",
            "range": "± 3036.038934039687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3836685.2688802085,
            "unit": "ns",
            "range": "± 6085.404626380128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199877.8712332589,
            "unit": "ns",
            "range": "± 1688.3368587053033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772180.625,
            "unit": "ns",
            "range": "± 392.6290814840445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969392.2205729166,
            "unit": "ns",
            "range": "± 9325.168173298927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607201.4579427083,
            "unit": "ns",
            "range": "± 1081.5566699842016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580425.8286458333,
            "unit": "ns",
            "range": "± 692.3510610285615"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a763a2bd7072f072d207e8bd859df1389f5102eb",
          "message": "Merge pull request #3720 from greymistcube/refactor/dumb-action\n\n♻️ Refactor `DumbAction`",
          "timestamp": "2024-04-02T08:53:21+09:00",
          "tree_id": "4a1f60ea587825d5c1cadd8ec7f90693d651c6dd",
          "url": "https://github.com/planetarium/libplanet/commit/a763a2bd7072f072d207e8bd859df1389f5102eb"
        },
        "date": 1712016197337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6029821.5,
            "unit": "ns",
            "range": "± 142766.3166247557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15041329.7,
            "unit": "ns",
            "range": "± 114164.29971705565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38031423,
            "unit": "ns",
            "range": "± 174465.29053285724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77875517.7,
            "unit": "ns",
            "range": "± 381672.8207266758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155862603.69230768,
            "unit": "ns",
            "range": "± 447316.9443950201"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38353.7191011236,
            "unit": "ns",
            "range": "± 2863.115618552486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996877.57,
            "unit": "ns",
            "range": "± 96765.86534478127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1936210.6734693877,
            "unit": "ns",
            "range": "± 76551.79945805426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1688285.8020833333,
            "unit": "ns",
            "range": "± 146981.9412258469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7511536.419354838,
            "unit": "ns",
            "range": "± 192597.67969072628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2643432.6875,
            "unit": "ns",
            "range": "± 81927.533734604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2727221.4,
            "unit": "ns",
            "range": "± 42779.982830424655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3323194.285714286,
            "unit": "ns",
            "range": "± 56167.95562408348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3402414.2647058824,
            "unit": "ns",
            "range": "± 137970.0893230976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8905818.647058824,
            "unit": "ns",
            "range": "± 223145.5269164976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236969.4358974359,
            "unit": "ns",
            "range": "± 8221.637981233845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216662.0625,
            "unit": "ns",
            "range": "± 18667.138271819025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172123.92424242425,
            "unit": "ns",
            "range": "± 8048.29259162006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3293654.3571428573,
            "unit": "ns",
            "range": "± 52611.14241826483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2952362.625,
            "unit": "ns",
            "range": "± 55042.382262973806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19855.614583333332,
            "unit": "ns",
            "range": "± 3449.9378922549704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98300.31944444444,
            "unit": "ns",
            "range": "± 4861.87557075786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88563.4191919192,
            "unit": "ns",
            "range": "± 14584.551001377133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98259.51020408163,
            "unit": "ns",
            "range": "± 11132.861281554162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5110.611111111111,
            "unit": "ns",
            "range": "± 1606.5544757171203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15632.90625,
            "unit": "ns",
            "range": "± 2143.113200724222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3683955.553185096,
            "unit": "ns",
            "range": "± 3579.222447171808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216224.6630859375,
            "unit": "ns",
            "range": "± 869.1887263811782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767781.0487583706,
            "unit": "ns",
            "range": "± 881.2243112433742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934617.2698317308,
            "unit": "ns",
            "range": "± 1069.0801822639146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620769.9130859375,
            "unit": "ns",
            "range": "± 2231.253680880572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575595.9159405048,
            "unit": "ns",
            "range": "± 979.9291494557333"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ea676dfe55226895127f404097c0fb64399b925",
          "message": "Merge pull request #3721 from greymistcube/refactor/dumb-action\n\n♻️ Add mint and burn functionality to `DumbAction`",
          "timestamp": "2024-04-02T18:27:19+09:00",
          "tree_id": "581ef3be9c0e05074ee9c4ffb20168dd9eff71a3",
          "url": "https://github.com/planetarium/libplanet/commit/1ea676dfe55226895127f404097c0fb64399b925"
        },
        "date": 1712050627964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5579060.033333333,
            "unit": "ns",
            "range": "± 19291.647518575297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14748635.4,
            "unit": "ns",
            "range": "± 172767.55215474594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37112280.86666667,
            "unit": "ns",
            "range": "± 101671.0107193552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75163863.8,
            "unit": "ns",
            "range": "± 429381.06769215746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148700060.16666666,
            "unit": "ns",
            "range": "± 678647.9169953263"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38207.765957446805,
            "unit": "ns",
            "range": "± 4044.5484088748244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998191.095959596,
            "unit": "ns",
            "range": "± 90886.29502755123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887143.1046511629,
            "unit": "ns",
            "range": "± 69508.76737133837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584426.2783505155,
            "unit": "ns",
            "range": "± 144046.42238852076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7539152.815789473,
            "unit": "ns",
            "range": "± 255167.44004027706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2408584.1774193547,
            "unit": "ns",
            "range": "± 72142.19637326784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2524051.964285714,
            "unit": "ns",
            "range": "± 107059.61833159966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186111.4523809524,
            "unit": "ns",
            "range": "± 65457.85327481814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3136481.8913043477,
            "unit": "ns",
            "range": "± 144879.5583366747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8840623.108108109,
            "unit": "ns",
            "range": "± 166312.6840819531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200438.90625,
            "unit": "ns",
            "range": "± 5747.131985211715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197136.23076923078,
            "unit": "ns",
            "range": "± 2609.7842871856337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166512.36666666667,
            "unit": "ns",
            "range": "± 2055.6453233080106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3258547.3333333335,
            "unit": "ns",
            "range": "± 36018.63214993569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2859916.066666667,
            "unit": "ns",
            "range": "± 32177.853090211567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12621.141304347826,
            "unit": "ns",
            "range": "± 1243.1743362711104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59328.247191011236,
            "unit": "ns",
            "range": "± 3732.164249287107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53403.84146341463,
            "unit": "ns",
            "range": "± 2730.8235020314323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64373.5918367347,
            "unit": "ns",
            "range": "± 17877.61225153464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3526.4021739130435,
            "unit": "ns",
            "range": "± 339.34724216420693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11752.521978021978,
            "unit": "ns",
            "range": "± 672.627517493432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714646.053185096,
            "unit": "ns",
            "range": "± 4801.606645784082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227020.009765625,
            "unit": "ns",
            "range": "± 1727.58437070588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754592.4048177083,
            "unit": "ns",
            "range": "± 620.0381786959449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945459.094951923,
            "unit": "ns",
            "range": "± 2327.09408088179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618288.8531668527,
            "unit": "ns",
            "range": "± 319.537798493328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573570.1302315848,
            "unit": "ns",
            "range": "± 309.2225440457359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "438df37e9ef7b1b76cc81331e1c1cde526e10e0b",
          "message": "Merge pull request #3722 from greymistcube/refactor/random-test\n\n♻️ Changed `RandomAction` to `ContextRecordingAction`",
          "timestamp": "2024-04-02T19:01:15+09:00",
          "tree_id": "8ac4897b6fdb0cba78832f4cd134cac834f7fdee",
          "url": "https://github.com/planetarium/libplanet/commit/438df37e9ef7b1b76cc81331e1c1cde526e10e0b"
        },
        "date": 1712052649319,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5902967.7,
            "unit": "ns",
            "range": "± 55864.22729797665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15136061.366666667,
            "unit": "ns",
            "range": "± 154220.5802445995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37576480.6,
            "unit": "ns",
            "range": "± 122308.44345272558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76784281.1,
            "unit": "ns",
            "range": "± 257305.03299941213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156215941.03333333,
            "unit": "ns",
            "range": "± 551441.2941685331"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42168.142857142855,
            "unit": "ns",
            "range": "± 7302.876463718246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1063578.193877551,
            "unit": "ns",
            "range": "± 116780.99121424957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1942040.5416666667,
            "unit": "ns",
            "range": "± 75200.04785590326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1700456.0959595959,
            "unit": "ns",
            "range": "± 187155.74148890984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7529586.315789473,
            "unit": "ns",
            "range": "± 150115.00462980324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2481759.2264150945,
            "unit": "ns",
            "range": "± 97427.0932912325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2659259.765957447,
            "unit": "ns",
            "range": "± 92503.82995154796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3264901,
            "unit": "ns",
            "range": "± 49911.43531835627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3331466.8529411764,
            "unit": "ns",
            "range": "± 159320.10449872768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8790819.970588235,
            "unit": "ns",
            "range": "± 221686.3164949636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236051.83333333334,
            "unit": "ns",
            "range": "± 16167.836117080476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235767.58163265305,
            "unit": "ns",
            "range": "± 9197.220105002594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176691.5934065934,
            "unit": "ns",
            "range": "± 12685.141114248609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3328260.8571428573,
            "unit": "ns",
            "range": "± 55643.4738005582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2959778.7666666666,
            "unit": "ns",
            "range": "± 49726.471917404124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27473.14285714286,
            "unit": "ns",
            "range": "± 2315.103124999283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102599.01030927835,
            "unit": "ns",
            "range": "± 7062.694853499095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95049.27551020408,
            "unit": "ns",
            "range": "± 3749.3452498697807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93141.47916666667,
            "unit": "ns",
            "range": "± 10743.37312900539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6319.440860215053,
            "unit": "ns",
            "range": "± 443.1062161006975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21298.59756097561,
            "unit": "ns",
            "range": "± 1083.313719021936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3795236.530691964,
            "unit": "ns",
            "range": "± 30320.70320470987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217468.0604166666,
            "unit": "ns",
            "range": "± 3950.775758796644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766484.5893554688,
            "unit": "ns",
            "range": "± 1752.2738376725658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955614.3194110577,
            "unit": "ns",
            "range": "± 2909.8992465769793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617428.5088704427,
            "unit": "ns",
            "range": "± 3956.990081106369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583244.9419270833,
            "unit": "ns",
            "range": "± 1668.9457309506877"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03c1a63b7ab259350002a9031c78a30c64dcaf3e",
          "message": "Merge pull request #3723 from greymistcube/chore/cleanup\n\n🧹 Removed RecordRandom from DumbAction",
          "timestamp": "2024-04-03T00:56:21+09:00",
          "tree_id": "3421221604a67af3a457b2d9bdd5d6fdb44dfe0c",
          "url": "https://github.com/planetarium/libplanet/commit/03c1a63b7ab259350002a9031c78a30c64dcaf3e"
        },
        "date": 1712073968315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5787324.083333333,
            "unit": "ns",
            "range": "± 25446.848118661816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14846101.461538462,
            "unit": "ns",
            "range": "± 53486.75465261686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37678612.06666667,
            "unit": "ns",
            "range": "± 218348.90424026363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76692337.8,
            "unit": "ns",
            "range": "± 323962.35863780754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154017060.2857143,
            "unit": "ns",
            "range": "± 561760.6133651016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39297.31443298969,
            "unit": "ns",
            "range": "± 4846.408737684656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980542.3888888889,
            "unit": "ns",
            "range": "± 75590.80740759724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917347.775,
            "unit": "ns",
            "range": "± 67866.87398795376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623570.2346938776,
            "unit": "ns",
            "range": "± 134545.96413042108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7513178.735294118,
            "unit": "ns",
            "range": "± 241030.60688537848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2388968.5384615385,
            "unit": "ns",
            "range": "± 81169.54981455278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2526335.8846153845,
            "unit": "ns",
            "range": "± 50082.03053417616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3128202.05,
            "unit": "ns",
            "range": "± 65937.49556765263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3221354.790322581,
            "unit": "ns",
            "range": "± 138950.32280322074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8738781.129032258,
            "unit": "ns",
            "range": "± 226915.24362203933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201511.18421052632,
            "unit": "ns",
            "range": "± 7792.3139607424655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194490.1052631579,
            "unit": "ns",
            "range": "± 8326.31110371602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164546.7619047619,
            "unit": "ns",
            "range": "± 3609.6607445127293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3262511.5,
            "unit": "ns",
            "range": "± 31162.931764624886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2905239.2,
            "unit": "ns",
            "range": "± 40095.07858685046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12864.16304347826,
            "unit": "ns",
            "range": "± 1185.4136411384968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63019.36082474227,
            "unit": "ns",
            "range": "± 5747.434125303161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67720.4,
            "unit": "ns",
            "range": "± 17147.179378733537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66367.98969072165,
            "unit": "ns",
            "range": "± 13465.634995931037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4576.242424242424,
            "unit": "ns",
            "range": "± 1909.7844738475503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12699.902298850575,
            "unit": "ns",
            "range": "± 1272.4454798003808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3763693.236328125,
            "unit": "ns",
            "range": "± 5765.642315727934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204587.4427083333,
            "unit": "ns",
            "range": "± 1054.0227177518918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759990.1235026042,
            "unit": "ns",
            "range": "± 1050.6601572572035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951798.16875,
            "unit": "ns",
            "range": "± 2306.2344351637266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610583.4027994792,
            "unit": "ns",
            "range": "± 540.8248163109743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555675.0506510417,
            "unit": "ns",
            "range": "± 1035.9329347625114"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b09e6c5623785e1b228b73e0e6c412d2a08355c",
          "message": "Merge pull request #3724 from greymistcube/chore/test-description-for-qol\n\n🧹 More descriptive currency ticker and documentation for easier testing",
          "timestamp": "2024-04-03T14:48:08+09:00",
          "tree_id": "23b3b99e5773f34063f3e1c09242ba5917cfc817",
          "url": "https://github.com/planetarium/libplanet/commit/2b09e6c5623785e1b228b73e0e6c412d2a08355c"
        },
        "date": 1712123862453,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5720803.142857143,
            "unit": "ns",
            "range": "± 23178.396385783108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14427596.714285715,
            "unit": "ns",
            "range": "± 89294.95431126302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37560679.9,
            "unit": "ns",
            "range": "± 151259.82494880407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74255064.11538461,
            "unit": "ns",
            "range": "± 275934.57857692114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150692204.83333334,
            "unit": "ns",
            "range": "± 432345.46250482975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39781.163265306124,
            "unit": "ns",
            "range": "± 6373.294004509364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971902.9255319149,
            "unit": "ns",
            "range": "± 68426.00403579201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1944319.0875,
            "unit": "ns",
            "range": "± 101270.24462688787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1614932.4479166667,
            "unit": "ns",
            "range": "± 130134.57573502173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7596330.517241379,
            "unit": "ns",
            "range": "± 219671.34197926888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2544593.7666666666,
            "unit": "ns",
            "range": "± 43190.767653460825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576543.769230769,
            "unit": "ns",
            "range": "± 68280.57317308208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3193870.1333333333,
            "unit": "ns",
            "range": "± 49105.46177051223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3441347.897959184,
            "unit": "ns",
            "range": "± 136722.54280540888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8641828.529411765,
            "unit": "ns",
            "range": "± 216272.1602801819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198344.54545454544,
            "unit": "ns",
            "range": "± 5630.109746326604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188782.87234042553,
            "unit": "ns",
            "range": "± 7063.956080348171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166360.61764705883,
            "unit": "ns",
            "range": "± 2595.8204358726584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3194768.285714286,
            "unit": "ns",
            "range": "± 53040.6635363249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863973.1428571427,
            "unit": "ns",
            "range": "± 30155.062143877254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12226.76923076923,
            "unit": "ns",
            "range": "± 859.0018377541211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59933.426315789475,
            "unit": "ns",
            "range": "± 4784.706178849139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52537.793103448275,
            "unit": "ns",
            "range": "± 1480.357953317622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57512.06842105263,
            "unit": "ns",
            "range": "± 8602.14368341148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3131.3711340206187,
            "unit": "ns",
            "range": "± 484.5547853353725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11897.09090909091,
            "unit": "ns",
            "range": "± 747.7528271368275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3803274.550480769,
            "unit": "ns",
            "range": "± 4407.283801714076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219387.3609095982,
            "unit": "ns",
            "range": "± 2109.803189489144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774173.2849684495,
            "unit": "ns",
            "range": "± 936.4923114965409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933851.910435268,
            "unit": "ns",
            "range": "± 1128.493188549266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627197.9212890625,
            "unit": "ns",
            "range": "± 1164.4728575371296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573535.3900669643,
            "unit": "ns",
            "range": "± 598.7597895212302"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c000850274ad9a846d44f628b66e2561b4002830",
          "message": "Merge pull request #3726 from greymistcube/refactor/shared-currency-for-testing\n\n♻️ Shared `Currencies` for testing",
          "timestamp": "2024-04-04T10:02:44+09:00",
          "tree_id": "c95218d091f584782dc1bef9ce1fca86a42984f5",
          "url": "https://github.com/planetarium/libplanet/commit/c000850274ad9a846d44f628b66e2561b4002830"
        },
        "date": 1712193156044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5936568.777777778,
            "unit": "ns",
            "range": "± 122148.66102781844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14857384.866666667,
            "unit": "ns",
            "range": "± 105950.95168915707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38870203.43333333,
            "unit": "ns",
            "range": "± 217148.74788378412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77490012.06666666,
            "unit": "ns",
            "range": "± 434825.4876294736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152473824.8,
            "unit": "ns",
            "range": "± 605345.8651235437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43814.291666666664,
            "unit": "ns",
            "range": "± 4908.106061816013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031756.43,
            "unit": "ns",
            "range": "± 109633.87049687868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1992192.0263157894,
            "unit": "ns",
            "range": "± 120933.63355328779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1620092.0520833333,
            "unit": "ns",
            "range": "± 109142.36666206786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8079870.571428572,
            "unit": "ns",
            "range": "± 390341.13851194206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2465675.1285714284,
            "unit": "ns",
            "range": "± 64875.53754921156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2652225.869230769,
            "unit": "ns",
            "range": "± 123427.62830976717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3224743.263157895,
            "unit": "ns",
            "range": "± 110355.3419132043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3261572.8243243243,
            "unit": "ns",
            "range": "± 109624.85818464262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8755259.032258065,
            "unit": "ns",
            "range": "± 197675.88948284072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203827.29787234042,
            "unit": "ns",
            "range": "± 7904.7571640365195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200663.2988505747,
            "unit": "ns",
            "range": "± 10996.640925929876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168414.6,
            "unit": "ns",
            "range": "± 3871.365995831989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3282502.9285714286,
            "unit": "ns",
            "range": "± 37584.45646697025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2920899.214285714,
            "unit": "ns",
            "range": "± 35950.702672449355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14687.537634408602,
            "unit": "ns",
            "range": "± 1779.8894418470745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66714.07368421053,
            "unit": "ns",
            "range": "± 5861.334729706351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60500.06626506024,
            "unit": "ns",
            "range": "± 5380.453594516964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94639.77551020408,
            "unit": "ns",
            "range": "± 16201.759954374951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5341.050505050505,
            "unit": "ns",
            "range": "± 1723.242662231125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13895.648936170213,
            "unit": "ns",
            "range": "± 1607.1406650833171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3696149.9249441964,
            "unit": "ns",
            "range": "± 3109.7119648074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221295.970424107,
            "unit": "ns",
            "range": "± 1204.3555998832587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767967.9516276042,
            "unit": "ns",
            "range": "± 2502.19039637661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965902.73515625,
            "unit": "ns",
            "range": "± 4370.1496225657365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616187.3356770833,
            "unit": "ns",
            "range": "± 401.42263620689556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582825.0930989584,
            "unit": "ns",
            "range": "± 643.9294250629466"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f63f65c6f3d180999373bb839c5cb8396c5c3bc5",
          "message": "Merge pull request #3727 from greymistcube/chore/fix-exception-message\n\n🩹 Added missing information in Exception",
          "timestamp": "2024-04-04T16:52:49+09:00",
          "tree_id": "446381872af4f2fe81380a140647caf2f459f254",
          "url": "https://github.com/planetarium/libplanet/commit/f63f65c6f3d180999373bb839c5cb8396c5c3bc5"
        },
        "date": 1712217759768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6080405.733333333,
            "unit": "ns",
            "range": "± 51580.898048553194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14790116.866666667,
            "unit": "ns",
            "range": "± 128961.94338578376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37478278.5,
            "unit": "ns",
            "range": "± 154718.42110887467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77418887.66666667,
            "unit": "ns",
            "range": "± 673629.9677286448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154150220.86666667,
            "unit": "ns",
            "range": "± 748904.951791697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39927.71428571428,
            "unit": "ns",
            "range": "± 6598.644009407281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978863.8315789474,
            "unit": "ns",
            "range": "± 81564.21154899757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1864333.3857142858,
            "unit": "ns",
            "range": "± 60040.896038975174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1578619.131868132,
            "unit": "ns",
            "range": "± 94057.83658617342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7561893.080645162,
            "unit": "ns",
            "range": "± 205149.59521136017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2446212.9897959186,
            "unit": "ns",
            "range": "± 89912.63192425616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2481930.5789473685,
            "unit": "ns",
            "range": "± 63734.825969150676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186810.6764705884,
            "unit": "ns",
            "range": "± 63909.96013263044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3156270.4552238807,
            "unit": "ns",
            "range": "± 149566.24313594628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8687334.486486487,
            "unit": "ns",
            "range": "± 212099.89302247574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201587.2558139535,
            "unit": "ns",
            "range": "± 7437.819637286901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200112.78481012658,
            "unit": "ns",
            "range": "± 10152.752645150598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171988.7857142857,
            "unit": "ns",
            "range": "± 3035.0494972157294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3259743.466666667,
            "unit": "ns",
            "range": "± 35409.28664280574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870359.3,
            "unit": "ns",
            "range": "± 44167.7515586073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12320.189473684211,
            "unit": "ns",
            "range": "± 803.3820968287998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61388.43010752688,
            "unit": "ns",
            "range": "± 4782.544564209403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53405.192307692305,
            "unit": "ns",
            "range": "± 1427.038885783587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59166.010309278354,
            "unit": "ns",
            "range": "± 9995.709539487894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4832.55,
            "unit": "ns",
            "range": "± 1683.8181982469114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15502.689473684211,
            "unit": "ns",
            "range": "± 1303.2734261436756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738395.865792411,
            "unit": "ns",
            "range": "± 4301.23537822884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227369.5457589286,
            "unit": "ns",
            "range": "± 2606.2076947846913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771553.2858072916,
            "unit": "ns",
            "range": "± 1373.1137021475472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924908.9995492788,
            "unit": "ns",
            "range": "± 861.3050110728184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616127.5133713942,
            "unit": "ns",
            "range": "± 658.9685600397814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572322.673828125,
            "unit": "ns",
            "range": "± 654.1250537290855"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74c0af4f0eb2c55103c10378c3e77f7d2e595d44",
          "message": "Merge pull request #3728 from greymistcube/refactor/remove-negative-balance\n\n♻️ Removed negative balance feature",
          "timestamp": "2024-04-05T13:01:33+09:00",
          "tree_id": "38305c1f46d1f603d4fb690302d54cb8f389db44",
          "url": "https://github.com/planetarium/libplanet/commit/74c0af4f0eb2c55103c10378c3e77f7d2e595d44"
        },
        "date": 1712290275000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5742613.666666667,
            "unit": "ns",
            "range": "± 13534.189925975657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14624606.57142857,
            "unit": "ns",
            "range": "± 100238.44587894046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37367410.78571428,
            "unit": "ns",
            "range": "± 389115.5926105286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76333944.42857143,
            "unit": "ns",
            "range": "± 284016.11200191936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152800681.8,
            "unit": "ns",
            "range": "± 1102333.648646828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37691.23626373626,
            "unit": "ns",
            "range": "± 3454.1298722130837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979390.2421052632,
            "unit": "ns",
            "range": "± 82926.5711582107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866941.3510638298,
            "unit": "ns",
            "range": "± 71599.44038370653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619897.076923077,
            "unit": "ns",
            "range": "± 96851.24534015277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7845109.216216216,
            "unit": "ns",
            "range": "± 234445.1642308489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423352.214285714,
            "unit": "ns",
            "range": "± 67925.31417441602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497380.275862069,
            "unit": "ns",
            "range": "± 71576.20905565147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3087874.4285714286,
            "unit": "ns",
            "range": "± 40433.247073159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3153666.023809524,
            "unit": "ns",
            "range": "± 114731.67514433949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8587047.533333333,
            "unit": "ns",
            "range": "± 156622.57989185644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200219.25396825396,
            "unit": "ns",
            "range": "± 9171.053893370432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192678.07352941178,
            "unit": "ns",
            "range": "± 8969.28661253482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179503.42857142858,
            "unit": "ns",
            "range": "± 2885.0446327512914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3199942.153846154,
            "unit": "ns",
            "range": "± 19388.77355089002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848468,
            "unit": "ns",
            "range": "± 30459.69038682991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12286.154929577464,
            "unit": "ns",
            "range": "± 617.3525884865686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60185.07608695652,
            "unit": "ns",
            "range": "± 3521.2140052928107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60632.53846153846,
            "unit": "ns",
            "range": "± 6168.1686212498225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81260.82222222222,
            "unit": "ns",
            "range": "± 7976.205757643461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2971.68085106383,
            "unit": "ns",
            "range": "± 372.0269447047682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11373.45294117647,
            "unit": "ns",
            "range": "± 638.4825370674253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3679941.4832589286,
            "unit": "ns",
            "range": "± 4665.960529691716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196755.3489118305,
            "unit": "ns",
            "range": "± 1439.9346875510869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777385.6348353794,
            "unit": "ns",
            "range": "± 1106.2525292906323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955741.4795572916,
            "unit": "ns",
            "range": "± 2467.189874197506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627728.7546735491,
            "unit": "ns",
            "range": "± 457.82532467709484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576501.8983723958,
            "unit": "ns",
            "range": "± 399.76828663437595"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8f6d650474f812c3b47cbe82532c0c9f932d6a2",
          "message": "Merge pull request #3729 from greymistcube/bump/litedb-to-5.0.19\n\n⬆️ Bump Litedb to 5.0.15",
          "timestamp": "2024-04-08T16:23:12+09:00",
          "tree_id": "35c6f1dfd73b98176c26ec1f06a87cf0b097b299",
          "url": "https://github.com/planetarium/libplanet/commit/c8f6d650474f812c3b47cbe82532c0c9f932d6a2"
        },
        "date": 1712561475763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5717818.428571428,
            "unit": "ns",
            "range": "± 22158.684860010868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14544096.833333334,
            "unit": "ns",
            "range": "± 41530.59600481495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37286981.266666666,
            "unit": "ns",
            "range": "± 193338.441510686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75675077.06666666,
            "unit": "ns",
            "range": "± 424486.58418771304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150496123.07142857,
            "unit": "ns",
            "range": "± 313855.523159074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198280.4375,
            "unit": "ns",
            "range": "± 3471.792792756119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753495.7142857143,
            "unit": "ns",
            "range": "± 247102.36775536832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3071845.263157895,
            "unit": "ns",
            "range": "± 214313.8162188858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2363060.5454545454,
            "unit": "ns",
            "range": "± 319451.18898780126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8341488.52,
            "unit": "ns",
            "range": "± 212969.70824139914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2603020.120689655,
            "unit": "ns",
            "range": "± 60893.02829130097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2796559.625,
            "unit": "ns",
            "range": "± 146258.2294439716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3777291.285714286,
            "unit": "ns",
            "range": "± 120264.9877875588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3511075.0102040814,
            "unit": "ns",
            "range": "± 267995.5536336222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9427318.92,
            "unit": "ns",
            "range": "± 250380.56152317414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197509.05714285714,
            "unit": "ns",
            "range": "± 6075.511394320729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189929.4375,
            "unit": "ns",
            "range": "± 6955.976630900053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161406.2857142857,
            "unit": "ns",
            "range": "± 1883.2854037792338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3148441.066666667,
            "unit": "ns",
            "range": "± 39023.326905595226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2893760.466666667,
            "unit": "ns",
            "range": "± 44494.85999346548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12976.104166666666,
            "unit": "ns",
            "range": "± 979.0036554866077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63257.5206185567,
            "unit": "ns",
            "range": "± 4394.1264726796135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70702.23469387754,
            "unit": "ns",
            "range": "± 13080.959149234377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71162.17525773196,
            "unit": "ns",
            "range": "± 8932.951758809333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2937.010752688172,
            "unit": "ns",
            "range": "± 660.827667705327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11343.426315789473,
            "unit": "ns",
            "range": "± 870.1879137009291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3803141.1422991073,
            "unit": "ns",
            "range": "± 9585.377605322352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202206.914341518,
            "unit": "ns",
            "range": "± 1941.9566674277219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778925.6162806919,
            "unit": "ns",
            "range": "± 597.0797616389748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934791.2820870536,
            "unit": "ns",
            "range": "± 2821.383974267784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614125.3351004465,
            "unit": "ns",
            "range": "± 845.6804202691375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573737.5853365385,
            "unit": "ns",
            "range": "± 343.08742664421254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712565428563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5776815.1,
            "unit": "ns",
            "range": "± 22229.844189416042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14686259.266666668,
            "unit": "ns",
            "range": "± 80883.49075188041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39051049.6,
            "unit": "ns",
            "range": "± 210901.48122855846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74431307.1,
            "unit": "ns",
            "range": "± 254803.22547571603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148953880.06666666,
            "unit": "ns",
            "range": "± 651045.2232765474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 196623.73333333334,
            "unit": "ns",
            "range": "± 2908.0363887158014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1809927.3865979381,
            "unit": "ns",
            "range": "± 235160.97851763677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3297864.8764044945,
            "unit": "ns",
            "range": "± 223580.03279438175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282025.5416666665,
            "unit": "ns",
            "range": "± 277682.28477668186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8504083.613636363,
            "unit": "ns",
            "range": "± 314820.6875482226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2696544.4714285713,
            "unit": "ns",
            "range": "± 87611.92411071401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2884086.6,
            "unit": "ns",
            "range": "± 86407.69970225624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3852419.4137931033,
            "unit": "ns",
            "range": "± 109131.6127616811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3500389.03,
            "unit": "ns",
            "range": "± 281840.7654576008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9347073.88235294,
            "unit": "ns",
            "range": "± 170698.7129501398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197351.5909090909,
            "unit": "ns",
            "range": "± 6528.556848678509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189251,
            "unit": "ns",
            "range": "± 5621.109135314054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163848.84615384616,
            "unit": "ns",
            "range": "± 1463.3438218770189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3167884.8,
            "unit": "ns",
            "range": "± 21067.079220568623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765847.214285714,
            "unit": "ns",
            "range": "± 31228.19919480708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11886.744680851063,
            "unit": "ns",
            "range": "± 762.5245095467913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59958.22352941176,
            "unit": "ns",
            "range": "± 3114.8691533187907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51469.171428571426,
            "unit": "ns",
            "range": "± 1447.9805914712085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57010.469072164946,
            "unit": "ns",
            "range": "± 8435.118673159464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2408.5105263157893,
            "unit": "ns",
            "range": "± 302.3270560571583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11572.402173913044,
            "unit": "ns",
            "range": "± 863.2582293524185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3694155.1416015625,
            "unit": "ns",
            "range": "± 3039.675313672271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212004.461328125,
            "unit": "ns",
            "range": "± 1028.1210126551416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758443.04296875,
            "unit": "ns",
            "range": "± 1588.39460218918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938001.3733072917,
            "unit": "ns",
            "range": "± 1907.1792817594276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611619.3527483259,
            "unit": "ns",
            "range": "± 504.96884915414324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559017.594921875,
            "unit": "ns",
            "range": "± 1196.9061622891898"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55367a86451f70ecf9de2b90d59c152a5eb5b6",
          "message": "Merge pull request #3733 from greymistcube/prepare/4.4.0\n\n🔧 Prepare 4.4.0",
          "timestamp": "2024-04-08T18:52:52+09:00",
          "tree_id": "e63646c38e8c49ca210258e2d63ecb6a4042cfd0",
          "url": "https://github.com/planetarium/libplanet/commit/4e55367a86451f70ecf9de2b90d59c152a5eb5b6"
        },
        "date": 1712570471560,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5686312.928571428,
            "unit": "ns",
            "range": "± 13342.342452129242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14622393.966666667,
            "unit": "ns",
            "range": "± 73107.54617574096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37642603,
            "unit": "ns",
            "range": "± 138590.46208662636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76451896.23333333,
            "unit": "ns",
            "range": "± 281375.43737415184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152803036,
            "unit": "ns",
            "range": "± 947638.7325246895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 196003.625,
            "unit": "ns",
            "range": "± 3299.8978544797415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762068.0505050505,
            "unit": "ns",
            "range": "± 255344.25750148992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2853731.2465753425,
            "unit": "ns",
            "range": "± 138716.29454181143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394905.2653061226,
            "unit": "ns",
            "range": "± 316953.6121652407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8358454.84,
            "unit": "ns",
            "range": "± 154687.42921525118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2692148.125,
            "unit": "ns",
            "range": "± 133096.43596141876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2996184.6052631577,
            "unit": "ns",
            "range": "± 102810.12069345186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3876179.945945946,
            "unit": "ns",
            "range": "± 127319.72953093456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3507067.355555556,
            "unit": "ns",
            "range": "± 200820.56764831446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9211706.857142856,
            "unit": "ns",
            "range": "± 130224.95733499435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202312.8947368421,
            "unit": "ns",
            "range": "± 6892.404169218709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195430.98507462686,
            "unit": "ns",
            "range": "± 8955.47423662221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168590.25,
            "unit": "ns",
            "range": "± 3792.140027325218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3252827.1428571427,
            "unit": "ns",
            "range": "± 26508.63734595878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2938548.8333333335,
            "unit": "ns",
            "range": "± 39519.99586586637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14740.714285714286,
            "unit": "ns",
            "range": "± 2429.670135856339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59393.625,
            "unit": "ns",
            "range": "± 3258.600740930546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61171.14,
            "unit": "ns",
            "range": "± 16670.554006972714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66733.04545454546,
            "unit": "ns",
            "range": "± 22218.713559296262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4218.4,
            "unit": "ns",
            "range": "± 1618.4026043908204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15433.5,
            "unit": "ns",
            "range": "± 1467.620272223323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3789736.408203125,
            "unit": "ns",
            "range": "± 4082.029899128742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223885.5040457589,
            "unit": "ns",
            "range": "± 1624.7010201620835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767684.1019810268,
            "unit": "ns",
            "range": "± 1564.6878145595244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915267.9625,
            "unit": "ns",
            "range": "± 1529.5929060011752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625026.5617327009,
            "unit": "ns",
            "range": "± 813.5386974965986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567850.5989815848,
            "unit": "ns",
            "range": "± 948.1669533701122"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f78091a0c08ef13d674c824be4b836ce7d6e4dc",
          "message": "Merge pull request #3735 from greymistcube/refactor/iworld\n\n♻️ Changed `SetValidator()` to `SetValidatorSet()`",
          "timestamp": "2024-04-09T16:02:50+09:00",
          "tree_id": "13c4d7d33bd113ebaa1a03877172a4f9fde2a8c1",
          "url": "https://github.com/planetarium/libplanet/commit/4f78091a0c08ef13d674c824be4b836ce7d6e4dc"
        },
        "date": 1712646790529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5686584.766666667,
            "unit": "ns",
            "range": "± 53164.4947893754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15357918,
            "unit": "ns",
            "range": "± 74219.03451368024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37665122,
            "unit": "ns",
            "range": "± 151551.60743974784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79633741.21428572,
            "unit": "ns",
            "range": "± 180054.4209784187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 160981616.63333333,
            "unit": "ns",
            "range": "± 541869.5799215984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 240470.16842105263,
            "unit": "ns",
            "range": "± 14368.436269211637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1811051.8585858585,
            "unit": "ns",
            "range": "± 275361.8013276504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3311472.12371134,
            "unit": "ns",
            "range": "± 342461.33395946625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510892.090909091,
            "unit": "ns",
            "range": "± 345346.32880747085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8527400.892857144,
            "unit": "ns",
            "range": "± 194172.44116970594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2861883.566666667,
            "unit": "ns",
            "range": "± 149494.16977454262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3016010.619047619,
            "unit": "ns",
            "range": "± 108004.56354838978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3940334.275862069,
            "unit": "ns",
            "range": "± 111999.35431156243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3616725.4210526315,
            "unit": "ns",
            "range": "± 225457.1446668556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9502805.037037037,
            "unit": "ns",
            "range": "± 259876.7286620985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209790.325,
            "unit": "ns",
            "range": "± 10847.635179228953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194862.28125,
            "unit": "ns",
            "range": "± 8900.492981653782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165231.6,
            "unit": "ns",
            "range": "± 3769.085529185533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3272562.8076923075,
            "unit": "ns",
            "range": "± 27026.42691387023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2918371.6666666665,
            "unit": "ns",
            "range": "± 30152.97949899258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14372.673684210526,
            "unit": "ns",
            "range": "± 1496.514364598298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67948.85858585859,
            "unit": "ns",
            "range": "± 6934.856496918967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89778.04,
            "unit": "ns",
            "range": "± 3597.7765864092075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89840.9387755102,
            "unit": "ns",
            "range": "± 11419.51484703154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3987.8958333333335,
            "unit": "ns",
            "range": "± 1168.9076905534876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18750.132653061224,
            "unit": "ns",
            "range": "± 3567.768471863007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730604.3811383927,
            "unit": "ns",
            "range": "± 17180.438146008222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212852.7490885416,
            "unit": "ns",
            "range": "± 2910.8893301116195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773245.0657784598,
            "unit": "ns",
            "range": "± 740.5351139052245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956578.1082589286,
            "unit": "ns",
            "range": "± 2897.774810922234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617799.1153645833,
            "unit": "ns",
            "range": "± 676.929959478503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563436.6861746652,
            "unit": "ns",
            "range": "± 431.55759895988786"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70aeb4796562ecf0585adab341a1d516a0515bbe",
          "message": "Merge pull request #3736 from greymistcube/refactor/block-protocol-version\n\n♻️ Changed constant reference block protocol versions",
          "timestamp": "2024-04-09T18:37:02+09:00",
          "tree_id": "84d13b2792e0acf7939c6c360d75621c214ce7d5",
          "url": "https://github.com/planetarium/libplanet/commit/70aeb4796562ecf0585adab341a1d516a0515bbe"
        },
        "date": 1712656006008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5756799.071428572,
            "unit": "ns",
            "range": "± 27318.721378639526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14832444.115384616,
            "unit": "ns",
            "range": "± 87086.00626730878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39680012.733333334,
            "unit": "ns",
            "range": "± 225791.94223395342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76210043.06666666,
            "unit": "ns",
            "range": "± 507430.0464074498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151469119.93333334,
            "unit": "ns",
            "range": "± 799801.0952471215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 195703.77272727274,
            "unit": "ns",
            "range": "± 9134.263395076221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762096.6288659794,
            "unit": "ns",
            "range": "± 232916.0278885093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2881250.0923076924,
            "unit": "ns",
            "range": "± 133483.72829812008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2296049.0531914895,
            "unit": "ns",
            "range": "± 249892.2762501387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8322387.552631579,
            "unit": "ns",
            "range": "± 165950.25816372866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2601270.3174603176,
            "unit": "ns",
            "range": "± 80624.82155175558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2841205.577777778,
            "unit": "ns",
            "range": "± 165709.67511357533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3901565.7790697673,
            "unit": "ns",
            "range": "± 125536.02075620057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3571848.159574468,
            "unit": "ns",
            "range": "± 374446.55322975124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9426740.444444444,
            "unit": "ns",
            "range": "± 185073.8899607468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201635.8492063492,
            "unit": "ns",
            "range": "± 8772.191261096019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194225.28865979382,
            "unit": "ns",
            "range": "± 12698.366125180864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174060.05172413794,
            "unit": "ns",
            "range": "± 4964.25037922003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3311190.8666666667,
            "unit": "ns",
            "range": "± 52379.591716712755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2831980.6875,
            "unit": "ns",
            "range": "± 55468.366975804325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12332.52688172043,
            "unit": "ns",
            "range": "± 993.9497033836648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59984.03191489362,
            "unit": "ns",
            "range": "± 4804.359054970602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59723.6914893617,
            "unit": "ns",
            "range": "± 6249.4498063663505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59006.04081632653,
            "unit": "ns",
            "range": "± 9714.102562841801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2627.5425531914893,
            "unit": "ns",
            "range": "± 474.426692273736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12104.231578947369,
            "unit": "ns",
            "range": "± 1062.724153603246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722639.3599759615,
            "unit": "ns",
            "range": "± 3910.145557595689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1238162.4848958333,
            "unit": "ns",
            "range": "± 4746.58055828689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764829.3895182292,
            "unit": "ns",
            "range": "± 1480.291600048801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929863.763671875,
            "unit": "ns",
            "range": "± 1017.2835271799604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628154.5304129465,
            "unit": "ns",
            "range": "± 517.7255742749908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582723.966657366,
            "unit": "ns",
            "range": "± 1634.2621652573578"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ab2062035cf17953592afb7a1f1b29d28655e06",
          "message": "Merge pull request #3738 from greymistcube/refactor/trie-metadata\n\n♻️ Refactor `TrieMetadata`",
          "timestamp": "2024-04-11T18:40:39+09:00",
          "tree_id": "f5e5bb85ed32af2e83a2800131f11d15bc40ab1e",
          "url": "https://github.com/planetarium/libplanet/commit/9ab2062035cf17953592afb7a1f1b29d28655e06"
        },
        "date": 1712828952420,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5723978.666666667,
            "unit": "ns",
            "range": "± 12320.237920764454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14606003.166666666,
            "unit": "ns",
            "range": "± 92198.06445959285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37547838.1,
            "unit": "ns",
            "range": "± 157133.88569297022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76100245,
            "unit": "ns",
            "range": "± 286498.4475479485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153127028.19230768,
            "unit": "ns",
            "range": "± 400917.37616608414"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 196775.75,
            "unit": "ns",
            "range": "± 4907.379768720212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1763511.551020408,
            "unit": "ns",
            "range": "± 240216.00297507682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2876706.893939394,
            "unit": "ns",
            "range": "± 132223.35813476652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2392606.5102040814,
            "unit": "ns",
            "range": "± 321944.8631537991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8380218.857142857,
            "unit": "ns",
            "range": "± 238903.08540760863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2629851.5494505493,
            "unit": "ns",
            "range": "± 147068.93221269964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2942533.9,
            "unit": "ns",
            "range": "± 51778.92272762474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3881485.0681818184,
            "unit": "ns",
            "range": "± 142666.6302040738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3434495.2391304346,
            "unit": "ns",
            "range": "± 193149.60996338597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9461507.045454545,
            "unit": "ns",
            "range": "± 133568.78158265137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198499.86363636365,
            "unit": "ns",
            "range": "± 7044.25832031294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187888.35483870967,
            "unit": "ns",
            "range": "± 5820.021489163118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163429,
            "unit": "ns",
            "range": "± 2578.9602556068985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3290863.4285714286,
            "unit": "ns",
            "range": "± 27834.519411678746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2915097.9285714286,
            "unit": "ns",
            "range": "± 16506.395019293795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11696.766666666666,
            "unit": "ns",
            "range": "± 690.924946736237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69097.12711864407,
            "unit": "ns",
            "range": "± 3046.514157809653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50778.63157894737,
            "unit": "ns",
            "range": "± 1110.2899626537164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56307.34042553192,
            "unit": "ns",
            "range": "± 8883.460976169275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2556.2473118279568,
            "unit": "ns",
            "range": "± 291.10825178788656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11772.822916666666,
            "unit": "ns",
            "range": "± 905.8348053741328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3703237.8155691964,
            "unit": "ns",
            "range": "± 4191.532191021922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1240019.9552176339,
            "unit": "ns",
            "range": "± 1627.600527228747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763136.8129557292,
            "unit": "ns",
            "range": "± 897.5519735897636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922598.095703125,
            "unit": "ns",
            "range": "± 1349.2142743824654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635538.3970102164,
            "unit": "ns",
            "range": "± 450.80980003289443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568193.316545759,
            "unit": "ns",
            "range": "± 803.6466440771512"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24fe16c9bb067e1c1199b90e950c5747ac897da0",
          "message": "Merge pull request #3740 from greymistcube/chore/changelog-fix\n\n🧹 Fixed changelog typo",
          "timestamp": "2024-04-12T11:03:44+09:00",
          "tree_id": "5d245d6edd2e752ae75652a1840759df64989b08",
          "url": "https://github.com/planetarium/libplanet/commit/24fe16c9bb067e1c1199b90e950c5747ac897da0"
        },
        "date": 1712887979672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206538.125,
            "unit": "ns",
            "range": "± 13213.167507611886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197413.20454545456,
            "unit": "ns",
            "range": "± 12113.217217567722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164090.62857142856,
            "unit": "ns",
            "range": "± 5355.91835419536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3290022.8,
            "unit": "ns",
            "range": "± 35816.15215075057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879768.1666666665,
            "unit": "ns",
            "range": "± 47140.46233433904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16835.25773195876,
            "unit": "ns",
            "range": "± 3436.8558617044596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63045.989130434784,
            "unit": "ns",
            "range": "± 4811.354104466005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81725.74747474748,
            "unit": "ns",
            "range": "± 14919.254006452526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72657.05102040817,
            "unit": "ns",
            "range": "± 17631.13969415749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5516.9795918367345,
            "unit": "ns",
            "range": "± 1468.4907041016031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12793.63829787234,
            "unit": "ns",
            "range": "± 1341.0262387966752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5797414.333333333,
            "unit": "ns",
            "range": "± 53090.55237942417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15241749.7,
            "unit": "ns",
            "range": "± 81940.46274076946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38153574,
            "unit": "ns",
            "range": "± 151010.068763133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77532217.13333334,
            "unit": "ns",
            "range": "± 542726.4391757689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154848860.16666666,
            "unit": "ns",
            "range": "± 715213.0547614732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3727219.0758928573,
            "unit": "ns",
            "range": "± 7043.973383832216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219709.504185268,
            "unit": "ns",
            "range": "± 1205.2280882091495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772677.724609375,
            "unit": "ns",
            "range": "± 2240.956540350282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943797.605859375,
            "unit": "ns",
            "range": "± 1459.2309626309732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617193.0421875,
            "unit": "ns",
            "range": "± 1083.9997241345368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581906.7805338542,
            "unit": "ns",
            "range": "± 948.7173258165742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1808102.1224489796,
            "unit": "ns",
            "range": "± 235089.01364772694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895153.106557377,
            "unit": "ns",
            "range": "± 128418.2941248739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394235.2684210525,
            "unit": "ns",
            "range": "± 217076.02613004934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8970725,
            "unit": "ns",
            "range": "± 259757.84306619118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896259.7435897435,
            "unit": "ns",
            "range": "± 96492.54287105298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3043427.111111111,
            "unit": "ns",
            "range": "± 80363.19883193793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3903158.0675675673,
            "unit": "ns",
            "range": "± 109148.97243536788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3622911.6224489794,
            "unit": "ns",
            "range": "± 285261.25146443746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9466236.736842105,
            "unit": "ns",
            "range": "± 158223.93118258484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 194974.5,
            "unit": "ns",
            "range": "± 8179.628503350882"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24e8a381e18b93d71181216254775a2882548c47",
          "message": "Merge pull request #3739 from greymistcube/refactor/iworld-state\n\n♻️ Added `Version` property to `IWorldState`",
          "timestamp": "2024-04-12T18:14:04+09:00",
          "tree_id": "93408a025d34e352529096c6d27af63e2bef7b90",
          "url": "https://github.com/planetarium/libplanet/commit/24e8a381e18b93d71181216254775a2882548c47"
        },
        "date": 1712913730094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199130.32432432432,
            "unit": "ns",
            "range": "± 6632.6135583278265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190249.51612903227,
            "unit": "ns",
            "range": "± 5670.221200100091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162697.4411764706,
            "unit": "ns",
            "range": "± 3105.825241996647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3200448.3571428573,
            "unit": "ns",
            "range": "± 31676.576528326812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2883616.3333333335,
            "unit": "ns",
            "range": "± 38577.80701326063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12022.942622950819,
            "unit": "ns",
            "range": "± 435.63625976228394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64617.5,
            "unit": "ns",
            "range": "± 6539.750678687525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54826.83,
            "unit": "ns",
            "range": "± 5733.5714239763665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60535.88775510204,
            "unit": "ns",
            "range": "± 12280.379102439889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2596.0670103092784,
            "unit": "ns",
            "range": "± 271.1174755839437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11909.173333333334,
            "unit": "ns",
            "range": "± 613.9021044709604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5606803.928571428,
            "unit": "ns",
            "range": "± 9781.393753639419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14862687.857142856,
            "unit": "ns",
            "range": "± 151270.8449664463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37705039.76923077,
            "unit": "ns",
            "range": "± 93159.64051486552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74182365.28571428,
            "unit": "ns",
            "range": "± 158866.87513155767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151722371.13333333,
            "unit": "ns",
            "range": "± 371235.82924871484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700175.041015625,
            "unit": "ns",
            "range": "± 3400.9933018281554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223283.1496930805,
            "unit": "ns",
            "range": "± 2159.2179052589768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781359.5457682292,
            "unit": "ns",
            "range": "± 1445.2317853015356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945086.1241629464,
            "unit": "ns",
            "range": "± 1963.140693030901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632556.3771484375,
            "unit": "ns",
            "range": "± 530.8734028407604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573677.2477864583,
            "unit": "ns",
            "range": "± 478.36102797808087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1763369.8535353534,
            "unit": "ns",
            "range": "± 247116.15625335986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2864177.4430379746,
            "unit": "ns",
            "range": "± 134832.37747736496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2329184.83,
            "unit": "ns",
            "range": "± 297114.86584110686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8282231.107142857,
            "unit": "ns",
            "range": "± 194402.95719846088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2724018.5,
            "unit": "ns",
            "range": "± 89377.03895724396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2846156.5274725277,
            "unit": "ns",
            "range": "± 158239.31334984297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3797308.445945946,
            "unit": "ns",
            "range": "± 120540.21201033701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3536335.8775510206,
            "unit": "ns",
            "range": "± 383240.1816590843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9396458.73076923,
            "unit": "ns",
            "range": "± 149174.16266741918"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 199269.96666666667,
            "unit": "ns",
            "range": "± 3459.3024248635256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5d2dbd6405f4fa534b05df34bdc56a422426415",
          "message": "Merge pull request #3741 from greymistcube/bump/block-protocol-version-to-6\n\n♻️ ⬆️ Bump block protocol version to 6",
          "timestamp": "2024-04-15T10:37:40+09:00",
          "tree_id": "fda4bd5af61c41b4577502f139ca173cf7b36593",
          "url": "https://github.com/planetarium/libplanet/commit/a5d2dbd6405f4fa534b05df34bdc56a422426415"
        },
        "date": 1713145540569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199165.5625,
            "unit": "ns",
            "range": "± 5938.913846559967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189274.5294117647,
            "unit": "ns",
            "range": "± 5911.7982983455095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161392.38461538462,
            "unit": "ns",
            "range": "± 1817.090464564232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101550.8,
            "unit": "ns",
            "range": "± 29354.261294936867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2889868.9285714286,
            "unit": "ns",
            "range": "± 38745.01200147582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12076.222222222223,
            "unit": "ns",
            "range": "± 690.1662522033365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58269.4126984127,
            "unit": "ns",
            "range": "± 2663.5352364789883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62069.92307692308,
            "unit": "ns",
            "range": "± 883.7422759246103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55688.74742268041,
            "unit": "ns",
            "range": "± 8330.976004535383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2598.673469387755,
            "unit": "ns",
            "range": "± 300.7972833664273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15540.198924731183,
            "unit": "ns",
            "range": "± 1049.4889520820645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5776908.833333333,
            "unit": "ns",
            "range": "± 37607.96881298025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14226648.933333334,
            "unit": "ns",
            "range": "± 91760.55990181859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37586663.78571428,
            "unit": "ns",
            "range": "± 105757.6249778263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75965162.4,
            "unit": "ns",
            "range": "± 346027.63448289584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151850438.1,
            "unit": "ns",
            "range": "± 515543.406130408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714294.8251953125,
            "unit": "ns",
            "range": "± 3139.6701537652602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208567.69140625,
            "unit": "ns",
            "range": "± 1846.1811017502564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771070.5596354167,
            "unit": "ns",
            "range": "± 1821.3044870250396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940584.6628069195,
            "unit": "ns",
            "range": "± 2148.8917407586514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624114.1984514509,
            "unit": "ns",
            "range": "± 1066.4847754223827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569463.828515625,
            "unit": "ns",
            "range": "± 1012.5520065241262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1776270.7857142857,
            "unit": "ns",
            "range": "± 279981.82603294495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2857355.486842105,
            "unit": "ns",
            "range": "± 144579.38710005136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408383.86,
            "unit": "ns",
            "range": "± 322207.54403510125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8466779.857142856,
            "unit": "ns",
            "range": "± 265117.2324549965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2722803.15625,
            "unit": "ns",
            "range": "± 84246.48200910399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2798104.3294117646,
            "unit": "ns",
            "range": "± 151260.54031572305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3884259.9591836734,
            "unit": "ns",
            "range": "± 124133.02361075518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3437295.9166666665,
            "unit": "ns",
            "range": "± 201920.61120683138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9258788.904761905,
            "unit": "ns",
            "range": "± 206838.95217098368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 195332.36666666667,
            "unit": "ns",
            "range": "± 3636.6756378921255"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c6eba765a1a401ec979b2068a9b6bc2ca6cb5ea",
          "message": "Merge pull request #3742 from greymistcube/chore/add-missing-protocol-version\n\n🔧 Add missing protocol versions",
          "timestamp": "2024-04-15T12:30:17+09:00",
          "tree_id": "2c7689bd15fba4748ed896f13ae10b49a60c27da",
          "url": "https://github.com/planetarium/libplanet/commit/8c6eba765a1a401ec979b2068a9b6bc2ca6cb5ea"
        },
        "date": 1713152433130,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211642.546875,
            "unit": "ns",
            "range": "± 9508.124245319606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211158.5,
            "unit": "ns",
            "range": "± 18740.2618660807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166801.2857142857,
            "unit": "ns",
            "range": "± 4778.912059339392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3218778.6,
            "unit": "ns",
            "range": "± 41472.77792342484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2934095.2,
            "unit": "ns",
            "range": "± 38902.06953951349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14615.393617021276,
            "unit": "ns",
            "range": "± 1722.8681463917346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68486.40625,
            "unit": "ns",
            "range": "± 6802.549311727688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76381.71,
            "unit": "ns",
            "range": "± 13414.815530715707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74266.53846153847,
            "unit": "ns",
            "range": "± 11249.329672185106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4112.397959183673,
            "unit": "ns",
            "range": "± 1199.4247288604556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19166.255102040817,
            "unit": "ns",
            "range": "± 5944.678341052773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5998673.571428572,
            "unit": "ns",
            "range": "± 75026.0823249686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15004182.6,
            "unit": "ns",
            "range": "± 114529.3997831374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37789100.46666667,
            "unit": "ns",
            "range": "± 174449.60569454133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77874828.13333334,
            "unit": "ns",
            "range": "± 362820.4306375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155334047.2,
            "unit": "ns",
            "range": "± 556029.5672102596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3751582.3738839286,
            "unit": "ns",
            "range": "± 8117.8295003351805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191549.0536458334,
            "unit": "ns",
            "range": "± 1792.4522776723268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758827.1100510817,
            "unit": "ns",
            "range": "± 482.44991083023154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917574.96796875,
            "unit": "ns",
            "range": "± 1627.9264919431396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610702.5210286458,
            "unit": "ns",
            "range": "± 751.3015388803285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565304.6274739583,
            "unit": "ns",
            "range": "± 531.7146874651439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1856994.4242424243,
            "unit": "ns",
            "range": "± 297244.12249815086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3184464.2386363638,
            "unit": "ns",
            "range": "± 238694.17844795124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2538653.8434343436,
            "unit": "ns",
            "range": "± 326764.28281527164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8600602.96,
            "unit": "ns",
            "range": "± 208501.9492953403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2888043.8055555555,
            "unit": "ns",
            "range": "± 94809.62785100902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2920644.464285714,
            "unit": "ns",
            "range": "± 90645.24621160414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4063951.8,
            "unit": "ns",
            "range": "± 146580.62369197563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3733613.85,
            "unit": "ns",
            "range": "± 330163.14148481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9603783.36,
            "unit": "ns",
            "range": "± 168863.64408916837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 200243.80898876404,
            "unit": "ns",
            "range": "± 13493.861851931388"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad6b7614bd7eb8becbdbf1d1073a6fb24992f762",
          "message": "Merge pull request #3743 from greymistcube/refactor/world-tests\n\n♻️ Refactor `IWorld` tests",
          "timestamp": "2024-04-15T15:49:49+09:00",
          "tree_id": "2508af505ebc141a466d106fc7738ea6715048aa",
          "url": "https://github.com/planetarium/libplanet/commit/ad6b7614bd7eb8becbdbf1d1073a6fb24992f762"
        },
        "date": 1713164320592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204131.9019607843,
            "unit": "ns",
            "range": "± 8219.245725137805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194241.21212121213,
            "unit": "ns",
            "range": "± 9148.171606754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170594.29166666666,
            "unit": "ns",
            "range": "± 4248.5358754687395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3176260.5,
            "unit": "ns",
            "range": "± 21585.402738531782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878842.6764705884,
            "unit": "ns",
            "range": "± 58816.2438438941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11469.864197530864,
            "unit": "ns",
            "range": "± 598.5634626563507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59055.43103448276,
            "unit": "ns",
            "range": "± 3228.4705781930584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51687.61111111111,
            "unit": "ns",
            "range": "± 1068.4697765490105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78999.94,
            "unit": "ns",
            "range": "± 26270.523219737894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2632.1631578947367,
            "unit": "ns",
            "range": "± 339.50754732707975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11426.384615384615,
            "unit": "ns",
            "range": "± 754.8789125744423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5719914.785714285,
            "unit": "ns",
            "range": "± 25752.96970531471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14519450.666666666,
            "unit": "ns",
            "range": "± 118207.58238048056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37558089.8,
            "unit": "ns",
            "range": "± 209262.2591941236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80125131.9,
            "unit": "ns",
            "range": "± 408089.93781252264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 157771719.46666667,
            "unit": "ns",
            "range": "± 777400.6508176432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3679623.5833333335,
            "unit": "ns",
            "range": "± 28015.853935971612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190052.3203125,
            "unit": "ns",
            "range": "± 7895.460301198924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776652.9673549107,
            "unit": "ns",
            "range": "± 958.0252044489714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922119.6295072115,
            "unit": "ns",
            "range": "± 1662.2642316040972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617892.1799665178,
            "unit": "ns",
            "range": "± 1412.8764689728475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578396.2138671875,
            "unit": "ns",
            "range": "± 559.2574656056601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779186.5757575757,
            "unit": "ns",
            "range": "± 268122.04563757783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2951796.9176470586,
            "unit": "ns",
            "range": "± 202586.06847368376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2371553.1666666665,
            "unit": "ns",
            "range": "± 332279.92192064784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8335993.586206896,
            "unit": "ns",
            "range": "± 229386.27789581072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2837272.7391304346,
            "unit": "ns",
            "range": "± 50873.79354675592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3047261.6578947366,
            "unit": "ns",
            "range": "± 47653.884907812266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3866574.1463414636,
            "unit": "ns",
            "range": "± 97642.14562845313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3607499.95,
            "unit": "ns",
            "range": "± 330491.39942633186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9325485.92857143,
            "unit": "ns",
            "range": "± 215508.42258333464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 193056.3775510204,
            "unit": "ns",
            "range": "± 7618.062922621945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51705f6444c3d3a4a04ebd2145561cf41eb273c0",
          "message": "Merge pull request #3745 from greymistcube/feature/validator-set-account\n\n✨ Introduce `ValidatorSetAccount`",
          "timestamp": "2024-04-17T11:26:36+09:00",
          "tree_id": "778d877278bab8bb4835ca013d973df5af790da4",
          "url": "https://github.com/planetarium/libplanet/commit/51705f6444c3d3a4a04ebd2145561cf41eb273c0"
        },
        "date": 1713321306627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198917.4,
            "unit": "ns",
            "range": "± 7981.0339057093115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194440.61764705883,
            "unit": "ns",
            "range": "± 5863.011719682444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164440.90322580645,
            "unit": "ns",
            "range": "± 4892.760450262808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106052.966666667,
            "unit": "ns",
            "range": "± 32717.851784760012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746822.714285714,
            "unit": "ns",
            "range": "± 25328.611706704556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12043.19587628866,
            "unit": "ns",
            "range": "± 795.5714486976124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59981.26344086022,
            "unit": "ns",
            "range": "± 3669.5322809348354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50577.25,
            "unit": "ns",
            "range": "± 1689.8842796391202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56467.63265306123,
            "unit": "ns",
            "range": "± 9180.468108348687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2817.915789473684,
            "unit": "ns",
            "range": "± 461.400381428194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11305.967391304348,
            "unit": "ns",
            "range": "± 648.986622579869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5768988.833333333,
            "unit": "ns",
            "range": "± 40289.428627063426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15135745.214285715,
            "unit": "ns",
            "range": "± 72155.13102942593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37380415.4,
            "unit": "ns",
            "range": "± 257717.60006332514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76537961.13333334,
            "unit": "ns",
            "range": "± 528519.1970001613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150730766.4,
            "unit": "ns",
            "range": "± 563775.7885119377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760984.8489583335,
            "unit": "ns",
            "range": "± 4818.251261094802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1188861.107700893,
            "unit": "ns",
            "range": "± 975.0522440965811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783694.3799479167,
            "unit": "ns",
            "range": "± 899.8081573484695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946782.2119140625,
            "unit": "ns",
            "range": "± 1458.676442494216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630434.7237079327,
            "unit": "ns",
            "range": "± 480.2815688973106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569412.474233774,
            "unit": "ns",
            "range": "± 525.1373915545527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775058.0656565656,
            "unit": "ns",
            "range": "± 237232.82396556507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3212604.547368421,
            "unit": "ns",
            "range": "± 233787.87404655493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2374779.767676768,
            "unit": "ns",
            "range": "± 291125.2158636375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8725419.166666666,
            "unit": "ns",
            "range": "± 157364.35437256825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2810561.7083333335,
            "unit": "ns",
            "range": "± 66552.63523576115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2893752.4166666665,
            "unit": "ns",
            "range": "± 74201.0337176261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3891476.6860465114,
            "unit": "ns",
            "range": "± 126478.53061671993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3552559.282828283,
            "unit": "ns",
            "range": "± 297705.4178990188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9747207.38095238,
            "unit": "ns",
            "range": "± 222956.9493894452"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198075.0625,
            "unit": "ns",
            "range": "± 5192.507250293911"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f233fa27e5dd57f49840b71a5b469de49ca01c9",
          "message": "Merge pull request #3746 from greymistcube/feature/world-gql-version-property\n\n✨ Added version field to world state query",
          "timestamp": "2024-04-17T11:45:17+09:00",
          "tree_id": "c88b9e958fe6203b44a686601a09d7fe019cfcf8",
          "url": "https://github.com/planetarium/libplanet/commit/2f233fa27e5dd57f49840b71a5b469de49ca01c9"
        },
        "date": 1713322517592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212562.16666666666,
            "unit": "ns",
            "range": "± 17454.002221730687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208147.63157894736,
            "unit": "ns",
            "range": "± 18177.999715609367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177235.7142857143,
            "unit": "ns",
            "range": "± 2988.7588928818295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3230920.3076923075,
            "unit": "ns",
            "range": "± 13450.438093141647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2842422.1923076925,
            "unit": "ns",
            "range": "± 17239.128716308023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13289.933333333332,
            "unit": "ns",
            "range": "± 1027.6347862604616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81417.27,
            "unit": "ns",
            "range": "± 17265.630168875505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90027.42307692308,
            "unit": "ns",
            "range": "± 2018.7081992814499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91976.20833333333,
            "unit": "ns",
            "range": "± 12288.939240691343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5458.731958762886,
            "unit": "ns",
            "range": "± 1181.3712946143696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13276.157894736842,
            "unit": "ns",
            "range": "± 932.1329157777723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5673292.266666667,
            "unit": "ns",
            "range": "± 39531.14105806182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14916470.533333333,
            "unit": "ns",
            "range": "± 110051.27544264255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38429842.166666664,
            "unit": "ns",
            "range": "± 188814.05129675925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78727492.3,
            "unit": "ns",
            "range": "± 274408.77001843177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155431033.46666667,
            "unit": "ns",
            "range": "± 906566.3284959091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702667.8161272323,
            "unit": "ns",
            "range": "± 3501.0569838380316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212356.7504507212,
            "unit": "ns",
            "range": "± 2115.0645157223266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773480.1360426683,
            "unit": "ns",
            "range": "± 530.506301005546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926743.0179966518,
            "unit": "ns",
            "range": "± 1278.6303112315693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614061.3544921875,
            "unit": "ns",
            "range": "± 558.4731737223868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566524.1040414664,
            "unit": "ns",
            "range": "± 649.9373496685575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1837066.4848484849,
            "unit": "ns",
            "range": "± 250341.90359322767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2912148.960526316,
            "unit": "ns",
            "range": "± 146816.1921091304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2484631.31,
            "unit": "ns",
            "range": "± 341111.7383127431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8862403.333333334,
            "unit": "ns",
            "range": "± 210226.30921136713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2883482.0405405406,
            "unit": "ns",
            "range": "± 93532.32273616389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2964747.12345679,
            "unit": "ns",
            "range": "± 156049.65778690312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3937834.7045454546,
            "unit": "ns",
            "range": "± 118353.19111634593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3770140.3701298703,
            "unit": "ns",
            "range": "± 185532.78972783606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9947550.016129032,
            "unit": "ns",
            "range": "± 222287.62479497454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 205712.66326530612,
            "unit": "ns",
            "range": "± 19201.54098892477"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713346745159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206530.70588235295,
            "unit": "ns",
            "range": "± 6598.648573896214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201629.22093023255,
            "unit": "ns",
            "range": "± 10904.61545957508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167134.25,
            "unit": "ns",
            "range": "± 3821.385018619076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3334156.8,
            "unit": "ns",
            "range": "± 35354.628420375986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2969456.033333333,
            "unit": "ns",
            "range": "± 35772.2529720346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12726.632911392406,
            "unit": "ns",
            "range": "± 668.0854424324281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62723.234042553195,
            "unit": "ns",
            "range": "± 5350.890128293161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76738.86,
            "unit": "ns",
            "range": "± 20105.758338196036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69037.63917525773,
            "unit": "ns",
            "range": "± 11043.803651242597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3333.5494505494507,
            "unit": "ns",
            "range": "± 529.9054897649468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12815.846153846154,
            "unit": "ns",
            "range": "± 1048.8195790514733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5849667.857142857,
            "unit": "ns",
            "range": "± 29183.66736288044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14908178.57142857,
            "unit": "ns",
            "range": "± 84288.6935566954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37596442,
            "unit": "ns",
            "range": "± 188151.70970029174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76454688.78571428,
            "unit": "ns",
            "range": "± 241221.4229748831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155641765.42857143,
            "unit": "ns",
            "range": "± 749098.4824210071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3678882.0907451925,
            "unit": "ns",
            "range": "± 7293.614374713261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207484.25625,
            "unit": "ns",
            "range": "± 1003.9421675966097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766985.6640625,
            "unit": "ns",
            "range": "± 872.2262873691403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901423.14453125,
            "unit": "ns",
            "range": "± 1929.5369798313302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627267.5878208706,
            "unit": "ns",
            "range": "± 804.8471755795262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571372.1055338542,
            "unit": "ns",
            "range": "± 1192.7293234214098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1831819.6565656567,
            "unit": "ns",
            "range": "± 278002.1844347506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2954260.0573770492,
            "unit": "ns",
            "range": "± 126296.19639621305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2494000.2525252528,
            "unit": "ns",
            "range": "± 284256.6640561546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9112087.807692308,
            "unit": "ns",
            "range": "± 245669.92251946827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2844548.3333333335,
            "unit": "ns",
            "range": "± 94672.67575946686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2973488.765957447,
            "unit": "ns",
            "range": "± 98162.10254675965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3904904.2926829266,
            "unit": "ns",
            "range": "± 125652.26126282883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3651106.785714286,
            "unit": "ns",
            "range": "± 297959.5167808079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9962394.75,
            "unit": "ns",
            "range": "± 176693.21078807753"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 205797.53,
            "unit": "ns",
            "range": "± 19705.262921800175"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713412531357,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199981.48571428572,
            "unit": "ns",
            "range": "± 9473.282086995667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199206.20212765958,
            "unit": "ns",
            "range": "± 7606.558119878027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163477.58333333334,
            "unit": "ns",
            "range": "± 2248.0830402946876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153995.033333333,
            "unit": "ns",
            "range": "± 29483.753363666638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832127.6,
            "unit": "ns",
            "range": "± 35394.47646536311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11905.104395604396,
            "unit": "ns",
            "range": "± 803.2263812500305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61488.27659574468,
            "unit": "ns",
            "range": "± 5003.571741802084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52129.84693877551,
            "unit": "ns",
            "range": "± 1670.933129409787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58649.47959183674,
            "unit": "ns",
            "range": "± 11178.712666077128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2663.3555555555554,
            "unit": "ns",
            "range": "± 382.6255044481252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11337.595505617977,
            "unit": "ns",
            "range": "± 933.9759915045161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5714951.5,
            "unit": "ns",
            "range": "± 25085.21810036455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15119475.666666666,
            "unit": "ns",
            "range": "± 116665.22103539723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38224820.93333333,
            "unit": "ns",
            "range": "± 235382.50961830092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75268249.26666667,
            "unit": "ns",
            "range": "± 421335.2621500681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154628971.66666666,
            "unit": "ns",
            "range": "± 654006.8195569292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3711749.590401786,
            "unit": "ns",
            "range": "± 2874.2513722225417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222049.226171875,
            "unit": "ns",
            "range": "± 1493.0743843170326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752615.4958683894,
            "unit": "ns",
            "range": "± 517.9420794430592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928158.8253348214,
            "unit": "ns",
            "range": "± 2716.369209668379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627750.9628208706,
            "unit": "ns",
            "range": "± 614.8371894885032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585086.7264927456,
            "unit": "ns",
            "range": "± 626.6311444041813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1845111.9393939395,
            "unit": "ns",
            "range": "± 262524.4806606796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2941342.688888889,
            "unit": "ns",
            "range": "± 187192.41845834503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2441663.606060606,
            "unit": "ns",
            "range": "± 304994.14591029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8812714.631578946,
            "unit": "ns",
            "range": "± 184435.37402967966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2717925.9340659343,
            "unit": "ns",
            "range": "± 227937.8782905944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2981478.172413793,
            "unit": "ns",
            "range": "± 74711.0921703775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3910113.685714286,
            "unit": "ns",
            "range": "± 125637.34090130712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3533945.9677419355,
            "unit": "ns",
            "range": "± 216018.20193026264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9638444.666666666,
            "unit": "ns",
            "range": "± 145518.0348856103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198830.40322580645,
            "unit": "ns",
            "range": "± 6011.787683958013"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "690a98c0664abf024c89dc52a04b14e9f6943eaa",
          "message": "Merge pull request #3769 from greymistcube/bump/block-protocol-version-to-7\n\n♻️ Bumped block protocol version to 7",
          "timestamp": "2024-04-29T17:39:22+09:00",
          "tree_id": "727d6be8788aca036bb53f5b487cee8199711832",
          "url": "https://github.com/planetarium/libplanet/commit/690a98c0664abf024c89dc52a04b14e9f6943eaa"
        },
        "date": 1714380473355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2813184.8095238097,
            "unit": "ns",
            "range": "± 57416.32957584371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2778014.1896551726,
            "unit": "ns",
            "range": "± 73162.54348551872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3912025.480769231,
            "unit": "ns",
            "range": "± 144423.1929264758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3483292.376344086,
            "unit": "ns",
            "range": "± 223577.95154384436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9544379.92857143,
            "unit": "ns",
            "range": "± 161790.4066626678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203166.47619047618,
            "unit": "ns",
            "range": "± 6950.178135945186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190985.0806451613,
            "unit": "ns",
            "range": "± 7556.697904700037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170672.64705882352,
            "unit": "ns",
            "range": "± 3335.2254972710703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119078.8333333335,
            "unit": "ns",
            "range": "± 47053.12192871048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2826421.6,
            "unit": "ns",
            "range": "± 30987.421687332608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12078.268421052631,
            "unit": "ns",
            "range": "± 752.6874044245694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58875.615942028984,
            "unit": "ns",
            "range": "± 2847.884170935616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51432.03333333333,
            "unit": "ns",
            "range": "± 2292.119132487255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56866.09574468085,
            "unit": "ns",
            "range": "± 10353.633637852143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2638.0344827586205,
            "unit": "ns",
            "range": "± 353.99173713506895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13888.897959183674,
            "unit": "ns",
            "range": "± 2092.2804088046987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5778835.071428572,
            "unit": "ns",
            "range": "± 22805.52476067784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14793775.423076924,
            "unit": "ns",
            "range": "± 126577.34253705753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38556470.333333336,
            "unit": "ns",
            "range": "± 254589.69977443726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76088954.07692307,
            "unit": "ns",
            "range": "± 147360.60868973858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149821141.80769232,
            "unit": "ns",
            "range": "± 227544.18512323586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1826453.03,
            "unit": "ns",
            "range": "± 239005.5878054135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2866715.175,
            "unit": "ns",
            "range": "± 149171.00449142806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350508.707070707,
            "unit": "ns",
            "range": "± 290846.27848012745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8531367.416666666,
            "unit": "ns",
            "range": "± 87190.83396201933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198514.76666666666,
            "unit": "ns",
            "range": "± 3391.361514762106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714381.9044471155,
            "unit": "ns",
            "range": "± 4340.311792355588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207337.400390625,
            "unit": "ns",
            "range": "± 1438.813542294738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776062.7637369792,
            "unit": "ns",
            "range": "± 1007.8994036651465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944550.0065104167,
            "unit": "ns",
            "range": "± 1509.7378973560571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638413.1975260417,
            "unit": "ns",
            "range": "± 1122.7633688644607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575806.814313616,
            "unit": "ns",
            "range": "± 976.3817381533562"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18d0d04302179b3878a62bcdb7ecc88ea730d423",
          "message": "Merge pull request #3761 from greymistcube/port/4.4.1-to-main\n\n🔀 Port 4.4.1 to main",
          "timestamp": "2024-04-30T12:57:11+09:00",
          "tree_id": "0ec950bdc14dbdfc86d3ef2f4ef41ea64ccdb1d2",
          "url": "https://github.com/planetarium/libplanet/commit/18d0d04302179b3878a62bcdb7ecc88ea730d423"
        },
        "date": 1714450246640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2327999.12,
            "unit": "ns",
            "range": "± 53088.91145860876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2477430.3333333335,
            "unit": "ns",
            "range": "± 32116.454426856973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3057652.476190476,
            "unit": "ns",
            "range": "± 68178.9648847935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3130519.973333333,
            "unit": "ns",
            "range": "± 157585.87231625477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8932936.11764706,
            "unit": "ns",
            "range": "± 208353.34493624553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201000.6857142857,
            "unit": "ns",
            "range": "± 6457.857183177662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195386.91176470587,
            "unit": "ns",
            "range": "± 9188.108303728986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168044.2,
            "unit": "ns",
            "range": "± 3527.476100855293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3097316.1666666665,
            "unit": "ns",
            "range": "± 36982.23788458969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861250,
            "unit": "ns",
            "range": "± 27058.794365233643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12612.613924050633,
            "unit": "ns",
            "range": "± 667.5306194329652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61393.6375,
            "unit": "ns",
            "range": "± 3130.5831856253644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53222.8125,
            "unit": "ns",
            "range": "± 1521.4758208355126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57458.051020408166,
            "unit": "ns",
            "range": "± 8867.729883461148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2967.4895833333335,
            "unit": "ns",
            "range": "± 297.0426513692202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12333.694805194806,
            "unit": "ns",
            "range": "± 638.8288222858963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5737151.142857143,
            "unit": "ns",
            "range": "± 14368.474726915936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14507625.966666667,
            "unit": "ns",
            "range": "± 77399.9619396978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37867943.53333333,
            "unit": "ns",
            "range": "± 122246.26447279436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76240961.96153846,
            "unit": "ns",
            "range": "± 357690.2241774334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155981795.33333334,
            "unit": "ns",
            "range": "± 411918.689279236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010499.691919192,
            "unit": "ns",
            "range": "± 100999.55628935438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866205.076923077,
            "unit": "ns",
            "range": "± 49950.17566989976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1620514.68,
            "unit": "ns",
            "range": "± 115438.51740193639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7530273.769230769,
            "unit": "ns",
            "range": "± 88214.77842095947"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36986,
            "unit": "ns",
            "range": "± 1699.1937841603094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750560.1515066964,
            "unit": "ns",
            "range": "± 9658.151338981048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208971.5887920673,
            "unit": "ns",
            "range": "± 1624.7858621006253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761900.2809244791,
            "unit": "ns",
            "range": "± 1204.1595577466176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937962.5032552083,
            "unit": "ns",
            "range": "± 4291.466827976866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611118.5854116586,
            "unit": "ns",
            "range": "± 756.2883026447208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566948.4216657366,
            "unit": "ns",
            "range": "± 1068.2310439009937"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fc36e9405e81b64f94c3928e70e3bf779698589",
          "message": "Merge pull request #3773 from greymistcube/port/4.4.2-to-main\n\n🔀 Port 4.4.2 to main",
          "timestamp": "2024-04-30T13:16:22+09:00",
          "tree_id": "97e3d273ab980dad005b511a0d3ee51b81025638",
          "url": "https://github.com/planetarium/libplanet/commit/5fc36e9405e81b64f94c3928e70e3bf779698589"
        },
        "date": 1714451135163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2357987.8974358975,
            "unit": "ns",
            "range": "± 82476.48119625085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510673.214285714,
            "unit": "ns",
            "range": "± 55627.61274685698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3084723.0454545454,
            "unit": "ns",
            "range": "± 73440.09528843236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3141527.242857143,
            "unit": "ns",
            "range": "± 152510.96364765803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8817864.596774194,
            "unit": "ns",
            "range": "± 186184.89722161586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201611.89534883722,
            "unit": "ns",
            "range": "± 5973.864287917331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201283.08823529413,
            "unit": "ns",
            "range": "± 8103.102403836375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168970.42857142858,
            "unit": "ns",
            "range": "± 2710.4280875135605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3034048.4,
            "unit": "ns",
            "range": "± 13674.046254544723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837610,
            "unit": "ns",
            "range": "± 36686.638871860225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12283.788235294118,
            "unit": "ns",
            "range": "± 675.4324733460927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60125.666666666664,
            "unit": "ns",
            "range": "± 2856.341140639842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53046.06896551724,
            "unit": "ns",
            "range": "± 1393.2892205916003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57828.56842105263,
            "unit": "ns",
            "range": "± 9037.380238048927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2934.75,
            "unit": "ns",
            "range": "± 232.1011122674544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12138.028985507246,
            "unit": "ns",
            "range": "± 593.2682403684172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5720037,
            "unit": "ns",
            "range": "± 10531.124271561746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14580630.833333334,
            "unit": "ns",
            "range": "± 110088.74694579477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37855553.85714286,
            "unit": "ns",
            "range": "± 150554.73480322806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75160213.6,
            "unit": "ns",
            "range": "± 298655.8785369639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151078799.93333334,
            "unit": "ns",
            "range": "± 531602.9145247508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1179571.0833333333,
            "unit": "ns",
            "range": "± 17257.166750806795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815342.892857143,
            "unit": "ns",
            "range": "± 50201.406648684795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574554.0652173914,
            "unit": "ns",
            "range": "± 107738.53316866886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7908109.245283019,
            "unit": "ns",
            "range": "± 329855.98278717994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37199.333333333336,
            "unit": "ns",
            "range": "± 2431.194799895467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3696915.5904447115,
            "unit": "ns",
            "range": "± 7441.62016777121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215642.5483072917,
            "unit": "ns",
            "range": "± 1723.9722001877878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772570.1947115385,
            "unit": "ns",
            "range": "± 1714.78909412262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951473.9692708333,
            "unit": "ns",
            "range": "± 2480.2476245243556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614796.992327009,
            "unit": "ns",
            "range": "± 1352.040730777119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576960.0532924107,
            "unit": "ns",
            "range": "± 446.86935846285274"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dec2f8ef5a78fdc7224274978f7b15a933fd3377",
          "message": "Merge pull request #3775 from greymistcube/update/blockmetadata\n\n♻️ Updated `BlockMetadata`",
          "timestamp": "2024-04-30T21:02:20+09:00",
          "tree_id": "3be6c2a083f4b7dbf0546649cfb9bc78968ed19a",
          "url": "https://github.com/planetarium/libplanet/commit/dec2f8ef5a78fdc7224274978f7b15a933fd3377"
        },
        "date": 1714479112610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2575406.8571428573,
            "unit": "ns",
            "range": "± 36836.42686225175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2654419.827586207,
            "unit": "ns",
            "range": "± 77110.46942076439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3242727.066666667,
            "unit": "ns",
            "range": "± 32268.64614776275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3378574.565217391,
            "unit": "ns",
            "range": "± 162472.15478609738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9190040.57142857,
            "unit": "ns",
            "range": "± 223830.7166718781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243557.6914893617,
            "unit": "ns",
            "range": "± 9503.377442276023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238110.74528301886,
            "unit": "ns",
            "range": "± 9885.777001300832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177416.61538461538,
            "unit": "ns",
            "range": "± 4806.001340631717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3177273,
            "unit": "ns",
            "range": "± 19043.913336461777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868272.566666667,
            "unit": "ns",
            "range": "± 32651.1840224312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21592.016853932586,
            "unit": "ns",
            "range": "± 1246.2739932254021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80132.61616161616,
            "unit": "ns",
            "range": "± 9413.021491862575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91889.81818181818,
            "unit": "ns",
            "range": "± 1702.2557970825944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85916.36,
            "unit": "ns",
            "range": "± 3655.711265285476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6418.68556701031,
            "unit": "ns",
            "range": "± 541.8336216400002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20868.112359550563,
            "unit": "ns",
            "range": "± 1162.052753048773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6421028.133333334,
            "unit": "ns",
            "range": "± 33489.90027470257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15653787.07142857,
            "unit": "ns",
            "range": "± 74051.39624348679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37711331,
            "unit": "ns",
            "range": "± 38538.47735469296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79926349.96666667,
            "unit": "ns",
            "range": "± 270690.38545194734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154868141.33333334,
            "unit": "ns",
            "range": "± 305085.7582588557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1089998.469072165,
            "unit": "ns",
            "range": "± 102547.6044043543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2037383.9594594594,
            "unit": "ns",
            "range": "± 60550.62135592489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1836847.27,
            "unit": "ns",
            "range": "± 174477.75879011434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8174934.354838709,
            "unit": "ns",
            "range": "± 227603.7788609185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38154.096774193546,
            "unit": "ns",
            "range": "± 2592.897992864842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3712178.174579327,
            "unit": "ns",
            "range": "± 5598.308542220216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202820.3956473214,
            "unit": "ns",
            "range": "± 1762.8940839516717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770436.7091936384,
            "unit": "ns",
            "range": "± 1284.3910341857697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944311.01875,
            "unit": "ns",
            "range": "± 2273.6908781030475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614771.6206054688,
            "unit": "ns",
            "range": "± 502.5263525344953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578924.3982872596,
            "unit": "ns",
            "range": "± 685.8085109230982"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e5d1cf8b2213420f1911978199af05f7e931ebe",
          "message": "Merge pull request #3774 from greymistcube/feature/trie-sub-traversal\n\n✨ Added methods to traverse subtries of a `MerkleTrie`",
          "timestamp": "2024-05-02T14:19:58+09:00",
          "tree_id": "59de99951eb361cc190f2c2056f3042b68569ca5",
          "url": "https://github.com/planetarium/libplanet/commit/0e5d1cf8b2213420f1911978199af05f7e931ebe"
        },
        "date": 1714627775594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2399130.210526316,
            "unit": "ns",
            "range": "± 53201.074263985545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510344.3235294116,
            "unit": "ns",
            "range": "± 74532.21990266646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3138999.785714286,
            "unit": "ns",
            "range": "± 42503.75578595482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3176421.6428571427,
            "unit": "ns",
            "range": "± 126568.2917782015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8794293.5,
            "unit": "ns",
            "range": "± 89355.68357921667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205203.68421052632,
            "unit": "ns",
            "range": "± 4530.703073385111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192484.08474576272,
            "unit": "ns",
            "range": "± 7662.927389865411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167221.27272727274,
            "unit": "ns",
            "range": "± 4042.1580066406796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3143857.7666666666,
            "unit": "ns",
            "range": "± 23057.915320423253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2736834.4285714286,
            "unit": "ns",
            "range": "± 27326.895423639064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12320.755555555555,
            "unit": "ns",
            "range": "± 906.4293611564785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60758.78865979381,
            "unit": "ns",
            "range": "± 4604.995586676231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52492.98888888889,
            "unit": "ns",
            "range": "± 1901.5453000869657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59153.969072164946,
            "unit": "ns",
            "range": "± 9689.427341022285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2768.926315789474,
            "unit": "ns",
            "range": "± 394.8086862876716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11684.760869565218,
            "unit": "ns",
            "range": "± 691.8086245179929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5846967.071428572,
            "unit": "ns",
            "range": "± 13718.042570135287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14553862.066666666,
            "unit": "ns",
            "range": "± 66521.5324671715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37561859.53333333,
            "unit": "ns",
            "range": "± 241472.5210189902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76327340,
            "unit": "ns",
            "range": "± 250147.29094018645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150019777.34615386,
            "unit": "ns",
            "range": "± 485697.8460028495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018695.57,
            "unit": "ns",
            "range": "± 114811.81419739906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1829766.7407407407,
            "unit": "ns",
            "range": "± 49906.984701228546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1593409.7688172043,
            "unit": "ns",
            "range": "± 122399.86322466246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8048118.346938776,
            "unit": "ns",
            "range": "± 316565.3300722164"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42370.50515463918,
            "unit": "ns",
            "range": "± 7026.4725460274385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783662.490685096,
            "unit": "ns",
            "range": "± 4408.301188095147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226236.9749098558,
            "unit": "ns",
            "range": "± 1030.4074832161539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772480.5411458333,
            "unit": "ns",
            "range": "± 1533.4881592112158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930588.5927083334,
            "unit": "ns",
            "range": "± 2164.4761261119993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635405.1085286458,
            "unit": "ns",
            "range": "± 591.4920282857279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570362.09375,
            "unit": "ns",
            "range": "± 351.69635411884536"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bcd7973f6ab61bf6a5d6dc7278130169e01e811",
          "message": "Merge pull request #3776 from greymistcube/refactor/world-migration\n\n♻️ Refactor world migration",
          "timestamp": "2024-05-03T10:01:49+09:00",
          "tree_id": "4cde64ce28ad2cc71c409cde339c3e98fcc30fd8",
          "url": "https://github.com/planetarium/libplanet/commit/5bcd7973f6ab61bf6a5d6dc7278130169e01e811"
        },
        "date": 1714698658802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2307096.8571428573,
            "unit": "ns",
            "range": "± 29310.570502956623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476038.227272727,
            "unit": "ns",
            "range": "± 51608.34757776878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3065744.470588235,
            "unit": "ns",
            "range": "± 60944.585726623045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3106977.5535714286,
            "unit": "ns",
            "range": "± 125554.62350733965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8884136.535714285,
            "unit": "ns",
            "range": "± 221837.67119516688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206655.5806451613,
            "unit": "ns",
            "range": "± 5548.955948489731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197238.4836065574,
            "unit": "ns",
            "range": "± 7437.948459290377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172596.3076923077,
            "unit": "ns",
            "range": "± 1353.4612655838723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3075046.214285714,
            "unit": "ns",
            "range": "± 40609.938522444274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2730627.8666666667,
            "unit": "ns",
            "range": "± 33258.744536193924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12631.945945945947,
            "unit": "ns",
            "range": "± 640.0188169727746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62035.260416666664,
            "unit": "ns",
            "range": "± 4374.518384907115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53701.692307692305,
            "unit": "ns",
            "range": "± 829.2746212419004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83758.44047619047,
            "unit": "ns",
            "range": "± 7866.870294172257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2898.9583333333335,
            "unit": "ns",
            "range": "± 339.56008434030196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16471.310344827587,
            "unit": "ns",
            "range": "± 686.0314415815615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5697013.2,
            "unit": "ns",
            "range": "± 18171.254144153852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14756338.692307692,
            "unit": "ns",
            "range": "± 55943.78091647694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37000456.25,
            "unit": "ns",
            "range": "± 39512.10703551968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76153459.5,
            "unit": "ns",
            "range": "± 366183.4250252083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154060650.1,
            "unit": "ns",
            "range": "± 638741.8836429045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959605.7446808511,
            "unit": "ns",
            "range": "± 68337.53178284003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831453.8666666667,
            "unit": "ns",
            "range": "± 54721.459678639054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1591673.440860215,
            "unit": "ns",
            "range": "± 119988.32202257292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7869254.978260869,
            "unit": "ns",
            "range": "± 300327.12393695634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36383.5,
            "unit": "ns",
            "range": "± 1942.8824656373063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746574.35546875,
            "unit": "ns",
            "range": "± 4513.376506043929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213053.073046875,
            "unit": "ns",
            "range": "± 1186.5231615326602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766126.4665876116,
            "unit": "ns",
            "range": "± 1241.8233624852774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964538.59921875,
            "unit": "ns",
            "range": "± 1478.4421628587493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610522.9385416667,
            "unit": "ns",
            "range": "± 1053.3746778870834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568200.1928385417,
            "unit": "ns",
            "range": "± 636.143265669593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b7e5fdaa3eab1684afe9b2781de9cc8ff9704d6",
          "message": "Merge pull request #3777 from greymistcube/chore/trie-remove-test\n\n✅ Added tests for `ITrie`",
          "timestamp": "2024-05-03T15:29:40+09:00",
          "tree_id": "9fd4dd7ceaed61592c79916f65e2bb908955bb1c",
          "url": "https://github.com/planetarium/libplanet/commit/1b7e5fdaa3eab1684afe9b2781de9cc8ff9704d6"
        },
        "date": 1714718362263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2521705.7916666665,
            "unit": "ns",
            "range": "± 64542.50446190929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2636318.5454545454,
            "unit": "ns",
            "range": "± 82230.449918237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3215222.6086956523,
            "unit": "ns",
            "range": "± 80973.78146476523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3421293.195652174,
            "unit": "ns",
            "range": "± 130408.07269709946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9131387.029411765,
            "unit": "ns",
            "range": "± 207315.709911271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239212.10204081633,
            "unit": "ns",
            "range": "± 8400.302713406865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233258.1568627451,
            "unit": "ns",
            "range": "± 9510.015487626819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174602.34615384616,
            "unit": "ns",
            "range": "± 4714.9966675899805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3261500.7333333334,
            "unit": "ns",
            "range": "± 45419.045379769086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851632.3846153845,
            "unit": "ns",
            "range": "± 33645.1004024322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14258.456989247312,
            "unit": "ns",
            "range": "± 1675.9431343080576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74962.53,
            "unit": "ns",
            "range": "± 12507.02478121311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90316.35714285714,
            "unit": "ns",
            "range": "± 1440.5917377748128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91436.14285714286,
            "unit": "ns",
            "range": "± 14540.55861814927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6449.335051546392,
            "unit": "ns",
            "range": "± 512.7392466045397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14278.0206185567,
            "unit": "ns",
            "range": "± 2263.336521135065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5892745.5,
            "unit": "ns",
            "range": "± 81648.01669623441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15128607.933333334,
            "unit": "ns",
            "range": "± 92152.14141412843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37849335.56666667,
            "unit": "ns",
            "range": "± 152003.1054614471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78940038.7,
            "unit": "ns",
            "range": "± 220777.90678358843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156250040.9,
            "unit": "ns",
            "range": "± 595413.7004495037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010174.11,
            "unit": "ns",
            "range": "± 103222.10524196713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927528.1923076923,
            "unit": "ns",
            "range": "± 77328.45494003662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672212.891304348,
            "unit": "ns",
            "range": "± 103650.24656920112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7833651.69047619,
            "unit": "ns",
            "range": "± 184673.44907014084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38242.204545454544,
            "unit": "ns",
            "range": "± 2541.185044215517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3764641.8264508927,
            "unit": "ns",
            "range": "± 5811.938717898787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209271.974888393,
            "unit": "ns",
            "range": "± 2170.0161358566866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779289.2223958333,
            "unit": "ns",
            "range": "± 1889.318267169642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960643.386997768,
            "unit": "ns",
            "range": "± 1634.496156815381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623578.3747209822,
            "unit": "ns",
            "range": "± 568.6458137401345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582045.9741586539,
            "unit": "ns",
            "range": "± 967.1270748498952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ad0c0a782885c06638f4d169381e983fd14b958",
          "message": "Merge pull request #3778 from greymistcube/refactor/mocks\n\n♻️ Updated `MockWorldState`",
          "timestamp": "2024-05-07T12:08:14+09:00",
          "tree_id": "116a17b61dfe84a8bbc9ebd01c9be48e276b30a2",
          "url": "https://github.com/planetarium/libplanet/commit/7ad0c0a782885c06638f4d169381e983fd14b958"
        },
        "date": 1715051869399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2403700.6,
            "unit": "ns",
            "range": "± 63346.485064945264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564506.2647058824,
            "unit": "ns",
            "range": "± 52452.20109958376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3172388.0714285714,
            "unit": "ns",
            "range": "± 51372.83975875891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3248726.380952381,
            "unit": "ns",
            "range": "± 117561.02696398557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9054498.227272727,
            "unit": "ns",
            "range": "± 159102.77570419447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201166.9,
            "unit": "ns",
            "range": "± 10354.611228589805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196594.15384615384,
            "unit": "ns",
            "range": "± 6869.73210823147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166419.3,
            "unit": "ns",
            "range": "± 3036.0676916978364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117210.6428571427,
            "unit": "ns",
            "range": "± 26457.239633349574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834650.3571428573,
            "unit": "ns",
            "range": "± 22662.263450696868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13060.5,
            "unit": "ns",
            "range": "± 1122.2356023815798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62902.26804123711,
            "unit": "ns",
            "range": "± 5355.515641053825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53279.771929824565,
            "unit": "ns",
            "range": "± 2061.585321140227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61012.177083333336,
            "unit": "ns",
            "range": "± 9380.900729948777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3216.1979166666665,
            "unit": "ns",
            "range": "± 605.4621048560073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12724.615384615385,
            "unit": "ns",
            "range": "± 896.9170129979298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5697063.6,
            "unit": "ns",
            "range": "± 38135.74754703818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14821125.3,
            "unit": "ns",
            "range": "± 126415.95069915596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38417168.46666667,
            "unit": "ns",
            "range": "± 118976.46170078388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76909159.06666666,
            "unit": "ns",
            "range": "± 277659.1340504362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151458099.06666666,
            "unit": "ns",
            "range": "± 796743.1740340051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962276.2840909091,
            "unit": "ns",
            "range": "± 64362.28355766632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1920719.1666666667,
            "unit": "ns",
            "range": "± 79518.40919115808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590647.3854166667,
            "unit": "ns",
            "range": "± 105191.66388798865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7684085.055555556,
            "unit": "ns",
            "range": "± 160051.36233923092"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36503.606741573036,
            "unit": "ns",
            "range": "± 2030.1028053792204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3699076.4983258927,
            "unit": "ns",
            "range": "± 5647.740956125365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211850.9532552084,
            "unit": "ns",
            "range": "± 2288.937942554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769136.3662109375,
            "unit": "ns",
            "range": "± 1905.574642701087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962361.0147235577,
            "unit": "ns",
            "range": "± 1797.135407204926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620818.0834263393,
            "unit": "ns",
            "range": "± 692.2231398028946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582273.5633370535,
            "unit": "ns",
            "range": "± 520.8436342680757"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3f0ce5513a2e8e8d88afa49b9b93af2337d0272",
          "message": "Merge pull request #3779 from greymistcube/feature/currency-account\n\n✨ Add `CurrencyAccount` to handle all `Currency` related logic",
          "timestamp": "2024-05-09T16:55:24+09:00",
          "tree_id": "eab19cdfc8dd9063e6307bdc4d787cf97ef6b4e6",
          "url": "https://github.com/planetarium/libplanet/commit/e3f0ce5513a2e8e8d88afa49b9b93af2337d0272"
        },
        "date": 1715241921396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2459672.45,
            "unit": "ns",
            "range": "± 82666.55534689051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2525680.975,
            "unit": "ns",
            "range": "± 87410.01655401809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3224248,
            "unit": "ns",
            "range": "± 42200.56133512918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3250026.7978723403,
            "unit": "ns",
            "range": "± 120479.8028097791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8987033.964285715,
            "unit": "ns",
            "range": "± 185183.30462634045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221866.17676767678,
            "unit": "ns",
            "range": "± 24226.000023936285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198042.2931034483,
            "unit": "ns",
            "range": "± 8344.477024195108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168407.5,
            "unit": "ns",
            "range": "± 2547.1017254911512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3369708.466666667,
            "unit": "ns",
            "range": "± 40906.281199253266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3016485.3571428573,
            "unit": "ns",
            "range": "± 24274.283953971164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14393.881720430107,
            "unit": "ns",
            "range": "± 1862.8046225905798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64064.822222222225,
            "unit": "ns",
            "range": "± 5598.121931922274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76001.13,
            "unit": "ns",
            "range": "± 15761.730284095904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82777.63265306123,
            "unit": "ns",
            "range": "± 18061.91816678575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6642.163043478261,
            "unit": "ns",
            "range": "± 517.2084893699539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20942.454545454544,
            "unit": "ns",
            "range": "± 4764.101815411451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5828670.615384615,
            "unit": "ns",
            "range": "± 33284.85066197148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14891531.857142856,
            "unit": "ns",
            "range": "± 57188.162431112025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38476843.71428572,
            "unit": "ns",
            "range": "± 122533.9248010234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78656460,
            "unit": "ns",
            "range": "± 312474.3236699617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156053678.30769232,
            "unit": "ns",
            "range": "± 552399.6989789768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976542.4444444445,
            "unit": "ns",
            "range": "± 83377.23500450754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870527.1041666667,
            "unit": "ns",
            "range": "± 72649.16217195345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1641318.4444444445,
            "unit": "ns",
            "range": "± 134902.68279704917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7759926.95,
            "unit": "ns",
            "range": "± 170884.58732276314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37718.43023255814,
            "unit": "ns",
            "range": "± 2168.2634948987484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752346.7882254464,
            "unit": "ns",
            "range": "± 7620.93889852013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1228371.0510066105,
            "unit": "ns",
            "range": "± 1065.2226278360092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771171.7220703125,
            "unit": "ns",
            "range": "± 2918.860754832885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945178.9338541667,
            "unit": "ns",
            "range": "± 2257.059245294689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632568.2581380209,
            "unit": "ns",
            "range": "± 829.6051298443477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587643.5432291667,
            "unit": "ns",
            "range": "± 645.8817638007793"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3d6674a59cb00a961e67b68c8090d43de6dbc92",
          "message": "Merge pull request #3780 from greymistcube/refactor/currency-total-supply-trackable\n\n💥 Change `GetTotalSupply()`'s behavior",
          "timestamp": "2024-05-09T17:58:30+09:00",
          "tree_id": "4e72f339c0f3bbbf0d4c09579b070b72c837f9f9",
          "url": "https://github.com/planetarium/libplanet/commit/f3d6674a59cb00a961e67b68c8090d43de6dbc92"
        },
        "date": 1715245715973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2358985.617647059,
            "unit": "ns",
            "range": "± 73913.41508984222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2444234.423076923,
            "unit": "ns",
            "range": "± 55377.18842333769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3086489.423076923,
            "unit": "ns",
            "range": "± 28970.105190412924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3035895.418181818,
            "unit": "ns",
            "range": "± 118225.73005024955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8904180.322580645,
            "unit": "ns",
            "range": "± 201852.4614790693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197791.69672131148,
            "unit": "ns",
            "range": "± 7509.011616761272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192222.29787234042,
            "unit": "ns",
            "range": "± 6766.002415899058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168007.2142857143,
            "unit": "ns",
            "range": "± 1982.8440793106104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3056786.5714285714,
            "unit": "ns",
            "range": "± 34518.70172811407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805269.8076923075,
            "unit": "ns",
            "range": "± 17792.924911251546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14152.111111111111,
            "unit": "ns",
            "range": "± 3019.7438663139283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59490.26436781609,
            "unit": "ns",
            "range": "± 3177.746226566837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52260.166666666664,
            "unit": "ns",
            "range": "± 879.1143270360233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66931.6170212766,
            "unit": "ns",
            "range": "± 6834.397749943908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2874.553191489362,
            "unit": "ns",
            "range": "± 210.60494623061834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11716.827956989247,
            "unit": "ns",
            "range": "± 661.1593674825391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5784477.857142857,
            "unit": "ns",
            "range": "± 26211.923548871193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14475313.566666666,
            "unit": "ns",
            "range": "± 93653.2448041838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37509649.833333336,
            "unit": "ns",
            "range": "± 223205.22962628768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75181451.85714285,
            "unit": "ns",
            "range": "± 133696.7702152076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151815905.14285713,
            "unit": "ns",
            "range": "± 516027.41303939646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976768.1224489796,
            "unit": "ns",
            "range": "± 71896.3387094218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1880090.5714285714,
            "unit": "ns",
            "range": "± 70541.9523171023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1627426.81,
            "unit": "ns",
            "range": "± 145561.41523864307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7791620.371428572,
            "unit": "ns",
            "range": "± 255582.14036829793"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38053.12371134021,
            "unit": "ns",
            "range": "± 6174.8560817536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3634672.5281808036,
            "unit": "ns",
            "range": "± 2391.1117936603337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212552.9504743305,
            "unit": "ns",
            "range": "± 1838.173431611331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775425.1214425223,
            "unit": "ns",
            "range": "± 746.5099803576982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965962.37890625,
            "unit": "ns",
            "range": "± 3494.353964227862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617099.6446614583,
            "unit": "ns",
            "range": "± 818.0205638228771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568863.2399553572,
            "unit": "ns",
            "range": "± 736.3424387676774"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85c21f75e245ece09b1a57a84826ce3e75f56c49",
          "message": "Merge pull request #3782 from greymistcube/chore/vscode-settings\n\n🔧 Updated `./vscode/settings.json` to comply with the newest version of vscode json schema",
          "timestamp": "2024-05-10T16:11:48+09:00",
          "tree_id": "2960f62a8ef4c1c66b0d521c9664c46ea0d145e9",
          "url": "https://github.com/planetarium/libplanet/commit/85c21f75e245ece09b1a57a84826ce3e75f56c49"
        },
        "date": 1715325805207,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2396743.566666667,
            "unit": "ns",
            "range": "± 43258.958795452614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538170,
            "unit": "ns",
            "range": "± 43153.313249721294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3173207.3666666667,
            "unit": "ns",
            "range": "± 44294.75776765506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3402719.8088235296,
            "unit": "ns",
            "range": "± 158547.9642685745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8903040.964285715,
            "unit": "ns",
            "range": "± 226092.15457934848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195169.82432432432,
            "unit": "ns",
            "range": "± 6582.915995438723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191393.26923076922,
            "unit": "ns",
            "range": "± 9871.85169925217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160045.82352941178,
            "unit": "ns",
            "range": "± 2477.486660793911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3270975.3333333335,
            "unit": "ns",
            "range": "± 38100.383820088944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2938236.5714285714,
            "unit": "ns",
            "range": "± 33620.57798138214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13446.729166666666,
            "unit": "ns",
            "range": "± 2140.3460688165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62561.85106382979,
            "unit": "ns",
            "range": "± 5246.443110423751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51939.346153846156,
            "unit": "ns",
            "range": "± 1385.8544134881613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65531.183673469386,
            "unit": "ns",
            "range": "± 16496.872307964855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3350.532608695652,
            "unit": "ns",
            "range": "± 510.45587147880457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12133.28409090909,
            "unit": "ns",
            "range": "± 843.8918728589136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5800858.928571428,
            "unit": "ns",
            "range": "± 28823.282780163583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15040263.6,
            "unit": "ns",
            "range": "± 93311.52406688957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38621069.2,
            "unit": "ns",
            "range": "± 201996.07027302007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78074634.76666667,
            "unit": "ns",
            "range": "± 976064.9405698567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152088382.06666666,
            "unit": "ns",
            "range": "± 513046.94131997414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998105.94,
            "unit": "ns",
            "range": "± 93672.0161954336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900623.875,
            "unit": "ns",
            "range": "± 80786.96801027491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589679.0308641975,
            "unit": "ns",
            "range": "± 79265.48657298561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7884640.392857143,
            "unit": "ns",
            "range": "± 185994.13379406056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37349.322222222225,
            "unit": "ns",
            "range": "± 3312.3806871123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750913.7959735575,
            "unit": "ns",
            "range": "± 6096.780081852909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211765.255859375,
            "unit": "ns",
            "range": "± 3029.9411800283137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761953.9965444711,
            "unit": "ns",
            "range": "± 876.4720191026048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918769.1180989584,
            "unit": "ns",
            "range": "± 1584.6301620941251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629088.71640625,
            "unit": "ns",
            "range": "± 2608.787461863547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571280.9264973958,
            "unit": "ns",
            "range": "± 305.52765867197303"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6e6b63a930b02314c73be2ce5052aa38a3d63b0",
          "message": "Merge pull request #3783 from greymistcube/refactor/currency-account\n\n♻️ Refactor `CurrencyAccount`",
          "timestamp": "2024-05-14T09:59:47+09:00",
          "tree_id": "61ac3578bccca0fada5a93cdeec310cd8ed91952",
          "url": "https://github.com/planetarium/libplanet/commit/c6e6b63a930b02314c73be2ce5052aa38a3d63b0"
        },
        "date": 1715648982058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2559052.08,
            "unit": "ns",
            "range": "± 66617.64498359275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2595555.18,
            "unit": "ns",
            "range": "± 102359.45833702214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3264921.3333333335,
            "unit": "ns",
            "range": "± 66235.42902604848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3252770.2,
            "unit": "ns",
            "range": "± 144220.9327286156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9152592.677419355,
            "unit": "ns",
            "range": "± 155710.29516945608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209428.65432098764,
            "unit": "ns",
            "range": "± 10924.019023647494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238441.8947368421,
            "unit": "ns",
            "range": "± 5070.394296466245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169247.5,
            "unit": "ns",
            "range": "± 4834.154455155141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163759.433333333,
            "unit": "ns",
            "range": "± 16325.110756424403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807422.285714286,
            "unit": "ns",
            "range": "± 27237.676771561997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21716.70202020202,
            "unit": "ns",
            "range": "± 4300.213929134503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71980.72368421052,
            "unit": "ns",
            "range": "± 3580.8311385251855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89069.88043478261,
            "unit": "ns",
            "range": "± 6379.3402684190105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94978.9387755102,
            "unit": "ns",
            "range": "± 12098.565091766795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6249.720430107527,
            "unit": "ns",
            "range": "± 400.2503392060969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12760.666666666666,
            "unit": "ns",
            "range": "± 996.6019553283752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5710241,
            "unit": "ns",
            "range": "± 33006.20990056265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15130580.833333334,
            "unit": "ns",
            "range": "± 71234.1761111764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38331936.333333336,
            "unit": "ns",
            "range": "± 171539.77394331558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79306320.26666667,
            "unit": "ns",
            "range": "± 285791.2325298378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156695327.6,
            "unit": "ns",
            "range": "± 697302.5837084951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000933.9468085107,
            "unit": "ns",
            "range": "± 94772.86900995906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2025803.862745098,
            "unit": "ns",
            "range": "± 73842.81669411577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716271.8854166667,
            "unit": "ns",
            "range": "± 187103.74952449126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7911554,
            "unit": "ns",
            "range": "± 145543.9615455789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36971.239130434784,
            "unit": "ns",
            "range": "± 2596.9343395947208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3719462.3270089286,
            "unit": "ns",
            "range": "± 10427.038626631696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212819.3387920673,
            "unit": "ns",
            "range": "± 1908.5741646023948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774992.2662527902,
            "unit": "ns",
            "range": "± 1886.8615991671813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941909.4682291667,
            "unit": "ns",
            "range": "± 2181.7092864479896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621720.7274693081,
            "unit": "ns",
            "range": "± 906.0333018785262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566745.5977213542,
            "unit": "ns",
            "range": "± 324.94711681095595"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51b31e7a885df1342681b51dac515f443bc7bf7a",
          "message": "Merge pull request #3784 from greymistcube/release/4.5.0\n\n🚀 Release 4.5.0",
          "timestamp": "2024-05-14T17:05:00+09:00",
          "tree_id": "d0af614dc8458ab70ce6395965f553458859c58a",
          "url": "https://github.com/planetarium/libplanet/commit/51b31e7a885df1342681b51dac515f443bc7bf7a"
        },
        "date": 1715674509089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2388480.4736842103,
            "unit": "ns",
            "range": "± 52511.60923005336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2703189.466666667,
            "unit": "ns",
            "range": "± 47758.92955977173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3132449.5,
            "unit": "ns",
            "range": "± 69149.95223159289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3132053.7066666665,
            "unit": "ns",
            "range": "± 156921.5853518732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8947754.285714285,
            "unit": "ns",
            "range": "± 156868.03313438513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202944.28358208956,
            "unit": "ns",
            "range": "± 9160.073790238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191754.25454545455,
            "unit": "ns",
            "range": "± 8093.748925853055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166546.8076923077,
            "unit": "ns",
            "range": "± 2509.2071584671053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141882.033333333,
            "unit": "ns",
            "range": "± 46638.986179355314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2841976.5,
            "unit": "ns",
            "range": "± 41507.15893210934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13035.244680851063,
            "unit": "ns",
            "range": "± 1075.5520681563905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63288.2,
            "unit": "ns",
            "range": "± 6031.173225903154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54160.98888888889,
            "unit": "ns",
            "range": "± 4481.896615221962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75722.85567010309,
            "unit": "ns",
            "range": "± 23785.21991962204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3078.0425531914893,
            "unit": "ns",
            "range": "± 509.42982917957136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12857.572916666666,
            "unit": "ns",
            "range": "± 1251.4880006135993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5767181.071428572,
            "unit": "ns",
            "range": "± 23302.09866898518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14686604.633333333,
            "unit": "ns",
            "range": "± 116286.683298443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37692484.2,
            "unit": "ns",
            "range": "± 238564.3488870156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74867492,
            "unit": "ns",
            "range": "± 376467.4151875564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150018375.14285713,
            "unit": "ns",
            "range": "± 639276.2466054702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986408.8296703297,
            "unit": "ns",
            "range": "± 80949.65127960782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1832854.111111111,
            "unit": "ns",
            "range": "± 60248.87364650908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610963.2311827957,
            "unit": "ns",
            "range": "± 109228.33584625451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7878946.315789473,
            "unit": "ns",
            "range": "± 269978.8900073991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38207.52631578947,
            "unit": "ns",
            "range": "± 5452.045286417858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3678490.5987723214,
            "unit": "ns",
            "range": "± 4170.062802892526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210385.7009114583,
            "unit": "ns",
            "range": "± 2974.0209230442165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768875.6919921875,
            "unit": "ns",
            "range": "± 1217.6925551972445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943871.8376302083,
            "unit": "ns",
            "range": "± 5187.863053359413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618553.7673688616,
            "unit": "ns",
            "range": "± 639.1502326791984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581103.25546875,
            "unit": "ns",
            "range": "± 699.9578878010257"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18ed59ae529733aa8b45ff4b4702d611642ea9ab",
          "message": "Merge pull request #3785 from greymistcube/prepare/4.6.0\n\n🔧 Prepare 4.6.0",
          "timestamp": "2024-05-16T10:53:21+09:00",
          "tree_id": "2f11cde1442f5b105e67bcf46dcfaa5e8560b9e2",
          "url": "https://github.com/planetarium/libplanet/commit/18ed59ae529733aa8b45ff4b4702d611642ea9ab"
        },
        "date": 1715824978282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983300.3105263158,
            "unit": "ns",
            "range": "± 84783.00051499368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1897373.4375,
            "unit": "ns",
            "range": "± 69072.38583479583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1583171.4444444445,
            "unit": "ns",
            "range": "± 115037.21770958322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7719563.096774193,
            "unit": "ns",
            "range": "± 221618.29255973053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5829193,
            "unit": "ns",
            "range": "± 27511.479798700137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15064414.833333334,
            "unit": "ns",
            "range": "± 69453.2656484783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37817730.63333333,
            "unit": "ns",
            "range": "± 151227.27495814592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78209968.85714285,
            "unit": "ns",
            "range": "± 233992.92375456312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150834812.43333334,
            "unit": "ns",
            "range": "± 727792.0442863436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722062.7723214286,
            "unit": "ns",
            "range": "± 3556.606202859563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208830.1558314732,
            "unit": "ns",
            "range": "± 2069.338180481258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764134.6703125,
            "unit": "ns",
            "range": "± 1890.6937760437586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970137.357421875,
            "unit": "ns",
            "range": "± 5158.994008696541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639798.5759465144,
            "unit": "ns",
            "range": "± 431.6761862676891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581546.7993861607,
            "unit": "ns",
            "range": "± 449.1794336445545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420864.0862068967,
            "unit": "ns",
            "range": "± 70012.56831838799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2498231.3333333335,
            "unit": "ns",
            "range": "± 111969.2478003123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120632.5,
            "unit": "ns",
            "range": "± 39579.258299013134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3181724.026666667,
            "unit": "ns",
            "range": "± 153847.31001600728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8739488,
            "unit": "ns",
            "range": "± 136762.70681305387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201297.40384615384,
            "unit": "ns",
            "range": "± 8147.301054997859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195351.44444444444,
            "unit": "ns",
            "range": "± 5603.145458168727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166400.45238095237,
            "unit": "ns",
            "range": "± 3940.0598913746285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3144526.933333333,
            "unit": "ns",
            "range": "± 49143.41821570625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2951770.730769231,
            "unit": "ns",
            "range": "± 21064.41326089196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12493.66265060241,
            "unit": "ns",
            "range": "± 658.3870215711853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59829.16483516483,
            "unit": "ns",
            "range": "± 3724.2301434546657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52252.61538461538,
            "unit": "ns",
            "range": "± 850.4374892235896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60757.5306122449,
            "unit": "ns",
            "range": "± 11139.495158010614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2914.4791666666665,
            "unit": "ns",
            "range": "± 274.36003925563006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11738.47191011236,
            "unit": "ns",
            "range": "± 685.3837194973279"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37197.294117647056,
            "unit": "ns",
            "range": "± 2147.4229007920026"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38b56e321a8add3e747d538d2bfc34808d43ac41",
          "message": "Merge pull request #3791 from greymistcube/chore/legacy-block-bencodex\n\n🔧 Added tests for unmarsahling PoW blocks",
          "timestamp": "2024-05-20T17:29:51+09:00",
          "tree_id": "26f1a50154b48c41457c3566dcc68ecaa41acc77",
          "url": "https://github.com/planetarium/libplanet/commit/38b56e321a8add3e747d538d2bfc34808d43ac41"
        },
        "date": 1716194379440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965814.7956989247,
            "unit": "ns",
            "range": "± 72694.15033289028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1821352.8214285714,
            "unit": "ns",
            "range": "± 41032.0647263536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612759.0684210525,
            "unit": "ns",
            "range": "± 113508.27713118758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7848985.708333333,
            "unit": "ns",
            "range": "± 197270.95536606922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5715146.733333333,
            "unit": "ns",
            "range": "± 12932.369783203843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14604120.115384616,
            "unit": "ns",
            "range": "± 96512.65042775347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36828361.35714286,
            "unit": "ns",
            "range": "± 267527.7364699729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76607576.93333334,
            "unit": "ns",
            "range": "± 482181.52922428155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151818369.07142857,
            "unit": "ns",
            "range": "± 524491.4821575296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3676005.4044471155,
            "unit": "ns",
            "range": "± 7962.565686105585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197517.646205357,
            "unit": "ns",
            "range": "± 1199.5532056239367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770158.2787760417,
            "unit": "ns",
            "range": "± 3048.988055274465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933830.1974051339,
            "unit": "ns",
            "range": "± 3756.359955071366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630046.7488141741,
            "unit": "ns",
            "range": "± 1156.3903511691076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584342.6681189904,
            "unit": "ns",
            "range": "± 326.64689872872873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2371418.3684210526,
            "unit": "ns",
            "range": "± 45523.110981872014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2464339.4324324327,
            "unit": "ns",
            "range": "± 74200.63149160022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3146688.933333333,
            "unit": "ns",
            "range": "± 49339.72829919207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3076862.827160494,
            "unit": "ns",
            "range": "± 161265.2796546571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8660816.615384616,
            "unit": "ns",
            "range": "± 129695.73902248965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205452.25454545455,
            "unit": "ns",
            "range": "± 8438.01423281959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192628.05,
            "unit": "ns",
            "range": "± 6700.159270782013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164638,
            "unit": "ns",
            "range": "± 2345.017813462095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083455.1666666665,
            "unit": "ns",
            "range": "± 53286.06039244278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2888523.6428571427,
            "unit": "ns",
            "range": "± 37161.647342506105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12257.47191011236,
            "unit": "ns",
            "range": "± 676.1049557086607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59847.630952380954,
            "unit": "ns",
            "range": "± 3192.7794054776873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63107.07407407407,
            "unit": "ns",
            "range": "± 1468.1701045316431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62412.989583333336,
            "unit": "ns",
            "range": "± 9228.904450571861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2950.3333333333335,
            "unit": "ns",
            "range": "± 282.91537386987267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12026.974025974027,
            "unit": "ns",
            "range": "± 541.4774373008968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39938.916666666664,
            "unit": "ns",
            "range": "± 7048.6023350159985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c4fac3cc821687eff4b53e0f264f889f93f0811",
          "message": "Merge pull request #3794 from greymistcube/refactor/remove-nonce\n\n🧹 Removed `Nonce` struct",
          "timestamp": "2024-05-21T13:38:02+09:00",
          "tree_id": "ae17204c2cad6f268f3fbce0f839b0751d3c882b",
          "url": "https://github.com/planetarium/libplanet/commit/1c4fac3cc821687eff4b53e0f264f889f93f0811"
        },
        "date": 1716266906379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039994.15,
            "unit": "ns",
            "range": "± 105703.6180865794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1995839.9833333334,
            "unit": "ns",
            "range": "± 88727.6505723242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703456.8636363635,
            "unit": "ns",
            "range": "± 80133.69140147777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7920326.5,
            "unit": "ns",
            "range": "± 170267.81002375556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5620101.214285715,
            "unit": "ns",
            "range": "± 56768.64835747954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14976858.733333332,
            "unit": "ns",
            "range": "± 49438.76014896274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37855078.6,
            "unit": "ns",
            "range": "± 127698.41277277378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77036476.6,
            "unit": "ns",
            "range": "± 220638.31781084623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153358567.5,
            "unit": "ns",
            "range": "± 865148.5269110072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729803.7463727677,
            "unit": "ns",
            "range": "± 8240.52843288227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221883.25,
            "unit": "ns",
            "range": "± 2639.142091252742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767443.9452373798,
            "unit": "ns",
            "range": "± 590.4159974982304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951675.97109375,
            "unit": "ns",
            "range": "± 1148.3300379054633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605056.4955729167,
            "unit": "ns",
            "range": "± 590.668286775633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572701.8447963169,
            "unit": "ns",
            "range": "± 1045.1565144315132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2513217.0625,
            "unit": "ns",
            "range": "± 29821.735706178584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2658716.86,
            "unit": "ns",
            "range": "± 54999.08384152109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3182252.466666667,
            "unit": "ns",
            "range": "± 55131.61281342605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3324192.3333333335,
            "unit": "ns",
            "range": "± 58860.703849569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8915477.631578946,
            "unit": "ns",
            "range": "± 190144.55415294805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205057.6511627907,
            "unit": "ns",
            "range": "± 7577.044727595761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198150.5487804878,
            "unit": "ns",
            "range": "± 9960.983501881306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165722.875,
            "unit": "ns",
            "range": "± 3170.7685687647822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3150054.8571428573,
            "unit": "ns",
            "range": "± 21016.707236266702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2895486.2666666666,
            "unit": "ns",
            "range": "± 40604.46591283607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14360.655172413793,
            "unit": "ns",
            "range": "± 2145.563458425295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63343.87209302326,
            "unit": "ns",
            "range": "± 3446.638668740763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58053.98314606742,
            "unit": "ns",
            "range": "± 4680.608947155273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75304.14285714286,
            "unit": "ns",
            "range": "± 19824.297361997655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4278.561224489796,
            "unit": "ns",
            "range": "± 1879.6128909762929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12850.797872340425,
            "unit": "ns",
            "range": "± 906.0103233500873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36786.29787234042,
            "unit": "ns",
            "range": "± 2453.510725075385"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "beba3cf988e99e6a8ae42d011124eccc2665ce84",
          "message": "Merge pull request #3795 from greymistcube/refactor/remove-atomic-action-renderer\n\n🧹 Removed `AtomicActionRenderer`",
          "timestamp": "2024-05-21T17:19:48+09:00",
          "tree_id": "ab02f6afd32a8f5c2f9934839fa2ea1ff5468cb9",
          "url": "https://github.com/planetarium/libplanet/commit/beba3cf988e99e6a8ae42d011124eccc2665ce84"
        },
        "date": 1716280191813,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973094.25,
            "unit": "ns",
            "range": "± 68768.46311163892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1853873.0681818181,
            "unit": "ns",
            "range": "± 69272.56357364733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581570.4893617022,
            "unit": "ns",
            "range": "± 130080.90785814346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7768569.1034482755,
            "unit": "ns",
            "range": "± 223703.547294396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5688048.230769231,
            "unit": "ns",
            "range": "± 18519.759808349954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14569784.8,
            "unit": "ns",
            "range": "± 103511.40502600253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38663993.884615384,
            "unit": "ns",
            "range": "± 206517.42015527346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75788219.28571428,
            "unit": "ns",
            "range": "± 159664.05816416716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155755996.92857143,
            "unit": "ns",
            "range": "± 463581.48989005893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3701942.960379464,
            "unit": "ns",
            "range": "± 2468.0851028035627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200401.97421875,
            "unit": "ns",
            "range": "± 1715.0442839631826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765004.7651692708,
            "unit": "ns",
            "range": "± 1036.0345491100202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920708.3901742788,
            "unit": "ns",
            "range": "± 1137.2521784243386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613879.3701923077,
            "unit": "ns",
            "range": "± 433.379456747106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574560.9552873884,
            "unit": "ns",
            "range": "± 547.3172767169516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2350711.1470588236,
            "unit": "ns",
            "range": "± 33430.52039106851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528035.9,
            "unit": "ns",
            "range": "± 51673.73562071936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3080798.8,
            "unit": "ns",
            "range": "± 36412.098450927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3144261.653846154,
            "unit": "ns",
            "range": "± 130871.70457159929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8847335.05263158,
            "unit": "ns",
            "range": "± 155380.43553216005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198684.89583333334,
            "unit": "ns",
            "range": "± 7541.383308232277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195516.9534883721,
            "unit": "ns",
            "range": "± 6898.078224278218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163177.73684210525,
            "unit": "ns",
            "range": "± 3457.6891262181525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3127345.8666666667,
            "unit": "ns",
            "range": "± 39270.48818108775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835074.8333333335,
            "unit": "ns",
            "range": "± 20097.28383200681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12048.852272727272,
            "unit": "ns",
            "range": "± 676.8122464954882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58941.484375,
            "unit": "ns",
            "range": "± 2576.8495468407873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55203.25,
            "unit": "ns",
            "range": "± 611.9901415327973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59766.61956521739,
            "unit": "ns",
            "range": "± 10464.348697690924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3034.5729166666665,
            "unit": "ns",
            "range": "± 378.3845925646958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11551.161290322581,
            "unit": "ns",
            "range": "± 711.0713486233991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39781.18686868687,
            "unit": "ns",
            "range": "± 5779.88629866004"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa65bea2d37b00091a370c0397867fff1c0d3ce4",
          "message": "Merge pull request #3796 from greymistcube/chore/remove-unused-argument\n\n🧹 Removed unused parameter for the executable",
          "timestamp": "2024-05-21T17:42:38+09:00",
          "tree_id": "dd8f4de8666f22a17f6883e8dc97fba081f2699f",
          "url": "https://github.com/planetarium/libplanet/commit/aa65bea2d37b00091a370c0397867fff1c0d3ce4"
        },
        "date": 1716281536495,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1107535.1979166667,
            "unit": "ns",
            "range": "± 100287.02777177743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2053038.4523809524,
            "unit": "ns",
            "range": "± 67618.57345982373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1804828.7,
            "unit": "ns",
            "range": "± 209543.44618031176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7953220.128205128,
            "unit": "ns",
            "range": "± 276573.88904339535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6055052.333333333,
            "unit": "ns",
            "range": "± 20295.15947449633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14444271.214285715,
            "unit": "ns",
            "range": "± 56230.1077051029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38003792.64285714,
            "unit": "ns",
            "range": "± 125443.86302345466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75534995.03333333,
            "unit": "ns",
            "range": "± 382504.6188012201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153887541.86666667,
            "unit": "ns",
            "range": "± 1001810.1433084491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750200.0208333335,
            "unit": "ns",
            "range": "± 9735.16108880672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208567.383203125,
            "unit": "ns",
            "range": "± 2857.2186424081942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764666.152204241,
            "unit": "ns",
            "range": "± 2034.7694422795687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941867.7491629464,
            "unit": "ns",
            "range": "± 3703.6583310354927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622055.3140345982,
            "unit": "ns",
            "range": "± 1369.584928534843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581485.9192057292,
            "unit": "ns",
            "range": "± 1349.7260387136032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418754.205882353,
            "unit": "ns",
            "range": "± 78116.60363356952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538288.4857142856,
            "unit": "ns",
            "range": "± 78061.49355904553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3068172.7666666666,
            "unit": "ns",
            "range": "± 36923.90244711154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3153466.170212766,
            "unit": "ns",
            "range": "± 121148.75707688769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8964114.595238095,
            "unit": "ns",
            "range": "± 207490.2158861725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205216.78873239437,
            "unit": "ns",
            "range": "± 10029.848085896261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198258.0625,
            "unit": "ns",
            "range": "± 9144.286985447374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173701.0576923077,
            "unit": "ns",
            "range": "± 7164.7532979256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3386858.3846153845,
            "unit": "ns",
            "range": "± 28623.923524266847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2898504,
            "unit": "ns",
            "range": "± 33711.38711042741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18609.40404040404,
            "unit": "ns",
            "range": "± 3894.8564929136564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90240.28,
            "unit": "ns",
            "range": "± 21457.36196616608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52394.59090909091,
            "unit": "ns",
            "range": "± 1451.0437700935395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64282.21276595745,
            "unit": "ns",
            "range": "± 17176.95433317331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3013.1315789473683,
            "unit": "ns",
            "range": "± 508.60091893039487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14015.540816326531,
            "unit": "ns",
            "range": "± 2322.6950892655486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37311.5376344086,
            "unit": "ns",
            "range": "± 2325.870353966351"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "801606c529f89f010697b330cf8a3d3a5219627e",
          "message": "Merge pull request #3789 from greymistcube/refactor/deprecate-pow-evaluation\n\n💥 Deprecate PoW evaluation",
          "timestamp": "2024-05-23T18:11:10+09:00",
          "tree_id": "1a7ac15befca39545830338d6eaf9a61b458d006",
          "url": "https://github.com/planetarium/libplanet/commit/801606c529f89f010697b330cf8a3d3a5219627e"
        },
        "date": 1716456070735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018241.5104166666,
            "unit": "ns",
            "range": "± 83087.56073602743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1946263.5,
            "unit": "ns",
            "range": "± 95424.3028485489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1615990.3820224719,
            "unit": "ns",
            "range": "± 88069.76229703896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8023374.978723404,
            "unit": "ns",
            "range": "± 307438.08788801474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5897695.633333334,
            "unit": "ns",
            "range": "± 46137.674229057826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15331032.57142857,
            "unit": "ns",
            "range": "± 91781.20704715626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38080703.75,
            "unit": "ns",
            "range": "± 64745.61605955895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78338404.4,
            "unit": "ns",
            "range": "± 331332.51588715875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155236075.3,
            "unit": "ns",
            "range": "± 861227.5808194785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3677962.9274553573,
            "unit": "ns",
            "range": "± 6842.254684952004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190530.5412760417,
            "unit": "ns",
            "range": "± 1996.2884113034268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764952.45703125,
            "unit": "ns",
            "range": "± 1024.8835877606118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952741.6765625,
            "unit": "ns",
            "range": "± 1549.656936602989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621935.9079427083,
            "unit": "ns",
            "range": "± 806.8494256395371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577011.4961635044,
            "unit": "ns",
            "range": "± 392.4306878465935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2433313.5,
            "unit": "ns",
            "range": "± 89338.5092296267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2569650.0517241377,
            "unit": "ns",
            "range": "± 98708.89783004286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3167781.44,
            "unit": "ns",
            "range": "± 82458.73685116695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3228337.9571428574,
            "unit": "ns",
            "range": "± 157052.14879929658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9279785.5,
            "unit": "ns",
            "range": "± 131362.03988722668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208306.82978723405,
            "unit": "ns",
            "range": "± 14743.543756788953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200518.86842105264,
            "unit": "ns",
            "range": "± 6900.94457859311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172444.6923076923,
            "unit": "ns",
            "range": "± 1972.370882323073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3111191.466666667,
            "unit": "ns",
            "range": "± 26513.661014833917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2846086.214285714,
            "unit": "ns",
            "range": "± 24083.695430019332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13385.483516483517,
            "unit": "ns",
            "range": "± 850.0590222990056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63380.11827956989,
            "unit": "ns",
            "range": "± 4998.301328515568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64221.53684210526,
            "unit": "ns",
            "range": "± 13253.505458260424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67893.76086956522,
            "unit": "ns",
            "range": "± 14995.020504893891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4213.571428571428,
            "unit": "ns",
            "range": "± 590.7233552808173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12609.438202247191,
            "unit": "ns",
            "range": "± 1222.9242055887655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36859.13636363636,
            "unit": "ns",
            "range": "± 2155.920510027918"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93e6bb9549e5e20c463f96540c4519638a3231a1",
          "message": "Merge pull request #3798 from greymistcube/fix/gql-queries\n\n♻️ Moved balance and validator query from account to world",
          "timestamp": "2024-05-23T20:39:44+09:00",
          "tree_id": "7b2229bdd720624df89696e1dd8ba479a70122ba",
          "url": "https://github.com/planetarium/libplanet/commit/93e6bb9549e5e20c463f96540c4519638a3231a1"
        },
        "date": 1716464965376,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 944348.9268292683,
            "unit": "ns",
            "range": "± 46409.88597797249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1834210.6153846155,
            "unit": "ns",
            "range": "± 22282.468850864432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607010.9722222222,
            "unit": "ns",
            "range": "± 78807.91915004344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7757395.928571428,
            "unit": "ns",
            "range": "± 221542.88251444578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5787081.807692308,
            "unit": "ns",
            "range": "± 156145.92948412563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14803665.466666667,
            "unit": "ns",
            "range": "± 76921.08516141413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37532337.666666664,
            "unit": "ns",
            "range": "± 210923.4247062415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76467429.33333333,
            "unit": "ns",
            "range": "± 884308.9453416368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153308123.84615386,
            "unit": "ns",
            "range": "± 593836.5327606084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3762631.304387019,
            "unit": "ns",
            "range": "± 6218.438517815762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219050.4513221155,
            "unit": "ns",
            "range": "± 2139.136971416431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771707.7315104167,
            "unit": "ns",
            "range": "± 1474.1316954237504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945728.8465401786,
            "unit": "ns",
            "range": "± 3428.5899929306347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626946.3870192308,
            "unit": "ns",
            "range": "± 708.0230669828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578190.9982561384,
            "unit": "ns",
            "range": "± 884.04905445437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2546412.619047619,
            "unit": "ns",
            "range": "± 92730.81186987666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2519250.487804878,
            "unit": "ns",
            "range": "± 88666.03121182372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3203948.214285714,
            "unit": "ns",
            "range": "± 52017.64745542328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3280543.285714286,
            "unit": "ns",
            "range": "± 85450.67820499216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8970131.088235294,
            "unit": "ns",
            "range": "± 188829.57285314467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198895.52777777778,
            "unit": "ns",
            "range": "± 9417.871796871952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190605.7123287671,
            "unit": "ns",
            "range": "± 9430.389027381774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167046.0588235294,
            "unit": "ns",
            "range": "± 3275.464060072027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3159058.214285714,
            "unit": "ns",
            "range": "± 30189.772570750283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2897231.6,
            "unit": "ns",
            "range": "± 29813.312812040385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12403.994252873563,
            "unit": "ns",
            "range": "± 880.4177902744258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62330.041666666664,
            "unit": "ns",
            "range": "± 5293.542715654246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52318.348837209305,
            "unit": "ns",
            "range": "± 1817.5510457719506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58443.295918367345,
            "unit": "ns",
            "range": "± 9309.718067651589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7411.594736842106,
            "unit": "ns",
            "range": "± 512.3842489665601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15203.887755102041,
            "unit": "ns",
            "range": "± 3698.4817103100568"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43046.041666666664,
            "unit": "ns",
            "range": "± 5177.906864069926"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a71dd8b1993bb417dfe70937592acf4802b046b8",
          "message": "Merge pull request #3799 from greymistcube/feature/mock-block-chain-states\n\n✨ Added `MockBlockChainStates`",
          "timestamp": "2024-05-24T18:44:31+09:00",
          "tree_id": "9c075b6c74914c6e00eca34d2a552a350b872be4",
          "url": "https://github.com/planetarium/libplanet/commit/a71dd8b1993bb417dfe70937592acf4802b046b8"
        },
        "date": 1716544448937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006564.804347826,
            "unit": "ns",
            "range": "± 83597.65830560734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1966075.8490566039,
            "unit": "ns",
            "range": "± 80745.59647731124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714255.44,
            "unit": "ns",
            "range": "± 156869.03533584435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8212983,
            "unit": "ns",
            "range": "± 280369.0567605443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6047437.5,
            "unit": "ns",
            "range": "± 39169.05714427434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14947718.733333332,
            "unit": "ns",
            "range": "± 99048.53546942577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38741788.071428575,
            "unit": "ns",
            "range": "± 153985.01012796632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77842918.03333333,
            "unit": "ns",
            "range": "± 414370.76305317035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153680697.64285713,
            "unit": "ns",
            "range": "± 443610.0700214109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3705868.4453125,
            "unit": "ns",
            "range": "± 5666.284673259078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1185136.5567908655,
            "unit": "ns",
            "range": "± 990.9846750013252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777503.3927734375,
            "unit": "ns",
            "range": "± 3476.766872628671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929744.2640625,
            "unit": "ns",
            "range": "± 3190.4781996540282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621966.7538364956,
            "unit": "ns",
            "range": "± 788.4070745663784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578117.9144112723,
            "unit": "ns",
            "range": "± 607.3428898627539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2467309.888888889,
            "unit": "ns",
            "range": "± 76943.17093238463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2555068.1714285715,
            "unit": "ns",
            "range": "± 68418.45719733721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3213048.9285714286,
            "unit": "ns",
            "range": "± 53585.55669741081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3268117.0342465756,
            "unit": "ns",
            "range": "± 162748.90174514937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9192583.387096774,
            "unit": "ns",
            "range": "± 218508.31575978635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211267.9107142857,
            "unit": "ns",
            "range": "± 7855.1119239217505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198857.51111111112,
            "unit": "ns",
            "range": "± 7546.797362946335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174626.7894736842,
            "unit": "ns",
            "range": "± 5478.787959807794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3167852.846153846,
            "unit": "ns",
            "range": "± 28706.07706231718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2902223.769230769,
            "unit": "ns",
            "range": "± 31189.452945276887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15780.656565656565,
            "unit": "ns",
            "range": "± 3318.3861739129547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66231.6914893617,
            "unit": "ns",
            "range": "± 4630.316208869577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59584.06896551724,
            "unit": "ns",
            "range": "± 2501.4665881541455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63439.79069767442,
            "unit": "ns",
            "range": "± 6911.98637341433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3815.0208333333335,
            "unit": "ns",
            "range": "± 550.8543408420791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13665.804347826086,
            "unit": "ns",
            "range": "± 1379.6207333513717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38107.213483146064,
            "unit": "ns",
            "range": "± 2855.443181141104"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3709ea24fe6f60356b83efcbeb2daa1a3a5d1f31",
          "message": "Merge pull request #3804 from greymistcube/port/4.5.1-to-main\n\n🔀 Port 4.5.1 to main",
          "timestamp": "2024-05-27T11:00:08+09:00",
          "tree_id": "9e385bb38acd6c3c091b5265e076667a5848f8ce",
          "url": "https://github.com/planetarium/libplanet/commit/3709ea24fe6f60356b83efcbeb2daa1a3a5d1f31"
        },
        "date": 1716775779297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990396.9329896907,
            "unit": "ns",
            "range": "± 92093.35101156724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1865835.5869565217,
            "unit": "ns",
            "range": "± 70254.5161521311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1632098.8695652173,
            "unit": "ns",
            "range": "± 103983.0478990081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7671231.65,
            "unit": "ns",
            "range": "± 174949.86040254805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5938186.633333334,
            "unit": "ns",
            "range": "± 39253.462143697165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14819138.966666667,
            "unit": "ns",
            "range": "± 145527.7412993661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37649332,
            "unit": "ns",
            "range": "± 193265.25636913785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76480064.4,
            "unit": "ns",
            "range": "± 507969.81545037276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154953247.06666666,
            "unit": "ns",
            "range": "± 630566.9862135942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731464.337890625,
            "unit": "ns",
            "range": "± 3553.539884375202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201978.192578125,
            "unit": "ns",
            "range": "± 2268.2283988020286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757534.2031947544,
            "unit": "ns",
            "range": "± 605.0003507985936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909021.730859375,
            "unit": "ns",
            "range": "± 3815.070633226422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610495.3938802084,
            "unit": "ns",
            "range": "± 536.1935167621115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581597.3973958333,
            "unit": "ns",
            "range": "± 676.7862167041245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2394107.5714285714,
            "unit": "ns",
            "range": "± 32852.051764666874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500754.5918367347,
            "unit": "ns",
            "range": "± 90071.89895992311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3141455.9615384615,
            "unit": "ns",
            "range": "± 84155.5592089938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3097790.5344827585,
            "unit": "ns",
            "range": "± 124813.7337849521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9032892.903225806,
            "unit": "ns",
            "range": "± 189603.746910472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199423.06382978722,
            "unit": "ns",
            "range": "± 7644.26827733284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194018.33783783784,
            "unit": "ns",
            "range": "± 8667.897903320292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165046.6875,
            "unit": "ns",
            "range": "± 3211.5863830564067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3177551.8666666667,
            "unit": "ns",
            "range": "± 24665.755231166335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2909608.1,
            "unit": "ns",
            "range": "± 30151.584290997762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15597.649484536083,
            "unit": "ns",
            "range": "± 2873.4648729119876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60118.074468085106,
            "unit": "ns",
            "range": "± 3452.9886836237365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52688.86666666667,
            "unit": "ns",
            "range": "± 913.8074091144047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59030.886597938144,
            "unit": "ns",
            "range": "± 9535.387216700887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3037.445054945055,
            "unit": "ns",
            "range": "± 347.6257362495655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12088.297872340425,
            "unit": "ns",
            "range": "± 858.5885370242273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36499.34523809524,
            "unit": "ns",
            "range": "± 1871.4489553892868"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "acefa767a052bbf8b7b8bace776de53727691e83",
          "message": "Merge pull request #3805 from greymistcube/release/4.6.0\n\n🚀 Release 4.6.0",
          "timestamp": "2024-05-27T13:54:48+09:00",
          "tree_id": "26b04820a6d9dd8d731598d5a003c296450a4cdc",
          "url": "https://github.com/planetarium/libplanet/commit/acefa767a052bbf8b7b8bace776de53727691e83"
        },
        "date": 1716786265060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023701.0714285715,
            "unit": "ns",
            "range": "± 102021.77306367844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1869984.8488372094,
            "unit": "ns",
            "range": "± 62328.62126812159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642655.744680851,
            "unit": "ns",
            "range": "± 144601.10832766816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7894694.576923077,
            "unit": "ns",
            "range": "± 215454.76205049135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5739814.333333333,
            "unit": "ns",
            "range": "± 32903.42361619329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14602647.76923077,
            "unit": "ns",
            "range": "± 88904.84262696627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37680325.233333334,
            "unit": "ns",
            "range": "± 228646.51412433456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75717421.35714285,
            "unit": "ns",
            "range": "± 272756.9508010487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 158729393.26666668,
            "unit": "ns",
            "range": "± 711117.8635722037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3798100.7586495536,
            "unit": "ns",
            "range": "± 5490.033210300576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201122.4324776786,
            "unit": "ns",
            "range": "± 1459.8486596568612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763775.1977213542,
            "unit": "ns",
            "range": "± 2640.337909874343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901732.0135323661,
            "unit": "ns",
            "range": "± 1121.720617394832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614347.8305664062,
            "unit": "ns",
            "range": "± 1682.2011698561416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568989.1556490385,
            "unit": "ns",
            "range": "± 688.7759929456004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411119.0862068967,
            "unit": "ns",
            "range": "± 69664.49524046214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476175.3333333335,
            "unit": "ns",
            "range": "± 38969.71479544206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3204301.88,
            "unit": "ns",
            "range": "± 84143.17259306702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3141638.063829787,
            "unit": "ns",
            "range": "± 116750.35299293145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9035190.464285715,
            "unit": "ns",
            "range": "± 201243.66996522585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203422.33720930232,
            "unit": "ns",
            "range": "± 7482.600995866638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189097.51111111112,
            "unit": "ns",
            "range": "± 6673.888523812997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167984.2857142857,
            "unit": "ns",
            "range": "± 2678.8120337358337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3130535.2333333334,
            "unit": "ns",
            "range": "± 18136.982685215575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2854074.285714286,
            "unit": "ns",
            "range": "± 21352.719237492092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12294.81111111111,
            "unit": "ns",
            "range": "± 825.7045428057105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70576.0425531915,
            "unit": "ns",
            "range": "± 4160.987292155743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52079.8,
            "unit": "ns",
            "range": "± 1480.994668825958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92866.88775510204,
            "unit": "ns",
            "range": "± 12697.949426858851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5923.515463917526,
            "unit": "ns",
            "range": "± 773.1676606850608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11671.20652173913,
            "unit": "ns",
            "range": "± 754.6419067541418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36161.22784810127,
            "unit": "ns",
            "range": "± 1756.2507337300565"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d37f60fcf76933623a10eb5366eef0bf299798a",
          "message": "Merge pull request #3809 from todaymoon/main\n\nchore: fix some comments",
          "timestamp": "2024-06-10T15:24:06+09:00",
          "tree_id": "b7597b4ee138859e7995a8b7a1eb2fd96f4ed1a3",
          "url": "https://github.com/planetarium/libplanet/commit/5d37f60fcf76933623a10eb5366eef0bf299798a"
        },
        "date": 1718001260624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972246.9673913043,
            "unit": "ns",
            "range": "± 65480.830015222324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899078.106060606,
            "unit": "ns",
            "range": "± 89218.32333070615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648021.7323232323,
            "unit": "ns",
            "range": "± 174868.7993008326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8256673.357142857,
            "unit": "ns",
            "range": "± 443116.183015371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5636297.8,
            "unit": "ns",
            "range": "± 10847.86736249507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14395462.857142856,
            "unit": "ns",
            "range": "± 56946.90052733624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37366012.071428575,
            "unit": "ns",
            "range": "± 195304.70553765047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75838325.92857143,
            "unit": "ns",
            "range": "± 1253190.6739752006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152222942.2142857,
            "unit": "ns",
            "range": "± 1516377.9873996014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754433.341796875,
            "unit": "ns",
            "range": "± 7993.85915094883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206330.1672712055,
            "unit": "ns",
            "range": "± 3461.8011186056206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770218.6507161459,
            "unit": "ns",
            "range": "± 2151.363513933909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938379.5436197917,
            "unit": "ns",
            "range": "± 3244.557958543196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610675.182421875,
            "unit": "ns",
            "range": "± 1247.2239161269995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575227.1369977678,
            "unit": "ns",
            "range": "± 2438.6792537800793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2357574.066666667,
            "unit": "ns",
            "range": "± 20675.042948536033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534447.1086956523,
            "unit": "ns",
            "range": "± 44935.29333258408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3167878.5714285714,
            "unit": "ns",
            "range": "± 32085.721947294885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3227440.1,
            "unit": "ns",
            "range": "± 48916.270414424915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9363530.819672132,
            "unit": "ns",
            "range": "± 417833.9524554983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208258.38235294117,
            "unit": "ns",
            "range": "± 9434.417206734537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195949.57692307694,
            "unit": "ns",
            "range": "± 10124.65233716948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165357.16666666666,
            "unit": "ns",
            "range": "± 1562.5493640687052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3047516.846153846,
            "unit": "ns",
            "range": "± 16737.84624160744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808046.5714285714,
            "unit": "ns",
            "range": "± 47317.14729309074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13035.145833333334,
            "unit": "ns",
            "range": "± 1142.9951878994957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64896.0505050505,
            "unit": "ns",
            "range": "± 5097.348595250754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65748.83,
            "unit": "ns",
            "range": "± 10159.335170778755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67646.11855670103,
            "unit": "ns",
            "range": "± 10880.928191147208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2881.2319587628867,
            "unit": "ns",
            "range": "± 368.7691101111439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12252.641304347826,
            "unit": "ns",
            "range": "± 805.4446397647405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40010.166666666664,
            "unit": "ns",
            "range": "± 5299.455764841215"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e69286704944c973203c23a106a8e0fc854c1b09",
          "message": "Merge pull request #3811 from greymistcube/sloth\n\n🔀 Rebase and merge Sloth update to main",
          "timestamp": "2024-06-10T21:37:35+09:00",
          "tree_id": "ddd64f0e67d756955f68f2982f3aca3814212032",
          "url": "https://github.com/planetarium/libplanet/commit/e69286704944c973203c23a106a8e0fc854c1b09"
        },
        "date": 1718023674551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061167.25,
            "unit": "ns",
            "range": "± 91711.72514219471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2043484.24,
            "unit": "ns",
            "range": "± 81944.06787174895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1763431.6758241758,
            "unit": "ns",
            "range": "± 111627.23240416375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8529227.095238095,
            "unit": "ns",
            "range": "± 305053.5012285478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5898135.347826087,
            "unit": "ns",
            "range": "± 145060.9388180795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15626578.733333332,
            "unit": "ns",
            "range": "± 225354.68424985616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37876813.583333336,
            "unit": "ns",
            "range": "± 137320.51562441813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80995524.2,
            "unit": "ns",
            "range": "± 611007.6514910432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153226314.6,
            "unit": "ns",
            "range": "± 943621.8340955387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3696087.9514508927,
            "unit": "ns",
            "range": "± 14081.297323689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223656.6982421875,
            "unit": "ns",
            "range": "± 1987.597654687841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765998.8347516741,
            "unit": "ns",
            "range": "± 982.7620111958073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968162.9986049107,
            "unit": "ns",
            "range": "± 4707.93865284869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627807.0075120192,
            "unit": "ns",
            "range": "± 783.5490472371474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582088.5279947916,
            "unit": "ns",
            "range": "± 1123.703102999297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2558893.5,
            "unit": "ns",
            "range": "± 75970.63931410018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2637128.756756757,
            "unit": "ns",
            "range": "± 88467.47120753399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3093040.2,
            "unit": "ns",
            "range": "± 70785.76023957597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2654296.35106383,
            "unit": "ns",
            "range": "± 102400.8255229502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3394392.3695652173,
            "unit": "ns",
            "range": "± 83772.83001845166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216709.39,
            "unit": "ns",
            "range": "± 17991.106754180048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206247.22,
            "unit": "ns",
            "range": "± 19277.541483500452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168846.431372549,
            "unit": "ns",
            "range": "± 6610.572278569843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3244190.5,
            "unit": "ns",
            "range": "± 62654.702782791974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2943392.5714285714,
            "unit": "ns",
            "range": "± 42657.69998075789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14593.117021276596,
            "unit": "ns",
            "range": "± 2960.371452486395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74929.4387755102,
            "unit": "ns",
            "range": "± 16286.396679606307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82041.07368421053,
            "unit": "ns",
            "range": "± 14880.651001861235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83225.44897959183,
            "unit": "ns",
            "range": "± 20053.89758045735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5116.313131313132,
            "unit": "ns",
            "range": "± 1878.784869169892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15325.684210526315,
            "unit": "ns",
            "range": "± 4686.237426589168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38031.46464646464,
            "unit": "ns",
            "range": "± 5792.256751189173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a78b5bf2ff521d08ef5fc25f8d26dc56ccaffbc8",
          "message": "Merge pull request #3808 from OnedgeLee/sloth\n\nMinor fixes for Sloth",
          "timestamp": "2024-06-11T16:00:49+09:00",
          "tree_id": "21e2500216d4541a76cc9c12ac2570103c4633e0",
          "url": "https://github.com/planetarium/libplanet/commit/a78b5bf2ff521d08ef5fc25f8d26dc56ccaffbc8"
        },
        "date": 1718089723483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038699.49,
            "unit": "ns",
            "range": "± 89030.52897816127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1948273.4583333333,
            "unit": "ns",
            "range": "± 74449.2366769832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1705787.7222222222,
            "unit": "ns",
            "range": "± 116340.21311267119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8358347.5,
            "unit": "ns",
            "range": "± 172562.19923872454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5774820.785714285,
            "unit": "ns",
            "range": "± 29044.666491533273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14916294.57142857,
            "unit": "ns",
            "range": "± 94691.42373944008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37601080.63333333,
            "unit": "ns",
            "range": "± 266100.49220383604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76955679,
            "unit": "ns",
            "range": "± 291722.79955227254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153652541.2142857,
            "unit": "ns",
            "range": "± 1080486.3727831931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729230.0518973214,
            "unit": "ns",
            "range": "± 7246.600179136286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1187451.0546875,
            "unit": "ns",
            "range": "± 1794.4747527310167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771374.8229166666,
            "unit": "ns",
            "range": "± 1974.7540454884006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940401.7237723214,
            "unit": "ns",
            "range": "± 3495.71703393835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612492.9137834822,
            "unit": "ns",
            "range": "± 1142.9843532965958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578282.2083565848,
            "unit": "ns",
            "range": "± 758.8621037273025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2406393.103448276,
            "unit": "ns",
            "range": "± 66639.85515351735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2588675.6470588236,
            "unit": "ns",
            "range": "± 82807.80115529386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3050535.6153846155,
            "unit": "ns",
            "range": "± 39643.53652139372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2606598.5,
            "unit": "ns",
            "range": "± 21288.96987772178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3334295.2666666666,
            "unit": "ns",
            "range": "± 60287.115605796454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209205.0576923077,
            "unit": "ns",
            "range": "± 8510.646353218275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195259.75333333333,
            "unit": "ns",
            "range": "± 9874.38849162841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169780.65789473685,
            "unit": "ns",
            "range": "± 3777.954594503308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3180434.346153846,
            "unit": "ns",
            "range": "± 22422.52500591817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2888792.6666666665,
            "unit": "ns",
            "range": "± 33442.52500007965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14640.347368421053,
            "unit": "ns",
            "range": "± 1717.1679540181358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72792.38383838384,
            "unit": "ns",
            "range": "± 10828.141274632944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54763.32608695652,
            "unit": "ns",
            "range": "± 3385.202552443536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65614.21649484536,
            "unit": "ns",
            "range": "± 13834.621933626946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3063.8953488372094,
            "unit": "ns",
            "range": "± 548.6060630805135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12993.9,
            "unit": "ns",
            "range": "± 819.7348680717347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38540.96153846154,
            "unit": "ns",
            "range": "± 560.1316237255633"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd50824d8d436cd73165cb7f6e92e55f261036c5",
          "message": "Merge pull request #3819 from greymistcube/port/4.6.1-to-main\n\n🔀 Port 4.6.1 to main",
          "timestamp": "2024-06-11T19:56:15+09:00",
          "tree_id": "babb4b2041239105e288ae9faee7c3f6d4dd8d32",
          "url": "https://github.com/planetarium/libplanet/commit/bd50824d8d436cd73165cb7f6e92e55f261036c5"
        },
        "date": 1718103854876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037740.4893617021,
            "unit": "ns",
            "range": "± 94657.72919014786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1965686.0147058824,
            "unit": "ns",
            "range": "± 93323.14409947685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1737100.5425531915,
            "unit": "ns",
            "range": "± 147596.97820461157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8430676.318181818,
            "unit": "ns",
            "range": "± 192638.93839503312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5702657.5,
            "unit": "ns",
            "range": "± 29866.95829327633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14581591.666666666,
            "unit": "ns",
            "range": "± 113675.98026073097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37315722.53333333,
            "unit": "ns",
            "range": "± 205323.7023871841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75694470.7,
            "unit": "ns",
            "range": "± 373994.26332158776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152814194.03333333,
            "unit": "ns",
            "range": "± 691046.7268026781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739832.4268973214,
            "unit": "ns",
            "range": "± 3467.696031134594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190527.9309895833,
            "unit": "ns",
            "range": "± 2241.0060789298145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775986.4283621652,
            "unit": "ns",
            "range": "± 1832.3712242932272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942250.2662760417,
            "unit": "ns",
            "range": "± 3886.9543665529727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622643.8079927885,
            "unit": "ns",
            "range": "± 456.50023656766865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569939.0872395834,
            "unit": "ns",
            "range": "± 624.3705437894548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2469848,
            "unit": "ns",
            "range": "± 41620.19875890514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2569665.1470588236,
            "unit": "ns",
            "range": "± 82188.06678703325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3074880,
            "unit": "ns",
            "range": "± 43075.22321474376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2643614.966666667,
            "unit": "ns",
            "range": "± 49356.46887095473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3327563.5714285714,
            "unit": "ns",
            "range": "± 32103.83311517198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201179.82352941178,
            "unit": "ns",
            "range": "± 8197.305263819038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197048.8085106383,
            "unit": "ns",
            "range": "± 11189.634798807307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169784.2857142857,
            "unit": "ns",
            "range": "± 2923.850160018765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3294253.7333333334,
            "unit": "ns",
            "range": "± 33229.33599024183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2893331.533333333,
            "unit": "ns",
            "range": "± 36345.31256447692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19517.762626262625,
            "unit": "ns",
            "range": "± 6299.582913932263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64829.15053763441,
            "unit": "ns",
            "range": "± 6478.9577294269175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53193,
            "unit": "ns",
            "range": "± 1564.6877598148092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64355.71875,
            "unit": "ns",
            "range": "± 11879.383714480111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3329.458823529412,
            "unit": "ns",
            "range": "± 568.4442124686253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12127.714285714286,
            "unit": "ns",
            "range": "± 1247.8581497529124"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39367.066666666666,
            "unit": "ns",
            "range": "± 704.4638758523764"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbd8e6e77ab681b74e2361197368d13a2592a44f",
          "message": "Merge pull request #3820 from greymistcube/chore/fix\n\n✏️ Fixed version prefix",
          "timestamp": "2024-06-11T20:15:29+09:00",
          "tree_id": "49da5500f4c88894a9ae13627ad1c0566e796ef6",
          "url": "https://github.com/planetarium/libplanet/commit/bbd8e6e77ab681b74e2361197368d13a2592a44f"
        },
        "date": 1718105120988,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1109548.1340206186,
            "unit": "ns",
            "range": "± 110804.23604291838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2057225.0862068965,
            "unit": "ns",
            "range": "± 59972.34450473059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1876450.0360824743,
            "unit": "ns",
            "range": "± 169645.4091005622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8572845.23076923,
            "unit": "ns",
            "range": "± 352412.35693824536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5860138.342105263,
            "unit": "ns",
            "range": "± 126064.31089957537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15114077.633333333,
            "unit": "ns",
            "range": "± 141094.37398516876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39778892.571428575,
            "unit": "ns",
            "range": "± 189822.53406100304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77749218.33333333,
            "unit": "ns",
            "range": "± 430430.12512164866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153397716.46666667,
            "unit": "ns",
            "range": "± 476245.987494138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3719327.3232421875,
            "unit": "ns",
            "range": "± 4556.898385276477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1229553.3860212055,
            "unit": "ns",
            "range": "± 1933.8902227784552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 795829.1034505208,
            "unit": "ns",
            "range": "± 1917.4513373518596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938309.5910993305,
            "unit": "ns",
            "range": "± 5058.788843812015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636968.2263532366,
            "unit": "ns",
            "range": "± 1468.8915321706515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571577.2294170673,
            "unit": "ns",
            "range": "± 678.6550417634863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2511415.976744186,
            "unit": "ns",
            "range": "± 92448.82748399848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2587990.1764705884,
            "unit": "ns",
            "range": "± 89177.28992018224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3223383.9615384615,
            "unit": "ns",
            "range": "± 64233.536551232035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2752733.785714286,
            "unit": "ns",
            "range": "± 80334.47604329824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3350823.7666666666,
            "unit": "ns",
            "range": "± 53682.80034406693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242660.10606060605,
            "unit": "ns",
            "range": "± 7702.20646121695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231021.68181818182,
            "unit": "ns",
            "range": "± 6773.295931701869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168584.72,
            "unit": "ns",
            "range": "± 6690.0004096580205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3259569.576923077,
            "unit": "ns",
            "range": "± 21515.938841788655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2927149.785714286,
            "unit": "ns",
            "range": "± 26237.954021955327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17777.979591836734,
            "unit": "ns",
            "range": "± 5114.0545119431035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64930.4587628866,
            "unit": "ns",
            "range": "± 5975.879710200146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89370.35106382979,
            "unit": "ns",
            "range": "± 9475.358299132246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97260.33673469388,
            "unit": "ns",
            "range": "± 12843.265937932263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6781.489583333333,
            "unit": "ns",
            "range": "± 523.667853646739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25507.1,
            "unit": "ns",
            "range": "± 2829.8895809561254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43026.90909090909,
            "unit": "ns",
            "range": "± 7933.5469756030425"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebb5e8493f2beeae562d2438403395991d43c51d",
          "message": "Merge pull request #3821 from greymistcube/chore/cleanup\n\n🧹 Removed `GetNextWorldState()` from `IBlockChainStates`",
          "timestamp": "2024-06-12T13:35:17+09:00",
          "tree_id": "b15d508329512c6fe8df4669e54d28e84f65d513",
          "url": "https://github.com/planetarium/libplanet/commit/ebb5e8493f2beeae562d2438403395991d43c51d"
        },
        "date": 1718167475502,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026667.6847826086,
            "unit": "ns",
            "range": "± 82381.92239765052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1950049.6393442622,
            "unit": "ns",
            "range": "± 87560.31095479897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1724673.5168539325,
            "unit": "ns",
            "range": "± 112398.20758398889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8309884.444444444,
            "unit": "ns",
            "range": "± 224171.32249727994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5672944.615384615,
            "unit": "ns",
            "range": "± 17285.713718455776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14663499.615384616,
            "unit": "ns",
            "range": "± 87051.05431253016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38084544.807692304,
            "unit": "ns",
            "range": "± 201539.78797555278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75588248.4,
            "unit": "ns",
            "range": "± 308321.7777334026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 159164097.93333334,
            "unit": "ns",
            "range": "± 705547.0321256779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730757.0993303573,
            "unit": "ns",
            "range": "± 5181.3624958001465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227267.075420673,
            "unit": "ns",
            "range": "± 1595.4543125908986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760018.5006009615,
            "unit": "ns",
            "range": "± 935.6605039808445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948127.7974330357,
            "unit": "ns",
            "range": "± 3402.07516066899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616449.6134440104,
            "unit": "ns",
            "range": "± 374.3487014455975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564526.1119559152,
            "unit": "ns",
            "range": "± 1131.288692396466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2346035.243243243,
            "unit": "ns",
            "range": "± 70397.76188377543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2582325.433333333,
            "unit": "ns",
            "range": "± 44869.81924327097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3039523.933333333,
            "unit": "ns",
            "range": "± 53850.271344941335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2560781.3714285716,
            "unit": "ns",
            "range": "± 81423.0710714778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3301566.9583333335,
            "unit": "ns",
            "range": "± 82549.27756957694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203217.41176470587,
            "unit": "ns",
            "range": "± 9692.84914328529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194433.0606060606,
            "unit": "ns",
            "range": "± 6074.811972087047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168575.17647058822,
            "unit": "ns",
            "range": "± 3456.7812563730095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3187898.6666666665,
            "unit": "ns",
            "range": "± 40096.112046407885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2864967.1428571427,
            "unit": "ns",
            "range": "± 25629.012847093494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13280.016483516483,
            "unit": "ns",
            "range": "± 1263.9612807241044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61926.98936170213,
            "unit": "ns",
            "range": "± 5503.813393046407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96685.12244897959,
            "unit": "ns",
            "range": "± 3855.2031973719886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59712.229166666664,
            "unit": "ns",
            "range": "± 10677.950436571486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2972.3263157894735,
            "unit": "ns",
            "range": "± 374.55055171428285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12094.364583333334,
            "unit": "ns",
            "range": "± 1059.5573466986027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35738.879310344826,
            "unit": "ns",
            "range": "± 1965.7735458390039"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31be60879dc6980427c2bb376c0c7a81ebeab25b",
          "message": "Merge pull request #3823 from greymistcube/chore/fix-ci\n\n👷 Changed to more elaborate version matching",
          "timestamp": "2024-06-13T14:12:56+09:00",
          "tree_id": "d75f573e515fb78404222eb82f98556f6097d5d4",
          "url": "https://github.com/planetarium/libplanet/commit/31be60879dc6980427c2bb376c0c7a81ebeab25b"
        },
        "date": 1718256059889,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1019727.0212765958,
            "unit": "ns",
            "range": "± 82417.64111190732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1968622.403508772,
            "unit": "ns",
            "range": "± 84580.95296980698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683832.858695652,
            "unit": "ns",
            "range": "± 136650.20282270096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8512394.894736841,
            "unit": "ns",
            "range": "± 287484.2498450334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5677325.6,
            "unit": "ns",
            "range": "± 21389.59898375176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14751690.192307692,
            "unit": "ns",
            "range": "± 91428.59776840852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37577620.42307692,
            "unit": "ns",
            "range": "± 162908.07683601897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76001717.4,
            "unit": "ns",
            "range": "± 494666.79114268423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152740528.42307693,
            "unit": "ns",
            "range": "± 284512.5042449691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3775856.2522321427,
            "unit": "ns",
            "range": "± 3552.562267542081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198329.41875,
            "unit": "ns",
            "range": "± 1451.7975256479735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767210.278125,
            "unit": "ns",
            "range": "± 1494.3280159673086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959032.3567708333,
            "unit": "ns",
            "range": "± 2569.5135453137505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620881.7084263393,
            "unit": "ns",
            "range": "± 1111.1868639050915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568395.1761067709,
            "unit": "ns",
            "range": "± 867.7530314054768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2427751.276595745,
            "unit": "ns",
            "range": "± 93231.50224568437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2480995.8076923075,
            "unit": "ns",
            "range": "± 77116.37557311944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3008791.581081081,
            "unit": "ns",
            "range": "± 92398.33017171371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2508729.3695652173,
            "unit": "ns",
            "range": "± 53028.43159467669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3303225.736842105,
            "unit": "ns",
            "range": "± 68729.11647979746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200219.4,
            "unit": "ns",
            "range": "± 7060.489261030584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192546.09523809524,
            "unit": "ns",
            "range": "± 5912.546127534285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163853.38461538462,
            "unit": "ns",
            "range": "± 1953.1521761186257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141226.8571428573,
            "unit": "ns",
            "range": "± 35312.02278992926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2820030.3333333335,
            "unit": "ns",
            "range": "± 38358.3528166881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12366.565217391304,
            "unit": "ns",
            "range": "± 729.1372789290972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61178.43956043956,
            "unit": "ns",
            "range": "± 3880.6805165211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53137.85,
            "unit": "ns",
            "range": "± 973.6006570836341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57671.37755102041,
            "unit": "ns",
            "range": "± 9637.704629531287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2916.7204301075267,
            "unit": "ns",
            "range": "± 276.3406202179146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12004.926829268292,
            "unit": "ns",
            "range": "± 645.8576608175642"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38866.416666666664,
            "unit": "ns",
            "range": "± 290.0158172279992"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bbce0e6f6f5c3477c0d7ebb8a283040a3d20bf9",
          "message": "Merge pull request #3822 from greymistcube/chore/docs\n\n📝 Added some clarifications",
          "timestamp": "2024-06-13T14:22:48+09:00",
          "tree_id": "117b4ead4ab10c1b1a807a9b279bc7c3eb94b5aa",
          "url": "https://github.com/planetarium/libplanet/commit/7bbce0e6f6f5c3477c0d7ebb8a283040a3d20bf9"
        },
        "date": 1718256672537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997070.088888889,
            "unit": "ns",
            "range": "± 59518.05631206522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1966319.6896551724,
            "unit": "ns",
            "range": "± 86074.90238636956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680197.4871794872,
            "unit": "ns",
            "range": "± 82307.12226026414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8294030.147058823,
            "unit": "ns",
            "range": "± 262774.9009292395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5722450.533333333,
            "unit": "ns",
            "range": "± 24422.03503240075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14550890.633333333,
            "unit": "ns",
            "range": "± 96627.63206902395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38602844.266666666,
            "unit": "ns",
            "range": "± 82195.8930964547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75943464.15384616,
            "unit": "ns",
            "range": "± 433956.32178957947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150436623.5,
            "unit": "ns",
            "range": "± 902654.7787194963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3656426.98046875,
            "unit": "ns",
            "range": "± 4525.0945143249455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203929.6661551339,
            "unit": "ns",
            "range": "± 1669.0417983794487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760203.9447544643,
            "unit": "ns",
            "range": "± 985.3130173371569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919697.6044270834,
            "unit": "ns",
            "range": "± 1469.064523768895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618507.1440104167,
            "unit": "ns",
            "range": "± 732.3063935519399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572021.1573016827,
            "unit": "ns",
            "range": "± 505.52111237899715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377807.0727272728,
            "unit": "ns",
            "range": "± 100951.4346437149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2529393.183333333,
            "unit": "ns",
            "range": "± 112451.88491618585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3048689.1428571427,
            "unit": "ns",
            "range": "± 48342.85083666957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2554921.4897959186,
            "unit": "ns",
            "range": "± 101939.61961502065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3267290.7,
            "unit": "ns",
            "range": "± 53333.29343611602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202598.46511627908,
            "unit": "ns",
            "range": "± 7088.944489061277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194001.24390243902,
            "unit": "ns",
            "range": "± 6871.482164644277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168801.58333333334,
            "unit": "ns",
            "range": "± 4280.921923428731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3131012.433333333,
            "unit": "ns",
            "range": "± 38417.75294698062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788538.933333333,
            "unit": "ns",
            "range": "± 47499.90513594538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12225.466292134832,
            "unit": "ns",
            "range": "± 646.1114182244105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60216.5989010989,
            "unit": "ns",
            "range": "± 4437.329682628068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66176.76,
            "unit": "ns",
            "range": "± 19505.476516189916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67488.92708333333,
            "unit": "ns",
            "range": "± 7198.118226672407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2965.951612903226,
            "unit": "ns",
            "range": "± 343.6839585929337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11818.522727272728,
            "unit": "ns",
            "range": "± 747.0062237546007"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48257.444444444445,
            "unit": "ns",
            "range": "± 992.0863471802431"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9",
          "message": "Merge pull request #3825 from greymistcube/chore/fix-javascript-ci\n\n👷 Updated javascript ci version parsing",
          "timestamp": "2024-06-13T16:43:39+09:00",
          "tree_id": "6dbc8b89f1ed7f6ea5506c8543a0ecca4ea0cf98",
          "url": "https://github.com/planetarium/libplanet/commit/aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9"
        },
        "date": 1718265203492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034883.4673913043,
            "unit": "ns",
            "range": "± 89454.94625670587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2069072.5957446808,
            "unit": "ns",
            "range": "± 75853.00643053258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1871223.125,
            "unit": "ns",
            "range": "± 153600.8053714666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8393099.07142857,
            "unit": "ns",
            "range": "± 239982.37660803171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5798061.285714285,
            "unit": "ns",
            "range": "± 60810.90057576162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14844022.6,
            "unit": "ns",
            "range": "± 224248.49327151087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39552140.666666664,
            "unit": "ns",
            "range": "± 378799.46701476054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80146667.5,
            "unit": "ns",
            "range": "± 435543.9570125103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155150718.35714287,
            "unit": "ns",
            "range": "± 553168.4318061386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3708275.10546875,
            "unit": "ns",
            "range": "± 5214.384780758718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1232836.6020833333,
            "unit": "ns",
            "range": "± 2113.6362533778934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760304.5009765625,
            "unit": "ns",
            "range": "± 1421.1013307477187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968564.3052083333,
            "unit": "ns",
            "range": "± 3428.819472527616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621707.9827706473,
            "unit": "ns",
            "range": "± 1356.733441962495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580758.322126116,
            "unit": "ns",
            "range": "± 568.7228409480928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470943.533333333,
            "unit": "ns",
            "range": "± 93918.94318666494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2585137.409090909,
            "unit": "ns",
            "range": "± 91147.93878834363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3130939.1363636362,
            "unit": "ns",
            "range": "± 47099.14226551462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2626704.2586206896,
            "unit": "ns",
            "range": "± 75880.69194826044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3308411.6666666665,
            "unit": "ns",
            "range": "± 36387.261084589685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204170.33823529413,
            "unit": "ns",
            "range": "± 9743.423950895007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194880.56140350876,
            "unit": "ns",
            "range": "± 8431.384132720066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169733.38461538462,
            "unit": "ns",
            "range": "± 2820.410801593199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3276085.8571428573,
            "unit": "ns",
            "range": "± 56800.10247228993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3015357.566666667,
            "unit": "ns",
            "range": "± 33870.21894666815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22291.873684210525,
            "unit": "ns",
            "range": "± 1521.378338121181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76386.41836734694,
            "unit": "ns",
            "range": "± 9342.839751220115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86027.4,
            "unit": "ns",
            "range": "± 11350.406971096843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88018.2967032967,
            "unit": "ns",
            "range": "± 8483.273039071268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5979.357894736842,
            "unit": "ns",
            "range": "± 758.6190970299253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12636.591397849463,
            "unit": "ns",
            "range": "± 997.9478970079499"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44731.59375,
            "unit": "ns",
            "range": "± 6789.47023214799"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6cea60074a476e0d15dd81462aa9069916a881",
          "message": "Merge pull request #3831 from s2quake/fix/ci-installation-test-error\n\nFix ci installation test error",
          "timestamp": "2024-06-18T16:28:32+09:00",
          "tree_id": "3316e761f9841cb41ac666074759b05c8030e0c7",
          "url": "https://github.com/planetarium/libplanet/commit/9d6cea60074a476e0d15dd81462aa9069916a881"
        },
        "date": 1718696200015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1016509.9895833334,
            "unit": "ns",
            "range": "± 76798.88541481436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1938151.8166666667,
            "unit": "ns",
            "range": "± 73546.37553329507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1710957.6458333333,
            "unit": "ns",
            "range": "± 102865.82116401408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8268752.5,
            "unit": "ns",
            "range": "± 220195.69822628234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5684856.233333333,
            "unit": "ns",
            "range": "± 43604.27393774715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14510899.214285715,
            "unit": "ns",
            "range": "± 82207.92448928002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37789101.2,
            "unit": "ns",
            "range": "± 114550.21857570966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76088053.14285715,
            "unit": "ns",
            "range": "± 321526.9472283435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155545251.85714287,
            "unit": "ns",
            "range": "± 809783.5106297387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3761014.3507254464,
            "unit": "ns",
            "range": "± 5699.339927388698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215401.3919270833,
            "unit": "ns",
            "range": "± 1045.3487174288052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759449.0285807292,
            "unit": "ns",
            "range": "± 1171.934566647581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959548.0247395833,
            "unit": "ns",
            "range": "± 4305.384628486367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625844.2497395833,
            "unit": "ns",
            "range": "± 1019.6400529504244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575435.7887137277,
            "unit": "ns",
            "range": "± 615.6442215071183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418785.55,
            "unit": "ns",
            "range": "± 55180.375006332404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2539689.24,
            "unit": "ns",
            "range": "± 47043.18492112681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3108802.25,
            "unit": "ns",
            "range": "± 95754.82672210652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2494179.5428571426,
            "unit": "ns",
            "range": "± 65445.378380997485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3315346.076923077,
            "unit": "ns",
            "range": "± 46242.58732391881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201847.95652173914,
            "unit": "ns",
            "range": "± 7660.356049040255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196949.0625,
            "unit": "ns",
            "range": "± 7691.116873508559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164066.42857142858,
            "unit": "ns",
            "range": "± 2907.5594964290453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169453.5,
            "unit": "ns",
            "range": "± 28548.171710286457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828383.277777778,
            "unit": "ns",
            "range": "± 59048.15902176355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16774.866666666665,
            "unit": "ns",
            "range": "± 1235.8698724271233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60962.586021505376,
            "unit": "ns",
            "range": "± 4214.415070187584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54064.416666666664,
            "unit": "ns",
            "range": "± 2670.4639980326883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60605.17525773196,
            "unit": "ns",
            "range": "± 10951.932598680842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3321.351063829787,
            "unit": "ns",
            "range": "± 431.47042803380316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11899.709677419354,
            "unit": "ns",
            "range": "± 929.5071225566754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38476.35294117647,
            "unit": "ns",
            "range": "± 790.3876375849123"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0a35dc306cf7d7b4e8210dd5921b53d1e035b70",
          "message": "Merge pull request #3832 from OnedgeLee/chore/fix-duplicated-nsrh-gen\n\nRemove duplicated NSRH generation on BlockChain.Create()",
          "timestamp": "2024-06-19T14:29:27+09:00",
          "tree_id": "126d3de9bd4682bcf0bc2a6ac0cd37e71f4c3ba6",
          "url": "https://github.com/planetarium/libplanet/commit/a0a35dc306cf7d7b4e8210dd5921b53d1e035b70"
        },
        "date": 1718775441306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022399.7150537635,
            "unit": "ns",
            "range": "± 87247.32130307466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1908970.7457627119,
            "unit": "ns",
            "range": "± 84345.54689808878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1668921.25,
            "unit": "ns",
            "range": "± 82648.82383741986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8136679.875,
            "unit": "ns",
            "range": "± 206784.0420329998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5698450.666666667,
            "unit": "ns",
            "range": "± 27666.62113105834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14499946.766666668,
            "unit": "ns",
            "range": "± 94999.64716435732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36404618.8,
            "unit": "ns",
            "range": "± 461367.7168367672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75509568.6,
            "unit": "ns",
            "range": "± 485972.1576063209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152884193.86666667,
            "unit": "ns",
            "range": "± 1088568.7449746549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3803222.109933036,
            "unit": "ns",
            "range": "± 4113.107972688974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227209.6577845982,
            "unit": "ns",
            "range": "± 2012.4490746068902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768627.5033052885,
            "unit": "ns",
            "range": "± 1291.9144687274152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924790.6553385416,
            "unit": "ns",
            "range": "± 10661.456346224973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629154.0784505209,
            "unit": "ns",
            "range": "± 2248.200016885975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561745.2130208333,
            "unit": "ns",
            "range": "± 3771.485440285366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2359714.103448276,
            "unit": "ns",
            "range": "± 64259.268951393205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2570895.159090909,
            "unit": "ns",
            "range": "± 88460.13901764237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3029304.7333333334,
            "unit": "ns",
            "range": "± 38210.53944447913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2526026.6315789474,
            "unit": "ns",
            "range": "± 53809.55645732924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3296011.9,
            "unit": "ns",
            "range": "± 52686.543169146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202983.09433962265,
            "unit": "ns",
            "range": "± 8276.136387841832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192649.80357142858,
            "unit": "ns",
            "range": "± 6702.516458003307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165587.3076923077,
            "unit": "ns",
            "range": "± 2426.2243776636224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101429.5,
            "unit": "ns",
            "range": "± 31449.69409659227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862196.066666667,
            "unit": "ns",
            "range": "± 32278.268803078794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12235.729411764705,
            "unit": "ns",
            "range": "± 674.7400449738526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63502.393939393936,
            "unit": "ns",
            "range": "± 5049.553871621914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53285.192307692305,
            "unit": "ns",
            "range": "± 553.6345642833644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58104.18556701031,
            "unit": "ns",
            "range": "± 8505.400282479724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2935.036082474227,
            "unit": "ns",
            "range": "± 337.16245657248544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12074.651685393259,
            "unit": "ns",
            "range": "± 718.3787159785504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37815.6,
            "unit": "ns",
            "range": "± 564.5155698219745"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63237131495a8896f81cbf3e1e025b5adc7ccd3b",
          "message": "Merge pull request #3835 from greymistcube/chore/cleanup\n\n🧹 Minor cleanup for #3832",
          "timestamp": "2024-06-20T08:28:03+09:00",
          "tree_id": "852c0e9c90d2f2985d81b58d98ccb2bda333c59f",
          "url": "https://github.com/planetarium/libplanet/commit/63237131495a8896f81cbf3e1e025b5adc7ccd3b"
        },
        "date": 1718840420446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1259745.994949495,
            "unit": "ns",
            "range": "± 130626.78774289765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2584220.1224489794,
            "unit": "ns",
            "range": "± 229005.14174461103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2004472.7191011235,
            "unit": "ns",
            "range": "± 165454.98078198775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11537905.197916666,
            "unit": "ns",
            "range": "± 773337.4284227674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5947831.815789473,
            "unit": "ns",
            "range": "± 203333.32823939883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 16534768.133333333,
            "unit": "ns",
            "range": "± 252104.27118806748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 42411603.5,
            "unit": "ns",
            "range": "± 484255.005925875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87809768.73333333,
            "unit": "ns",
            "range": "± 1167866.2683568003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176999016.4,
            "unit": "ns",
            "range": "± 1559062.2292295638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4332283.414375,
            "unit": "ns",
            "range": "± 396500.62096110126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1272160.4290364583,
            "unit": "ns",
            "range": "± 5619.082528885488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 818392.0267578125,
            "unit": "ns",
            "range": "± 3581.5216068541263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2008482.04609375,
            "unit": "ns",
            "range": "± 6131.0926604063725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648709.3358677456,
            "unit": "ns",
            "range": "± 2052.425216706012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586497.5123948317,
            "unit": "ns",
            "range": "± 637.0913703854412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2607316.32,
            "unit": "ns",
            "range": "± 167995.02380715706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2649369.569892473,
            "unit": "ns",
            "range": "± 149510.53619433427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3455908.862745098,
            "unit": "ns",
            "range": "± 140684.44716940387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2836317.911764706,
            "unit": "ns",
            "range": "± 135903.30768735998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4274719.33,
            "unit": "ns",
            "range": "± 348090.34384446614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241935.59473684212,
            "unit": "ns",
            "range": "± 19227.022843568364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234910.8510638298,
            "unit": "ns",
            "range": "± 19036.86280951032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174966.07407407407,
            "unit": "ns",
            "range": "± 4872.186556409333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3489437.9565217393,
            "unit": "ns",
            "range": "± 84413.86516254212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3050482.5789473685,
            "unit": "ns",
            "range": "± 104779.60946121602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16374.489130434782,
            "unit": "ns",
            "range": "± 1711.469726946457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75056.52105263158,
            "unit": "ns",
            "range": "± 5700.3790896316295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63321.032608695656,
            "unit": "ns",
            "range": "± 7633.1750619514505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95696,
            "unit": "ns",
            "range": "± 21083.136573300024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4777.276595744681,
            "unit": "ns",
            "range": "± 1993.097375563625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15278.483870967742,
            "unit": "ns",
            "range": "± 1657.190653229154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41157.88144329897,
            "unit": "ns",
            "range": "± 7027.861495272611"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd7f7701b050789a1a718f8e68e3f06f7742cd90",
          "message": "Merge pull request #3836 from riemannulus/ci/ai-code-reviewer\n\n✨  ci: introduce ai-code-reviewer",
          "timestamp": "2024-06-20T15:48:02+09:00",
          "tree_id": "23ebb1f68e6571dff33a06d91ecc9581b051906e",
          "url": "https://github.com/planetarium/libplanet/commit/dd7f7701b050789a1a718f8e68e3f06f7742cd90"
        },
        "date": 1718866572462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020639.0263157894,
            "unit": "ns",
            "range": "± 87182.55371722151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888099.25,
            "unit": "ns",
            "range": "± 57772.69956894754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694133.448979592,
            "unit": "ns",
            "range": "± 157877.17076403456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8185650.777777778,
            "unit": "ns",
            "range": "± 198166.93980354688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5689936.9375,
            "unit": "ns",
            "range": "± 103414.60137554319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14561531.066666666,
            "unit": "ns",
            "range": "± 60823.059768792424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37013924.2,
            "unit": "ns",
            "range": "± 149324.92786499416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74173440.14285715,
            "unit": "ns",
            "range": "± 247957.83238962758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150167175.85714287,
            "unit": "ns",
            "range": "± 619089.6742176069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3737009.854073661,
            "unit": "ns",
            "range": "± 14202.331519351272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1180148.2013020834,
            "unit": "ns",
            "range": "± 2992.951458277598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763404.5302734375,
            "unit": "ns",
            "range": "± 1633.1608924357297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958451.9783854166,
            "unit": "ns",
            "range": "± 3037.95410664134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624372.90078125,
            "unit": "ns",
            "range": "± 1922.66951581704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571670.9468098958,
            "unit": "ns",
            "range": "± 1496.436134704423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2355164.606060606,
            "unit": "ns",
            "range": "± 71254.07163802088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554737.203703704,
            "unit": "ns",
            "range": "± 60765.6976482461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3050028.0384615385,
            "unit": "ns",
            "range": "± 44965.69216379562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2601138.947368421,
            "unit": "ns",
            "range": "± 43435.56280473113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3251968.5,
            "unit": "ns",
            "range": "± 43912.70101138604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202195.17857142858,
            "unit": "ns",
            "range": "± 5737.819220869167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190103.88135593222,
            "unit": "ns",
            "range": "± 8207.1472680088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168384.05,
            "unit": "ns",
            "range": "± 3868.1944853272034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3099980.6666666665,
            "unit": "ns",
            "range": "± 46142.45721314228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2769359.433333333,
            "unit": "ns",
            "range": "± 21439.05611750489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12544.272151898735,
            "unit": "ns",
            "range": "± 661.6029669531473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61585.56989247312,
            "unit": "ns",
            "range": "± 3495.986066028624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53540.97297297297,
            "unit": "ns",
            "range": "± 1807.991127167364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58826.54081632653,
            "unit": "ns",
            "range": "± 9130.519577551368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3504.546391752577,
            "unit": "ns",
            "range": "± 253.30424808166944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12074.98,
            "unit": "ns",
            "range": "± 582.5460742710817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37666.78571428572,
            "unit": "ns",
            "range": "± 612.5748216241932"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73ac2c3ff242444d60953077f7a945db959d93c7",
          "message": "Merge pull request #3838 from riemannulus/fix/ci/ai-code-reviewer\n\nfix: use pull_request_target",
          "timestamp": "2024-06-20T16:02:26+09:00",
          "tree_id": "9054b518b79572df702a71529398fc55fe354619",
          "url": "https://github.com/planetarium/libplanet/commit/73ac2c3ff242444d60953077f7a945db959d93c7"
        },
        "date": 1718867520953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002390.4782608695,
            "unit": "ns",
            "range": "± 75188.15710572754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1884716.1744186047,
            "unit": "ns",
            "range": "± 68721.87506128664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1667712.6842105263,
            "unit": "ns",
            "range": "± 83732.7111616817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8025344.476190476,
            "unit": "ns",
            "range": "± 181389.30425761576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5661815.5,
            "unit": "ns",
            "range": "± 19874.177977195202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14797422.966666667,
            "unit": "ns",
            "range": "± 95858.64346367122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37091779.5,
            "unit": "ns",
            "range": "± 166237.16425887845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76078352.3,
            "unit": "ns",
            "range": "± 275519.2639537207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150918900.2,
            "unit": "ns",
            "range": "± 641123.8473937999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759775.536551339,
            "unit": "ns",
            "range": "± 6158.134100849862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204022.4462139423,
            "unit": "ns",
            "range": "± 2246.0449100550272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773437.3177734375,
            "unit": "ns",
            "range": "± 1552.7141304827253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968738.4705528845,
            "unit": "ns",
            "range": "± 1665.6339515382438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619264.8545572917,
            "unit": "ns",
            "range": "± 502.2265644471064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563279.6319986979,
            "unit": "ns",
            "range": "± 730.307999516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2384656,
            "unit": "ns",
            "range": "± 25841.330049250286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532950.2666666666,
            "unit": "ns",
            "range": "± 34914.08036567701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3042717,
            "unit": "ns",
            "range": "± 70219.48040964131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2497104.1428571427,
            "unit": "ns",
            "range": "± 70328.83890364174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3299238.2,
            "unit": "ns",
            "range": "± 57962.821408209595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202450.45614035087,
            "unit": "ns",
            "range": "± 8395.213983212985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191387.125,
            "unit": "ns",
            "range": "± 3266.4847338793224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168585.53333333333,
            "unit": "ns",
            "range": "± 3010.18394944957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3127993.5714285714,
            "unit": "ns",
            "range": "± 28030.818840681783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2799478.3333333335,
            "unit": "ns",
            "range": "± 46232.86957298218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12516.972602739726,
            "unit": "ns",
            "range": "± 579.1488719713021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61472.8064516129,
            "unit": "ns",
            "range": "± 3630.243587641207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52576.1,
            "unit": "ns",
            "range": "± 862.474615949881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56717.43877551021,
            "unit": "ns",
            "range": "± 8434.378203930302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2855.127659574468,
            "unit": "ns",
            "range": "± 206.14114509199726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11872.57142857143,
            "unit": "ns",
            "range": "± 616.7459476233098"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37401.19696969697,
            "unit": "ns",
            "range": "± 5206.617270073875"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48364a0b1d7bbae24b43df4169be269aec4f48ec",
          "message": "Merge pull request #3839 from riemannulus/ci/remove-ai-code-reviewer\n\nremove: ai code reviewer",
          "timestamp": "2024-06-20T16:25:40+09:00",
          "tree_id": "852c0e9c90d2f2985d81b58d98ccb2bda333c59f",
          "url": "https://github.com/planetarium/libplanet/commit/48364a0b1d7bbae24b43df4169be269aec4f48ec"
        },
        "date": 1718868835576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040235.2446808511,
            "unit": "ns",
            "range": "± 86802.04904817048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1949344.322580645,
            "unit": "ns",
            "range": "± 83268.90409671552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1733294.1935483871,
            "unit": "ns",
            "range": "± 101780.83643163384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8556752.34883721,
            "unit": "ns",
            "range": "± 313322.74045561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5803230.714285715,
            "unit": "ns",
            "range": "± 18476.38530323576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14776270.733333332,
            "unit": "ns",
            "range": "± 114660.03896392815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37881294.96666667,
            "unit": "ns",
            "range": "± 126551.7479660659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76611656.63333334,
            "unit": "ns",
            "range": "± 254199.28792157955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 158077151.9,
            "unit": "ns",
            "range": "± 334336.4272183249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722795.932198661,
            "unit": "ns",
            "range": "± 12558.72096791027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221415.0396205357,
            "unit": "ns",
            "range": "± 1726.7418178699959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773513.2027994791,
            "unit": "ns",
            "range": "± 2099.869741377119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937767.333984375,
            "unit": "ns",
            "range": "± 2391.7888117750263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 660261.8518415178,
            "unit": "ns",
            "range": "± 1095.2595181852175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583035.6120605469,
            "unit": "ns",
            "range": "± 605.5706863595352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415355.1794871795,
            "unit": "ns",
            "range": "± 75140.37374137323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523117.804347826,
            "unit": "ns",
            "range": "± 63244.83302318407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3077918.4838709678,
            "unit": "ns",
            "range": "± 91847.42668137958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2605615.340909091,
            "unit": "ns",
            "range": "± 96645.19262263968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3341638.214285714,
            "unit": "ns",
            "range": "± 57987.86094643307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203975.39215686274,
            "unit": "ns",
            "range": "± 7469.181741204136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202396.34246575343,
            "unit": "ns",
            "range": "± 9907.929826685933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170725.63043478262,
            "unit": "ns",
            "range": "± 4172.1088443958615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3194063.285714286,
            "unit": "ns",
            "range": "± 15476.364406999526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2917102.8333333335,
            "unit": "ns",
            "range": "± 52538.882288218105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13323.563829787234,
            "unit": "ns",
            "range": "± 996.6627384233441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64885.87640449438,
            "unit": "ns",
            "range": "± 8177.634216708268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55636.311111111114,
            "unit": "ns",
            "range": "± 3956.153031243449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60363.44329896907,
            "unit": "ns",
            "range": "± 10210.328861387818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3168.217391304348,
            "unit": "ns",
            "range": "± 295.58456985434316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12576.677777777777,
            "unit": "ns",
            "range": "± 880.1969114189227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38150.71428571428,
            "unit": "ns",
            "range": "± 533.7251062213478"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a9ce89fd322af22e7351d2d32af855852356745",
          "message": "Merge pull request #3834 from greymistcube/refactor/stricter-swap-condition\n\n♻️ Stricter `Swap()` condition",
          "timestamp": "2024-06-20T16:49:28+09:00",
          "tree_id": "b95c422526855a76841da82a16f5ed3e4117e303",
          "url": "https://github.com/planetarium/libplanet/commit/1a9ce89fd322af22e7351d2d32af855852356745"
        },
        "date": 1718870221097,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020273.7340425532,
            "unit": "ns",
            "range": "± 81953.1861788751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1921042.35,
            "unit": "ns",
            "range": "± 67329.0951073674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714985.752631579,
            "unit": "ns",
            "range": "± 170751.0106766742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8154832.038461538,
            "unit": "ns",
            "range": "± 198771.65562045926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5671122.533333333,
            "unit": "ns",
            "range": "± 21388.080234649613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15005600.214285715,
            "unit": "ns",
            "range": "± 97418.75104072707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37453537.28571428,
            "unit": "ns",
            "range": "± 186966.06046478002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76427845.63333334,
            "unit": "ns",
            "range": "± 347176.7179253378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151701986.5,
            "unit": "ns",
            "range": "± 935203.2920862304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3720484.895926339,
            "unit": "ns",
            "range": "± 3681.839535578636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1182590.4453125,
            "unit": "ns",
            "range": "± 2033.8200116285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760552.821875,
            "unit": "ns",
            "range": "± 1518.7886169496765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957376.55078125,
            "unit": "ns",
            "range": "± 2267.1298014996396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615635.2752604167,
            "unit": "ns",
            "range": "± 833.6051192198343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583873.483984375,
            "unit": "ns",
            "range": "± 637.2251491412852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2458703.010638298,
            "unit": "ns",
            "range": "± 95498.3412890034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2471667.3333333335,
            "unit": "ns",
            "range": "± 82231.14377371466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2988808.433333333,
            "unit": "ns",
            "range": "± 36787.84910705992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2552831.586956522,
            "unit": "ns",
            "range": "± 98331.84559475149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3221758.033333333,
            "unit": "ns",
            "range": "± 40309.4207100642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202852.6,
            "unit": "ns",
            "range": "± 7352.112301298797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192198.6779661017,
            "unit": "ns",
            "range": "± 7112.160267483306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166042.83333333334,
            "unit": "ns",
            "range": "± 3551.7233762184333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145085.1333333333,
            "unit": "ns",
            "range": "± 42085.73843420573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2797217.933333333,
            "unit": "ns",
            "range": "± 17381.47425305241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12254.04347826087,
            "unit": "ns",
            "range": "± 601.8916121593021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61189.358024691355,
            "unit": "ns",
            "range": "± 3199.7865331481175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52216.89473684211,
            "unit": "ns",
            "range": "± 1055.6737129928422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74980.5947368421,
            "unit": "ns",
            "range": "± 15598.530776472071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2846.826530612245,
            "unit": "ns",
            "range": "± 301.9579671544459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11608.401098901099,
            "unit": "ns",
            "range": "± 620.9862058755153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37462.3,
            "unit": "ns",
            "range": "± 594.560606066122"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc268b022eb3569d2056d29174a51efaeb408d18",
          "message": "Merge pull request #3840 from greymistcube/chore/fix-evaluate-block\n\n🔧 Fixed `BlockChain.EvaluateBlock()`",
          "timestamp": "2024-06-20T17:27:18+09:00",
          "tree_id": "dc0f79a0fa4f9492af20b5b347ba2b6ac1d8daf1",
          "url": "https://github.com/planetarium/libplanet/commit/cc268b022eb3569d2056d29174a51efaeb408d18"
        },
        "date": 1718872502867,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995963.7956989247,
            "unit": "ns",
            "range": "± 66004.34464760621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1883096.5857142857,
            "unit": "ns",
            "range": "± 56530.42022422733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1669932.043956044,
            "unit": "ns",
            "range": "± 93272.02982851493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8277096,
            "unit": "ns",
            "range": "± 182759.58453576165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5828424.8,
            "unit": "ns",
            "range": "± 23982.57874612915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14902173.066666666,
            "unit": "ns",
            "range": "± 102953.94034259528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36938019.2,
            "unit": "ns",
            "range": "± 225622.98622423835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79363449.64285715,
            "unit": "ns",
            "range": "± 172939.76967256865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150150077.5,
            "unit": "ns",
            "range": "± 802801.4751400489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3741970.688895089,
            "unit": "ns",
            "range": "± 6794.351103149342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1185570.0553385417,
            "unit": "ns",
            "range": "± 3402.0434149278094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757899.3373697917,
            "unit": "ns",
            "range": "± 1618.6744784596383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2034081.1420200893,
            "unit": "ns",
            "range": "± 3524.7804000316373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624752.1075520833,
            "unit": "ns",
            "range": "± 1163.0553862760844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570063.9825721154,
            "unit": "ns",
            "range": "± 532.0103581271122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2406771.8205128205,
            "unit": "ns",
            "range": "± 82596.29910623045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2466571.484848485,
            "unit": "ns",
            "range": "± 78032.28351262749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3066464.3529411764,
            "unit": "ns",
            "range": "± 61157.90622329746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2571370.1153846155,
            "unit": "ns",
            "range": "± 62228.759904132385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3279856.294117647,
            "unit": "ns",
            "range": "± 63502.41244508423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204597.14583333334,
            "unit": "ns",
            "range": "± 7829.803165889805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190855.49019607843,
            "unit": "ns",
            "range": "± 7782.387675700947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172763.95833333334,
            "unit": "ns",
            "range": "± 4428.578322070204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3067034.7333333334,
            "unit": "ns",
            "range": "± 49751.0712382395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2809048.066666667,
            "unit": "ns",
            "range": "± 38958.527998128375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13010.288888888888,
            "unit": "ns",
            "range": "± 986.291433608742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59775.58241758242,
            "unit": "ns",
            "range": "± 3763.624706954525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61686.529411764706,
            "unit": "ns",
            "range": "± 1257.279310537592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59111.5,
            "unit": "ns",
            "range": "± 11316.975398419008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2829.7978723404253,
            "unit": "ns",
            "range": "± 299.21706364814844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11605.15625,
            "unit": "ns",
            "range": "± 972.2196993221235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37874,
            "unit": "ns",
            "range": "± 418.7734379204253"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87c5fdffc0d7e81e9694b3ce45b27d66677b6767",
          "message": "Merge pull request #3842 from greymistcube/refactor/memory-next-state-root-hash\n\n♻️ In memory \"next state root hash\"",
          "timestamp": "2024-06-21T11:37:54+09:00",
          "tree_id": "0de704360b7bbd2e99d6a58d4c5b53a179e63aba",
          "url": "https://github.com/planetarium/libplanet/commit/87c5fdffc0d7e81e9694b3ce45b27d66677b6767"
        },
        "date": 1718937980550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3802417.916766827,
            "unit": "ns",
            "range": "± 8987.962865921307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216587.4900841345,
            "unit": "ns",
            "range": "± 2351.679576647896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772723.3802083334,
            "unit": "ns",
            "range": "± 2058.58397203759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913390.6202566964,
            "unit": "ns",
            "range": "± 1666.7229043273237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609052.4315104167,
            "unit": "ns",
            "range": "± 777.5127837093333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570105.7821568081,
            "unit": "ns",
            "range": "± 759.1371528469647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417701.6097560977,
            "unit": "ns",
            "range": "± 86801.40608736647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2503574.8928571427,
            "unit": "ns",
            "range": "± 71532.30310863152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3091360.2,
            "unit": "ns",
            "range": "± 70286.6089534018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2599805.445945946,
            "unit": "ns",
            "range": "± 127745.93422392596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3308108.3333333335,
            "unit": "ns",
            "range": "± 61153.32283655878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004907.1304347826,
            "unit": "ns",
            "range": "± 70442.4097975977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927384.5555555555,
            "unit": "ns",
            "range": "± 63398.681021405864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699075.8064516129,
            "unit": "ns",
            "range": "± 143797.1058556539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8430835.305555556,
            "unit": "ns",
            "range": "± 269384.14159431134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230907.98,
            "unit": "ns",
            "range": "± 17598.98381075774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208709.78048780488,
            "unit": "ns",
            "range": "± 7460.73653707258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171770.83333333334,
            "unit": "ns",
            "range": "± 3020.9619013691336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3192304.4166666665,
            "unit": "ns",
            "range": "± 17256.047427224057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2874027.2,
            "unit": "ns",
            "range": "± 33438.177212795046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14711.51724137931,
            "unit": "ns",
            "range": "± 1303.5843775338983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71572.47422680413,
            "unit": "ns",
            "range": "± 9216.748643878327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91753.31578947368,
            "unit": "ns",
            "range": "± 1039.1927985290408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78559.40322580645,
            "unit": "ns",
            "range": "± 12051.718416226428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5863.622448979592,
            "unit": "ns",
            "range": "± 1585.1198498725325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18737.5,
            "unit": "ns",
            "range": "± 5643.857925464486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5769118.785714285,
            "unit": "ns",
            "range": "± 13439.723952227883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15589763.966666667,
            "unit": "ns",
            "range": "± 55774.04483765169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38129542.35714286,
            "unit": "ns",
            "range": "± 177784.82231732015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78149792.16666667,
            "unit": "ns",
            "range": "± 379168.71232995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151016588.66666666,
            "unit": "ns",
            "range": "± 987658.4910684075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44359.17647058824,
            "unit": "ns",
            "range": "± 860.2326891090369"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fbd71c5c052827918df99703928dc77ce985e75",
          "message": "Merge pull request #3827 from moreal/buffer\n\nUse `buffer` dependency for browser environment",
          "timestamp": "2024-06-24T16:41:25+09:00",
          "tree_id": "d6d039b18067bc4e4226835f5c0bbcd1cfed101f",
          "url": "https://github.com/planetarium/libplanet/commit/2fbd71c5c052827918df99703928dc77ce985e75"
        },
        "date": 1719215354421,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3708446.9001116073,
            "unit": "ns",
            "range": "± 12648.40366228541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1187613.1588541667,
            "unit": "ns",
            "range": "± 3381.8315261710336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759155.7106770833,
            "unit": "ns",
            "range": "± 1680.9397879782018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930816.119921875,
            "unit": "ns",
            "range": "± 7517.455677689862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640515.2490234375,
            "unit": "ns",
            "range": "± 2398.7923450041612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576943.8346121652,
            "unit": "ns",
            "range": "± 1150.4090962675568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2346219.0857142857,
            "unit": "ns",
            "range": "± 62403.45862792968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502205.1836734693,
            "unit": "ns",
            "range": "± 84914.13937341685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3075145.15,
            "unit": "ns",
            "range": "± 69831.31670583802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2505254.106060606,
            "unit": "ns",
            "range": "± 93989.94142568641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3291342.9,
            "unit": "ns",
            "range": "± 45411.91203197681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046411.4583333334,
            "unit": "ns",
            "range": "± 101010.68474071304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1905870.9857142856,
            "unit": "ns",
            "range": "± 62577.17052115422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1674638.7865168538,
            "unit": "ns",
            "range": "± 93731.95183394846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8432405.789473685,
            "unit": "ns",
            "range": "± 207876.073255575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201845.63636363635,
            "unit": "ns",
            "range": "± 6727.149183997871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199235.44736842104,
            "unit": "ns",
            "range": "± 6793.927895842861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172407.46666666667,
            "unit": "ns",
            "range": "± 3074.4851105897546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3186395.4285714286,
            "unit": "ns",
            "range": "± 30088.31550226327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2883333.1333333333,
            "unit": "ns",
            "range": "± 36356.580663648514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14667.9898989899,
            "unit": "ns",
            "range": "± 2012.0693606687184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60975.366197183095,
            "unit": "ns",
            "range": "± 2983.699014116713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52646.3125,
            "unit": "ns",
            "range": "± 937.7528259088319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60660.18556701031,
            "unit": "ns",
            "range": "± 10367.642654683184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2953.569892473118,
            "unit": "ns",
            "range": "± 325.56640936953386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12224.684782608696,
            "unit": "ns",
            "range": "± 780.0059865837861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5737645.115384615,
            "unit": "ns",
            "range": "± 19693.847933379522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14877088.357142856,
            "unit": "ns",
            "range": "± 72412.0340602807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37615276.5,
            "unit": "ns",
            "range": "± 97569.75390018597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76778543.64285715,
            "unit": "ns",
            "range": "± 423937.20835385827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 160459181.03333333,
            "unit": "ns",
            "range": "± 562427.3771896329"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32107.3,
            "unit": "ns",
            "range": "± 418.0637682049405"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d99e816bb653f6fc6484a6a06ea9cc0d5fb4819e",
          "message": "Merge pull request #3845 from greymistcube/fix/new-context-lock\n\nRemove a possible `ConsensusContext` lock due to a future `ConsensusMsg`.",
          "timestamp": "2024-06-25T11:40:07+09:00",
          "tree_id": "429c009bf2e299cfcf46c753881e0bc72afadfe2",
          "url": "https://github.com/planetarium/libplanet/commit/d99e816bb653f6fc6484a6a06ea9cc0d5fb4819e"
        },
        "date": 1719283728491,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739326.312199519,
            "unit": "ns",
            "range": "± 10371.617003459374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216545.0692708334,
            "unit": "ns",
            "range": "± 2940.0862505268615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770685.9631510417,
            "unit": "ns",
            "range": "± 2834.456459391388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932639.0608473558,
            "unit": "ns",
            "range": "± 8816.59620560751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618639.2254356971,
            "unit": "ns",
            "range": "± 1349.842514379814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565820.9977864583,
            "unit": "ns",
            "range": "± 1076.3653353435611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2376260.3076923075,
            "unit": "ns",
            "range": "± 97803.67303180035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2525573,
            "unit": "ns",
            "range": "± 71769.27641794611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3062316.15,
            "unit": "ns",
            "range": "± 69872.20825815549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2554455.4285714286,
            "unit": "ns",
            "range": "± 45291.35363011743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3277911.6428571427,
            "unit": "ns",
            "range": "± 55598.368268609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044790.3924731183,
            "unit": "ns",
            "range": "± 90031.34254240748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984662.9803921569,
            "unit": "ns",
            "range": "± 77133.38158631195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1742089.1648351648,
            "unit": "ns",
            "range": "± 131165.2307982623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8474437.396551725,
            "unit": "ns",
            "range": "± 247726.97724184536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201950.93181818182,
            "unit": "ns",
            "range": "± 6714.298233075813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195820.0625,
            "unit": "ns",
            "range": "± 6043.672670719887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172477.35714285713,
            "unit": "ns",
            "range": "± 2809.5856416955826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3214872.433333333,
            "unit": "ns",
            "range": "± 17919.391951843943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2905967.6428571427,
            "unit": "ns",
            "range": "± 36602.690108383154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12357.155555555555,
            "unit": "ns",
            "range": "± 720.595102240699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61551.125,
            "unit": "ns",
            "range": "± 4284.978703502934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52263.21428571428,
            "unit": "ns",
            "range": "± 914.0214758099278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59064.24742268041,
            "unit": "ns",
            "range": "± 9733.766424829822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3069.5157894736844,
            "unit": "ns",
            "range": "± 288.452579647829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11804.857894736842,
            "unit": "ns",
            "range": "± 904.5601366197154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5683895.4,
            "unit": "ns",
            "range": "± 30085.872892201653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14708146.833333334,
            "unit": "ns",
            "range": "± 115728.20400321402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37740986.307692304,
            "unit": "ns",
            "range": "± 93951.44967515989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74334552.33333333,
            "unit": "ns",
            "range": "± 179208.94459487655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153804440.23333332,
            "unit": "ns",
            "range": "± 1471604.7249322017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32283.691489361703,
            "unit": "ns",
            "range": "± 1266.3909973570026"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56333a073ef06d27586c7fdb14e590298d06fac8",
          "message": "Merge pull request #3871 from planetarium/fix/push-docker-image-error\n\nFix CI errors",
          "timestamp": "2024-07-10T17:53:34+09:00",
          "tree_id": "62a14c74340e3f859883535723f4b7cf84f757c7",
          "url": "https://github.com/planetarium/libplanet/commit/56333a073ef06d27586c7fdb14e590298d06fac8"
        },
        "date": 1720602174333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3790754.7374441964,
            "unit": "ns",
            "range": "± 5167.657306945558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208911.488671875,
            "unit": "ns",
            "range": "± 1138.6791391409818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757109.5884486607,
            "unit": "ns",
            "range": "± 1216.2357595240937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925462.2208426339,
            "unit": "ns",
            "range": "± 1407.7153291770605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619451.1925330529,
            "unit": "ns",
            "range": "± 415.0357944766111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575117.3654436384,
            "unit": "ns",
            "range": "± 603.2312224220049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2430108.6,
            "unit": "ns",
            "range": "± 37832.85289797744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2577142.933333333,
            "unit": "ns",
            "range": "± 41749.927229135326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3102102.8846153845,
            "unit": "ns",
            "range": "± 82122.83323184944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2555291.5555555555,
            "unit": "ns",
            "range": "± 52872.53982425395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3361367.6428571427,
            "unit": "ns",
            "range": "± 50919.116562230556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030893.8888888889,
            "unit": "ns",
            "range": "± 79114.22173386358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1963655.4347826086,
            "unit": "ns",
            "range": "± 75572.00466594085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1675303.9518072288,
            "unit": "ns",
            "range": "± 87573.18556330452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8233123.775,
            "unit": "ns",
            "range": "± 285926.1487144743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205229.73188405798,
            "unit": "ns",
            "range": "± 9811.808118949642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194183.11428571428,
            "unit": "ns",
            "range": "± 9417.583628884819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174637.125,
            "unit": "ns",
            "range": "± 8047.872305820567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3161596.533333333,
            "unit": "ns",
            "range": "± 35929.32013961909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2858248.966666667,
            "unit": "ns",
            "range": "± 49188.69374135638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13826.865979381444,
            "unit": "ns",
            "range": "± 1714.6943582656475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61255.38043478261,
            "unit": "ns",
            "range": "± 4858.010355271044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50901.470588235294,
            "unit": "ns",
            "range": "± 1024.3025747824138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54261.61728395062,
            "unit": "ns",
            "range": "± 4035.021061183885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2782.8229166666665,
            "unit": "ns",
            "range": "± 385.9865826626801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12555.865168539325,
            "unit": "ns",
            "range": "± 987.8904888587236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10643182.566666666,
            "unit": "ns",
            "range": "± 126099.78526007924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26949343.42857143,
            "unit": "ns",
            "range": "± 113672.9222622888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69234788,
            "unit": "ns",
            "range": "± 710680.9482659169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138126005.8,
            "unit": "ns",
            "range": "± 860210.3852924752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291297011,
            "unit": "ns",
            "range": "± 970023.4074737974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32484.108108108107,
            "unit": "ns",
            "range": "± 645.9213395428866"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6440b8628f44e022e4a48797f73f0cf8aed763b6",
          "message": "Merge pull request #3872 from planetarium/release/5.1.0\n\n🚀 Release 5.1.0",
          "timestamp": "2024-07-11T11:48:31+09:00",
          "tree_id": "c283794015c8a338ecd8399ae7406c3a8089667a",
          "url": "https://github.com/planetarium/libplanet/commit/6440b8628f44e022e4a48797f73f0cf8aed763b6"
        },
        "date": 1720666631964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3767589.290564904,
            "unit": "ns",
            "range": "± 8319.351770503183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215730.8311197916,
            "unit": "ns",
            "range": "± 1364.7367388103908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762953.9620643029,
            "unit": "ns",
            "range": "± 774.7604816785567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930975.607421875,
            "unit": "ns",
            "range": "± 1825.0770339886137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615702.7637369792,
            "unit": "ns",
            "range": "± 1194.8363425440534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577347.5920758928,
            "unit": "ns",
            "range": "± 1030.558516313072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2438018.3,
            "unit": "ns",
            "range": "± 43172.49839919589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2565209.888888889,
            "unit": "ns",
            "range": "± 51482.6379344805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3017779.3666666667,
            "unit": "ns",
            "range": "± 41922.201267631564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2530276.970588235,
            "unit": "ns",
            "range": "± 49822.76223915838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3195270.3076923075,
            "unit": "ns",
            "range": "± 23731.430580507276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008707.5795454546,
            "unit": "ns",
            "range": "± 59829.390438341296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1908605.0294117648,
            "unit": "ns",
            "range": "± 60873.166628846826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1657514.844155844,
            "unit": "ns",
            "range": "± 84966.22162320012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8272363.555555556,
            "unit": "ns",
            "range": "± 118773.08812393797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200860.06976744186,
            "unit": "ns",
            "range": "± 7392.515286214928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195449.32222222222,
            "unit": "ns",
            "range": "± 6403.059003635716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169114.375,
            "unit": "ns",
            "range": "± 3077.9747860132534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3071604.25,
            "unit": "ns",
            "range": "± 17843.524907193543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2824708.2,
            "unit": "ns",
            "range": "± 44329.342409482495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12445.463414634147,
            "unit": "ns",
            "range": "± 674.0389810891522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62557.91935483871,
            "unit": "ns",
            "range": "± 6549.0785417601355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50771.5,
            "unit": "ns",
            "range": "± 659.8523939626057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59208.46875,
            "unit": "ns",
            "range": "± 11376.857236886066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2992.714285714286,
            "unit": "ns",
            "range": "± 351.7619567645201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11819.144444444444,
            "unit": "ns",
            "range": "± 827.5337198888384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10350466.9,
            "unit": "ns",
            "range": "± 61509.93873095399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27821944.133333333,
            "unit": "ns",
            "range": "± 95385.26343868149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68998537.57142857,
            "unit": "ns",
            "range": "± 182357.8417679474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137504256.36666667,
            "unit": "ns",
            "range": "± 781588.5150329485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287643817.71428573,
            "unit": "ns",
            "range": "± 1438842.687158218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31701.81818181818,
            "unit": "ns",
            "range": "± 621.1133349814467"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720673218052,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3757092.971153846,
            "unit": "ns",
            "range": "± 2968.7387691778636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201862.275669643,
            "unit": "ns",
            "range": "± 1692.4834893590364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769424.6078125,
            "unit": "ns",
            "range": "± 1597.6848405864002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931180.9251802885,
            "unit": "ns",
            "range": "± 927.2710279682259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611087.9382672991,
            "unit": "ns",
            "range": "± 264.5252169453574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561850.9780273438,
            "unit": "ns",
            "range": "± 435.3673459143122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2474618,
            "unit": "ns",
            "range": "± 63776.53369382817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532307.4736842103,
            "unit": "ns",
            "range": "± 50422.93003338904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3119730.8666666667,
            "unit": "ns",
            "range": "± 45977.57221091087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2749922.8333333335,
            "unit": "ns",
            "range": "± 24393.959257210056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3358837.8846153845,
            "unit": "ns",
            "range": "± 83428.91179684746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042158.5,
            "unit": "ns",
            "range": "± 60276.114219882125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2071878.0833333333,
            "unit": "ns",
            "range": "± 88482.02976939206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1777005.2681159421,
            "unit": "ns",
            "range": "± 84883.9479246163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8427695.954545455,
            "unit": "ns",
            "range": "± 254539.70310544028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217798.48958333334,
            "unit": "ns",
            "range": "± 19061.791892073852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199572,
            "unit": "ns",
            "range": "± 8266.135146738829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189082.84848484848,
            "unit": "ns",
            "range": "± 13886.85478367695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3174777.933333333,
            "unit": "ns",
            "range": "± 44736.43711700575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2871162.2,
            "unit": "ns",
            "range": "± 52723.98150774059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14905.197916666666,
            "unit": "ns",
            "range": "± 2134.5821315203925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64894.1797752809,
            "unit": "ns",
            "range": "± 5346.996509430229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63687.375,
            "unit": "ns",
            "range": "± 1620.582874542635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69510.61224489796,
            "unit": "ns",
            "range": "± 13980.091348817854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3255.6546391752577,
            "unit": "ns",
            "range": "± 472.5499387235478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14229.36170212766,
            "unit": "ns",
            "range": "± 2037.0350414850336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11268632.166666666,
            "unit": "ns",
            "range": "± 178964.8190006974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27555052.785714287,
            "unit": "ns",
            "range": "± 164498.4897967519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70014514.6,
            "unit": "ns",
            "range": "± 426034.966305215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142757315.46666667,
            "unit": "ns",
            "range": "± 685488.7561943217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 309404203.0714286,
            "unit": "ns",
            "range": "± 946431.1562589476"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37248.795918367345,
            "unit": "ns",
            "range": "± 5790.227686279032"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81e1e323d7d4fe2bd5cb4440280c3fd8f9bb622c",
          "message": "Merge pull request #3877 from planetarium/port/5.1.1-to-main\n\n🔀 Port 5.1.1 to main",
          "timestamp": "2024-07-15T11:03:06+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/81e1e323d7d4fe2bd5cb4440280c3fd8f9bb622c"
        },
        "date": 1721009521444,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204001.7258064516,
            "unit": "ns",
            "range": "± 8554.572120771852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193639.66666666666,
            "unit": "ns",
            "range": "± 8572.006716122132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170825.45945945947,
            "unit": "ns",
            "range": "± 5742.945569201471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3041397.5714285714,
            "unit": "ns",
            "range": "± 30537.238995929307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2884171.285714286,
            "unit": "ns",
            "range": "± 38474.78537437727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13353.46590909091,
            "unit": "ns",
            "range": "± 1047.5470960127193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64305.083333333336,
            "unit": "ns",
            "range": "± 6166.095162327385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51109.75,
            "unit": "ns",
            "range": "± 995.948894271187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61231.43877551021,
            "unit": "ns",
            "range": "± 9679.19928428342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2941.683673469388,
            "unit": "ns",
            "range": "± 460.3626673655155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12746.346153846154,
            "unit": "ns",
            "range": "± 1374.6560048331842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028092.1842105263,
            "unit": "ns",
            "range": "± 42864.40205258454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2023537.0319148935,
            "unit": "ns",
            "range": "± 78406.56884938056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1770990.1044776118,
            "unit": "ns",
            "range": "± 78404.22053674003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8481849.282051282,
            "unit": "ns",
            "range": "± 295327.44934777135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3695744.100167411,
            "unit": "ns",
            "range": "± 4559.809114836351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224805.1360212055,
            "unit": "ns",
            "range": "± 1648.7992305645698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760456.4257114956,
            "unit": "ns",
            "range": "± 577.4377647265918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939054.8955829327,
            "unit": "ns",
            "range": "± 1512.0504054939975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631778.6849190848,
            "unit": "ns",
            "range": "± 750.8484879290259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566763.2566964285,
            "unit": "ns",
            "range": "± 777.5422281741171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436898.111111111,
            "unit": "ns",
            "range": "± 49317.617348449676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2614550.6333333333,
            "unit": "ns",
            "range": "± 36161.67724631515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3053807.1333333333,
            "unit": "ns",
            "range": "± 47884.8215525944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2605935.6052631577,
            "unit": "ns",
            "range": "± 56501.004872966376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3296296.1470588236,
            "unit": "ns",
            "range": "± 65079.93946192365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32409.864864864863,
            "unit": "ns",
            "range": "± 865.9987863143331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10633231.1,
            "unit": "ns",
            "range": "± 124601.41384361805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27505999.214285713,
            "unit": "ns",
            "range": "± 130019.35406533112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69543253.06666666,
            "unit": "ns",
            "range": "± 341102.41775255435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140433157,
            "unit": "ns",
            "range": "± 568135.410142562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286218447.35714287,
            "unit": "ns",
            "range": "± 949932.7415596414"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "218465d785f99970cc04554c20be9ee61990f213",
          "message": "Merge pull request #3873 from planetarium/prepare/5.2.0\n\n🔧Prepare 5.2.0",
          "timestamp": "2024-07-15T12:22:31+09:00",
          "tree_id": "c9f25753ab85f923ab6000af2d4468c0f2a1c832",
          "url": "https://github.com/planetarium/libplanet/commit/218465d785f99970cc04554c20be9ee61990f213"
        },
        "date": 1721014269389,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201756.63043478262,
            "unit": "ns",
            "range": "± 7754.012012023756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197259.2837837838,
            "unit": "ns",
            "range": "± 9752.379633064162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166486.1,
            "unit": "ns",
            "range": "± 4753.871100264608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3053828.7333333334,
            "unit": "ns",
            "range": "± 53047.16832009935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2796576.423076923,
            "unit": "ns",
            "range": "± 25284.463333773234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13633.770833333334,
            "unit": "ns",
            "range": "± 1234.9199716595033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61813.166666666664,
            "unit": "ns",
            "range": "± 5242.006997458465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50798,
            "unit": "ns",
            "range": "± 480.01751861970433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62528.551020408166,
            "unit": "ns",
            "range": "± 11713.72729214274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2794.8684210526317,
            "unit": "ns",
            "range": "± 308.22280738478975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12127.40243902439,
            "unit": "ns",
            "range": "± 921.4617193572891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033292.3655913979,
            "unit": "ns",
            "range": "± 59884.36007691333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1972104.8125,
            "unit": "ns",
            "range": "± 60530.29553145268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1707502.5542168675,
            "unit": "ns",
            "range": "± 87223.4410110668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8369624.392857143,
            "unit": "ns",
            "range": "± 234056.12255094005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3782636.8191964286,
            "unit": "ns",
            "range": "± 6412.778955828395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205222.3692708334,
            "unit": "ns",
            "range": "± 2291.2843941682936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774821.4434344952,
            "unit": "ns",
            "range": "± 1405.9813595927346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956692.349330357,
            "unit": "ns",
            "range": "± 4644.8142486773795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619135.7930989583,
            "unit": "ns",
            "range": "± 523.762567623481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571037.0923549107,
            "unit": "ns",
            "range": "± 600.1070826964007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436928.9,
            "unit": "ns",
            "range": "± 33529.509433163075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2563224.85,
            "unit": "ns",
            "range": "± 57251.37663274776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3051869.6666666665,
            "unit": "ns",
            "range": "± 42516.176349490226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2634939.5,
            "unit": "ns",
            "range": "± 69558.18222598499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3317012.066666667,
            "unit": "ns",
            "range": "± 57553.521711120164"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31945.774193548386,
            "unit": "ns",
            "range": "± 437.8437856646607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10512436.692307692,
            "unit": "ns",
            "range": "± 33734.363845552245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26841385.666666668,
            "unit": "ns",
            "range": "± 139812.61890813857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69648291.93333334,
            "unit": "ns",
            "range": "± 818617.4709744705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139558936.66666666,
            "unit": "ns",
            "range": "± 675966.0441159819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286036005,
            "unit": "ns",
            "range": "± 1054843.6978596132"
          }
        ]
      }
    ]
  }
}