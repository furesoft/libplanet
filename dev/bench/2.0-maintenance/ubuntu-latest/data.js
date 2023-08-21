window.BENCHMARK_DATA = {
  "lastUpdate": 1687424603883,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac6bccfbe015e81958744776bd998b6f0ecbfa92",
          "message": "Merge pull request #3211 from OnedgeLee/release/2.0.0\n\nFix typo on changelog",
          "timestamp": "2023-06-14T13:31:43+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/planetarium/libplanet/commit/ac6bccfbe015e81958744776bd998b6f0ecbfa92"
        },
        "date": 1686718756781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732771.1546391752,
            "unit": "ns",
            "range": "± 183245.58735309867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3356362.09375,
            "unit": "ns",
            "range": "± 316415.06885089626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2692727.1979166665,
            "unit": "ns",
            "range": "± 207625.82192718555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7267392.5051546395,
            "unit": "ns",
            "range": "± 653422.0851779454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4162237.1157894735,
            "unit": "ns",
            "range": "± 326268.38050934166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4468117.873684211,
            "unit": "ns",
            "range": "± 376210.2786717862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5690984.384615385,
            "unit": "ns",
            "range": "± 438793.6204807137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5280072.69072165,
            "unit": "ns",
            "range": "± 425491.85000230325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9212345.442105263,
            "unit": "ns",
            "range": "± 717728.2146173752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9517186.863157894,
            "unit": "ns",
            "range": "± 606773.8088894974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26055889.705263156,
            "unit": "ns",
            "range": "± 2410526.2318499903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65294157,
            "unit": "ns",
            "range": "± 4452356.778807478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146711848.84210527,
            "unit": "ns",
            "range": "± 9201355.898936749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275187480.8113208,
            "unit": "ns",
            "range": "± 11288338.393956285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7162667.823102678,
            "unit": "ns",
            "range": "± 88263.01658688187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2334490.3694196427,
            "unit": "ns",
            "range": "± 26760.13119808921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1712338.9447265626,
            "unit": "ns",
            "range": "± 37413.825130470555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3356465.5721153845,
            "unit": "ns",
            "range": "± 40784.65295466377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1112759.6825561523,
            "unit": "ns",
            "range": "± 33874.03142828802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 980928.3412760417,
            "unit": "ns",
            "range": "± 13947.416050526645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56331.41758241758,
            "unit": "ns",
            "range": "± 11509.023136522957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362544.6494845361,
            "unit": "ns",
            "range": "± 53777.578216909875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343602.56842105265,
            "unit": "ns",
            "range": "± 49123.82984360287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292190.01086956525,
            "unit": "ns",
            "range": "± 41721.44165944817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5317332.2,
            "unit": "ns",
            "range": "± 474398.0094394795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4691238.935483871,
            "unit": "ns",
            "range": "± 343540.1685410819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22657.083333333332,
            "unit": "ns",
            "range": "± 8385.31498534842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102347.75268817204,
            "unit": "ns",
            "range": "± 17004.388177030323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98023.03225806452,
            "unit": "ns",
            "range": "± 22908.117823758657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120194.76595744681,
            "unit": "ns",
            "range": "± 24612.68951692324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6199.95652173913,
            "unit": "ns",
            "range": "± 1232.5092952688158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18208.32530120482,
            "unit": "ns",
            "range": "± 2425.5596694292635"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bf530b3a61065aa6c8c96bbf8aa05065d82a731",
          "message": "Merge pull request #3212 from OnedgeLee/prepare/2.0.1\n\n🔧 Prepare 2.0.1",
          "timestamp": "2023-06-14T14:00:32+09:00",
          "tree_id": "8d95562084f47de8fbefeba7a2e4a49badd24b2e",
          "url": "https://github.com/planetarium/libplanet/commit/0bf530b3a61065aa6c8c96bbf8aa05065d82a731"
        },
        "date": 1686719671831,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507704.5543478262,
            "unit": "ns",
            "range": "± 83857.08539478999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2885090.4418604653,
            "unit": "ns",
            "range": "± 106799.57267533164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2414122.011627907,
            "unit": "ns",
            "range": "± 130746.04069555823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5789286.888888889,
            "unit": "ns",
            "range": "± 158179.41389382773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3612762.75,
            "unit": "ns",
            "range": "± 81038.1816851103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3802363.3846153845,
            "unit": "ns",
            "range": "± 46027.58620026774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4561953.695652174,
            "unit": "ns",
            "range": "± 96234.07527691613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4784958.2,
            "unit": "ns",
            "range": "± 110793.52579272552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7437154.606060606,
            "unit": "ns",
            "range": "± 234441.2785987063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8356029.466666667,
            "unit": "ns",
            "range": "± 113231.06610244045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22697540.466666665,
            "unit": "ns",
            "range": "± 205967.08566934624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57342309.8,
            "unit": "ns",
            "range": "± 495322.1295297493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113987162.06666666,
            "unit": "ns",
            "range": "± 625218.4350651798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230153992.26666668,
            "unit": "ns",
            "range": "± 1719667.266085692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6110918.081473215,
            "unit": "ns",
            "range": "± 33582.80520945019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939520.3651041666,
            "unit": "ns",
            "range": "± 2610.891836767607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410377.6329427084,
            "unit": "ns",
            "range": "± 2964.5908193327955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661956.0130208335,
            "unit": "ns",
            "range": "± 2684.845202205923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852563.7639508928,
            "unit": "ns",
            "range": "± 364.5441366219784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758646.2297175481,
            "unit": "ns",
            "range": "± 736.0415016699768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50218.5,
            "unit": "ns",
            "range": "± 3859.630224993608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295572.02702702704,
            "unit": "ns",
            "range": "± 9996.547171916929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281218.0232558139,
            "unit": "ns",
            "range": "± 8436.347588992729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249380.23529411765,
            "unit": "ns",
            "range": "± 4277.642480523176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4607529.076923077,
            "unit": "ns",
            "range": "± 26075.73474663606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4261296,
            "unit": "ns",
            "range": "± 54444.570685632716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20079.58695652174,
            "unit": "ns",
            "range": "± 1740.1417344836411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90530.3953488372,
            "unit": "ns",
            "range": "± 4926.783363661193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81002.25806451614,
            "unit": "ns",
            "range": "± 5561.949210450896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99456.80208333333,
            "unit": "ns",
            "range": "± 11124.850667354729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5648.021276595745,
            "unit": "ns",
            "range": "± 856.5613044958565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20555.30769230769,
            "unit": "ns",
            "range": "± 1396.2126126880032"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5235ad9aa1026917069c71af2ac4a4270be4c3d7",
          "message": "Merge pull request #3225 from moreal/fix-tx-bug",
          "timestamp": "2023-06-22T15:21:33+09:00",
          "tree_id": "8cea5e90c0935e829cfdf8d7354089b2b37087c8",
          "url": "https://github.com/planetarium/libplanet/commit/5235ad9aa1026917069c71af2ac4a4270be4c3d7"
        },
        "date": 1687415583802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298214.8,
            "unit": "ns",
            "range": "± 59913.55730335879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3426703.135135135,
            "unit": "ns",
            "range": "± 115064.66706817088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4124281.1333333333,
            "unit": "ns",
            "range": "± 43852.41221719356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4095109.2,
            "unit": "ns",
            "range": "± 107447.28958269105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6651828.352941177,
            "unit": "ns",
            "range": "± 126027.90150495502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5908037.580357143,
            "unit": "ns",
            "range": "± 33914.85220826804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909728.441015625,
            "unit": "ns",
            "range": "± 4271.780191910254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368233.549609375,
            "unit": "ns",
            "range": "± 4779.319417194372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569241.607552083,
            "unit": "ns",
            "range": "± 6740.281443742289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815719.2290039062,
            "unit": "ns",
            "range": "± 1380.9327384318144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744314.7677734375,
            "unit": "ns",
            "range": "± 2274.384254559872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266567.34285714285,
            "unit": "ns",
            "range": "± 8699.155692441915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257137.86956521738,
            "unit": "ns",
            "range": "± 9864.291057724198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227799,
            "unit": "ns",
            "range": "± 3159.377575831459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4111796.3076923075,
            "unit": "ns",
            "range": "± 25418.72989675335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3842355.4,
            "unit": "ns",
            "range": "± 33772.27750220163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14819.75,
            "unit": "ns",
            "range": "± 1413.824071539015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80072.94666666667,
            "unit": "ns",
            "range": "± 4018.765000874305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67733.08333333333,
            "unit": "ns",
            "range": "± 636.0866805330191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76715.17525773196,
            "unit": "ns",
            "range": "± 9347.24496510682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4225.742268041237,
            "unit": "ns",
            "range": "± 428.2562092941198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14180.379310344828,
            "unit": "ns",
            "range": "± 762.9099316125119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322521.3404255318,
            "unit": "ns",
            "range": "± 90929.178856263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2543868.580645161,
            "unit": "ns",
            "range": "± 76949.46417780708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2096210.391304348,
            "unit": "ns",
            "range": "± 99076.73899977695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5191941,
            "unit": "ns",
            "range": "± 106906.63731761466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45610.76190476191,
            "unit": "ns",
            "range": "± 2025.9069073466885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7581193.214285715,
            "unit": "ns",
            "range": "± 6622.156053484642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19047884.466666665,
            "unit": "ns",
            "range": "± 40580.3246147452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49028665.666666664,
            "unit": "ns",
            "range": "± 216938.44100694513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97537560.4,
            "unit": "ns",
            "range": "± 329709.05429545004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196854927.6153846,
            "unit": "ns",
            "range": "± 1304973.5169404484"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4af83d55d4e9cf249517cd3cf2102c10b2172cf",
          "message": "Merge pull request #3232 from moreal/release-2.0.1",
          "timestamp": "2023-06-22T16:37:38+09:00",
          "tree_id": "6cea483aef8aa810fc1a1aec2efecb1c78d25dc6",
          "url": "https://github.com/planetarium/libplanet/commit/a4af83d55d4e9cf249517cd3cf2102c10b2172cf"
        },
        "date": 1687420224771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3468323.294117647,
            "unit": "ns",
            "range": "± 68717.85863293172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3593207.076923077,
            "unit": "ns",
            "range": "± 43025.655719313836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4435457,
            "unit": "ns",
            "range": "± 114939.93508283426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499055,
            "unit": "ns",
            "range": "± 70431.6162990741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7008310.304347826,
            "unit": "ns",
            "range": "± 169426.81470460517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6369295.4015625,
            "unit": "ns",
            "range": "± 22292.611046300877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970037.4832589286,
            "unit": "ns",
            "range": "± 2619.3739402384144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368832.6780348558,
            "unit": "ns",
            "range": "± 535.3891661754516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594022.699776786,
            "unit": "ns",
            "range": "± 1554.5758989783026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811333.2915736607,
            "unit": "ns",
            "range": "± 441.60432574721375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741802.7232421875,
            "unit": "ns",
            "range": "± 410.3272868737628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298325.5416666667,
            "unit": "ns",
            "range": "± 7651.527144979774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285059.3695652174,
            "unit": "ns",
            "range": "± 10183.402937806193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259393.26829268291,
            "unit": "ns",
            "range": "± 9279.66589652987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4338708.6,
            "unit": "ns",
            "range": "± 36146.979328055306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3996094.066666667,
            "unit": "ns",
            "range": "± 38056.38720272603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21283.031914893618,
            "unit": "ns",
            "range": "± 1364.7377191172081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95907.81720430107,
            "unit": "ns",
            "range": "± 5806.758753058589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79656.01149425287,
            "unit": "ns",
            "range": "± 4355.057043105585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98589.94845360825,
            "unit": "ns",
            "range": "± 12119.115936860462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5532.302083333333,
            "unit": "ns",
            "range": "± 752.0486563177268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21180.270833333332,
            "unit": "ns",
            "range": "± 1832.9011773353175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406611.313253012,
            "unit": "ns",
            "range": "± 69456.52686936149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2715975.6666666665,
            "unit": "ns",
            "range": "± 70321.24224595647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2284940.117647059,
            "unit": "ns",
            "range": "± 122690.49613612641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5559079.875,
            "unit": "ns",
            "range": "± 170005.93294120554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48777.98947368421,
            "unit": "ns",
            "range": "± 3377.688976065877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8086911.933333334,
            "unit": "ns",
            "range": "± 33838.81716200803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20819733.53846154,
            "unit": "ns",
            "range": "± 300110.0360541711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51568578.071428575,
            "unit": "ns",
            "range": "± 228235.6313079379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103338132.33333333,
            "unit": "ns",
            "range": "± 360451.822176332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207005684.35714287,
            "unit": "ns",
            "range": "± 235130.43791367806"
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
          "id": "a3eed9d36ac41fc7510c5507137d642a6297c75c",
          "message": "Merge pull request #3233 from moreal/prepare-2.0.2\n\nPrepare 2.0.2",
          "timestamp": "2023-06-22T17:50:46+09:00",
          "tree_id": "9760d78f94a110ad84c6768b3f4146663ffaf49c",
          "url": "https://github.com/planetarium/libplanet/commit/a3eed9d36ac41fc7510c5507137d642a6297c75c"
        },
        "date": 1687424579191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290890.9,
            "unit": "ns",
            "range": "± 53099.0496504311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3523871.6666666665,
            "unit": "ns",
            "range": "± 77299.98369011958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4373334.9130434785,
            "unit": "ns",
            "range": "± 109166.56464025847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4426688.733333333,
            "unit": "ns",
            "range": "± 64297.454302491264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6955535.269230769,
            "unit": "ns",
            "range": "± 184349.6271053582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6063661.208854167,
            "unit": "ns",
            "range": "± 17971.99240366889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2005782.809795673,
            "unit": "ns",
            "range": "± 1874.9335743017368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396935.40625,
            "unit": "ns",
            "range": "± 798.0044397107639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596170.7349759615,
            "unit": "ns",
            "range": "± 1886.5876744684392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807710.472516741,
            "unit": "ns",
            "range": "± 538.0500902304545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732003.0642578125,
            "unit": "ns",
            "range": "± 604.78324199538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287003.93617021275,
            "unit": "ns",
            "range": "± 11015.19532164991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280349.6875,
            "unit": "ns",
            "range": "± 5395.4888776798225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240988.66666666666,
            "unit": "ns",
            "range": "± 4638.2748567822955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4277003.071428572,
            "unit": "ns",
            "range": "± 30046.27495269533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3953045.9285714286,
            "unit": "ns",
            "range": "± 22525.863427366145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18754.639175257733,
            "unit": "ns",
            "range": "± 1893.5757960886185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88865.5625,
            "unit": "ns",
            "range": "± 6064.232806620697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71816.58333333333,
            "unit": "ns",
            "range": "± 986.0343400191342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104150,
            "unit": "ns",
            "range": "± 1434.3196042977058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4371.864583333333,
            "unit": "ns",
            "range": "± 580.3175831032281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18193.80412371134,
            "unit": "ns",
            "range": "± 1859.9951760643942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413112.6,
            "unit": "ns",
            "range": "± 101373.61524834334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2709728.3333333335,
            "unit": "ns",
            "range": "± 97723.20734272692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245682.1904761903,
            "unit": "ns",
            "range": "± 118676.90033336043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5493302.214285715,
            "unit": "ns",
            "range": "± 152146.0949641537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46092.5,
            "unit": "ns",
            "range": "± 2718.3698417938267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7716884.333333333,
            "unit": "ns",
            "range": "± 18381.880312131394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19870896.666666668,
            "unit": "ns",
            "range": "± 53248.09560869178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51133224.666666664,
            "unit": "ns",
            "range": "± 359386.5774830112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103412701.8,
            "unit": "ns",
            "range": "± 294037.29373650154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206036540.2857143,
            "unit": "ns",
            "range": "± 826418.8730644666"
          }
        ]
      }
    ]
  }
}