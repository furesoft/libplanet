window.BENCHMARK_DATA = {
  "lastUpdate": 1698040326975,
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
          "id": "bcb549979a34e9f1afab9435f427aba162c2463a",
          "message": "Merge pull request #3418 from greymistcube/prepare/3.4.0\n\n🔧 Prepare 3.4.0",
          "timestamp": "2023-09-08T10:21:29+09:00",
          "tree_id": "d08370af5794578e62bc1c40dd2c906d7efde68b",
          "url": "https://github.com/planetarium/libplanet/commit/bcb549979a34e9f1afab9435f427aba162c2463a"
        },
        "date": 1698025858026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514760,
            "unit": "ns",
            "range": "± 151337.72654149221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2736521.4285714286,
            "unit": "ns",
            "range": "± 77926.4627574202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1907624.2424242424,
            "unit": "ns",
            "range": "± 178215.09481116597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4757552.94117647,
            "unit": "ns",
            "range": "± 227305.73793611777"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55050.51546391752,
            "unit": "ns",
            "range": "± 5587.096810795019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8086416.666666667,
            "unit": "ns",
            "range": "± 147984.57287678268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21818950,
            "unit": "ns",
            "range": "± 313203.49676307157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53750492.85714286,
            "unit": "ns",
            "range": "± 389677.2519846209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106904696.66666667,
            "unit": "ns",
            "range": "± 1343172.060495318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214101235.7142857,
            "unit": "ns",
            "range": "± 2378622.545025439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4697997.377232143,
            "unit": "ns",
            "range": "± 29818.183586807165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1448853.9322916667,
            "unit": "ns",
            "range": "± 5839.123794694957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082549.7786458333,
            "unit": "ns",
            "range": "± 12077.596470200058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2697075.2278645835,
            "unit": "ns",
            "range": "± 4441.215094988206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861364.7739955357,
            "unit": "ns",
            "range": "± 2656.9552803970364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768412.9732572115,
            "unit": "ns",
            "range": "± 3647.7693016034827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3490014.6341463416,
            "unit": "ns",
            "range": "± 124342.65068948713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3701158.620689655,
            "unit": "ns",
            "range": "± 102690.07991191394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4548606.666666667,
            "unit": "ns",
            "range": "± 74282.16923775629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274686.666666667,
            "unit": "ns",
            "range": "± 67587.21208997483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6233180.645161291,
            "unit": "ns",
            "range": "± 178369.59834260776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279519.64285714284,
            "unit": "ns",
            "range": "± 11525.945745346684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274645.45454545453,
            "unit": "ns",
            "range": "± 12925.114870112158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271807.44680851063,
            "unit": "ns",
            "range": "± 15385.681371345929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4350100,
            "unit": "ns",
            "range": "± 28317.07376595729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4109064.285714286,
            "unit": "ns",
            "range": "± 27697.309148470253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30516.842105263157,
            "unit": "ns",
            "range": "± 2531.8252028492716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105540,
            "unit": "ns",
            "range": "± 8272.325048142611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99858,
            "unit": "ns",
            "range": "± 12635.321503426396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112890.8163265306,
            "unit": "ns",
            "range": "± 16102.39200220639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8514.583333333334,
            "unit": "ns",
            "range": "± 1298.4994713872554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25557.44680851064,
            "unit": "ns",
            "range": "± 2932.886917217105"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62b18225439af051a67d52760d028260f1e05e70",
          "message": "Merge branch 'main' into add-cjs-support",
          "timestamp": "2023-10-23T10:39:29+09:00",
          "tree_id": "09568e04755ba98b97acc51e92aa136ef1a5be0d",
          "url": "https://github.com/planetarium/libplanet/commit/62b18225439af051a67d52760d028260f1e05e70"
        },
        "date": 1698026145904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1274316.8421052631,
            "unit": "ns",
            "range": "± 103597.5022830344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2391775.5555555555,
            "unit": "ns",
            "range": "± 89594.97793239904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1880142.105263158,
            "unit": "ns",
            "range": "± 91151.60450320538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8827568.539325843,
            "unit": "ns",
            "range": "± 525792.4656682748"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49904.166666666664,
            "unit": "ns",
            "range": "± 3430.602729509685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7149850,
            "unit": "ns",
            "range": "± 77424.3054661976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20361113.333333332,
            "unit": "ns",
            "range": "± 314111.3129964933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50372107.14285714,
            "unit": "ns",
            "range": "± 803823.5593464773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100114060,
            "unit": "ns",
            "range": "± 932814.5258915545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196761169.23076922,
            "unit": "ns",
            "range": "± 1755607.1126463232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4605887.265625,
            "unit": "ns",
            "range": "± 21076.003532674767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1430694.0755208333,
            "unit": "ns",
            "range": "± 6416.74265196662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053721.3541666667,
            "unit": "ns",
            "range": "± 3140.6539615614306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622967.109375,
            "unit": "ns",
            "range": "± 9355.920327697466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838645.5153245192,
            "unit": "ns",
            "range": "± 2442.047141941639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772991.8619791666,
            "unit": "ns",
            "range": "± 3268.9204127384583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3142295.1219512196,
            "unit": "ns",
            "range": "± 111222.50885324317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3323368.75,
            "unit": "ns",
            "range": "± 128538.36111937682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3968482.0512820515,
            "unit": "ns",
            "range": "± 138605.29698960372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3875993.8775510206,
            "unit": "ns",
            "range": "± 146296.04176714655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10272603.409090908,
            "unit": "ns",
            "range": "± 703180.4701969512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258044.44444444444,
            "unit": "ns",
            "range": "± 6362.813593481804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236340,
            "unit": "ns",
            "range": "± 11547.855773821086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208071.79487179487,
            "unit": "ns",
            "range": "± 6750.0857194537175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4015246.6666666665,
            "unit": "ns",
            "range": "± 70842.62101574836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3702756.5217391304,
            "unit": "ns",
            "range": "± 89724.36998480381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20117.021276595744,
            "unit": "ns",
            "range": "± 1712.4081199979496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84495.83333333333,
            "unit": "ns",
            "range": "± 7183.327431104345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69352.08333333333,
            "unit": "ns",
            "range": "± 2544.580355264334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78548.3870967742,
            "unit": "ns",
            "range": "± 7666.380769919853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4881.443298969072,
            "unit": "ns",
            "range": "± 525.4620777839284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18169.473684210527,
            "unit": "ns",
            "range": "± 1465.8577972460084"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "8ba410942864b26987a6a6745a77f65b18f05d6b",
          "message": "add conditional exports to support cjs",
          "timestamp": "2023-10-23T10:34:47+09:00",
          "tree_id": "7a258ff201260e1e5d6b8bef08db48450bc33a94",
          "url": "https://github.com/planetarium/libplanet/commit/8ba410942864b26987a6a6745a77f65b18f05d6b"
        },
        "date": 1698026162256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1769202.1276595744,
            "unit": "ns",
            "range": "± 178747.25051120887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3285827.380952381,
            "unit": "ns",
            "range": "± 278660.74997853587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2219520.8333333335,
            "unit": "ns",
            "range": "± 229662.37366445767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5904464.044943821,
            "unit": "ns",
            "range": "± 342462.7522039279"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62032.608695652176,
            "unit": "ns",
            "range": "± 10805.25013512232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9654363.541666666,
            "unit": "ns",
            "range": "± 694729.7899743834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25936915.094339624,
            "unit": "ns",
            "range": "± 1077060.2712219509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67239428,
            "unit": "ns",
            "range": "± 1754791.5504222526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134529909.52380952,
            "unit": "ns",
            "range": "± 3117162.9889861005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273581145.8333333,
            "unit": "ns",
            "range": "± 6975490.598235284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5750916.646634615,
            "unit": "ns",
            "range": "± 71858.67442562795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1797722.94921875,
            "unit": "ns",
            "range": "± 20939.145627683687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1316670.1590401786,
            "unit": "ns",
            "range": "± 17057.05311755182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3281167.8385416665,
            "unit": "ns",
            "range": "± 46680.82588753731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103433.30078125,
            "unit": "ns",
            "range": "± 18990.380819755257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1029820.4427083334,
            "unit": "ns",
            "range": "± 19249.97729803196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3919161.290322581,
            "unit": "ns",
            "range": "± 302084.49330273335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4181626.3157894737,
            "unit": "ns",
            "range": "± 374128.53497573634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5404888.135593221,
            "unit": "ns",
            "range": "± 237314.97917233864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4764725.862068965,
            "unit": "ns",
            "range": "± 208372.71225896175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7753526.0869565215,
            "unit": "ns",
            "range": "± 365979.8381830914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325800,
            "unit": "ns",
            "range": "± 37617.31963925799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309631.52173913043,
            "unit": "ns",
            "range": "± 37065.83370744672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281215.306122449,
            "unit": "ns",
            "range": "± 32785.901395534245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4993785.555555556,
            "unit": "ns",
            "range": "± 277244.4715048886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4550141.111111111,
            "unit": "ns",
            "range": "± 355511.9618697231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25241.666666666668,
            "unit": "ns",
            "range": "± 7043.8277074279595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107265.625,
            "unit": "ns",
            "range": "± 16148.826440170098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120678.42105263157,
            "unit": "ns",
            "range": "± 18466.989889137578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121312.63157894737,
            "unit": "ns",
            "range": "± 20566.266751831812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8910,
            "unit": "ns",
            "range": "± 1484.3793391420909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22226.08695652174,
            "unit": "ns",
            "range": "± 4655.491134847234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "7fbea9473ea0daa98391f42d2deb04fed9519242",
          "message": "remove unused dependancy",
          "timestamp": "2023-10-23T10:39:04+09:00",
          "tree_id": "5aec75930706f355e45521f0cc263516994e7350",
          "url": "https://github.com/planetarium/libplanet/commit/7fbea9473ea0daa98391f42d2deb04fed9519242"
        },
        "date": 1698026253869,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1563954.255319149,
            "unit": "ns",
            "range": "± 98328.04095277975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2997440,
            "unit": "ns",
            "range": "± 146580.5165696923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1979427.6595744682,
            "unit": "ns",
            "range": "± 140455.17664392584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5205071.014492754,
            "unit": "ns",
            "range": "± 249889.7828228473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55940.86021505376,
            "unit": "ns",
            "range": "± 4019.5239973198804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8705835.9375,
            "unit": "ns",
            "range": "± 401733.2627531379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24604016.666666668,
            "unit": "ns",
            "range": "± 496214.37522150704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61099357.692307696,
            "unit": "ns",
            "range": "± 615601.2230082318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123568847.05882353,
            "unit": "ns",
            "range": "± 2394725.617925164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245499883.87096775,
            "unit": "ns",
            "range": "± 7476855.880965686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5482796.302083333,
            "unit": "ns",
            "range": "± 26831.378114364477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1728835.56640625,
            "unit": "ns",
            "range": "± 13747.218783171153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291091.5364583333,
            "unit": "ns",
            "range": "± 15300.696784833406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3198654.8177083335,
            "unit": "ns",
            "range": "± 30228.604742442676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009019.7005208334,
            "unit": "ns",
            "range": "± 12832.837516600728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933470.5143229166,
            "unit": "ns",
            "range": "± 9444.332965304917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3894137.8378378376,
            "unit": "ns",
            "range": "± 120737.66178360823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4024433.7662337665,
            "unit": "ns",
            "range": "± 205535.47498283186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4873737.2549019605,
            "unit": "ns",
            "range": "± 199078.75422634563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4366865.934065934,
            "unit": "ns",
            "range": "± 269196.424864728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7133956.25,
            "unit": "ns",
            "range": "± 216742.05560840017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305734.7826086957,
            "unit": "ns",
            "range": "± 11642.97055244168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286075.4716981132,
            "unit": "ns",
            "range": "± 11944.260057907077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255103.15789473685,
            "unit": "ns",
            "range": "± 16662.80385993918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4957678.571428572,
            "unit": "ns",
            "range": "± 64804.15678229088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4539314.285714285,
            "unit": "ns",
            "range": "± 69041.06756843357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24772.043010752688,
            "unit": "ns",
            "range": "± 2806.993037250618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99078.125,
            "unit": "ns",
            "range": "± 7572.334731737213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84733.33333333333,
            "unit": "ns",
            "range": "± 6527.539208303693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104342.26804123711,
            "unit": "ns",
            "range": "± 17250.367357510742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6943.75,
            "unit": "ns",
            "range": "± 1051.596530594265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25296.666666666668,
            "unit": "ns",
            "range": "± 1790.0128679469685"
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
          "id": "3209f508124e156d7667770fc08e27bf6d5c770f",
          "message": "Merge branch 'main' into add-cjs-support",
          "timestamp": "2023-10-23T14:35:29+09:00",
          "tree_id": "6f4b6dc9eae1d4afbeef25aec0647e33718abf4f",
          "url": "https://github.com/planetarium/libplanet/commit/3209f508124e156d7667770fc08e27bf6d5c770f"
        },
        "date": 1698040261240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1283758.762886598,
            "unit": "ns",
            "range": "± 99082.45382905564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2407651.5625,
            "unit": "ns",
            "range": "± 110726.78658464315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1909287.7551020407,
            "unit": "ns",
            "range": "± 127519.64818512868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8532820,
            "unit": "ns",
            "range": "± 704516.093579387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48679.41176470588,
            "unit": "ns",
            "range": "± 2238.2068264725854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7229946.153846154,
            "unit": "ns",
            "range": "± 72099.85685820991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19747573.333333332,
            "unit": "ns",
            "range": "± 308834.94543818955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49619815,
            "unit": "ns",
            "range": "± 1006246.3276297812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98643400,
            "unit": "ns",
            "range": "± 1184115.1372790288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199826666.66666666,
            "unit": "ns",
            "range": "± 3727315.783254115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4543804.895833333,
            "unit": "ns",
            "range": "± 15027.145767043434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1433899.3489583333,
            "unit": "ns",
            "range": "± 5532.846448151919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074957.03125,
            "unit": "ns",
            "range": "± 4920.218378752078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636093.973214286,
            "unit": "ns",
            "range": "± 6151.548730902278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847597.3111979166,
            "unit": "ns",
            "range": "± 3276.2481162053214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773769.4921875,
            "unit": "ns",
            "range": "± 2787.749349278458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3167336.3636363638,
            "unit": "ns",
            "range": "± 98388.8294541796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3259510.447761194,
            "unit": "ns",
            "range": "± 154497.40228700556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3996333.3333333335,
            "unit": "ns",
            "range": "± 182048.4178772584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3837158.8235294116,
            "unit": "ns",
            "range": "± 156398.5782243184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9943957.142857144,
            "unit": "ns",
            "range": "± 396586.0951084056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245151.11111111112,
            "unit": "ns",
            "range": "± 8957.973142864563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234767.5,
            "unit": "ns",
            "range": "± 7948.726313064251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209415,
            "unit": "ns",
            "range": "± 8831.46963603473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3967432,
            "unit": "ns",
            "range": "± 103039.55033545777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3722555,
            "unit": "ns",
            "range": "± 82378.9860468388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20528.125,
            "unit": "ns",
            "range": "± 1965.7971799327568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84190,
            "unit": "ns",
            "range": "± 5060.311532800008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73158.33333333333,
            "unit": "ns",
            "range": "± 4329.085637422798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80413.68421052632,
            "unit": "ns",
            "range": "± 9153.520547300608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5402.083333333333,
            "unit": "ns",
            "range": "± 688.2440152746725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19085.416666666668,
            "unit": "ns",
            "range": "± 1892.9775579989634"
          }
        ]
      }
    ]
  }
}