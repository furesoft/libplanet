window.BENCHMARK_DATA = {
  "lastUpdate": 1702003001291,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "115a4231a838e45a141426ede38a5d933c9a432c",
          "message": "Merge pull request #3515 from greymistcube/release/3.8.0\n\n🚀 Release 3.8.0",
          "timestamp": "2023-11-24T11:30:13+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/planetarium/libplanet/commit/115a4231a838e45a141426ede38a5d933c9a432c"
        },
        "date": 1700793855505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197676.01492537314,
            "unit": "ns",
            "range": "± 9336.553892667409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194098.13043478262,
            "unit": "ns",
            "range": "± 9269.416332461355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167295.44827586206,
            "unit": "ns",
            "range": "± 4852.853310801557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3118807.3571428573,
            "unit": "ns",
            "range": "± 54460.56502094978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2857029.7666666666,
            "unit": "ns",
            "range": "± 40997.48906329799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15314.142857142857,
            "unit": "ns",
            "range": "± 3140.61413982325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65593.45918367348,
            "unit": "ns",
            "range": "± 8130.929323787039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73075.81313131313,
            "unit": "ns",
            "range": "± 19076.10603455969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96815.71134020618,
            "unit": "ns",
            "range": "± 17447.789906579597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3741.3295454545455,
            "unit": "ns",
            "range": "± 893.7323356870694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12916.185567010309,
            "unit": "ns",
            "range": "± 2223.1817867355903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3668796.9954927885,
            "unit": "ns",
            "range": "± 10024.313522491615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196393.8860212055,
            "unit": "ns",
            "range": "± 3124.8545575123353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772621.5443359375,
            "unit": "ns",
            "range": "± 12057.499941647571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963817.6298828125,
            "unit": "ns",
            "range": "± 3226.7633891915266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624429.6995192308,
            "unit": "ns",
            "range": "± 2709.350536572185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579265.0088588169,
            "unit": "ns",
            "range": "± 1515.7497335786845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40501.5206185567,
            "unit": "ns",
            "range": "± 4854.650427209334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2404144.8571428573,
            "unit": "ns",
            "range": "± 66602.91420424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554803.263157895,
            "unit": "ns",
            "range": "± 86231.87091747968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153146.75,
            "unit": "ns",
            "range": "± 80351.250276385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2950945.15942029,
            "unit": "ns",
            "range": "± 107242.84734583402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6544769.5,
            "unit": "ns",
            "range": "± 120595.68096023654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5677798.142857143,
            "unit": "ns",
            "range": "± 24012.184986464184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14412477.888888888,
            "unit": "ns",
            "range": "± 305458.0243325806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36555060.428571425,
            "unit": "ns",
            "range": "± 481430.7980764556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74728933.71428572,
            "unit": "ns",
            "range": "± 600214.9512638629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150159080.15384614,
            "unit": "ns",
            "range": "± 2089475.3262525357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961059.7173913043,
            "unit": "ns",
            "range": "± 81938.36285842703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1881202.5862068965,
            "unit": "ns",
            "range": "± 81802.48841629269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1408875.9646464647,
            "unit": "ns",
            "range": "± 144392.43307384907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5805437.206185567,
            "unit": "ns",
            "range": "± 384238.3395802591"
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
          "id": "ca5f07bd78696bd410b3135c9c5f55a7c6722619",
          "message": "Merge pull request #3517 from greymistcube/prepare/3.9.0\n\n🔧 Prepare 3.9.0",
          "timestamp": "2023-11-24T13:03:38+09:00",
          "tree_id": "523cbc8c13e1d1c7c7efc4a98ee9d3ab351bdcda",
          "url": "https://github.com/planetarium/libplanet/commit/ca5f07bd78696bd410b3135c9c5f55a7c6722619"
        },
        "date": 1700799260726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210105.32941176472,
            "unit": "ns",
            "range": "± 11287.837967717032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200326.54444444444,
            "unit": "ns",
            "range": "± 13646.346803532151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171176,
            "unit": "ns",
            "range": "± 1937.8594720292112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3099020.3333333335,
            "unit": "ns",
            "range": "± 20777.8418834424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861482.714285714,
            "unit": "ns",
            "range": "± 32109.70001639469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16448.117021276597,
            "unit": "ns",
            "range": "± 2873.7925593770365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64284.54639175258,
            "unit": "ns",
            "range": "± 7861.960054354314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78567.04,
            "unit": "ns",
            "range": "± 16434.059246011446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80087.89690721649,
            "unit": "ns",
            "range": "± 16214.348338151858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6002.777777777777,
            "unit": "ns",
            "range": "± 2243.807535470863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16122.945054945056,
            "unit": "ns",
            "range": "± 1552.4846563037613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3810014.1205729167,
            "unit": "ns",
            "range": "± 55843.67726851043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1246645.6905381945,
            "unit": "ns",
            "range": "± 26554.743167884193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767718.7912248884,
            "unit": "ns",
            "range": "± 2293.5861064323785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949919.9606119792,
            "unit": "ns",
            "range": "± 7507.708358360511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609494.9815266927,
            "unit": "ns",
            "range": "± 1082.1197145653737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571348.3033040365,
            "unit": "ns",
            "range": "± 812.6773384183106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40721.45360824742,
            "unit": "ns",
            "range": "± 5745.4029069273765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2445037.4655172415,
            "unit": "ns",
            "range": "± 106856.60031202753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2632905.6041666665,
            "unit": "ns",
            "range": "± 101456.31383732117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186467.789473684,
            "unit": "ns",
            "range": "± 70673.5339230708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2950361.125,
            "unit": "ns",
            "range": "± 115976.18529674117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6601277.090909091,
            "unit": "ns",
            "range": "± 158208.38977539932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5699982.571428572,
            "unit": "ns",
            "range": "± 67453.21161050397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14846314.5,
            "unit": "ns",
            "range": "± 111023.77791595263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36441676.75,
            "unit": "ns",
            "range": "± 236907.98941020618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75368439.92857143,
            "unit": "ns",
            "range": "± 496877.618532814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152412038.6153846,
            "unit": "ns",
            "range": "± 561983.1740957699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967337.2903225806,
            "unit": "ns",
            "range": "± 85670.59482839928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1896879.857142857,
            "unit": "ns",
            "range": "± 91110.6155854306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1410916.87,
            "unit": "ns",
            "range": "± 110298.54010752642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5558642.408163265,
            "unit": "ns",
            "range": "± 220928.53176658342"
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
          "id": "99b9e98b2b48adb520cdbc522f1d6cfe221c7fd1",
          "message": "Merge pull request #3523 from greymistcube/refactor/fix-random-seed-generation\n\n♻️ Refactor random seed generation",
          "timestamp": "2023-11-27T15:03:58+09:00",
          "tree_id": "f8b7d238cc9a39cea5dff593eae21973aea26ca1",
          "url": "https://github.com/planetarium/libplanet/commit/99b9e98b2b48adb520cdbc522f1d6cfe221c7fd1"
        },
        "date": 1701065706409,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211392.21505376344,
            "unit": "ns",
            "range": "± 15858.218951786937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197843.88709677418,
            "unit": "ns",
            "range": "± 8471.307335391064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166516.9411764706,
            "unit": "ns",
            "range": "± 3389.025274149417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3143592.1,
            "unit": "ns",
            "range": "± 24954.94745622313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2817338.785714286,
            "unit": "ns",
            "range": "± 24374.121403269466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16785.484210526316,
            "unit": "ns",
            "range": "± 2421.897945137848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71732.79545454546,
            "unit": "ns",
            "range": "± 4935.381076621476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60163.59195402299,
            "unit": "ns",
            "range": "± 6076.297692066192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72470.81914893616,
            "unit": "ns",
            "range": "± 16856.64404664607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3330.5842696629215,
            "unit": "ns",
            "range": "± 681.61822507159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16191.354166666666,
            "unit": "ns",
            "range": "± 1308.8372338929548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3855232.124540441,
            "unit": "ns",
            "range": "± 77312.3160530378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236386.4914679276,
            "unit": "ns",
            "range": "± 23172.802918004203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 784469.86171875,
            "unit": "ns",
            "range": "± 13645.343583926644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944265.2975260417,
            "unit": "ns",
            "range": "± 7052.502856660864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623748.3528878348,
            "unit": "ns",
            "range": "± 2359.697708733696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589471.8015407986,
            "unit": "ns",
            "range": "± 12528.137880995768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41289.072916666664,
            "unit": "ns",
            "range": "± 5156.675745283546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454778.6666666665,
            "unit": "ns",
            "range": "± 96613.23238790697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562764.772727273,
            "unit": "ns",
            "range": "± 91861.04826005154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3212943.111111111,
            "unit": "ns",
            "range": "± 67539.39461410553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3060875.475,
            "unit": "ns",
            "range": "± 105482.58090368251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6627837.28,
            "unit": "ns",
            "range": "± 173525.8663983365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694053.166666667,
            "unit": "ns",
            "range": "± 54580.18061225765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14707387.916666666,
            "unit": "ns",
            "range": "± 89091.88677831274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37811664.21428572,
            "unit": "ns",
            "range": "± 235403.60048621523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76749744.28571428,
            "unit": "ns",
            "range": "± 287891.6139747544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149299533.5,
            "unit": "ns",
            "range": "± 1108703.6294662582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988330.7628865979,
            "unit": "ns",
            "range": "± 85128.75074479992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911773.189189189,
            "unit": "ns",
            "range": "± 94541.53268170652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1433453.242105263,
            "unit": "ns",
            "range": "± 117569.14345606996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5573155.290909091,
            "unit": "ns",
            "range": "± 234979.62448284533"
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
          "id": "f9e49c31a71c533d96c233dc34b6d9d73b8d9f93",
          "message": "Merge pull request #3526 from OnedgeLee/port/3.8.1-to-3.9.0\n\n🔀 Port 3.8.1 to 3.9.0",
          "timestamp": "2023-11-27T15:18:56+09:00",
          "tree_id": "32706cbfdb86b43bfbbc5bdf131a3105cb792706",
          "url": "https://github.com/planetarium/libplanet/commit/f9e49c31a71c533d96c233dc34b6d9d73b8d9f93"
        },
        "date": 1701066591975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203398.68,
            "unit": "ns",
            "range": "± 7542.417715663262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194396.91818181818,
            "unit": "ns",
            "range": "± 8230.54183602016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170672.1851851852,
            "unit": "ns",
            "range": "± 4773.5127690931295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106064,
            "unit": "ns",
            "range": "± 34995.26237605929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2818141.2333333334,
            "unit": "ns",
            "range": "± 27571.047377552382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13148.056179775282,
            "unit": "ns",
            "range": "± 1481.8825968675374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80448.71,
            "unit": "ns",
            "range": "± 13257.011333664504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86855.5625,
            "unit": "ns",
            "range": "± 1643.089365342007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89281.27551020408,
            "unit": "ns",
            "range": "± 15012.465186122787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5915.427083333333,
            "unit": "ns",
            "range": "± 1515.6620873559664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12399.797872340425,
            "unit": "ns",
            "range": "± 1362.750821974114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3799414.8015625,
            "unit": "ns",
            "range": "± 57475.4235658856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1231946.8286389802,
            "unit": "ns",
            "range": "± 26869.97266715824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770626.7516276041,
            "unit": "ns",
            "range": "± 2827.6027328519244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955620.41171875,
            "unit": "ns",
            "range": "± 21931.23410007959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627052.888671875,
            "unit": "ns",
            "range": "± 662.7889526442049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568924.9133864183,
            "unit": "ns",
            "range": "± 7255.364126453769"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41398.60638297872,
            "unit": "ns",
            "range": "± 5936.595866134758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2402034.4615384615,
            "unit": "ns",
            "range": "± 64732.786533706865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2593769.3333333335,
            "unit": "ns",
            "range": "± 93305.43701870771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3242545.470588235,
            "unit": "ns",
            "range": "± 66459.40032843138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3015235.117647059,
            "unit": "ns",
            "range": "± 114216.80799718523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6586840.928571428,
            "unit": "ns",
            "range": "± 169833.0252209458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5642137.666666667,
            "unit": "ns",
            "range": "± 67442.64377408478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14476373.357142856,
            "unit": "ns",
            "range": "± 118177.42421581931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36942417.75,
            "unit": "ns",
            "range": "± 135746.2392796507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74801649,
            "unit": "ns",
            "range": "± 448273.13913338596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153120729,
            "unit": "ns",
            "range": "± 638626.0292637364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005029.3571428572,
            "unit": "ns",
            "range": "± 93887.63690896964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1974206.6818181819,
            "unit": "ns",
            "range": "± 73934.3001988685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1536421.3,
            "unit": "ns",
            "range": "± 201198.28345016495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5634115.083333333,
            "unit": "ns",
            "range": "± 249401.13390784408"
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
          "id": "7e1213d127652079d0c45c22999b238d81fe7000",
          "message": "Merge pull request #3529 from greymistcube/refactor/tx-spec\n\n♻️ Update `TxInvoice` specification",
          "timestamp": "2023-11-28T16:34:22+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/planetarium/libplanet/commit/7e1213d127652079d0c45c22999b238d81fe7000"
        },
        "date": 1701157525576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214677.8510638298,
            "unit": "ns",
            "range": "± 16771.456463037368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199241.86842105264,
            "unit": "ns",
            "range": "± 10094.732809199202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171723.98484848486,
            "unit": "ns",
            "range": "± 5188.215842905513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3143038.5384615385,
            "unit": "ns",
            "range": "± 32766.690679752264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2932438.8571428573,
            "unit": "ns",
            "range": "± 37052.814759905465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22593.88775510204,
            "unit": "ns",
            "range": "± 3815.9547119377426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102271.9052631579,
            "unit": "ns",
            "range": "± 11438.045638256755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104267.47619047618,
            "unit": "ns",
            "range": "± 5603.470035001635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98232.34536082474,
            "unit": "ns",
            "range": "± 13480.73509165039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7120.714285714285,
            "unit": "ns",
            "range": "± 954.9293734341942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19508.25773195876,
            "unit": "ns",
            "range": "± 4737.347779608927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3779691.2447916665,
            "unit": "ns",
            "range": "± 64569.783991116165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1245672.9041466345,
            "unit": "ns",
            "range": "± 5757.152443983452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770007.0602463942,
            "unit": "ns",
            "range": "± 2288.6838621678853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943187.7005709135,
            "unit": "ns",
            "range": "± 2281.813824181756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616140.7942457933,
            "unit": "ns",
            "range": "± 1360.1091165810014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584233.9693509615,
            "unit": "ns",
            "range": "± 1092.565144134504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42195.42105263158,
            "unit": "ns",
            "range": "± 5576.984414650466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2515876.470588235,
            "unit": "ns",
            "range": "± 48844.689267511014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2589280.4411764704,
            "unit": "ns",
            "range": "± 69037.52787069099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3278573.8695652173,
            "unit": "ns",
            "range": "± 82648.81139127958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3080268.1578947366,
            "unit": "ns",
            "range": "± 104462.31280344441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6701374.74137931,
            "unit": "ns",
            "range": "± 136722.10528128507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5773637.583333333,
            "unit": "ns",
            "range": "± 33488.38110709807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14689821.642857144,
            "unit": "ns",
            "range": "± 104417.36265130884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37068911.916666664,
            "unit": "ns",
            "range": "± 304936.07732842467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75092021.83333333,
            "unit": "ns",
            "range": "± 393502.980234978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153168635.23333332,
            "unit": "ns",
            "range": "± 845797.3618447242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030420.3263157895,
            "unit": "ns",
            "range": "± 112982.10377184315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2026285.8103448276,
            "unit": "ns",
            "range": "± 88414.1666846572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538932.7653061224,
            "unit": "ns",
            "range": "± 152113.53064807452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5730561.724137931,
            "unit": "ns",
            "range": "± 250749.0142869008"
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
          "id": "e5fd96be3cfdbd103299de4bd8efc907cd56d227",
          "message": "Merge pull request #3530 from greymistcube/refactor/context-scoping\n\n♻️ `ActionEvaluator` context scoping",
          "timestamp": "2023-11-29T16:48:16+09:00",
          "tree_id": "4a3d52b03284e22bc5bfc9961f5c6a72e8f83202",
          "url": "https://github.com/planetarium/libplanet/commit/e5fd96be3cfdbd103299de4bd8efc907cd56d227"
        },
        "date": 1701244751016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197407.9090909091,
            "unit": "ns",
            "range": "± 6146.904771730831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190724.64102564103,
            "unit": "ns",
            "range": "± 6661.553373007718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160540.46153846153,
            "unit": "ns",
            "range": "± 2025.36270889046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3082957.3846153845,
            "unit": "ns",
            "range": "± 41857.281412633696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2749992,
            "unit": "ns",
            "range": "± 17811.732753066633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14477.41237113402,
            "unit": "ns",
            "range": "± 1879.5657119873981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64986.20430107527,
            "unit": "ns",
            "range": "± 4593.517579294287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51942.97014925373,
            "unit": "ns",
            "range": "± 2461.2813734100846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59089.336734693876,
            "unit": "ns",
            "range": "± 13150.04252585643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2790.0105263157893,
            "unit": "ns",
            "range": "± 316.53131654877853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14036.373737373737,
            "unit": "ns",
            "range": "± 3214.5005788053563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3747323.3602120536,
            "unit": "ns",
            "range": "± 42893.201235993874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236591.4786783855,
            "unit": "ns",
            "range": "± 6493.120270358733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762334.6328876202,
            "unit": "ns",
            "range": "± 3470.1771899142764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940758.2473493305,
            "unit": "ns",
            "range": "± 2009.6159298325883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629077.2848307291,
            "unit": "ns",
            "range": "± 996.6686260711944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592731.7883463542,
            "unit": "ns",
            "range": "± 8625.451377717254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38037.91836734694,
            "unit": "ns",
            "range": "± 3970.944843091585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420617.2,
            "unit": "ns",
            "range": "± 32351.651605443578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531347.0784313725,
            "unit": "ns",
            "range": "± 96443.38246802487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3106536.6071428573,
            "unit": "ns",
            "range": "± 59084.06594896944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2909842,
            "unit": "ns",
            "range": "± 111831.58988932382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6322302.233333333,
            "unit": "ns",
            "range": "± 113588.09169568201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5542153.533333333,
            "unit": "ns",
            "range": "± 28627.332496027208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14315185.666666666,
            "unit": "ns",
            "range": "± 74541.44237552855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37066150.5,
            "unit": "ns",
            "range": "± 254841.19292451977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74854766.53846154,
            "unit": "ns",
            "range": "± 310436.37837234203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147958436.5,
            "unit": "ns",
            "range": "± 938421.5527490625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961212.8854166666,
            "unit": "ns",
            "range": "± 95980.37823949882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868895.7464788733,
            "unit": "ns",
            "range": "± 90511.5167039482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1389155.2419354839,
            "unit": "ns",
            "range": "± 129238.26482903442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5612563.797979798,
            "unit": "ns",
            "range": "± 366396.8661588136"
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
          "id": "5ffe61d749e10ec138111a261bf3cfb3760dd9e1",
          "message": "Merge pull request #3533 from greymistcube/revert/context-scoping\n\n⏪ Revert context scoping",
          "timestamp": "2023-12-04T15:48:20+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/planetarium/libplanet/commit/5ffe61d749e10ec138111a261bf3cfb3760dd9e1"
        },
        "date": 1701673137893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203256.48,
            "unit": "ns",
            "range": "± 9930.43011691976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193383.73913043478,
            "unit": "ns",
            "range": "± 7002.698814456489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175400.25806451612,
            "unit": "ns",
            "range": "± 4816.424994867334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3100417.214285714,
            "unit": "ns",
            "range": "± 30386.706479032193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2947433.0714285714,
            "unit": "ns",
            "range": "± 31608.332169429108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14597.70652173913,
            "unit": "ns",
            "range": "± 2502.6459559945547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70339.03448275862,
            "unit": "ns",
            "range": "± 6051.100365911311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90588.68604651163,
            "unit": "ns",
            "range": "± 8320.704076913666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96994.60416666667,
            "unit": "ns",
            "range": "± 11737.03914109352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5432.540816326531,
            "unit": "ns",
            "range": "± 1812.3742411735577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16033.533333333333,
            "unit": "ns",
            "range": "± 2034.3501209493766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3740874.3744791667,
            "unit": "ns",
            "range": "± 51972.940933207996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1245467.3134765625,
            "unit": "ns",
            "range": "± 8243.798706676338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775210.7095052083,
            "unit": "ns",
            "range": "± 10185.064477628803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951012.4270833333,
            "unit": "ns",
            "range": "± 2765.243313445265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629484.7161959135,
            "unit": "ns",
            "range": "± 2466.6991179474226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 598402.6512858073,
            "unit": "ns",
            "range": "± 2350.617150202479"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40307.27551020408,
            "unit": "ns",
            "range": "± 5551.729581954316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2381357.163265306,
            "unit": "ns",
            "range": "± 86354.129960671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2524936.296296296,
            "unit": "ns",
            "range": "± 77933.29783754234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139126.5,
            "unit": "ns",
            "range": "± 28578.893480074672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3009787.5384615385,
            "unit": "ns",
            "range": "± 110230.55105487425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6660440.645161291,
            "unit": "ns",
            "range": "± 161685.8728562988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5700921.733333333,
            "unit": "ns",
            "range": "± 77902.16078102314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14807438.6,
            "unit": "ns",
            "range": "± 85016.27257413724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37289848.21428572,
            "unit": "ns",
            "range": "± 194800.07893466201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75197116,
            "unit": "ns",
            "range": "± 819628.0151813644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151902939.23076922,
            "unit": "ns",
            "range": "± 614823.5661648733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969293.5217391305,
            "unit": "ns",
            "range": "± 78532.55824206593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1924068.189189189,
            "unit": "ns",
            "range": "± 96533.04780710838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1429481.21875,
            "unit": "ns",
            "range": "± 115512.17624331832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5660896.20754717,
            "unit": "ns",
            "range": "± 235211.67651748846"
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
          "id": "e9cc22e70f944fe75ccb6cfa93f1fd84a131ba38",
          "message": "Merge pull request #3520 from greymistcube/refactor/trie-based-account\n\n♻️ `ITrie` based `IAccount`",
          "timestamp": "2023-12-05T12:18:56+09:00",
          "tree_id": "37805f611374463cf0883181b4383c3a752277f1",
          "url": "https://github.com/planetarium/libplanet/commit/e9cc22e70f944fe75ccb6cfa93f1fd84a131ba38"
        },
        "date": 1701746999592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202902.47311827957,
            "unit": "ns",
            "range": "± 13936.19811825009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193006.21538461538,
            "unit": "ns",
            "range": "± 9014.907765217824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171629.61764705883,
            "unit": "ns",
            "range": "± 3437.4688522652996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3114191.1428571427,
            "unit": "ns",
            "range": "± 34413.08768836724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804378,
            "unit": "ns",
            "range": "± 28350.007475239825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15635.943181818182,
            "unit": "ns",
            "range": "± 2241.256202345167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63919,
            "unit": "ns",
            "range": "± 7615.766841055442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60972.33707865168,
            "unit": "ns",
            "range": "± 3663.3263974395904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69350.07291666667,
            "unit": "ns",
            "range": "± 12575.437289242862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6602.010101010101,
            "unit": "ns",
            "range": "± 1190.0251454636177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11465.150537634408,
            "unit": "ns",
            "range": "± 1040.8395017467615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3690592.6201171875,
            "unit": "ns",
            "range": "± 12435.087840783628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217711.3983072916,
            "unit": "ns",
            "range": "± 21509.648310680313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774028.5002253606,
            "unit": "ns",
            "range": "± 1844.0838614868119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913975.4926060268,
            "unit": "ns",
            "range": "± 3630.2936848347504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610286.7422572544,
            "unit": "ns",
            "range": "± 997.471566325546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581639.7995793269,
            "unit": "ns",
            "range": "± 1982.6974920133682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40465.854166666664,
            "unit": "ns",
            "range": "± 4703.544363403919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400178.1428571427,
            "unit": "ns",
            "range": "± 56270.59858779335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2459928,
            "unit": "ns",
            "range": "± 107461.06619641448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3174737.25,
            "unit": "ns",
            "range": "± 61888.139739910315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2956924.9615384615,
            "unit": "ns",
            "range": "± 137211.2041003163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6920489.090909091,
            "unit": "ns",
            "range": "± 140745.42035682694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5630581.7,
            "unit": "ns",
            "range": "± 47233.97027291753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14464226.846153846,
            "unit": "ns",
            "range": "± 136679.44047712893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36981579.166666664,
            "unit": "ns",
            "range": "± 234194.61927746152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74266238.03333333,
            "unit": "ns",
            "range": "± 576498.9955487306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147752113.73333332,
            "unit": "ns",
            "range": "± 774272.1827684802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 934649.5777777778,
            "unit": "ns",
            "range": "± 61437.77296339563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1874452.8582089553,
            "unit": "ns",
            "range": "± 87863.00836110543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1412921.7040816327,
            "unit": "ns",
            "range": "± 116315.01480193966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5762653.59375,
            "unit": "ns",
            "range": "± 178878.47942836452"
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
          "id": "95f57e68db9a49bffafe2de06c19b70e1e370360",
          "message": "Merge pull request #3535 from greymistcube/refactor/remove-iaccount-delta\n\n🧹 Remove `IAccountDelta`",
          "timestamp": "2023-12-05T12:37:01+09:00",
          "tree_id": "7cef5086b6450859deb782f56a7fce91ad1f9bbf",
          "url": "https://github.com/planetarium/libplanet/commit/95f57e68db9a49bffafe2de06c19b70e1e370360"
        },
        "date": 1701748067721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217370.45679012345,
            "unit": "ns",
            "range": "± 11364.967816770737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208363.48611111112,
            "unit": "ns",
            "range": "± 10218.727981661154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179721.07142857142,
            "unit": "ns",
            "range": "± 2978.894211830075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3118132.6666666665,
            "unit": "ns",
            "range": "± 34006.94687809679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2885249.3571428573,
            "unit": "ns",
            "range": "± 39358.35980128304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15799.366666666667,
            "unit": "ns",
            "range": "± 1960.6059611333078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84313.45360824742,
            "unit": "ns",
            "range": "± 10220.880323326503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90620.36666666667,
            "unit": "ns",
            "range": "± 1423.8249725232918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86820.92783505155,
            "unit": "ns",
            "range": "± 16967.25072213099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6000.484210526316,
            "unit": "ns",
            "range": "± 832.2082245468135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19245.907216494845,
            "unit": "ns",
            "range": "± 4004.327583696362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3893280.0402960526,
            "unit": "ns",
            "range": "± 79592.79849646616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215337.5365084135,
            "unit": "ns",
            "range": "± 8961.542646569013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774126.0476888021,
            "unit": "ns",
            "range": "± 1433.9117423564555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2016994.8121995192,
            "unit": "ns",
            "range": "± 19212.078450885343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613247.0712139423,
            "unit": "ns",
            "range": "± 2482.23715875897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590080.9888916016,
            "unit": "ns",
            "range": "± 11502.365483171168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46515.414893617024,
            "unit": "ns",
            "range": "± 7747.6899500800555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2577155.8666666667,
            "unit": "ns",
            "range": "± 33618.32759048184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2655469.11627907,
            "unit": "ns",
            "range": "± 87124.27569561859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3183330.0476190476,
            "unit": "ns",
            "range": "± 74939.797400631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3173511.8205128205,
            "unit": "ns",
            "range": "± 110384.0688502676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7141927.6875,
            "unit": "ns",
            "range": "± 215781.17330959838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5749010.3,
            "unit": "ns",
            "range": "± 34110.61343252064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15020660.466666667,
            "unit": "ns",
            "range": "± 167663.64841843612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37275959.92307692,
            "unit": "ns",
            "range": "± 156939.55081785555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75640893.5,
            "unit": "ns",
            "range": "± 394626.6767669355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153164395.3,
            "unit": "ns",
            "range": "± 771833.9635395501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062501.2258064516,
            "unit": "ns",
            "range": "± 111576.61590303038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984268.1204819276,
            "unit": "ns",
            "range": "± 105588.68603267708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1466554.0212765958,
            "unit": "ns",
            "range": "± 105329.51559061356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6334830.196969697,
            "unit": "ns",
            "range": "± 492552.7389634712"
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
          "id": "480b70825d4bb894ba095b697d26014510cecca8",
          "message": "Merge pull request #3537 from greymistcube/refactor/total-updated-fungible-assets\n\n🧹 Remove internal tracking of amounts for `TotalUpdatedFungibleAssets`",
          "timestamp": "2023-12-05T13:51:27+09:00",
          "tree_id": "c1644d4dc792be582a8456158f5713a5b9e1bed9",
          "url": "https://github.com/planetarium/libplanet/commit/480b70825d4bb894ba095b697d26014510cecca8"
        },
        "date": 1701752532333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196043.1851851852,
            "unit": "ns",
            "range": "± 7903.898634562362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187209.38888888888,
            "unit": "ns",
            "range": "± 7348.754638858095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164840.45,
            "unit": "ns",
            "range": "± 3679.6511916355967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3010357.8,
            "unit": "ns",
            "range": "± 67927.07740627366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2844043.1,
            "unit": "ns",
            "range": "± 35431.64345771003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14768.377551020409,
            "unit": "ns",
            "range": "± 2255.9892178002656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66234.5612244898,
            "unit": "ns",
            "range": "± 7916.363162002344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52169.56140350877,
            "unit": "ns",
            "range": "± 2005.640608540465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65782.25510204081,
            "unit": "ns",
            "range": "± 12351.329348139447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3021.2526315789473,
            "unit": "ns",
            "range": "± 507.5391603887404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13953.149484536083,
            "unit": "ns",
            "range": "± 2559.837458386588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3680802.835637019,
            "unit": "ns",
            "range": "± 8787.550431585027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212509.6985212055,
            "unit": "ns",
            "range": "± 3138.780709863701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783319.6576772836,
            "unit": "ns",
            "range": "± 9848.598920506462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951631.0968191964,
            "unit": "ns",
            "range": "± 14353.674619389742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621646.53515625,
            "unit": "ns",
            "range": "± 2538.1550393130765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587458.6030273438,
            "unit": "ns",
            "range": "± 2062.718854273896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39349.427835051545,
            "unit": "ns",
            "range": "± 5714.02196218402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380683.065217391,
            "unit": "ns",
            "range": "± 91199.5189945045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2496783.069767442,
            "unit": "ns",
            "range": "± 92457.15405382708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3060437.210526316,
            "unit": "ns",
            "range": "± 65417.232886363905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2939629.611111111,
            "unit": "ns",
            "range": "± 111037.86913547317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6964657.815789473,
            "unit": "ns",
            "range": "± 239229.9975483398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5582224.923076923,
            "unit": "ns",
            "range": "± 62618.04258952518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14242486.57142857,
            "unit": "ns",
            "range": "± 143167.98664960754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36076724.92307692,
            "unit": "ns",
            "range": "± 175705.9034563445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75013337.03846154,
            "unit": "ns",
            "range": "± 448307.8057699523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149879165.2857143,
            "unit": "ns",
            "range": "± 605522.9719851426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938271.0454545454,
            "unit": "ns",
            "range": "± 60222.45666509728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841469.6153846155,
            "unit": "ns",
            "range": "± 63286.09592436698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1504879.2307692308,
            "unit": "ns",
            "range": "± 22309.045083231173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6118627.164948453,
            "unit": "ns",
            "range": "± 388840.45019842545"
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
          "id": "f5762f93ba0366280c8aa7f7b7b6e3331ad8fe86",
          "message": "Merge pull request #3538 from greymistcube/release/3.9.0\n\n🚀 Release 3.9.0",
          "timestamp": "2023-12-05T14:10:29+09:00",
          "tree_id": "5787cbf94dba3ffe5c78fe22ca49a64303906978",
          "url": "https://github.com/planetarium/libplanet/commit/f5762f93ba0366280c8aa7f7b7b6e3331ad8fe86"
        },
        "date": 1701753685445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195345.73880597015,
            "unit": "ns",
            "range": "± 8705.68160367308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191514.48484848486,
            "unit": "ns",
            "range": "± 7810.3380690987415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169763.7,
            "unit": "ns",
            "range": "± 6834.249905096105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018505,
            "unit": "ns",
            "range": "± 37005.09295093977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2705952.285714286,
            "unit": "ns",
            "range": "± 41463.48889069769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13019.96875,
            "unit": "ns",
            "range": "± 1846.6708563370833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62954.10101010101,
            "unit": "ns",
            "range": "± 5828.941892104396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59239.58064516129,
            "unit": "ns",
            "range": "± 4643.144802737314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61314.19587628866,
            "unit": "ns",
            "range": "± 10727.783400124315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.5052631578947,
            "unit": "ns",
            "range": "± 602.0000154393899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14422.689473684211,
            "unit": "ns",
            "range": "± 1674.2892000547372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3685149.585677083,
            "unit": "ns",
            "range": "± 56715.3701627331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205994.7898995536,
            "unit": "ns",
            "range": "± 3469.032397302392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770289.5952148438,
            "unit": "ns",
            "range": "± 1755.0739652130733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921640.7827148438,
            "unit": "ns",
            "range": "± 6263.591989299254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626430.6417410715,
            "unit": "ns",
            "range": "± 3578.4881806874714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567989.234375,
            "unit": "ns",
            "range": "± 1046.9200122323841"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38545.936842105264,
            "unit": "ns",
            "range": "± 4885.060488335026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2434876.5,
            "unit": "ns",
            "range": "± 55448.52457863391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2439637.6951219514,
            "unit": "ns",
            "range": "± 87128.79429792987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139610.6666666665,
            "unit": "ns",
            "range": "± 58609.852152867206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2895482.6,
            "unit": "ns",
            "range": "± 77487.80138817159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6617888.928571428,
            "unit": "ns",
            "range": "± 115573.72049556427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5547110.230769231,
            "unit": "ns",
            "range": "± 17044.282957215917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13870838.133333333,
            "unit": "ns",
            "range": "± 108631.1259951813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36368007.428571425,
            "unit": "ns",
            "range": "± 208406.03295101397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74861550.78571428,
            "unit": "ns",
            "range": "± 723958.3815572208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145429588.5,
            "unit": "ns",
            "range": "± 639998.0535121541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 940663.6559139785,
            "unit": "ns",
            "range": "± 70639.77358054563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831840.2127659575,
            "unit": "ns",
            "range": "± 71065.06794570494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1378575.2688172043,
            "unit": "ns",
            "range": "± 92578.60551434818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6044681.228260869,
            "unit": "ns",
            "range": "± 340525.1225781755"
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
          "id": "eec1b9883176e13c7492c6dde65f1c555ce8a351",
          "message": "Merge pull request #3539 from greymistcube/prepare/3.9.1\n\n🔧 Prepare 3.9.1",
          "timestamp": "2023-12-08T11:25:23+09:00",
          "tree_id": "23990157ea6683c0744454ad72efa3c105fe0488",
          "url": "https://github.com/planetarium/libplanet/commit/eec1b9883176e13c7492c6dde65f1c555ce8a351"
        },
        "date": 1702002972346,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223040.88043478262,
            "unit": "ns",
            "range": "± 15878.824308654199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201103.7634408602,
            "unit": "ns",
            "range": "± 13314.210269317718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163308.15384615384,
            "unit": "ns",
            "range": "± 2264.916181162629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087327.5,
            "unit": "ns",
            "range": "± 18419.056599076946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2824290.230769231,
            "unit": "ns",
            "range": "± 36104.05287765222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17154.67525773196,
            "unit": "ns",
            "range": "± 2573.6918360366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76631.27319587629,
            "unit": "ns",
            "range": "± 12340.479351934593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64992.0824742268,
            "unit": "ns",
            "range": "± 16111.674277180522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60687.62371134021,
            "unit": "ns",
            "range": "± 11657.115346125278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2879.133333333333,
            "unit": "ns",
            "range": "± 489.29849348872625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14885.75,
            "unit": "ns",
            "range": "± 3065.723450294271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3688735.5929129464,
            "unit": "ns",
            "range": "± 47727.329365762314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226153.220703125,
            "unit": "ns",
            "range": "± 2833.1630375645123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769668.7204589844,
            "unit": "ns",
            "range": "± 4240.8811153545585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1978463.850360577,
            "unit": "ns",
            "range": "± 13133.712761426767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622222.398061899,
            "unit": "ns",
            "range": "± 4843.934925177816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573699.6381022135,
            "unit": "ns",
            "range": "± 1707.7437217130068"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41048.364583333336,
            "unit": "ns",
            "range": "± 5803.260278987995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2508726.119047619,
            "unit": "ns",
            "range": "± 91314.65738920249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2621877.2604166665,
            "unit": "ns",
            "range": "± 151134.70996705626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3212525.2,
            "unit": "ns",
            "range": "± 70373.20171179099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3089777.533333333,
            "unit": "ns",
            "range": "± 117100.78972418277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7098599.94117647,
            "unit": "ns",
            "range": "± 227849.73973305454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694744.230769231,
            "unit": "ns",
            "range": "± 58116.915756306626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14583556.454545455,
            "unit": "ns",
            "range": "± 346595.3323129394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37142784.57692308,
            "unit": "ns",
            "range": "± 217125.7253914045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75044752.53846154,
            "unit": "ns",
            "range": "± 747970.529011406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153153430.80769232,
            "unit": "ns",
            "range": "± 927512.3989685515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943047.4239130435,
            "unit": "ns",
            "range": "± 64076.23177315356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895134.1538461538,
            "unit": "ns",
            "range": "± 96627.55459422091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1361502.6235955057,
            "unit": "ns",
            "range": "± 75469.67736807524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6015406.461538462,
            "unit": "ns",
            "range": "± 245552.03223337344"
          }
        ]
      }
    ]
  }
}