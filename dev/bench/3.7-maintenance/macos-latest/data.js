window.BENCHMARK_DATA = {
  "lastUpdate": 1700491743383,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "9096adbe5ba18dfe201c3ac979fc0e3eec3bab53",
          "message": "Merge pull request #3463 from OnedgeLee/release/3.7.0\n\n🚀 Release 3.7.0",
          "timestamp": "2023-10-27T22:28:05+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/planetarium/libplanet/commit/9096adbe5ba18dfe201c3ac979fc0e3eec3bab53"
        },
        "date": 1698414729900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9731679.931818182,
            "unit": "ns",
            "range": "± 2393431.324901955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19362560.147058822,
            "unit": "ns",
            "range": "± 389108.3276760697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48466406,
            "unit": "ns",
            "range": "± 641827.7425209197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97612386.4736842,
            "unit": "ns",
            "range": "± 1660311.956905869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205742757.67333335,
            "unit": "ns",
            "range": "± 9895095.324903002"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50079.416666666664,
            "unit": "ns",
            "range": "± 10429.959449551961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268706.3023255814,
            "unit": "ns",
            "range": "± 42855.52326241927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298723.3144329897,
            "unit": "ns",
            "range": "± 75181.26967665799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247596.29245283018,
            "unit": "ns",
            "range": "± 10260.504754712625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4504160.076086956,
            "unit": "ns",
            "range": "± 812935.8881338031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716758.765957447,
            "unit": "ns",
            "range": "± 144089.30606190232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18609.9375,
            "unit": "ns",
            "range": "± 3846.586384978929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82638.4,
            "unit": "ns",
            "range": "± 11930.940996934836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70730.55,
            "unit": "ns",
            "range": "± 17442.827263287018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87695.7258064516,
            "unit": "ns",
            "range": "± 14539.165490322303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5838.721649484536,
            "unit": "ns",
            "range": "± 2326.7328074212955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19128.784090909092,
            "unit": "ns",
            "range": "± 3765.7430627854055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1139544.2978723405,
            "unit": "ns",
            "range": "± 113567.33543186224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498581.8214285714,
            "unit": "ns",
            "range": "± 174967.92980395976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1715328.2872340425,
            "unit": "ns",
            "range": "± 175502.87903809026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7868845.9125,
            "unit": "ns",
            "range": "± 623343.1712084503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3138700.3139534886,
            "unit": "ns",
            "range": "± 307642.2908426665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3532919.092783505,
            "unit": "ns",
            "range": "± 692378.501661469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4024036.817647059,
            "unit": "ns",
            "range": "± 442703.7847167705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5134558.221649485,
            "unit": "ns",
            "range": "± 1255686.4354156533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14075847.868131869,
            "unit": "ns",
            "range": "± 2988812.5106910127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4739845.506510417,
            "unit": "ns",
            "range": "± 177025.45631780883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1408261.0536458334,
            "unit": "ns",
            "range": "± 23276.223736130403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 901269.2815104167,
            "unit": "ns",
            "range": "± 16128.109787414725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2115173.998545545,
            "unit": "ns",
            "range": "± 122796.02725080057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658704.5162179129,
            "unit": "ns",
            "range": "± 33236.33861793769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558074.2448828125,
            "unit": "ns",
            "range": "± 14727.193043061716"
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
          "distinct": false,
          "id": "630d3e5a289c2ac575750f4fd85df62a6da710f1",
          "message": "Merge pull request #3466 from planetarium/use-nodejs-18\n\nUse Nodejs 18",
          "timestamp": "2023-10-30T14:38:44+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/630d3e5a289c2ac575750f4fd85df62a6da710f1"
        },
        "date": 1698646699242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9029747.113402061,
            "unit": "ns",
            "range": "± 523519.23288706795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21735735.403225806,
            "unit": "ns",
            "range": "± 972908.3269122004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55006312.657142855,
            "unit": "ns",
            "range": "± 1793592.3264335762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105786120.5,
            "unit": "ns",
            "range": "± 1717484.6849213825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220974985.55555555,
            "unit": "ns",
            "range": "± 4520151.297625429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76000.71739130435,
            "unit": "ns",
            "range": "± 6167.044674571101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318168.9479166667,
            "unit": "ns",
            "range": "± 33868.57782956436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343745.25773195876,
            "unit": "ns",
            "range": "± 49405.21580664972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303379.1182795699,
            "unit": "ns",
            "range": "± 17753.077152040227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4389301.488888889,
            "unit": "ns",
            "range": "± 274547.52984019695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4357458.424242424,
            "unit": "ns",
            "range": "± 506102.2952124682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27165.074468085106,
            "unit": "ns",
            "range": "± 7209.43641517854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131915.20707070708,
            "unit": "ns",
            "range": "± 28079.71782311143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120944.77894736842,
            "unit": "ns",
            "range": "± 16489.38717180477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126504.65263157895,
            "unit": "ns",
            "range": "± 20135.91790687774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7994.55376344086,
            "unit": "ns",
            "range": "± 1058.8154924622484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22652.73076923077,
            "unit": "ns",
            "range": "± 3257.8163616376305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484514.0894736843,
            "unit": "ns",
            "range": "± 138979.38104154653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2908932.0428571426,
            "unit": "ns",
            "range": "± 140558.17135062948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504851.5,
            "unit": "ns",
            "range": "± 263593.6224911369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10620312.543209877,
            "unit": "ns",
            "range": "± 899641.9569552524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3529720.7040816327,
            "unit": "ns",
            "range": "± 419238.7491587459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3560941.173469388,
            "unit": "ns",
            "range": "± 232763.6689782736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4475103.58974359,
            "unit": "ns",
            "range": "± 230948.15909239714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4446121.36,
            "unit": "ns",
            "range": "± 309301.4347204874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16363452.113402061,
            "unit": "ns",
            "range": "± 2135343.1521494472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6751688.4521169355,
            "unit": "ns",
            "range": "± 304202.597002355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825003.823046875,
            "unit": "ns",
            "range": "± 26144.689819486357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147498.88671875,
            "unit": "ns",
            "range": "± 12311.894744596717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3181950.0203993055,
            "unit": "ns",
            "range": "± 65761.80834287651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895196.8186197917,
            "unit": "ns",
            "range": "± 12948.424818046566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761794.0929624496,
            "unit": "ns",
            "range": "± 23193.072640192193"
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
          "id": "14419c5bf4f1227746805085cc75c6e14c984e90",
          "message": "Merge pull request #3464 from OnedgeLee/prepare/3.7.1\n\n🔧 Prepare 3.7.1",
          "timestamp": "2023-10-30T17:36:19+09:00",
          "tree_id": "128822e516289030ef4a4d75fb9f83ebcd06916b",
          "url": "https://github.com/planetarium/libplanet/commit/14419c5bf4f1227746805085cc75c6e14c984e90"
        },
        "date": 1698656325793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9661021.21875,
            "unit": "ns",
            "range": "± 1207670.402996104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26549730.907216493,
            "unit": "ns",
            "range": "± 4590188.503048629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70415040.86666666,
            "unit": "ns",
            "range": "± 12427154.21781159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137910286.32222223,
            "unit": "ns",
            "range": "± 15413407.16112494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283403482.35106385,
            "unit": "ns",
            "range": "± 58521421.08108161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68389.64130434782,
            "unit": "ns",
            "range": "± 21590.73289126637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333837.58602150535,
            "unit": "ns",
            "range": "± 79769.10893944172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333555.51612903224,
            "unit": "ns",
            "range": "± 91601.6551262102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326307.84375,
            "unit": "ns",
            "range": "± 94590.96521392328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5267762.929292929,
            "unit": "ns",
            "range": "± 1141002.2236475162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4796027.095744681,
            "unit": "ns",
            "range": "± 1057466.9080633572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27000.15625,
            "unit": "ns",
            "range": "± 4788.975130065051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112559.41666666667,
            "unit": "ns",
            "range": "± 30617.466099792284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111760.9247311828,
            "unit": "ns",
            "range": "± 23402.3719822681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103095.7,
            "unit": "ns",
            "range": "± 20253.706017376124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8626.122448979591,
            "unit": "ns",
            "range": "± 1824.1632597587675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24167.684210526317,
            "unit": "ns",
            "range": "± 6719.45416707871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309920.177777778,
            "unit": "ns",
            "range": "± 194678.9239204439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2581467.449438202,
            "unit": "ns",
            "range": "± 289464.1807470239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1784193.5425531915,
            "unit": "ns",
            "range": "± 200112.13368411994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9291915.067415731,
            "unit": "ns",
            "range": "± 2140609.614263884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4213181.316326531,
            "unit": "ns",
            "range": "± 968048.949287531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4518301.6122448975,
            "unit": "ns",
            "range": "± 904007.9314839839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5670769.106382979,
            "unit": "ns",
            "range": "± 1616071.2174572085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5333588.389473684,
            "unit": "ns",
            "range": "± 1358448.3619018407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19232374.565934066,
            "unit": "ns",
            "range": "± 4389438.109056313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4976804.975520833,
            "unit": "ns",
            "range": "± 316964.9724282448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1629294.704494201,
            "unit": "ns",
            "range": "± 211961.22566254917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 931017.9631618924,
            "unit": "ns",
            "range": "± 30614.344384354423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2266753.0901988638,
            "unit": "ns",
            "range": "± 115499.55000150479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 668994.511570786,
            "unit": "ns",
            "range": "± 21073.78871168559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599195.3284040178,
            "unit": "ns",
            "range": "± 20656.266912747593"
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
          "id": "488a3058fdbab4bb136baf75ce95cf52206e06d3",
          "message": "Merge pull request #3500 from greymistcube/port/3.6.1-to-3.7.1\n\n🔀 Port 3.6.1 to 3.7.1",
          "timestamp": "2023-11-20T23:23:14+09:00",
          "tree_id": "acbf576ffed94e9f951fd1e72fa90f9712fea70c",
          "url": "https://github.com/planetarium/libplanet/commit/488a3058fdbab4bb136baf75ce95cf52206e06d3"
        },
        "date": 1700491691495,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14019822.377551021,
            "unit": "ns",
            "range": "± 2504033.923536323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31068763.410526317,
            "unit": "ns",
            "range": "± 5108857.326557323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78452217.78723404,
            "unit": "ns",
            "range": "± 13160942.624280592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 152576935.65979382,
            "unit": "ns",
            "range": "± 18957104.766109537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 317392511.25510204,
            "unit": "ns",
            "range": "± 44103986.82575325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74099.45161290323,
            "unit": "ns",
            "range": "± 16617.715253618666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379691.5520833333,
            "unit": "ns",
            "range": "± 110529.03880470505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371506.98979591834,
            "unit": "ns",
            "range": "± 97285.24078917167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236287.76041666666,
            "unit": "ns",
            "range": "± 36407.35513261739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3984025.6515151514,
            "unit": "ns",
            "range": "± 308141.14358508796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3376475.9166666665,
            "unit": "ns",
            "range": "± 27777.88950180057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13731.298969072164,
            "unit": "ns",
            "range": "± 1262.8402277946432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63422.720430107525,
            "unit": "ns",
            "range": "± 5325.363325767164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50109.23809523809,
            "unit": "ns",
            "range": "± 2691.694130473454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65106.71875,
            "unit": "ns",
            "range": "± 13462.154387844876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3220.0860215053763,
            "unit": "ns",
            "range": "± 344.84863270193034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11787.21978021978,
            "unit": "ns",
            "range": "± 668.9234934197184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1929728.836734694,
            "unit": "ns",
            "range": "± 556900.0799287965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3925155.469072165,
            "unit": "ns",
            "range": "± 935546.4427780902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2324911.663043478,
            "unit": "ns",
            "range": "± 627050.7076668526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12758884.608247424,
            "unit": "ns",
            "range": "± 3373528.448761729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4676753.18,
            "unit": "ns",
            "range": "± 1057504.7744699048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4960358.1122448975,
            "unit": "ns",
            "range": "± 1148868.1777067797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5994038.806122449,
            "unit": "ns",
            "range": "± 1328272.3092082262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5470646.948979592,
            "unit": "ns",
            "range": "± 1288238.0732691726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19083621.25,
            "unit": "ns",
            "range": "± 3742752.8276449093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4334460.194299769,
            "unit": "ns",
            "range": "± 109740.45352778815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1371874.8680245536,
            "unit": "ns",
            "range": "± 28148.441214051076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 872030.3996465774,
            "unit": "ns",
            "range": "± 19668.08056613488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945976.125366211,
            "unit": "ns",
            "range": "± 36712.00781518764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606625.9630859375,
            "unit": "ns",
            "range": "± 8612.315834582103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 612085.0808496093,
            "unit": "ns",
            "range": "± 40705.407192193605"
          }
        ]
      }
    ]
  }
}