window.BENCHMARK_DATA = {
  "lastUpdate": 1701066876112,
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
        "date": 1700794476629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7608926.296296297,
            "unit": "ns",
            "range": "± 205567.69586754977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18869540.692307692,
            "unit": "ns",
            "range": "± 253920.80617861435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47568145.84375,
            "unit": "ns",
            "range": "± 1471881.310064164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94996312.64444445,
            "unit": "ns",
            "range": "± 3583841.2504399912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199343499.2948718,
            "unit": "ns",
            "range": "± 10139638.182855273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36189.681818181816,
            "unit": "ns",
            "range": "± 4482.653964367908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222562.19791666666,
            "unit": "ns",
            "range": "± 21826.175183707528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216692.74468085106,
            "unit": "ns",
            "range": "± 15211.571635157577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190735.86666666667,
            "unit": "ns",
            "range": "± 12651.285016626181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3712201.964285714,
            "unit": "ns",
            "range": "± 104366.64234020872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3449361.205882353,
            "unit": "ns",
            "range": "± 65694.40183889787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12717.644444444444,
            "unit": "ns",
            "range": "± 803.6282794213025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57789.23333333333,
            "unit": "ns",
            "range": "± 4306.063411965176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56965.05434782609,
            "unit": "ns",
            "range": "± 9446.33211958469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88753.88144329897,
            "unit": "ns",
            "range": "± 24289.703644001136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5257.375,
            "unit": "ns",
            "range": "± 1398.6007010768412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18445.694736842106,
            "unit": "ns",
            "range": "± 4328.785592252799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054623.14,
            "unit": "ns",
            "range": "± 102431.74363961059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2320695.6157894735,
            "unit": "ns",
            "range": "± 186982.8258169924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513540.5368421052,
            "unit": "ns",
            "range": "± 91105.00658998893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6611064.295698925,
            "unit": "ns",
            "range": "± 517425.56761141063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2927734.4137931033,
            "unit": "ns",
            "range": "± 123925.07705486346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3001735.5789473685,
            "unit": "ns",
            "range": "± 148941.8383947473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3594790.9545454546,
            "unit": "ns",
            "range": "± 84767.84148342897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3420917.6025641025,
            "unit": "ns",
            "range": "± 174302.60032845772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12483499.122448979,
            "unit": "ns",
            "range": "± 2433437.4314358993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5537455.165178572,
            "unit": "ns",
            "range": "± 543946.8531728353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869563.1249023438,
            "unit": "ns",
            "range": "± 37391.15341275621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1220001.2100260416,
            "unit": "ns",
            "range": "± 20236.805883106914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2930422.875892857,
            "unit": "ns",
            "range": "± 96045.64902509647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875793.5485587284,
            "unit": "ns",
            "range": "± 25153.770649935323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768221.6151855469,
            "unit": "ns",
            "range": "± 17182.639919541285"
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
        "date": 1700799388257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7656826.264705882,
            "unit": "ns",
            "range": "± 99097.36618569223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18823789.083333332,
            "unit": "ns",
            "range": "± 139726.53392606726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46493613.15384615,
            "unit": "ns",
            "range": "± 687552.5339523575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92823515.61538461,
            "unit": "ns",
            "range": "± 2163982.022807733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188079469.16666666,
            "unit": "ns",
            "range": "± 2788197.869620618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34086.806818181816,
            "unit": "ns",
            "range": "± 2855.631294248018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222225.59595959596,
            "unit": "ns",
            "range": "± 18448.33978809818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211065.64835164836,
            "unit": "ns",
            "range": "± 14645.996963428175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181728.36842105264,
            "unit": "ns",
            "range": "± 6155.867209730948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3737858.3125,
            "unit": "ns",
            "range": "± 68035.57045665524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3375244.2413793104,
            "unit": "ns",
            "range": "± 89911.74460454269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11940.552941176471,
            "unit": "ns",
            "range": "± 691.1998626591704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58686.586956521736,
            "unit": "ns",
            "range": "± 4691.739732511832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51169.35632183908,
            "unit": "ns",
            "range": "± 2843.3874695143054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59234.9375,
            "unit": "ns",
            "range": "± 9881.760894445888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3176.553191489362,
            "unit": "ns",
            "range": "± 296.2889688365414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12173.333333333334,
            "unit": "ns",
            "range": "± 801.8016230319251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030459.9387755102,
            "unit": "ns",
            "range": "± 82344.82596782551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2201752.7682926827,
            "unit": "ns",
            "range": "± 115529.17263019974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1480828.644329897,
            "unit": "ns",
            "range": "± 88692.85526126453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6301664.780487805,
            "unit": "ns",
            "range": "± 224980.0426233972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2883883.5,
            "unit": "ns",
            "range": "± 126552.499464909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3316565.6153846155,
            "unit": "ns",
            "range": "± 46556.089824602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3542569.8061224488,
            "unit": "ns",
            "range": "± 132639.44629084456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3389037.8983050846,
            "unit": "ns",
            "range": "± 141451.16360739502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12739697.42,
            "unit": "ns",
            "range": "± 2434575.069211754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4368264.868229167,
            "unit": "ns",
            "range": "± 46095.16210859367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1321866.52421875,
            "unit": "ns",
            "range": "± 17446.088846068516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 880819.4617838542,
            "unit": "ns",
            "range": "± 6059.833434691062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971842.5398995536,
            "unit": "ns",
            "range": "± 32631.92248374883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621332.2504557292,
            "unit": "ns",
            "range": "± 7138.434313621779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559248.6001953125,
            "unit": "ns",
            "range": "± 4512.02979620212"
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
        "date": 1701066091963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8971666.316091955,
            "unit": "ns",
            "range": "± 635739.7635846292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21274351.73529412,
            "unit": "ns",
            "range": "± 672727.2409644153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52612749.35714286,
            "unit": "ns",
            "range": "± 1784533.599919879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111793841.28571428,
            "unit": "ns",
            "range": "± 8873610.685155975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212198428.07142857,
            "unit": "ns",
            "range": "± 3249134.1632598233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73152.87113402062,
            "unit": "ns",
            "range": "± 22475.66412455906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242175.2789473684,
            "unit": "ns",
            "range": "± 24452.627263090508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251039.4814814815,
            "unit": "ns",
            "range": "± 6960.362967825359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220482.11111111112,
            "unit": "ns",
            "range": "± 23408.036663212573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3801383.782608696,
            "unit": "ns",
            "range": "± 93391.97904431746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3539679,
            "unit": "ns",
            "range": "± 52037.246704422425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17414.315217391304,
            "unit": "ns",
            "range": "± 3305.343359429082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87027.61956521739,
            "unit": "ns",
            "range": "± 13223.230281344235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83525.58888888889,
            "unit": "ns",
            "range": "± 12143.088098843704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71102.78571428571,
            "unit": "ns",
            "range": "± 17151.58779476242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3741.887755102041,
            "unit": "ns",
            "range": "± 987.2003095566384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13267.702127659575,
            "unit": "ns",
            "range": "± 2094.4393228223807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511634.948979592,
            "unit": "ns",
            "range": "± 400874.1086450025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2997714.484210526,
            "unit": "ns",
            "range": "± 699988.9590633505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155103.030927835,
            "unit": "ns",
            "range": "± 556825.5460825727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9782664.578947369,
            "unit": "ns",
            "range": "± 2264939.09473024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3054316.969230769,
            "unit": "ns",
            "range": "± 142583.71194417786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3355884.918604651,
            "unit": "ns",
            "range": "± 290139.9692608203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3839610.272727273,
            "unit": "ns",
            "range": "± 165952.18231420623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3755955.5,
            "unit": "ns",
            "range": "± 83670.70321866109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13540909.289473685,
            "unit": "ns",
            "range": "± 2663547.4034761996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4443170.853236607,
            "unit": "ns",
            "range": "± 38663.4720583826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1367819.368861607,
            "unit": "ns",
            "range": "± 8011.5120055740235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 907968.6385967548,
            "unit": "ns",
            "range": "± 8153.686712056793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1994854.0736177885,
            "unit": "ns",
            "range": "± 27369.53005312055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636995.1026141827,
            "unit": "ns",
            "range": "± 3645.0737379642947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576890.9145883414,
            "unit": "ns",
            "range": "± 2241.0540736706625"
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
        "date": 1701066810836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7790154.1875,
            "unit": "ns",
            "range": "± 234627.78292881843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18760479.35714286,
            "unit": "ns",
            "range": "± 128891.93754018379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48022776.30434783,
            "unit": "ns",
            "range": "± 1701501.6375138736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105662313.03157894,
            "unit": "ns",
            "range": "± 8144634.661456489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220057433.06756756,
            "unit": "ns",
            "range": "± 7430085.784302059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40844.68817204301,
            "unit": "ns",
            "range": "± 7770.756451312797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253903.1348314607,
            "unit": "ns",
            "range": "± 52355.15569649603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259787.32222222222,
            "unit": "ns",
            "range": "± 56558.51092086864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230244.9367816092,
            "unit": "ns",
            "range": "± 36598.99550143392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3814837.75,
            "unit": "ns",
            "range": "± 48369.14040377398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3791876.3764044945,
            "unit": "ns",
            "range": "± 403930.4719186274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15062.27894736842,
            "unit": "ns",
            "range": "± 2612.905891014208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71240.07692307692,
            "unit": "ns",
            "range": "± 1131.7821095907743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64318.78125,
            "unit": "ns",
            "range": "± 9304.224625295787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67111.54166666667,
            "unit": "ns",
            "range": "± 10801.760598129282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4506.135416666667,
            "unit": "ns",
            "range": "± 1176.5717605760765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13862.5,
            "unit": "ns",
            "range": "± 1908.840505889132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045381.76,
            "unit": "ns",
            "range": "± 105422.93772480293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2177237.9795918367,
            "unit": "ns",
            "range": "± 86430.67496976256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1504010.2727272727,
            "unit": "ns",
            "range": "± 113359.30874137695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6915284.094736842,
            "unit": "ns",
            "range": "± 671356.3455183441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3097499.716666667,
            "unit": "ns",
            "range": "± 137104.46301221385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256413.409090909,
            "unit": "ns",
            "range": "± 272855.1461289472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3847159.904761905,
            "unit": "ns",
            "range": "± 203346.48055898526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3721790.445652174,
            "unit": "ns",
            "range": "± 208697.54252018407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14164385.673913043,
            "unit": "ns",
            "range": "± 2565171.7002489413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4317001.815504808,
            "unit": "ns",
            "range": "± 16740.13644302181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1391021.8690104166,
            "unit": "ns",
            "range": "± 14454.958327018981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 896005.2193509615,
            "unit": "ns",
            "range": "± 3737.3064229791207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2004410.1095252405,
            "unit": "ns",
            "range": "± 22333.864994645268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647601.3493652344,
            "unit": "ns",
            "range": "± 7125.3730478948655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 685068.5456542969,
            "unit": "ns",
            "range": "± 94040.92800971835"
          }
        ]
      }
    ]
  }
}