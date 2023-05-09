window.BENCHMARK_DATA = {
  "lastUpdate": 1683626838713,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0592dab33dbeb79fc063cbfd4701914bf1aae8d",
          "message": "Merge pull request #2904 from colibrishin/benchmark/spliting-merged-fix-fix\n\nci/bench: use trigger branch/tag name as directory [skip changelog]",
          "timestamp": "2023-03-09T18:41:52+09:00",
          "tree_id": "aee1d02a16944476e40011981949805b963d4c00",
          "url": "https://github.com/planetarium/libplanet/commit/e0592dab33dbeb79fc063cbfd4701914bf1aae8d"
        },
        "date": 1678356259401,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618280.412371134,
            "unit": "ns",
            "range": "± 153381.2350261971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2966303.846153846,
            "unit": "ns",
            "range": "± 79880.65338124987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471260,
            "unit": "ns",
            "range": "± 129243.29094063086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6249664,
            "unit": "ns",
            "range": "± 380296.86450923514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62602.04081632653,
            "unit": "ns",
            "range": "± 7932.797371838433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8599928.57142857,
            "unit": "ns",
            "range": "± 370203.3469296598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23854526.666666668,
            "unit": "ns",
            "range": "± 317109.907640568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59303320,
            "unit": "ns",
            "range": "± 742795.7133117326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 120391750,
            "unit": "ns",
            "range": "± 561540.0405517465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 239765080,
            "unit": "ns",
            "range": "± 1112223.533031275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5185172.135416667,
            "unit": "ns",
            "range": "± 77039.17669190878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1600595.2311197917,
            "unit": "ns",
            "range": "± 2493.6223895343733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224137.2445913462,
            "unit": "ns",
            "range": "± 7017.050945084821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2740081.8917410714,
            "unit": "ns",
            "range": "± 20854.148712699352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859889.8356119791,
            "unit": "ns",
            "range": "± 1343.3477952008598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779087.5813802084,
            "unit": "ns",
            "range": "± 2102.059389060438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3887810,
            "unit": "ns",
            "range": "± 105756.34765329937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6057020,
            "unit": "ns",
            "range": "± 149666.7603934376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27986886.666666668,
            "unit": "ns",
            "range": "± 493833.916364987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7204806.862745098,
            "unit": "ns",
            "range": "± 294143.68139050814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32304507.14285714,
            "unit": "ns",
            "range": "± 523894.89618887036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221937.14285714287,
            "unit": "ns",
            "range": "± 10768.905471391225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229460.5633802817,
            "unit": "ns",
            "range": "± 11157.758080920832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232866.66666666666,
            "unit": "ns",
            "range": "± 12478.510041323269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13084746.666666666,
            "unit": "ns",
            "range": "± 166753.8342530547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10632940,
            "unit": "ns",
            "range": "± 108283.75290345798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33553.06122448979,
            "unit": "ns",
            "range": "± 3911.1578184405953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74725.80645161291,
            "unit": "ns",
            "range": "± 6572.751776741121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62382,
            "unit": "ns",
            "range": "± 6839.315637096915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145782.6530612245,
            "unit": "ns",
            "range": "± 23060.682054228742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9417.34693877551,
            "unit": "ns",
            "range": "± 1675.1073521655835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32564.583333333332,
            "unit": "ns",
            "range": "± 2980.6032298907357"
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
          "id": "6105566dddbe83ae6c4adb218287356746a639ef",
          "message": "Merge pull request #2894 from greymistcube/refactor/block-commit-cache\n\n♻️ Refactor block commit cache",
          "timestamp": "2023-03-13T15:51:32+09:00",
          "tree_id": "f8a594a2f58365c2a259a9e7f236d46f03039676",
          "url": "https://github.com/planetarium/libplanet/commit/6105566dddbe83ae6c4adb218287356746a639ef"
        },
        "date": 1678691415486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398986.8686868686,
            "unit": "ns",
            "range": "± 99571.85145069522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2631886,
            "unit": "ns",
            "range": "± 102637.48123907777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185341.935483871,
            "unit": "ns",
            "range": "± 140523.5198653365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5295485.454545454,
            "unit": "ns",
            "range": "± 222978.58427160903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52741.05263157895,
            "unit": "ns",
            "range": "± 3404.6743443121645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7164914.285714285,
            "unit": "ns",
            "range": "± 170424.73202476886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20400773.333333332,
            "unit": "ns",
            "range": "± 248372.60162525022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49231962.5,
            "unit": "ns",
            "range": "± 951802.1950489503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101225980,
            "unit": "ns",
            "range": "± 1269288.598951622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199895257.14285713,
            "unit": "ns",
            "range": "± 1943076.9828030234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4775067.075892857,
            "unit": "ns",
            "range": "± 20461.262817139912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542733.41796875,
            "unit": "ns",
            "range": "± 2503.625582787006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162203.2682291667,
            "unit": "ns",
            "range": "± 4583.805992373674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627905.050223214,
            "unit": "ns",
            "range": "± 4220.145837415359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817552.6715959822,
            "unit": "ns",
            "range": "± 814.6432610225505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756309.1471354166,
            "unit": "ns",
            "range": "± 3316.666306808061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191566.6666666665,
            "unit": "ns",
            "range": "± 95070.65732946982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5075145.454545454,
            "unit": "ns",
            "range": "± 122954.45431336694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23905514.285714287,
            "unit": "ns",
            "range": "± 344580.5741592408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6770407.407407408,
            "unit": "ns",
            "range": "± 186780.95547361174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26596411.111111112,
            "unit": "ns",
            "range": "± 559861.7611821572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193916.98113207548,
            "unit": "ns",
            "range": "± 8053.277781057097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187161.90476190476,
            "unit": "ns",
            "range": "± 6855.012493306733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165091.83673469388,
            "unit": "ns",
            "range": "± 9926.904745626392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11169870.588235294,
            "unit": "ns",
            "range": "± 215881.82752580717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9084836,
            "unit": "ns",
            "range": "± 237450.30160716438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23738.383838383837,
            "unit": "ns",
            "range": "± 2807.8863817464844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57956.382978723406,
            "unit": "ns",
            "range": "± 5090.018875488129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43855.208333333336,
            "unit": "ns",
            "range": "± 2727.2453730021075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105039.75903614458,
            "unit": "ns",
            "range": "± 10863.442159416343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7753.6082474226805,
            "unit": "ns",
            "range": "± 1174.2073439550352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22038.947368421053,
            "unit": "ns",
            "range": "± 2007.819540125827"
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
          "id": "b5d31eda81c48c6d63fff52f7727afb334c60a8a",
          "message": "Merge pull request #2921 from OnedgeLee/merge/0.51.1\n\nMerge 0.51.1 to main",
          "timestamp": "2023-03-13T17:40:15+09:00",
          "tree_id": "49d0d5313e846d8a0a998dd5a33189bc7e9b128f",
          "url": "https://github.com/planetarium/libplanet/commit/b5d31eda81c48c6d63fff52f7727afb334c60a8a"
        },
        "date": 1678697859326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447739.393939394,
            "unit": "ns",
            "range": "± 118268.23267832081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527895.1612903224,
            "unit": "ns",
            "range": "± 75385.70527056031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196145.9183673467,
            "unit": "ns",
            "range": "± 132473.23570836795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5079888.461538462,
            "unit": "ns",
            "range": "± 135227.3828096161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52635.416666666664,
            "unit": "ns",
            "range": "± 4256.21475434308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7415826.666666667,
            "unit": "ns",
            "range": "± 126228.76323036152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20386920,
            "unit": "ns",
            "range": "± 181523.89925296337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50544564.28571428,
            "unit": "ns",
            "range": "± 235260.93077570392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102171113.33333333,
            "unit": "ns",
            "range": "± 689105.054054757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204442964.2857143,
            "unit": "ns",
            "range": "± 861426.1338100842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4918998.151041667,
            "unit": "ns",
            "range": "± 22831.81089856601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539282.578125,
            "unit": "ns",
            "range": "± 4293.410111981602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171229.2550223214,
            "unit": "ns",
            "range": "± 3270.5484957447734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656165.652901786,
            "unit": "ns",
            "range": "± 5849.460090264504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825889.74609375,
            "unit": "ns",
            "range": "± 1501.4864462075577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758518.4830729166,
            "unit": "ns",
            "range": "± 1189.865107513852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354100,
            "unit": "ns",
            "range": "± 27886.73519793954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5301296.96969697,
            "unit": "ns",
            "range": "± 163377.4951700212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23849246.666666668,
            "unit": "ns",
            "range": "± 297219.6755327775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6487764.285714285,
            "unit": "ns",
            "range": "± 93057.54718405213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27430606.666666668,
            "unit": "ns",
            "range": "± 430409.46528802527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194901.35135135136,
            "unit": "ns",
            "range": "± 9707.661756518442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193267.6923076923,
            "unit": "ns",
            "range": "± 8500.020361966563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186321,
            "unit": "ns",
            "range": "± 11268.184360751238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11609980,
            "unit": "ns",
            "range": "± 78657.92304112064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9352664.285714285,
            "unit": "ns",
            "range": "± 113811.9880608964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25624.48979591837,
            "unit": "ns",
            "range": "± 2630.0429703082796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59706.31578947369,
            "unit": "ns",
            "range": "± 5771.330657551219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46985.555555555555,
            "unit": "ns",
            "range": "± 2967.1066037475803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114450,
            "unit": "ns",
            "range": "± 17381.817481131497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7513.265306122449,
            "unit": "ns",
            "range": "± 1010.2197122563731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23735.05154639175,
            "unit": "ns",
            "range": "± 2372.939511323166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678703710486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1278093,
            "unit": "ns",
            "range": "± 130901.03845920005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2502583.3333333335,
            "unit": "ns",
            "range": "± 104503.35148548162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2044967,
            "unit": "ns",
            "range": "± 145902.49757625774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5265217.171717172,
            "unit": "ns",
            "range": "± 328535.2688302866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47561.84210526316,
            "unit": "ns",
            "range": "± 2421.017257560034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6853753.846153846,
            "unit": "ns",
            "range": "± 12403.199545857471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18334185.714285713,
            "unit": "ns",
            "range": "± 202748.2736610289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45590413.333333336,
            "unit": "ns",
            "range": "± 804301.0717978922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91464638.46153846,
            "unit": "ns",
            "range": "± 979476.849767655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 181209250,
            "unit": "ns",
            "range": "± 2135099.038184679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4745474.051339285,
            "unit": "ns",
            "range": "± 18380.63900911887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481180.8333333333,
            "unit": "ns",
            "range": "± 4990.136189160803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140693.2161458333,
            "unit": "ns",
            "range": "± 4884.658131918191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684157.1354166665,
            "unit": "ns",
            "range": "± 21734.605139102205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822661.7838541666,
            "unit": "ns",
            "range": "± 2535.290176019171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747215.0948660715,
            "unit": "ns",
            "range": "± 2112.2813041579475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2948612.121212121,
            "unit": "ns",
            "range": "± 92745.80434437371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4678019.354838709,
            "unit": "ns",
            "range": "± 134800.71072847955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21787615.789473683,
            "unit": "ns",
            "range": "± 479890.46813154017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5580352.631578947,
            "unit": "ns",
            "range": "± 118674.44903517004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24979336,
            "unit": "ns",
            "range": "± 662325.5933199824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176455.84415584416,
            "unit": "ns",
            "range": "± 8997.419125658282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172577.10843373495,
            "unit": "ns",
            "range": "± 9217.974557977115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146541.66666666666,
            "unit": "ns",
            "range": "± 4877.140555694495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10299430.76923077,
            "unit": "ns",
            "range": "± 96066.12639752704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8389781.818181818,
            "unit": "ns",
            "range": "± 205212.84104526727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17419.14893617021,
            "unit": "ns",
            "range": "± 1721.2946237877397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50327.65957446808,
            "unit": "ns",
            "range": "± 3989.270670813761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37760.606060606064,
            "unit": "ns",
            "range": "± 1183.4640346086235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85711.53846153847,
            "unit": "ns",
            "range": "± 4694.428329696529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5479.166666666667,
            "unit": "ns",
            "range": "± 691.7432847016474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17643.478260869564,
            "unit": "ns",
            "range": "± 1592.448135876419"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba5b680d8f3173eec161e6af2e2edcb471a8f3b",
          "message": "Merge pull request #2925 from colibrishin/prepare/0.53\n\n🔧 Prepare 0.53.0",
          "timestamp": "2023-03-14T00:31:45+09:00",
          "tree_id": "9c83cab9a04832002ac43889c4b0401dbc846dcb",
          "url": "https://github.com/planetarium/libplanet/commit/4ba5b680d8f3173eec161e6af2e2edcb471a8f3b"
        },
        "date": 1678722791894,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668202.06185567,
            "unit": "ns",
            "range": "± 138497.77448526432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3070322,
            "unit": "ns",
            "range": "± 122570.63817593976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2582036.9565217393,
            "unit": "ns",
            "range": "± 181401.53246829045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5874431.818181818,
            "unit": "ns",
            "range": "± 112312.5290316676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62274.489795918365,
            "unit": "ns",
            "range": "± 5299.140393711601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9273246.511627907,
            "unit": "ns",
            "range": "± 342496.11978951655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24217087.5,
            "unit": "ns",
            "range": "± 379446.05391719827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59823158.333333336,
            "unit": "ns",
            "range": "± 192052.32931930217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 120125557.14285715,
            "unit": "ns",
            "range": "± 730944.4677573359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 242106729.4117647,
            "unit": "ns",
            "range": "± 3541115.1327591543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5767556.473214285,
            "unit": "ns",
            "range": "± 65145.7348267403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908005.296875,
            "unit": "ns",
            "range": "± 50340.897725079725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425505.4565429688,
            "unit": "ns",
            "range": "± 43908.101367973344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3136376.231971154,
            "unit": "ns",
            "range": "± 21686.83856338546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015732.9159007353,
            "unit": "ns",
            "range": "± 32289.37790361772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935729.5442708334,
            "unit": "ns",
            "range": "± 10670.407761741199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3991872.727272727,
            "unit": "ns",
            "range": "± 108920.27265598698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6275014.285714285,
            "unit": "ns",
            "range": "± 227480.00455835147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28842150,
            "unit": "ns",
            "range": "± 586469.0253091452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7568194.339622642,
            "unit": "ns",
            "range": "± 311626.42354582093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32392935,
            "unit": "ns",
            "range": "± 745914.9755942626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226541.66666666666,
            "unit": "ns",
            "range": "± 8705.533415979608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222979.3650793651,
            "unit": "ns",
            "range": "± 9610.312987588179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219137.5,
            "unit": "ns",
            "range": "± 7794.300596902315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13595900,
            "unit": "ns",
            "range": "± 226640.84430590243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11165186.842105264,
            "unit": "ns",
            "range": "± 246190.03321852887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28461.458333333332,
            "unit": "ns",
            "range": "± 2975.35030371628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69773.68421052632,
            "unit": "ns",
            "range": "± 6364.633173336151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59039.393939393936,
            "unit": "ns",
            "range": "± 5291.32555788762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123690.80459770115,
            "unit": "ns",
            "range": "± 13722.614438200671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9591.666666666666,
            "unit": "ns",
            "range": "± 1169.8552916958458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25921.978021978022,
            "unit": "ns",
            "range": "± 2025.9868485808863"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "955091416ce990cac6d02fd02e57820fc1368b60",
          "message": "Merge pull request #2703 from longfin/feature/eliminate-completer\n\nRemove StateCompleters",
          "timestamp": "2023-03-14T01:19:32+09:00",
          "tree_id": "c74812b0f7d4eac0d6d751aeaf7ca384424b21f3",
          "url": "https://github.com/planetarium/libplanet/commit/955091416ce990cac6d02fd02e57820fc1368b60"
        },
        "date": 1678725418098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488925,
            "unit": "ns",
            "range": "± 22918.39773076326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2356950,
            "unit": "ns",
            "range": "± 82716.62158949365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087009.756097561,
            "unit": "ns",
            "range": "± 110298.72525343332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4742203.846153846,
            "unit": "ns",
            "range": "± 126895.01638998825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42845.58823529412,
            "unit": "ns",
            "range": "± 2043.1490052783652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7106750,
            "unit": "ns",
            "range": "± 52950.36500201064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18095486.666666668,
            "unit": "ns",
            "range": "± 87576.12090279491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46093593.333333336,
            "unit": "ns",
            "range": "± 272243.16721497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92418960,
            "unit": "ns",
            "range": "± 687394.9122801037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185013633.33333334,
            "unit": "ns",
            "range": "± 629218.4888150273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4781056.473214285,
            "unit": "ns",
            "range": "± 5457.636565188531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510912.665264423,
            "unit": "ns",
            "range": "± 929.1315782458726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231229.0364583333,
            "unit": "ns",
            "range": "± 1510.7459636451638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584594.921875,
            "unit": "ns",
            "range": "± 7955.0652516687605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825345.1998197115,
            "unit": "ns",
            "range": "± 5071.425044896627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726257.65625,
            "unit": "ns",
            "range": "± 1398.3694481880182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112042.8571428573,
            "unit": "ns",
            "range": "± 51555.13425578356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4787313.333333333,
            "unit": "ns",
            "range": "± 86166.10923647639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21607413.333333332,
            "unit": "ns",
            "range": "± 223280.97566796435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5860700,
            "unit": "ns",
            "range": "± 145036.55025231023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25017613.333333332,
            "unit": "ns",
            "range": "± 297931.32685874024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179486.36363636365,
            "unit": "ns",
            "range": "± 6687.774020783412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175444.18604651163,
            "unit": "ns",
            "range": "± 6408.3019935668635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152329.72972972973,
            "unit": "ns",
            "range": "± 7657.724718946148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10553926.666666666,
            "unit": "ns",
            "range": "± 68375.4599531844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8522371.42857143,
            "unit": "ns",
            "range": "± 59761.73754774266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18631.25,
            "unit": "ns",
            "range": "± 1858.42675400458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51200,
            "unit": "ns",
            "range": "± 4776.533137873566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35016.25,
            "unit": "ns",
            "range": "± 1833.4061646446382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91370.40816326531,
            "unit": "ns",
            "range": "± 14413.23996988961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4888.659793814433,
            "unit": "ns",
            "range": "± 649.8198931017657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18986.458333333332,
            "unit": "ns",
            "range": "± 1873.7308570233356"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d6a86e7ba818a9568589c6dd80d936725d1c9cb",
          "message": "Merge pull request #2889 from dahlia/bencodex-js",
          "timestamp": "2023-03-15T14:37:59+09:00",
          "tree_id": "a6706f9443e0d4bc7c974bb1d6daad4a58dd04b6",
          "url": "https://github.com/planetarium/libplanet/commit/1d6a86e7ba818a9568589c6dd80d936725d1c9cb"
        },
        "date": 1678859587986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1293707.2916666667,
            "unit": "ns",
            "range": "± 94892.86007724896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2316817.3913043477,
            "unit": "ns",
            "range": "± 57574.13128207298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2024578.5714285714,
            "unit": "ns",
            "range": "± 141177.8422569558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4779858.536585365,
            "unit": "ns",
            "range": "± 164796.16041584485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42130,
            "unit": "ns",
            "range": "± 1912.557188687439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7012176.923076923,
            "unit": "ns",
            "range": "± 40427.48969546493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18129726.666666668,
            "unit": "ns",
            "range": "± 225079.80954911673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45011521.428571425,
            "unit": "ns",
            "range": "± 313437.9614203434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 90534690,
            "unit": "ns",
            "range": "± 926659.4541685743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 178791626.66666666,
            "unit": "ns",
            "range": "± 1915754.0445574152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749860.416666667,
            "unit": "ns",
            "range": "± 9148.622382210368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502553.0078125,
            "unit": "ns",
            "range": "± 1241.8408943554261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148420.4622395833,
            "unit": "ns",
            "range": "± 1475.6417039478313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699663.253348214,
            "unit": "ns",
            "range": "± 19865.889594234428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802990.1227678572,
            "unit": "ns",
            "range": "± 2186.235727897749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745035.37109375,
            "unit": "ns",
            "range": "± 1239.4461078744864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2870292.8571428573,
            "unit": "ns",
            "range": "± 17172.449504308406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4514566.666666667,
            "unit": "ns",
            "range": "± 83558.45458918765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20798413.333333332,
            "unit": "ns",
            "range": "± 240891.3325448595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5650213.636363637,
            "unit": "ns",
            "range": "± 135750.53554381616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24267563.157894738,
            "unit": "ns",
            "range": "± 516964.45849306625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168358.82352941178,
            "unit": "ns",
            "range": "± 6848.070574127817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170455.31914893616,
            "unit": "ns",
            "range": "± 6632.981115824635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142714.2857142857,
            "unit": "ns",
            "range": "± 2481.580496023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10249346.666666666,
            "unit": "ns",
            "range": "± 165173.24180848364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8178160,
            "unit": "ns",
            "range": "± 96706.71272313151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15910.526315789473,
            "unit": "ns",
            "range": "± 1324.36043851688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47636.17021276596,
            "unit": "ns",
            "range": "± 3593.777509518415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37546.153846153844,
            "unit": "ns",
            "range": "± 1316.4637948219174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81900,
            "unit": "ns",
            "range": "± 13274.632811820438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4050,
            "unit": "ns",
            "range": "± 516.0579322844328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14985.714285714286,
            "unit": "ns",
            "range": "± 1407.72246543221"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "265bb73ca9c75e7e0b3db07877b4499ac5eaff40",
          "message": "Merge pull request #2915 from planetarium/ci-account-web3-secret-storage\n\n`@planetarium/account-web3-secret-storage`",
          "timestamp": "2023-03-16T10:14:58+09:00",
          "tree_id": "58eff47933c90310496dfcf5e4afb42d5c5dff14",
          "url": "https://github.com/planetarium/libplanet/commit/265bb73ca9c75e7e0b3db07877b4499ac5eaff40"
        },
        "date": 1678930211128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381147.0588235294,
            "unit": "ns",
            "range": "± 43250.885331937825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2332953.846153846,
            "unit": "ns",
            "range": "± 63255.83123013549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123018.3673469387,
            "unit": "ns",
            "range": "± 146062.99258707708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4818850,
            "unit": "ns",
            "range": "± 175570.77823695977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42019.718309859156,
            "unit": "ns",
            "range": "± 1857.4652250780487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7053473.333333333,
            "unit": "ns",
            "range": "± 26358.09625324329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18217273.333333332,
            "unit": "ns",
            "range": "± 156701.57017476915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46009456.666666664,
            "unit": "ns",
            "range": "± 269651.0005455906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93056978.57142857,
            "unit": "ns",
            "range": "± 456254.1235701057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 183753178.57142857,
            "unit": "ns",
            "range": "± 518141.264044367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4898380.769230769,
            "unit": "ns",
            "range": "± 6608.70053365843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531470.99609375,
            "unit": "ns",
            "range": "± 4385.4524961718225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149001.875,
            "unit": "ns",
            "range": "± 1719.9505636011356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617920.8984375,
            "unit": "ns",
            "range": "± 30414.14777126385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811190.8268229166,
            "unit": "ns",
            "range": "± 1503.5644502783105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782297.2037760416,
            "unit": "ns",
            "range": "± 701.861613236987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3001556.25,
            "unit": "ns",
            "range": "± 57550.32544072478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4694796.153846154,
            "unit": "ns",
            "range": "± 127341.45116424338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21278693.333333332,
            "unit": "ns",
            "range": "± 166409.24367640275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5705210.52631579,
            "unit": "ns",
            "range": "± 122138.10896202183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24844613.333333332,
            "unit": "ns",
            "range": "± 413221.2722132342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174294.5945945946,
            "unit": "ns",
            "range": "± 5780.952725495548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176956.81818181818,
            "unit": "ns",
            "range": "± 6556.104832202161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152958.66666666666,
            "unit": "ns",
            "range": "± 7719.317525731343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10396086.666666666,
            "unit": "ns",
            "range": "± 70936.99283435232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8341526.666666667,
            "unit": "ns",
            "range": "± 85433.2861415993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16293.478260869566,
            "unit": "ns",
            "range": "± 1327.751495005466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48081.05263157895,
            "unit": "ns",
            "range": "± 4720.536724280995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35285.9375,
            "unit": "ns",
            "range": "± 1639.6251204815953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84539.24050632911,
            "unit": "ns",
            "range": "± 4676.027728019797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5006.451612903225,
            "unit": "ns",
            "range": "± 459.3962132902422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17203.191489361703,
            "unit": "ns",
            "range": "± 1198.3592840589297"
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
          "id": "9537674d4df800fc6b18690a8a0a32959fabe81e",
          "message": "Merge pull request #2948 from greymistcube/port/0.52.1-to-main\n\n🔀 Port 0.52.1 to main",
          "timestamp": "2023-03-16T10:54:39+09:00",
          "tree_id": "6ddce03a1f5692ba28751d1da2768d6c6078c57d",
          "url": "https://github.com/planetarium/libplanet/commit/9537674d4df800fc6b18690a8a0a32959fabe81e"
        },
        "date": 1678932624506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354004.6391752576,
            "unit": "ns",
            "range": "± 117664.86042695811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2388982,
            "unit": "ns",
            "range": "± 95336.33414477014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2134427.551020408,
            "unit": "ns",
            "range": "± 146371.020440757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4773481.818181818,
            "unit": "ns",
            "range": "± 115044.54473258292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43576.470588235294,
            "unit": "ns",
            "range": "± 887.7847513366527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7110385.714285715,
            "unit": "ns",
            "range": "± 43920.85289109626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17759853.333333332,
            "unit": "ns",
            "range": "± 113202.65561414733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46010386.666666664,
            "unit": "ns",
            "range": "± 172338.2341570812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91154092.3076923,
            "unit": "ns",
            "range": "± 327185.3945944064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 184489726.66666666,
            "unit": "ns",
            "range": "± 955664.6897516384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4849236.057692308,
            "unit": "ns",
            "range": "± 4492.202194792018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521527.5520833333,
            "unit": "ns",
            "range": "± 1802.4091394162529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142742.1316964286,
            "unit": "ns",
            "range": "± 2398.1543684706976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568317.9129464286,
            "unit": "ns",
            "range": "± 13444.831322208138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799518.6872209822,
            "unit": "ns",
            "range": "± 955.2751589251475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744920.6682477678,
            "unit": "ns",
            "range": "± 1297.3321890381671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3068066.6666666665,
            "unit": "ns",
            "range": "± 55980.46427953577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4694664,
            "unit": "ns",
            "range": "± 64711.10079937342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21781873.333333332,
            "unit": "ns",
            "range": "± 200135.23808617392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5921043.75,
            "unit": "ns",
            "range": "± 110011.56283924583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24874126.666666668,
            "unit": "ns",
            "range": "± 314383.1158376822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175814.2857142857,
            "unit": "ns",
            "range": "± 6345.098797153957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175157.77777777778,
            "unit": "ns",
            "range": "± 6483.8081153568755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152257.31707317074,
            "unit": "ns",
            "range": "± 7750.842733755384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10514884.615384616,
            "unit": "ns",
            "range": "± 37065.18685941131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8547753.846153846,
            "unit": "ns",
            "range": "± 33027.42838370898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18168.817204301075,
            "unit": "ns",
            "range": "± 2326.967540300861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50361.458333333336,
            "unit": "ns",
            "range": "± 4213.983483385479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35654.666666666664,
            "unit": "ns",
            "range": "± 1810.3526111165681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86418.88888888889,
            "unit": "ns",
            "range": "± 10622.76434583137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4826.80412371134,
            "unit": "ns",
            "range": "± 656.3020557000802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17968.478260869564,
            "unit": "ns",
            "range": "± 1264.296646563309"
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
          "id": "f0a07124aa5701cca761c35b8836c3dc5fb885ab",
          "message": "Merge pull request #2952 from greymistcube/port/0.50.4-to-main\n\n🔀 Port 0.50.4 to main",
          "timestamp": "2023-03-17T14:28:20+09:00",
          "tree_id": "14a568e4e31adb1cce02e61d8bc8545abb0bdf9a",
          "url": "https://github.com/planetarium/libplanet/commit/f0a07124aa5701cca761c35b8836c3dc5fb885ab"
        },
        "date": 1679032126261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549800,
            "unit": "ns",
            "range": "± 24408.229486520864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2534812.5,
            "unit": "ns",
            "range": "± 89692.898233861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153178.350515464,
            "unit": "ns",
            "range": "± 132449.1083293914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5060026.666666667,
            "unit": "ns",
            "range": "± 149778.7884557235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48872.72727272727,
            "unit": "ns",
            "range": "± 2638.822764025145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6928776.923076923,
            "unit": "ns",
            "range": "± 99287.81524643523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19858271.42857143,
            "unit": "ns",
            "range": "± 173588.56940643134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48810946.666666664,
            "unit": "ns",
            "range": "± 854958.8526996627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99973486.66666667,
            "unit": "ns",
            "range": "± 876792.7893885815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199902646.66666666,
            "unit": "ns",
            "range": "± 2092005.12354831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4761743.125,
            "unit": "ns",
            "range": "± 19254.1291577683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507782.34375,
            "unit": "ns",
            "range": "± 4159.4644717159545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161255.0325520833,
            "unit": "ns",
            "range": "± 4531.284538230119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617230.0130208335,
            "unit": "ns",
            "range": "± 11976.585684729485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829886.0281808035,
            "unit": "ns",
            "range": "± 1486.3731635934819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761676.6671316965,
            "unit": "ns",
            "range": "± 1013.751165288784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3179091.6666666665,
            "unit": "ns",
            "range": "± 43766.351922522175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4953704.347826087,
            "unit": "ns",
            "range": "± 124848.65921390538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22817986.666666668,
            "unit": "ns",
            "range": "± 374869.28553576546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6020130,
            "unit": "ns",
            "range": "± 132113.11779962215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26014739.285714287,
            "unit": "ns",
            "range": "± 741041.9308070805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184311.11111111112,
            "unit": "ns",
            "range": "± 3923.2173004981646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181970.96774193548,
            "unit": "ns",
            "range": "± 4888.571266971369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154076.13636363635,
            "unit": "ns",
            "range": "± 8428.454737883307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11085396.551724138,
            "unit": "ns",
            "range": "± 321877.9388024049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8824820,
            "unit": "ns",
            "range": "± 164297.0967485427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20478.494623655915,
            "unit": "ns",
            "range": "± 1587.9881626958327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53555.78947368421,
            "unit": "ns",
            "range": "± 5792.212596557365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43933.333333333336,
            "unit": "ns",
            "range": "± 3376.2535034114735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108338.77551020408,
            "unit": "ns",
            "range": "± 16624.733980682708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6328.125,
            "unit": "ns",
            "range": "± 1006.7355399351019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19955.31914893617,
            "unit": "ns",
            "range": "± 1799.0210612355709"
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
          "id": "f4d254fa828bb0582c3f318ffb8d162b9e915fdf",
          "message": "Merge pull request #2954 from greymistcube/refactor/bencodable-validator\n\n♻️ `IBencodable` `Validator` and `ValidatorSet`",
          "timestamp": "2023-03-17T16:46:11+09:00",
          "tree_id": "697b033482d68942b8e7772b9738ace272559a25",
          "url": "https://github.com/planetarium/libplanet/commit/f4d254fa828bb0582c3f318ffb8d162b9e915fdf"
        },
        "date": 1679040431832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423162.6262626264,
            "unit": "ns",
            "range": "± 181784.24337651252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856970,
            "unit": "ns",
            "range": "± 247348.9856600805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394977.777777778,
            "unit": "ns",
            "range": "± 173085.08262604373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5803435,
            "unit": "ns",
            "range": "± 417183.82678177115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54664.444444444445,
            "unit": "ns",
            "range": "± 4008.8823041266223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7840168.604651162,
            "unit": "ns",
            "range": "± 421969.7045890513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21377798.795180723,
            "unit": "ns",
            "range": "± 1133710.969585946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53226182.828282826,
            "unit": "ns",
            "range": "± 3211124.8656290695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102412376,
            "unit": "ns",
            "range": "± 6341037.053667471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 210607035.7142857,
            "unit": "ns",
            "range": "± 9036126.644277878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5575821.40625,
            "unit": "ns",
            "range": "± 83921.3817451617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875669.545200893,
            "unit": "ns",
            "range": "± 9482.04129491871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413820.3190104167,
            "unit": "ns",
            "range": "± 9189.47929478192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3138948.8020833335,
            "unit": "ns",
            "range": "± 39114.384706301535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991390.8203125,
            "unit": "ns",
            "range": "± 9276.41973574062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910760.25390625,
            "unit": "ns",
            "range": "± 10528.002720764767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3401124.4680851065,
            "unit": "ns",
            "range": "± 239859.37039631855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5307371.717171717,
            "unit": "ns",
            "range": "± 408365.30465878453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26488251.020408165,
            "unit": "ns",
            "range": "± 1040258.3082906317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6719015.094339622,
            "unit": "ns",
            "range": "± 272752.3992676158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30171854,
            "unit": "ns",
            "range": "± 1914795.2714849205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210904.54545454544,
            "unit": "ns",
            "range": "± 9857.35854489008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204427.39726027398,
            "unit": "ns",
            "range": "± 9822.992589299702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176037.37373737374,
            "unit": "ns",
            "range": "± 15576.47746363797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12032300,
            "unit": "ns",
            "range": "± 723009.3071197757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9911993.421052631,
            "unit": "ns",
            "range": "± 501772.43615953403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21138.88888888889,
            "unit": "ns",
            "range": "± 1956.0734829401663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56307.77777777778,
            "unit": "ns",
            "range": "± 5566.315784317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51311.70212765958,
            "unit": "ns",
            "range": "± 4410.5410484911645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98495.88235294117,
            "unit": "ns",
            "range": "± 11816.448916065876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5709.375,
            "unit": "ns",
            "range": "± 848.2896879821434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21194.791666666668,
            "unit": "ns",
            "range": "± 2181.9050001832256"
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
          "id": "e8f6b8ed7fb1b03c4353c7a8d2ee4216e3e7b491",
          "message": "Merge pull request #2955 from greymistcube/refactor/bencodable-blockcommit\n\n♻️ `IBencodable` `BlockCommit`",
          "timestamp": "2023-03-17T17:32:41+09:00",
          "tree_id": "7a0907c438012591008e907aab2715fd36c87c2e",
          "url": "https://github.com/planetarium/libplanet/commit/e8f6b8ed7fb1b03c4353c7a8d2ee4216e3e7b491"
        },
        "date": 1679042952261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1342540,
            "unit": "ns",
            "range": "± 141862.00579037605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2308119.4444444445,
            "unit": "ns",
            "range": "± 75881.34654820152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057095.918367347,
            "unit": "ns",
            "range": "± 138677.99899713343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4875477.419354838,
            "unit": "ns",
            "range": "± 221601.32746492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43902.94117647059,
            "unit": "ns",
            "range": "± 2092.9498277700723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6912720,
            "unit": "ns",
            "range": "± 11211.104189278465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17438140,
            "unit": "ns",
            "range": "± 98823.00773171628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44450376.92307692,
            "unit": "ns",
            "range": "± 178497.44234323618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91642573.33333333,
            "unit": "ns",
            "range": "± 1574727.5244882694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 180713830.76923078,
            "unit": "ns",
            "range": "± 1504671.2140224166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4840537.447916667,
            "unit": "ns",
            "range": "± 22705.002392762843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497940.1497395833,
            "unit": "ns",
            "range": "± 3245.034674637575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167353.828125,
            "unit": "ns",
            "range": "± 3803.042082417201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548061.9921875,
            "unit": "ns",
            "range": "± 6529.422399612281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812928.0552455357,
            "unit": "ns",
            "range": "± 1857.832703616141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724298.0608258928,
            "unit": "ns",
            "range": "± 961.1909396715254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2904335.135135135,
            "unit": "ns",
            "range": "± 79244.92348345033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4572240.625,
            "unit": "ns",
            "range": "± 141962.67764718324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21133553.846153848,
            "unit": "ns",
            "range": "± 197879.45663705052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5613406.666666667,
            "unit": "ns",
            "range": "± 78954.6476209753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24441307.14285714,
            "unit": "ns",
            "range": "± 217192.1604488513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169639.79591836734,
            "unit": "ns",
            "range": "± 6742.781476573027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174421.21212121213,
            "unit": "ns",
            "range": "± 5399.117843208137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177556,
            "unit": "ns",
            "range": "± 22480.79009359598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10086026.666666666,
            "unit": "ns",
            "range": "± 76954.27646769649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8144633.333333333,
            "unit": "ns",
            "range": "± 62366.00111629809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17971.27659574468,
            "unit": "ns",
            "range": "± 1713.803688863599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47365.463917525776,
            "unit": "ns",
            "range": "± 5575.361352380847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35341.758241758245,
            "unit": "ns",
            "range": "± 1958.007259892677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83986.73469387754,
            "unit": "ns",
            "range": "± 16124.059232559044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4685.714285714285,
            "unit": "ns",
            "range": "± 635.2205559009998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16077.551020408164,
            "unit": "ns",
            "range": "± 1863.4592935203054"
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
          "id": "bb3de0b994abb6d0d4d1377ec1bfb9df4797a8a1",
          "message": "Merge pull request #2959 from greymistcube/refactor/bencodable-blockhash\n\n♻️ `IBencodable` for `BlockHash`",
          "timestamp": "2023-03-17T18:04:31+09:00",
          "tree_id": "edaa51dbf9a310e61f1217962dc2578ac1139cee",
          "url": "https://github.com/planetarium/libplanet/commit/bb3de0b994abb6d0d4d1377ec1bfb9df4797a8a1"
        },
        "date": 1679044643266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992303.0612244898,
            "unit": "ns",
            "range": "± 100414.32564458124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1782050,
            "unit": "ns",
            "range": "± 90219.32165561875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528723,
            "unit": "ns",
            "range": "± 102500.39749122236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3537917.777777778,
            "unit": "ns",
            "range": "± 126010.95603321181"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33991.13924050633,
            "unit": "ns",
            "range": "± 1684.7117895049146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5018200,
            "unit": "ns",
            "range": "± 25102.1626842902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 12737600,
            "unit": "ns",
            "range": "± 81105.96108225908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 32475153.333333332,
            "unit": "ns",
            "range": "± 374053.7124659022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 65208923.07692308,
            "unit": "ns",
            "range": "± 521428.86084592296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 129498793.33333333,
            "unit": "ns",
            "range": "± 1307669.9231111512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3465178.7890625,
            "unit": "ns",
            "range": "± 16933.170970686173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093242.6822916667,
            "unit": "ns",
            "range": "± 3402.6777612794563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 827194.2317708334,
            "unit": "ns",
            "range": "± 2050.284384054483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1894639.7005208333,
            "unit": "ns",
            "range": "± 19078.256907530635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600666.71875,
            "unit": "ns",
            "range": "± 2837.004636493638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 523018.73046875,
            "unit": "ns",
            "range": "± 1042.6409708589026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2093781.8181818181,
            "unit": "ns",
            "range": "± 77084.62663397717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347177.272727273,
            "unit": "ns",
            "range": "± 74638.4359800038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15175426.666666666,
            "unit": "ns",
            "range": "± 245055.62478363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4057903.5714285714,
            "unit": "ns",
            "range": "± 115758.15940249727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18248447.826086957,
            "unit": "ns",
            "range": "± 450768.2582089112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126819.71830985915,
            "unit": "ns",
            "range": "± 5869.402980549941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 129992.77108433735,
            "unit": "ns",
            "range": "± 6717.592177742763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 112058.16326530612,
            "unit": "ns",
            "range": "± 4416.061439728368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7300856.666666667,
            "unit": "ns",
            "range": "± 109119.00100785555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5964850,
            "unit": "ns",
            "range": "± 94070.49788019925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14014.285714285714,
            "unit": "ns",
            "range": "± 1809.9382002322052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 35993.406593406595,
            "unit": "ns",
            "range": "± 4133.274252206844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 26788.333333333332,
            "unit": "ns",
            "range": "± 1209.7193492520494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67589.69072164949,
            "unit": "ns",
            "range": "± 14622.139923589062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3558.9473684210525,
            "unit": "ns",
            "range": "± 460.2253695934951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13190.217391304348,
            "unit": "ns",
            "range": "± 1054.562018623272"
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
          "id": "e963d72d4fbdf5eaf8f87741ffe130108a5bc9bb",
          "message": "Merge pull request #2961 from greymistcube/refactor/bencodable-vote\n\n♻️ `IBencodable` for `VoteMetadata` and `Vote`",
          "timestamp": "2023-03-20T09:53:41+09:00",
          "tree_id": "f7642fcab75e8e532157a3af5e43029aaa1883b3",
          "url": "https://github.com/planetarium/libplanet/commit/e963d72d4fbdf5eaf8f87741ffe130108a5bc9bb"
        },
        "date": 1679274620136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1512900,
            "unit": "ns",
            "range": "± 29703.782026312183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2627752.9850746267,
            "unit": "ns",
            "range": "± 124136.82696579664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170859.574468085,
            "unit": "ns",
            "range": "± 126475.62757191384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234680.357142857,
            "unit": "ns",
            "range": "± 223853.514943584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52571.57894736842,
            "unit": "ns",
            "range": "± 3333.2516600669846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7932657.142857143,
            "unit": "ns",
            "range": "± 119190.65344284286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20402053.333333332,
            "unit": "ns",
            "range": "± 219842.98574426337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50969816.666666664,
            "unit": "ns",
            "range": "± 312152.63131694926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101386271.42857143,
            "unit": "ns",
            "range": "± 536120.4319762656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203036092.85714287,
            "unit": "ns",
            "range": "± 1771316.8997036708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4830260.997596154,
            "unit": "ns",
            "range": "± 32010.40589968174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547026.6927083333,
            "unit": "ns",
            "range": "± 26531.767667011853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177635.6770833333,
            "unit": "ns",
            "range": "± 6182.682610760126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617303.2877604165,
            "unit": "ns",
            "range": "± 10419.973968353974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853360.5755974265,
            "unit": "ns",
            "range": "± 16863.494079807828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759520.3350360577,
            "unit": "ns",
            "range": "± 11077.15072115008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333717.8571428573,
            "unit": "ns",
            "range": "± 95395.44229182499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5114787.5,
            "unit": "ns",
            "range": "± 94244.71603225297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23812200,
            "unit": "ns",
            "range": "± 369202.01682922756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6275766.666666667,
            "unit": "ns",
            "range": "± 146096.34264187908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26862940,
            "unit": "ns",
            "range": "± 695300.1306390404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192258.82352941178,
            "unit": "ns",
            "range": "± 7853.640594541827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185125.64102564103,
            "unit": "ns",
            "range": "± 9541.058721745796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171797.91666666666,
            "unit": "ns",
            "range": "± 10209.396901272832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11195885.714285715,
            "unit": "ns",
            "range": "± 237876.66612283405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9193778.57142857,
            "unit": "ns",
            "range": "± 136762.63085288394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24630.927835051545,
            "unit": "ns",
            "range": "± 2797.966554211821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63373.19587628866,
            "unit": "ns",
            "range": "± 6692.650126941455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46222.68041237113,
            "unit": "ns",
            "range": "± 2943.3011920658905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101704.76190476191,
            "unit": "ns",
            "range": "± 8315.84211388778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8512.765957446809,
            "unit": "ns",
            "range": "± 912.5450694485615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25004.21052631579,
            "unit": "ns",
            "range": "± 2316.7253021063875"
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
          "id": "8546675a24fce872d823d8e90984403e68d6a1b5",
          "message": "Merge pull request #2970 from greymistcube/refactor/lastcommit-encoding\n\n♻️ Refactor `Block<T>.LastCommit` encoding",
          "timestamp": "2023-03-21T13:40:04+09:00",
          "tree_id": "db3ec865d2318a231fde499a7a361a3f9994869d",
          "url": "https://github.com/planetarium/libplanet/commit/8546675a24fce872d823d8e90984403e68d6a1b5"
        },
        "date": 1679374571825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358635.3535353534,
            "unit": "ns",
            "range": "± 88846.05501920599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510006.25,
            "unit": "ns",
            "range": "± 48738.656372534526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185274.4897959186,
            "unit": "ns",
            "range": "± 137697.7700941895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5115956.451612903,
            "unit": "ns",
            "range": "± 156142.49674679403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53435.48387096774,
            "unit": "ns",
            "range": "± 3135.998737012082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7487592.307692308,
            "unit": "ns",
            "range": "± 122468.8699325837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20137653.333333332,
            "unit": "ns",
            "range": "± 179906.96352228703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51430650,
            "unit": "ns",
            "range": "± 360579.53512900055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100633364.28571428,
            "unit": "ns",
            "range": "± 655664.5983652393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200959793.33333334,
            "unit": "ns",
            "range": "± 1249390.8689932907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4827221.822916667,
            "unit": "ns",
            "range": "± 10808.212619071954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526519.1015625,
            "unit": "ns",
            "range": "± 2717.0388888432067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159773.158482143,
            "unit": "ns",
            "range": "± 4502.343187357341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634890.6640625,
            "unit": "ns",
            "range": "± 7959.427389346591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826879.4401041666,
            "unit": "ns",
            "range": "± 1395.8674316362442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770172.8585379465,
            "unit": "ns",
            "range": "± 1167.4940311266648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393405,
            "unit": "ns",
            "range": "± 120144.19104153826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5275869.047619048,
            "unit": "ns",
            "range": "± 191996.1641996098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23814400,
            "unit": "ns",
            "range": "± 377578.56325349223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6480845,
            "unit": "ns",
            "range": "± 126610.0664285926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27489384.615384616,
            "unit": "ns",
            "range": "± 198105.99791590462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198040,
            "unit": "ns",
            "range": "± 6692.621271757389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198763.76811594202,
            "unit": "ns",
            "range": "± 9619.128782466443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188586.48648648648,
            "unit": "ns",
            "range": "± 9460.289380211849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11516816.666666666,
            "unit": "ns",
            "range": "± 77133.758281745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9445438.461538462,
            "unit": "ns",
            "range": "± 94955.28367308424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25357.44680851064,
            "unit": "ns",
            "range": "± 1992.3638827348443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59188.77551020408,
            "unit": "ns",
            "range": "± 5871.859900521539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47595,
            "unit": "ns",
            "range": "± 3799.7175599448883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115602.0202020202,
            "unit": "ns",
            "range": "± 20501.12480636412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8504.736842105263,
            "unit": "ns",
            "range": "± 1152.035056079775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23621.052631578947,
            "unit": "ns",
            "range": "± 1754.5621225483299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba9be20de483f0da4aa96b1a5f62d63fec62c0d",
          "message": "Merge pull request #2566 from longfin/feature/fee-calculator\n\nIntroduce `IFeeCalculator`",
          "timestamp": "2023-03-22T14:22:57+09:00",
          "tree_id": "0788e90971d1d5d79c82dfad36e3b0bb1589462e",
          "url": "https://github.com/planetarium/libplanet/commit/4ba9be20de483f0da4aa96b1a5f62d63fec62c0d"
        },
        "date": 1679463360961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1073140,
            "unit": "ns",
            "range": "± 97992.95377678433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1773043.9024390243,
            "unit": "ns",
            "range": "± 63802.05736800534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596644,
            "unit": "ns",
            "range": "± 126804.96542551344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3663523.913043478,
            "unit": "ns",
            "range": "± 122817.14535534816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33918.42105263158,
            "unit": "ns",
            "range": "± 1664.829162512141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4889507.142857143,
            "unit": "ns",
            "range": "± 17482.011162498275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13206680,
            "unit": "ns",
            "range": "± 78024.19221900712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33380713.333333332,
            "unit": "ns",
            "range": "± 370744.7482850599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66114706.666666664,
            "unit": "ns",
            "range": "± 352756.88606555463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132565314.28571428,
            "unit": "ns",
            "range": "± 1052040.693756036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3623986.746651786,
            "unit": "ns",
            "range": "± 7699.910973314194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1124947.5811298077,
            "unit": "ns",
            "range": "± 1165.5051749525485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 798456.2430245535,
            "unit": "ns",
            "range": "± 2304.8199026862358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967719.3489583333,
            "unit": "ns",
            "range": "± 5193.054809246371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641055.8035714285,
            "unit": "ns",
            "range": "± 705.5040700752603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571289.7181919643,
            "unit": "ns",
            "range": "± 658.5662158562352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221519.230769231,
            "unit": "ns",
            "range": "± 90198.0610166393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3346000,
            "unit": "ns",
            "range": "± 57564.00061380955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15466353.333333334,
            "unit": "ns",
            "range": "± 159911.99752482912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083255.263157895,
            "unit": "ns",
            "range": "± 139198.168474609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17413818.75,
            "unit": "ns",
            "range": "± 321529.37080718874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123656.71641791044,
            "unit": "ns",
            "range": "± 5863.34850758447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 125032.95454545454,
            "unit": "ns",
            "range": "± 6560.57051049659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 100761.90476190476,
            "unit": "ns",
            "range": "± 3631.095539913095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7477383.333333333,
            "unit": "ns",
            "range": "± 53988.115976265246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6053550,
            "unit": "ns",
            "range": "± 50647.27699162776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10997.894736842105,
            "unit": "ns",
            "range": "± 1545.9610346695952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 32227.659574468085,
            "unit": "ns",
            "range": "± 4351.749228210413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23956.25,
            "unit": "ns",
            "range": "± 943.4897309141343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63262.06896551724,
            "unit": "ns",
            "range": "± 8658.296752037968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2633.3333333333335,
            "unit": "ns",
            "range": "± 546.3113950402986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10614.130434782608,
            "unit": "ns",
            "range": "± 1272.2379279982072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6b740bd81750f48dc355432d961edd8a2c76ab9",
          "message": "Merge pull request #2962 from planetarium/ci-account-aws-kms\n\n@planetarium/account-aws-kms",
          "timestamp": "2023-03-22T16:14:26+09:00",
          "tree_id": "a4ed25d72aa552b1640f782fcbd91e7e597231f9",
          "url": "https://github.com/planetarium/libplanet/commit/d6b740bd81750f48dc355432d961edd8a2c76ab9"
        },
        "date": 1679470548994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1839065.9574468085,
            "unit": "ns",
            "range": "± 169603.0746026287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3461341.052631579,
            "unit": "ns",
            "range": "± 209045.79946862345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2825995.789473684,
            "unit": "ns",
            "range": "± 194025.79556281943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7061542.473118279,
            "unit": "ns",
            "range": "± 437741.43778693565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78311.95652173914,
            "unit": "ns",
            "range": "± 8473.083982465476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10081421.739130436,
            "unit": "ns",
            "range": "± 388356.5285851211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25788387.5,
            "unit": "ns",
            "range": "± 673318.9944044402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64987231.25,
            "unit": "ns",
            "range": "± 1254853.609373752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134630172.09302327,
            "unit": "ns",
            "range": "± 4493801.383722418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267559546.66666666,
            "unit": "ns",
            "range": "± 4389563.531323338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6282250.572916667,
            "unit": "ns",
            "range": "± 108466.80496622784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2038862.8566576086,
            "unit": "ns",
            "range": "± 48238.23227496397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1555784.4856770833,
            "unit": "ns",
            "range": "± 46204.75744635422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3311294.0364583335,
            "unit": "ns",
            "range": "± 61657.56200696336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1112521.5877757352,
            "unit": "ns",
            "range": "± 22664.622921633203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1017201.5234375,
            "unit": "ns",
            "range": "± 12865.31246295316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4130920,
            "unit": "ns",
            "range": "± 222411.6795280234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6662939.705882353,
            "unit": "ns",
            "range": "± 307173.0773435203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 32669981.666666668,
            "unit": "ns",
            "range": "± 1450485.1788505018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8113754.901960785,
            "unit": "ns",
            "range": "± 329212.97867108794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37387103.17460317,
            "unit": "ns",
            "range": "± 1712290.8578641783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249086.66666666666,
            "unit": "ns",
            "range": "± 15715.663123639753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252553.33333333334,
            "unit": "ns",
            "range": "± 12668.404337897824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231954.54545454544,
            "unit": "ns",
            "range": "± 10896.932268631059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15004689.393939395,
            "unit": "ns",
            "range": "± 466182.54802933283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12655058.333333334,
            "unit": "ns",
            "range": "± 130854.24548178045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33615.05376344086,
            "unit": "ns",
            "range": "± 3612.0253934226776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78700,
            "unit": "ns",
            "range": "± 9155.92528049107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60481.11111111111,
            "unit": "ns",
            "range": "± 8389.86674030642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150261.53846153847,
            "unit": "ns",
            "range": "± 33473.806573136055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9255.78947368421,
            "unit": "ns",
            "range": "± 2373.152844486059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31644.565217391304,
            "unit": "ns",
            "range": "± 6251.230456995581"
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
          "id": "0db1e21533d957abbfa6ae62a87c21d9b69ec6e8",
          "message": "Merge pull request #2980 from moreal/remove-unused-logic\n\nRemove unused logic",
          "timestamp": "2023-03-23T10:55:24+09:00",
          "tree_id": "4812c199c69fac14e2384dd9cb73846bc0f5b450",
          "url": "https://github.com/planetarium/libplanet/commit/0db1e21533d957abbfa6ae62a87c21d9b69ec6e8"
        },
        "date": 1679537669842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707412.121212121,
            "unit": "ns",
            "range": "± 203717.01023660312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3076566.3157894737,
            "unit": "ns",
            "range": "± 178089.11683242896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641796.875,
            "unit": "ns",
            "range": "± 221307.1256983571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6277190.322580645,
            "unit": "ns",
            "range": "± 282755.02790658135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58005.31914893617,
            "unit": "ns",
            "range": "± 8644.40109707759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8973291.803278688,
            "unit": "ns",
            "range": "± 396670.48890108685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23710630.303030305,
            "unit": "ns",
            "range": "± 749890.4730379166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59459494.11764706,
            "unit": "ns",
            "range": "± 1190068.3974411872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122089383.87096775,
            "unit": "ns",
            "range": "± 3604857.0479374793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242470053.33333334,
            "unit": "ns",
            "range": "± 4434071.480651142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6164589.118303572,
            "unit": "ns",
            "range": "± 62676.919250674604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872669.224330357,
            "unit": "ns",
            "range": "± 19632.493990598072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407064.609375,
            "unit": "ns",
            "range": "± 12468.953632247589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3185051.171875,
            "unit": "ns",
            "range": "± 47797.526657946175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018033.9425223215,
            "unit": "ns",
            "range": "± 15847.994840360068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952823.7890625,
            "unit": "ns",
            "range": "± 9015.842455771437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3806905.4545454546,
            "unit": "ns",
            "range": "± 161032.61162489417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6002066.666666667,
            "unit": "ns",
            "range": "± 302997.93297543697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28173707.14285714,
            "unit": "ns",
            "range": "± 438477.61887324107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7505716.216216216,
            "unit": "ns",
            "range": "± 253427.36140264632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32617560.86956522,
            "unit": "ns",
            "range": "± 815101.0694381462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216554.34782608695,
            "unit": "ns",
            "range": "± 14781.09434782979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209878.94736842104,
            "unit": "ns",
            "range": "± 13982.65562955218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199404.34782608695,
            "unit": "ns",
            "range": "± 18688.145816947435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13682436.363636363,
            "unit": "ns",
            "range": "± 431011.1627166559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10910080.76923077,
            "unit": "ns",
            "range": "± 420113.3185311313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23229.591836734693,
            "unit": "ns",
            "range": "± 3621.533797740965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62876.84210526316,
            "unit": "ns",
            "range": "± 6467.38877609712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45421.27659574468,
            "unit": "ns",
            "range": "± 6014.728738159343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126234.69387755102,
            "unit": "ns",
            "range": "± 24407.034232131024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6806.666666666667,
            "unit": "ns",
            "range": "± 1448.9670865749601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25918.556701030928,
            "unit": "ns",
            "range": "± 4247.580926659589"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4ef4023f8bc3fb7590c75f2dd71cb0de1c7a89a",
          "message": "Merge pull request #2971 from dahlia/remove-libplanet-node",
          "timestamp": "2023-03-23T11:48:34+09:00",
          "tree_id": "cd57406b44f9089bd65f630219bca8b26ec2ad22",
          "url": "https://github.com/planetarium/libplanet/commit/d4ef4023f8bc3fb7590c75f2dd71cb0de1c7a89a"
        },
        "date": 1679541095139,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1838352.1276595744,
            "unit": "ns",
            "range": "± 201342.508013233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3546956.5217391304,
            "unit": "ns",
            "range": "± 254170.7539328664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2922334.0425531915,
            "unit": "ns",
            "range": "± 274606.8303989572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7115497.826086956,
            "unit": "ns",
            "range": "± 625724.0539116055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78241.05263157895,
            "unit": "ns",
            "range": "± 12357.403627465363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10393104.65116279,
            "unit": "ns",
            "range": "± 556046.9089198218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26673053.225806452,
            "unit": "ns",
            "range": "± 1199420.1523547408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66466018.18181818,
            "unit": "ns",
            "range": "± 2073983.9824981992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136984738.8888889,
            "unit": "ns",
            "range": "± 4463030.960250974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271000920,
            "unit": "ns",
            "range": "± 5945256.057395678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6391365.066964285,
            "unit": "ns",
            "range": "± 102818.59760714459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2015399.7916666667,
            "unit": "ns",
            "range": "± 27103.25789904621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1585844.4075520833,
            "unit": "ns",
            "range": "± 19922.017175075143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3546072.8870738638,
            "unit": "ns",
            "range": "± 85040.47968475336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1096606.7457932692,
            "unit": "ns",
            "range": "± 6319.067935065179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1012676.875,
            "unit": "ns",
            "range": "± 14868.787579070611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4241100,
            "unit": "ns",
            "range": "± 331234.45589601225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6744579.012345679,
            "unit": "ns",
            "range": "± 354556.9318586401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 33378364.36781609,
            "unit": "ns",
            "range": "± 1813156.8838840309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8044224.561403509,
            "unit": "ns",
            "range": "± 344293.1461086518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38875547.95918367,
            "unit": "ns",
            "range": "± 2408145.1337496205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252497.0588235294,
            "unit": "ns",
            "range": "± 16714.098612757276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244046.66666666666,
            "unit": "ns",
            "range": "± 16899.95977656273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221546.2365591398,
            "unit": "ns",
            "range": "± 16874.572839294302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15114715.789473685,
            "unit": "ns",
            "range": "± 332314.0303039312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11905405.555555556,
            "unit": "ns",
            "range": "± 252855.75863168036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31788.505747126437,
            "unit": "ns",
            "range": "± 4413.046864125351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80796.84210526316,
            "unit": "ns",
            "range": "± 12620.225683583922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56803.092783505155,
            "unit": "ns",
            "range": "± 10191.800765078346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147226.59574468085,
            "unit": "ns",
            "range": "± 23373.522266127176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8462.90322580645,
            "unit": "ns",
            "range": "± 2277.929351809952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33522.34042553192,
            "unit": "ns",
            "range": "± 5687.642788099026"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67bf6a8f0b3e0df75ca7b05f60344592237b7a2b",
          "message": "Merge pull request #2977 from dahlia/flatten-tx-interfaces",
          "timestamp": "2023-03-24T11:55:08+09:00",
          "tree_id": "6c8ece1623739860ceda4da6a26aeb7cdfe3ba31",
          "url": "https://github.com/planetarium/libplanet/commit/67bf6a8f0b3e0df75ca7b05f60344592237b7a2b"
        },
        "date": 1679627278002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065393.75,
            "unit": "ns",
            "range": "± 119151.90553283344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755548.888888889,
            "unit": "ns",
            "range": "± 65476.021364598615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1588347.3684210526,
            "unit": "ns",
            "range": "± 128739.92077226058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3527460.714285714,
            "unit": "ns",
            "range": "± 90717.07070882204"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33719.642857142855,
            "unit": "ns",
            "range": "± 1442.2734128460515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5032607.142857143,
            "unit": "ns",
            "range": "± 33782.25442870435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13204033.333333334,
            "unit": "ns",
            "range": "± 105437.10153903313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32168035.714285713,
            "unit": "ns",
            "range": "± 157035.8489553989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64427246.666666664,
            "unit": "ns",
            "range": "± 350380.9801317635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130194686.66666667,
            "unit": "ns",
            "range": "± 778721.3648637349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3614398.137019231,
            "unit": "ns",
            "range": "± 12751.07153998966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1128329.7572544643,
            "unit": "ns",
            "range": "± 2835.6025213556145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 805563.0013020834,
            "unit": "ns",
            "range": "± 3817.5293295501465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949378.564453125,
            "unit": "ns",
            "range": "± 1528.2492509642125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 650050.625,
            "unit": "ns",
            "range": "± 4076.5677547749947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572016.4713541666,
            "unit": "ns",
            "range": "± 988.2172693457023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178916.9811320757,
            "unit": "ns",
            "range": "± 81678.20473769434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3434904.1666666665,
            "unit": "ns",
            "range": "± 88678.28261739745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15085833.333333334,
            "unit": "ns",
            "range": "± 114535.53202058344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4245290.909090909,
            "unit": "ns",
            "range": "± 158857.10387111155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17838438.46153846,
            "unit": "ns",
            "range": "± 277988.93124985375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 127967.44186046511,
            "unit": "ns",
            "range": "± 6903.561601861585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 125656.6265060241,
            "unit": "ns",
            "range": "± 6654.105513746333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 100885.9649122807,
            "unit": "ns",
            "range": "± 4329.608964382482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7539560,
            "unit": "ns",
            "range": "± 109081.26590495992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6149064.285714285,
            "unit": "ns",
            "range": "± 45655.32418430107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10714.130434782608,
            "unit": "ns",
            "range": "± 1524.7829261277811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 30489.130434782608,
            "unit": "ns",
            "range": "± 2746.644567177232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23423.4375,
            "unit": "ns",
            "range": "± 1088.9403889262812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70778.57142857143,
            "unit": "ns",
            "range": "± 16274.147799437551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3027.2727272727275,
            "unit": "ns",
            "range": "± 698.0758075052584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9917.021276595744,
            "unit": "ns",
            "range": "± 903.1174559974938"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59d402c02d16124c08caec2273d957bc8390aa46",
          "message": "Merge pull request #2997 from tkiapril/release/0.53\n\n🚀 Release 0.53.0",
          "timestamp": "2023-03-27T17:55:04+09:00",
          "tree_id": "470c6e76c5b87e56493e384b6d88818eb6a20a81",
          "url": "https://github.com/planetarium/libplanet/commit/59d402c02d16124c08caec2273d957bc8390aa46"
        },
        "date": 1679908498443,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403432.6530612244,
            "unit": "ns",
            "range": "± 107468.12980035342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2615917.543859649,
            "unit": "ns",
            "range": "± 112523.18193346239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154177.906976744,
            "unit": "ns",
            "range": "± 116574.66418431306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5016013.793103448,
            "unit": "ns",
            "range": "± 144169.50768388165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50713.793103448275,
            "unit": "ns",
            "range": "± 2645.2314451776306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7042250,
            "unit": "ns",
            "range": "± 85471.53167735282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19651000,
            "unit": "ns",
            "range": "± 301770.86624504643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49215586.666666664,
            "unit": "ns",
            "range": "± 716387.94245523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99555460,
            "unit": "ns",
            "range": "± 1583510.3720170937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195695793.33333334,
            "unit": "ns",
            "range": "± 3426170.99824835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4870988.839285715,
            "unit": "ns",
            "range": "± 23369.497341401297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513643.3035714286,
            "unit": "ns",
            "range": "± 4816.980353034327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174295.982142857,
            "unit": "ns",
            "range": "± 8402.49201755182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620902.8180803573,
            "unit": "ns",
            "range": "± 7244.468783930628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832649.0169270834,
            "unit": "ns",
            "range": "± 1804.4565241364437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760531.8885216346,
            "unit": "ns",
            "range": "± 1131.1776839656368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3115011.320754717,
            "unit": "ns",
            "range": "± 129603.2476153774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4966346.428571428,
            "unit": "ns",
            "range": "± 141477.29953271223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23895421.42857143,
            "unit": "ns",
            "range": "± 203072.20458429377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6356954.285714285,
            "unit": "ns",
            "range": "± 202095.9605249551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27233176.470588237,
            "unit": "ns",
            "range": "± 520216.2369263043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196965.5172413793,
            "unit": "ns",
            "range": "± 8619.761093366511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200280,
            "unit": "ns",
            "range": "± 9951.028739430561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175613,
            "unit": "ns",
            "range": "± 13605.60382914171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11100007.894736841,
            "unit": "ns",
            "range": "± 245303.60172150724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9007531.818181818,
            "unit": "ns",
            "range": "± 219589.90215825074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25772.164948453606,
            "unit": "ns",
            "range": "± 2440.1051150531575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63116.32653061225,
            "unit": "ns",
            "range": "± 6323.278770364509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45312.37113402062,
            "unit": "ns",
            "range": "± 3846.704697204012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106760.52631578948,
            "unit": "ns",
            "range": "± 18441.370430015933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7434,
            "unit": "ns",
            "range": "± 1353.7243799864495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22890.721649484534,
            "unit": "ns",
            "range": "± 2507.5337516101185"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37a63f0305fe6c56319a3a18f7c3d5dcba19574b",
          "message": "Merge pull request #2998 from tkiapril/prepare/0.54\n\n🔧 Prepare 0.54.0",
          "timestamp": "2023-03-27T18:04:13+09:00",
          "tree_id": "2c64ba22ed55634e57ff4b58425f439a8fb37ba9",
          "url": "https://github.com/planetarium/libplanet/commit/37a63f0305fe6c56319a3a18f7c3d5dcba19574b"
        },
        "date": 1679909179476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1748547.4226804124,
            "unit": "ns",
            "range": "± 185689.26894859388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3194184.946236559,
            "unit": "ns",
            "range": "± 263301.4601200604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2752505.789473684,
            "unit": "ns",
            "range": "± 279828.25345002493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6912566.304347826,
            "unit": "ns",
            "range": "± 548734.8746874761"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56252.12765957447,
            "unit": "ns",
            "range": "± 14255.606169235492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8465542.391304348,
            "unit": "ns",
            "range": "± 537522.3700397222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22991803.535353534,
            "unit": "ns",
            "range": "± 1706502.4147338546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61048078.94736842,
            "unit": "ns",
            "range": "± 2625450.902616325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120160757.14285715,
            "unit": "ns",
            "range": "± 1769226.632747195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250049774.2857143,
            "unit": "ns",
            "range": "± 8104588.602882098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5843247.708333333,
            "unit": "ns",
            "range": "± 89745.67632153946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2048434.8567708333,
            "unit": "ns",
            "range": "± 25943.05393517762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1434655.703125,
            "unit": "ns",
            "range": "± 15367.16697263403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3144413.5677083335,
            "unit": "ns",
            "range": "± 30898.797665321003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1053536.1197916667,
            "unit": "ns",
            "range": "± 15458.85763576856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956593.9518229166,
            "unit": "ns",
            "range": "± 9328.38377163234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3465061.4583333335,
            "unit": "ns",
            "range": "± 300532.01611380745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5580347.872340426,
            "unit": "ns",
            "range": "± 423496.93318225956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30628111.458333332,
            "unit": "ns",
            "range": "± 2091280.5630632804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7228372.7272727275,
            "unit": "ns",
            "range": "± 738485.1274279543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37265936.84210526,
            "unit": "ns",
            "range": "± 2552601.5505275945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219568.13186813187,
            "unit": "ns",
            "range": "± 31238.78244576009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230202.04081632654,
            "unit": "ns",
            "range": "± 40699.30020318832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195961.45833333334,
            "unit": "ns",
            "range": "± 35222.68667774004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13375447.368421054,
            "unit": "ns",
            "range": "± 953579.3433212357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10328882.222222222,
            "unit": "ns",
            "range": "± 706662.0193331746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26980.61224489796,
            "unit": "ns",
            "range": "± 10560.973265865354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62298.913043478264,
            "unit": "ns",
            "range": "± 12020.061020536064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46245.26315789474,
            "unit": "ns",
            "range": "± 11626.06909676599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132648.91304347827,
            "unit": "ns",
            "range": "± 26206.963652061775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5734.090909090909,
            "unit": "ns",
            "range": "± 939.6607805187684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25953.125,
            "unit": "ns",
            "range": "± 11239.773861042242"
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
          "id": "cc67e98b313c9ac5a5f3f03265c9590ccfdd360c",
          "message": "Merge pull request #2964 from OnedgeLee/merge/0.51.3\n\n🔀 Port 0.51.3 to main",
          "timestamp": "2023-03-28T16:03:24+09:00",
          "tree_id": "5b73ce549a165734ec22033c7db960cbfbe91243",
          "url": "https://github.com/planetarium/libplanet/commit/cc67e98b313c9ac5a5f3f03265c9590ccfdd360c"
        },
        "date": 1679988038916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442548.4210526317,
            "unit": "ns",
            "range": "± 108177.60894597198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536529.6296296297,
            "unit": "ns",
            "range": "± 105594.68724062372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2143051,
            "unit": "ns",
            "range": "± 138363.75313212664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4875573.333333333,
            "unit": "ns",
            "range": "± 83033.56865635443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51369.072164948455,
            "unit": "ns",
            "range": "± 3395.197614055473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7042422.222222222,
            "unit": "ns",
            "range": "± 180120.87465693554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19691613.333333332,
            "unit": "ns",
            "range": "± 290453.31532098644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50077413.333333336,
            "unit": "ns",
            "range": "± 517312.4061182078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100373686.66666667,
            "unit": "ns",
            "range": "± 1129528.3844322353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197272728.57142857,
            "unit": "ns",
            "range": "± 1169685.4090070357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4897176.458333333,
            "unit": "ns",
            "range": "± 18508.523733042563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521110.703125,
            "unit": "ns",
            "range": "± 5146.042153570275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140171.26953125,
            "unit": "ns",
            "range": "± 5025.777260125467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621048.1510416665,
            "unit": "ns",
            "range": "± 21292.5486289426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826729.1713169643,
            "unit": "ns",
            "range": "± 1663.9859146248962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760857.9622395834,
            "unit": "ns",
            "range": "± 1093.2466579543732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147100,
            "unit": "ns",
            "range": "± 71523.22699654987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5151530,
            "unit": "ns",
            "range": "± 114136.30862862362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23489100,
            "unit": "ns",
            "range": "± 602574.6145391096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6128456.521739131,
            "unit": "ns",
            "range": "± 152191.27267442396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26355288.888888888,
            "unit": "ns",
            "range": "± 550886.3680084272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185965.5172413793,
            "unit": "ns",
            "range": "± 8126.468595462046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188911.86440677967,
            "unit": "ns",
            "range": "± 8310.111928076514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166315.7894736842,
            "unit": "ns",
            "range": "± 8262.849429933622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11118633.333333334,
            "unit": "ns",
            "range": "± 174608.24586430483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9121478.57142857,
            "unit": "ns",
            "range": "± 101991.02847853772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22634.21052631579,
            "unit": "ns",
            "range": "± 2285.8173169067986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54347.191011235955,
            "unit": "ns",
            "range": "± 3546.12752576796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42134.17721518988,
            "unit": "ns",
            "range": "± 2199.6436818645207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101419.27710843373,
            "unit": "ns",
            "range": "± 7580.116123560688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6711.458333333333,
            "unit": "ns",
            "range": "± 1010.0411447238613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20823.711340206184,
            "unit": "ns",
            "range": "± 1772.4614003716863"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a77a69c48decce34a03cb56f0e97b43c4a3c5e3e",
          "message": "Merge pull request #3008 from planetarium/0.53-maintenance\n\nFix build and upload artifacts",
          "timestamp": "2023-03-28T16:31:45+09:00",
          "tree_id": "3420c2bc5a00078db976a2da8519e1623951c323",
          "url": "https://github.com/planetarium/libplanet/commit/a77a69c48decce34a03cb56f0e97b43c4a3c5e3e"
        },
        "date": 1679989768139,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309554.081632653,
            "unit": "ns",
            "range": "± 98343.29013779887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2481406.896551724,
            "unit": "ns",
            "range": "± 108238.86655127585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2040824.0506329115,
            "unit": "ns",
            "range": "± 103087.06702836309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5171693.333333333,
            "unit": "ns",
            "range": "± 260959.8712722215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49881.42857142857,
            "unit": "ns",
            "range": "± 2313.745495827425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6842471.428571428,
            "unit": "ns",
            "range": "± 80076.60206203931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19177363.157894738,
            "unit": "ns",
            "range": "± 402982.995520112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48817673.333333336,
            "unit": "ns",
            "range": "± 644779.5675009147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94722429.41176471,
            "unit": "ns",
            "range": "± 1918081.989503025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189975411.7647059,
            "unit": "ns",
            "range": "± 3645890.862478324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4786418.125,
            "unit": "ns",
            "range": "± 11722.116466603322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517591.8229166667,
            "unit": "ns",
            "range": "± 7180.601579329203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149867.109375,
            "unit": "ns",
            "range": "± 6576.3469523557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608220.234375,
            "unit": "ns",
            "range": "± 6591.353518820361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820087.5911458334,
            "unit": "ns",
            "range": "± 2257.9014887310636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745664.2513020834,
            "unit": "ns",
            "range": "± 1347.60391820759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2974551.3513513515,
            "unit": "ns",
            "range": "± 93966.73353912019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4682285.714285715,
            "unit": "ns",
            "range": "± 70120.19194698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22114905.263157893,
            "unit": "ns",
            "range": "± 483047.0456426512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5886600,
            "unit": "ns",
            "range": "± 106862.55346627899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25470857.14285714,
            "unit": "ns",
            "range": "± 344044.1535042262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177077.4193548387,
            "unit": "ns",
            "range": "± 7998.1641203884055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178815.09433962265,
            "unit": "ns",
            "range": "± 7456.937818269926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152292.85714285713,
            "unit": "ns",
            "range": "± 5381.909302022066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10678175.862068966,
            "unit": "ns",
            "range": "± 304633.9438632776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8487520,
            "unit": "ns",
            "range": "± 140979.9742617977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19753.763440860213,
            "unit": "ns",
            "range": "± 1432.5076173850848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52396.666666666664,
            "unit": "ns",
            "range": "± 3766.8110078074437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39571.42857142857,
            "unit": "ns",
            "range": "± 1631.0302695718863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100685.41666666667,
            "unit": "ns",
            "range": "± 14727.510806697901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6027.659574468085,
            "unit": "ns",
            "range": "± 666.6243409121746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18655.31914893617,
            "unit": "ns",
            "range": "± 1487.1215626874696"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "513a3865ee4ae40ddd1d1a229e65e3c8848148ca",
          "message": "Merge pull request #3014 from riemannulus/merge/main/0.51-maintenance\n\n🔀 Port 0.51.4 to main",
          "timestamp": "2023-03-28T18:42:39+09:00",
          "tree_id": "505611282659dd79def9c3c8d4219801ad3d1b4b",
          "url": "https://github.com/planetarium/libplanet/commit/513a3865ee4ae40ddd1d1a229e65e3c8848148ca"
        },
        "date": 1679997397843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051344.4444444445,
            "unit": "ns",
            "range": "± 107815.67625049464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1799070.9677419355,
            "unit": "ns",
            "range": "± 52423.405673092166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1593866,
            "unit": "ns",
            "range": "± 117873.24404039307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3567924.1379310344,
            "unit": "ns",
            "range": "± 82736.08063843046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34715.333333333336,
            "unit": "ns",
            "range": "± 1754.876859723437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5078383.333333333,
            "unit": "ns",
            "range": "± 74828.30505961791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13019653.846153846,
            "unit": "ns",
            "range": "± 58142.89316538201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33643192.85714286,
            "unit": "ns",
            "range": "± 167149.12947280487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68622192.85714285,
            "unit": "ns",
            "range": "± 343323.52641671494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135257057.14285713,
            "unit": "ns",
            "range": "± 935149.7310914651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3558916.2239583335,
            "unit": "ns",
            "range": "± 10404.294162724691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1099136.5234375,
            "unit": "ns",
            "range": "± 664.8946847915192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 823283.8151041666,
            "unit": "ns",
            "range": "± 1673.4966687264778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906320.99609375,
            "unit": "ns",
            "range": "± 7334.595188014649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609205.9895833334,
            "unit": "ns",
            "range": "± 4007.450515715338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 524833.8346354166,
            "unit": "ns",
            "range": "± 1154.2794674513673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208889.4736842103,
            "unit": "ns",
            "range": "± 64927.24322831686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399426.6666666665,
            "unit": "ns",
            "range": "± 60810.49564797495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15662566.666666666,
            "unit": "ns",
            "range": "± 128569.16796954452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4240602.777777778,
            "unit": "ns",
            "range": "± 140648.67778792683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18656440,
            "unit": "ns",
            "range": "± 348541.0404201245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 139654.05405405405,
            "unit": "ns",
            "range": "± 4729.610895118035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 138494.64285714287,
            "unit": "ns",
            "range": "± 5964.574804410001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 124855.10204081633,
            "unit": "ns",
            "range": "± 10893.508635965341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7712807.692307692,
            "unit": "ns",
            "range": "± 80374.28549748215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6181585.714285715,
            "unit": "ns",
            "range": "± 57399.95788182396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16124.731182795698,
            "unit": "ns",
            "range": "± 1560.285363669826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 40666.30434782609,
            "unit": "ns",
            "range": "± 3338.6605583582364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 28434.090909090908,
            "unit": "ns",
            "range": "± 1650.7668969186357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75298.45360824742,
            "unit": "ns",
            "range": "± 13174.803235422389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4663.1578947368425,
            "unit": "ns",
            "range": "± 867.2593947503566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15258.695652173914,
            "unit": "ns",
            "range": "± 1718.55754579899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84a1f0b6316de1aad5d7cea313360ee6ce7e2d6d",
          "message": "Merge pull request #3015 from riemannulus/merge/main/0.52-maintenance\n\n🔀 Port 0.52.2 to main",
          "timestamp": "2023-03-28T19:09:08+09:00",
          "tree_id": "28c67380d41870034ff1bba749b2f70b12511a10",
          "url": "https://github.com/planetarium/libplanet/commit/84a1f0b6316de1aad5d7cea313360ee6ce7e2d6d"
        },
        "date": 1679999050343,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287908.163265306,
            "unit": "ns",
            "range": "± 92479.09395788888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2302789.189189189,
            "unit": "ns",
            "range": "± 78159.55114658372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2024591.6666666667,
            "unit": "ns",
            "range": "± 113249.39471586052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696476,
            "unit": "ns",
            "range": "± 124875.5222878634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42519.04761904762,
            "unit": "ns",
            "range": "± 1924.1971214540313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6725730.769230769,
            "unit": "ns",
            "range": "± 12456.416326227529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17316121.42857143,
            "unit": "ns",
            "range": "± 146706.59981259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44152678.571428575,
            "unit": "ns",
            "range": "± 287653.9137937795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89313946.66666667,
            "unit": "ns",
            "range": "± 563887.4404735484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179412060,
            "unit": "ns",
            "range": "± 1707812.6222075503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4876693.179086538,
            "unit": "ns",
            "range": "± 8239.400046730989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512234.5703125,
            "unit": "ns",
            "range": "± 2281.2369555471196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145194.2940848214,
            "unit": "ns",
            "range": "± 1308.6423758065466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607128.7109375,
            "unit": "ns",
            "range": "± 2470.261572403492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852940.0032552084,
            "unit": "ns",
            "range": "± 3219.930624943656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738325.341796875,
            "unit": "ns",
            "range": "± 661.1424290907204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2917655,
            "unit": "ns",
            "range": "± 96004.60712769773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4513343.478260869,
            "unit": "ns",
            "range": "± 111196.39802082765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21558061.53846154,
            "unit": "ns",
            "range": "± 158339.30623012056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5589764.705882353,
            "unit": "ns",
            "range": "± 76383.18647759197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24647586.666666668,
            "unit": "ns",
            "range": "± 306289.1091451872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182600,
            "unit": "ns",
            "range": "± 4077.9251690302663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172821.81818181818,
            "unit": "ns",
            "range": "± 7249.410982690912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145102.66666666666,
            "unit": "ns",
            "range": "± 7275.3373346761955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10137571.42857143,
            "unit": "ns",
            "range": "± 28563.22079909026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8085257.142857143,
            "unit": "ns",
            "range": "± 53747.210507733675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17431.052631578947,
            "unit": "ns",
            "range": "± 1696.1341988783502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47071.739130434784,
            "unit": "ns",
            "range": "± 4668.678098128687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33572,
            "unit": "ns",
            "range": "± 1363.8241552819823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83553.53535353535,
            "unit": "ns",
            "range": "± 13031.541900807933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4725.263157894737,
            "unit": "ns",
            "range": "± 686.6459369843789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17548.958333333332,
            "unit": "ns",
            "range": "± 2096.513134841135"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "befdfa5b6df52e5aab73d5e22a0e941a11e1c279",
          "message": "Merge pull request #3016 from riemannulus/merge/main/0.53-maintenance\n\n🔀 Port 0.53.1 to main",
          "timestamp": "2023-03-28T19:52:06+09:00",
          "tree_id": "081932db25900e7a90f52678dd351852fe59b3c4",
          "url": "https://github.com/planetarium/libplanet/commit/befdfa5b6df52e5aab73d5e22a0e941a11e1c279"
        },
        "date": 1680001862151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373535.0515463918,
            "unit": "ns",
            "range": "± 110177.57545703693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2578066.6666666665,
            "unit": "ns",
            "range": "± 111509.24742775713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2149288.888888889,
            "unit": "ns",
            "range": "± 142967.41450406564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5070803.448275862,
            "unit": "ns",
            "range": "± 144586.0926990229"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49963.541666666664,
            "unit": "ns",
            "range": "± 3073.490037200695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7633800,
            "unit": "ns",
            "range": "± 161071.15344029866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20306633.333333332,
            "unit": "ns",
            "range": "± 207432.67639910363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50491920,
            "unit": "ns",
            "range": "± 462284.0394636799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100762626.66666667,
            "unit": "ns",
            "range": "± 582983.7972101144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201860486.66666666,
            "unit": "ns",
            "range": "± 1350071.1922321867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4814974.776785715,
            "unit": "ns",
            "range": "± 11611.55957750966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526050.3645833333,
            "unit": "ns",
            "range": "± 2778.733009443491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1181799.7526041667,
            "unit": "ns",
            "range": "± 4137.750225685953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635181.9791666665,
            "unit": "ns",
            "range": "± 10462.368945861233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823682.8971354166,
            "unit": "ns",
            "range": "± 1617.308879529577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759155.6770833334,
            "unit": "ns",
            "range": "± 1812.6182084897268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234307.6923076925,
            "unit": "ns",
            "range": "± 85603.99487443059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5230408.108108108,
            "unit": "ns",
            "range": "± 173871.38186726542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23736752.63157895,
            "unit": "ns",
            "range": "± 526825.3108831565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6318145,
            "unit": "ns",
            "range": "± 144413.02782388838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27467800,
            "unit": "ns",
            "range": "± 443593.7781349058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193189.33333333334,
            "unit": "ns",
            "range": "± 9745.249339277303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188714.58333333334,
            "unit": "ns",
            "range": "± 7351.305849645725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176235.05747126436,
            "unit": "ns",
            "range": "± 9657.730109541873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11357333.333333334,
            "unit": "ns",
            "range": "± 145677.81803235062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9314164.285714285,
            "unit": "ns",
            "range": "± 72540.78542068972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24265.625,
            "unit": "ns",
            "range": "± 2084.318802012075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57716.85393258427,
            "unit": "ns",
            "range": "± 4233.101054220185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43768.62745098039,
            "unit": "ns",
            "range": "± 1783.9832057593405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109356.12244897959,
            "unit": "ns",
            "range": "± 15760.900769214197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6876.8421052631575,
            "unit": "ns",
            "range": "± 1030.229537693395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21073.40425531915,
            "unit": "ns",
            "range": "± 1505.3435668229515"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5fbabad50c4076bf2bcde95c6f67c7725966085",
          "message": "Merge pull request #2986 from planetarium/tx-invoice",
          "timestamp": "2023-03-31T16:03:30+09:00",
          "tree_id": "606589d0a8afe3cba7ebbc4325300655d36cae40",
          "url": "https://github.com/planetarium/libplanet/commit/f5fbabad50c4076bf2bcde95c6f67c7725966085"
        },
        "date": 1680247559309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1755104.2105263157,
            "unit": "ns",
            "range": "± 183310.82597122595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3503593.9393939395,
            "unit": "ns",
            "range": "± 327874.8578526171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2860986.4583333335,
            "unit": "ns",
            "range": "± 287750.735193095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7781191.666666667,
            "unit": "ns",
            "range": "± 794899.81396753"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69789.13043478261,
            "unit": "ns",
            "range": "± 15551.745999441715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8819559.18367347,
            "unit": "ns",
            "range": "± 625788.0051495214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25348831.25,
            "unit": "ns",
            "range": "± 1171654.8872773724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66407280.2631579,
            "unit": "ns",
            "range": "± 3262018.838000775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130801237.20930232,
            "unit": "ns",
            "range": "± 4829405.010972995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266140350,
            "unit": "ns",
            "range": "± 5171952.865214454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6108768.229166667,
            "unit": "ns",
            "range": "± 64871.38872166557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017947.7734375,
            "unit": "ns",
            "range": "± 45960.06856278137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1495801.3734879033,
            "unit": "ns",
            "range": "± 44504.9634702361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3360520.1171875,
            "unit": "ns",
            "range": "± 32394.71278537951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1070434.8754882812,
            "unit": "ns",
            "range": "± 20651.86397350818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1017736.328125,
            "unit": "ns",
            "range": "± 19298.22066029093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3917569.14893617,
            "unit": "ns",
            "range": "± 432283.90363169066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4338664.893617021,
            "unit": "ns",
            "range": "± 396940.0292472476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5048014.43298969,
            "unit": "ns",
            "range": "± 431134.39343919844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5481360.204081632,
            "unit": "ns",
            "range": "± 515385.6171638275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10102544.680851065,
            "unit": "ns",
            "range": "± 786046.779315632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 426982.2916666667,
            "unit": "ns",
            "range": "± 55015.390181277864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337739.4736842105,
            "unit": "ns",
            "range": "± 41261.57471052681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313431.52173913043,
            "unit": "ns",
            "range": "± 40455.8419675974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7186683.75,
            "unit": "ns",
            "range": "± 376053.18181791756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5279639.743589744,
            "unit": "ns",
            "range": "± 270008.64937552594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27969.072164948455,
            "unit": "ns",
            "range": "± 9403.084166298202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119562.1052631579,
            "unit": "ns",
            "range": "± 23746.843816924335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103901.06382978724,
            "unit": "ns",
            "range": "± 19607.292338173356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 247282.1052631579,
            "unit": "ns",
            "range": "± 35321.62853450032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7477.528089887641,
            "unit": "ns",
            "range": "± 1256.325161386896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31451.546391752578,
            "unit": "ns",
            "range": "± 11773.691659462473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9db060971a9ecc4403a964452823b399520f4f1d",
          "message": "Merge pull request #3033 from dahlia/make-rocksdb-store-blockchain-test-skippable",
          "timestamp": "2023-03-31T17:24:48+09:00",
          "tree_id": "d6b788a4eae4a7dfba47ea0bec2e61209da24360",
          "url": "https://github.com/planetarium/libplanet/commit/9db060971a9ecc4403a964452823b399520f4f1d"
        },
        "date": 1680252286269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1819550.5263157894,
            "unit": "ns",
            "range": "± 179831.40264531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3532988.888888889,
            "unit": "ns",
            "range": "± 212735.39952775778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2937613.5416666665,
            "unit": "ns",
            "range": "± 286270.29355591146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7302383.928571428,
            "unit": "ns",
            "range": "± 310807.65918770444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72648.42105263157,
            "unit": "ns",
            "range": "± 15611.090323786624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8984632.967032967,
            "unit": "ns",
            "range": "± 502433.00627047557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22823889.898989897,
            "unit": "ns",
            "range": "± 1513214.006372067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62010534.21052632,
            "unit": "ns",
            "range": "± 2006572.9099604622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133729424.56140351,
            "unit": "ns",
            "range": "± 5735606.782767523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260641605.55555555,
            "unit": "ns",
            "range": "± 5171130.525554375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5602544.661458333,
            "unit": "ns",
            "range": "± 111552.25510231424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034288.330078125,
            "unit": "ns",
            "range": "± 38143.31017600815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1487219.3129595588,
            "unit": "ns",
            "range": "± 28999.124040436483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3275047.890625,
            "unit": "ns",
            "range": "± 60835.70973468475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1084361.439732143,
            "unit": "ns",
            "range": "± 16405.07736703037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910798.818359375,
            "unit": "ns",
            "range": "± 17571.068510019635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3896746.4646464647,
            "unit": "ns",
            "range": "± 352721.1899206034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4344123.711340206,
            "unit": "ns",
            "range": "± 364427.7010982414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5179945.918367347,
            "unit": "ns",
            "range": "± 356936.106837921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5368981.25,
            "unit": "ns",
            "range": "± 447866.9617578534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10100035.820895523,
            "unit": "ns",
            "range": "± 473590.2370581724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 417503.22580645164,
            "unit": "ns",
            "range": "± 31602.574370964932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352883.67346938775,
            "unit": "ns",
            "range": "± 44602.22520887271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306056.4516129032,
            "unit": "ns",
            "range": "± 32290.6562284416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6599183.870967742,
            "unit": "ns",
            "range": "± 373421.0132097441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4557084.810126582,
            "unit": "ns",
            "range": "± 235261.2944990879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23014.893617021276,
            "unit": "ns",
            "range": "± 5803.90964720007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109042.70833333333,
            "unit": "ns",
            "range": "± 22680.69313334078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78867.02127659574,
            "unit": "ns",
            "range": "± 11560.643174222316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 217952.08333333334,
            "unit": "ns",
            "range": "± 29856.928946901942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6393.6781609195405,
            "unit": "ns",
            "range": "± 1654.7817357251686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29188.88888888889,
            "unit": "ns",
            "range": "± 10118.450402544495"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f33f0a6984b598fac343d17f1e4b169369850e89",
          "message": "Merge pull request #3035 from planetarium/fix-errata\n\n[changelog skip]",
          "timestamp": "2023-03-31T18:47:51+09:00",
          "tree_id": "a02e4b3f84fd0e863ac5acdf2b8c9cc5fe5709ed",
          "url": "https://github.com/planetarium/libplanet/commit/f33f0a6984b598fac343d17f1e4b169369850e89"
        },
        "date": 1680257100964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1303594.4444444445,
            "unit": "ns",
            "range": "± 97776.44140758582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2452603.2258064514,
            "unit": "ns",
            "range": "± 72997.14370608833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2095202.197802198,
            "unit": "ns",
            "range": "± 117051.83654928459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5533547.474747474,
            "unit": "ns",
            "range": "± 427775.4358766716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49267.03296703297,
            "unit": "ns",
            "range": "± 2774.4891399661287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6966244.117647059,
            "unit": "ns",
            "range": "± 135816.5926469785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19713728.57142857,
            "unit": "ns",
            "range": "± 216080.15403324983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49822871.428571425,
            "unit": "ns",
            "range": "± 517825.0271435938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97504920,
            "unit": "ns",
            "range": "± 1533880.040103714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197945514.2857143,
            "unit": "ns",
            "range": "± 4510815.006989947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4972018.90625,
            "unit": "ns",
            "range": "± 35737.14651610116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523183.7565104167,
            "unit": "ns",
            "range": "± 6691.732343835393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174038.1417410714,
            "unit": "ns",
            "range": "± 11551.046360375294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653272.421875,
            "unit": "ns",
            "range": "± 20510.57290350706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848767.5520833334,
            "unit": "ns",
            "range": "± 7302.731111936797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752392.2395833334,
            "unit": "ns",
            "range": "± 2351.922185623443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3226066.6666666665,
            "unit": "ns",
            "range": "± 101721.65350438748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3370700,
            "unit": "ns",
            "range": "± 83717.0424704552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4016939.4736842103,
            "unit": "ns",
            "range": "± 88041.54256017024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4303000,
            "unit": "ns",
            "range": "± 224612.75987515532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7539022.7272727275,
            "unit": "ns",
            "range": "± 279654.8910284065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310142.42424242425,
            "unit": "ns",
            "range": "± 8425.854196423883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251416.66666666666,
            "unit": "ns",
            "range": "± 3479.507105463315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213012.90322580645,
            "unit": "ns",
            "range": "± 6480.881726816903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5269933.333333333,
            "unit": "ns",
            "range": "± 98030.23343166467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3625907.1428571427,
            "unit": "ns",
            "range": "± 57125.91307852282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22614.285714285714,
            "unit": "ns",
            "range": "± 3130.0340896006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91092.70833333333,
            "unit": "ns",
            "range": "± 8275.165697710314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82983,
            "unit": "ns",
            "range": "± 9224.769631133058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191647.91666666666,
            "unit": "ns",
            "range": "± 14331.004145717125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8243.434343434343,
            "unit": "ns",
            "range": "± 1360.6842228521275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21324.74226804124,
            "unit": "ns",
            "range": "± 2122.9416956899618"
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
          "id": "633703538f86dfb69361147287cbe4fae0b84a76",
          "message": "Merge pull request #3036 from greymistcube/chore/logging\n\n🧹 Small logging fix for consistency",
          "timestamp": "2023-03-31T21:16:31+09:00",
          "tree_id": "26356a172c2fea17776cc5cf1daba8b1789bffb8",
          "url": "https://github.com/planetarium/libplanet/commit/633703538f86dfb69361147287cbe4fae0b84a76"
        },
        "date": 1680265943475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503321.2121212122,
            "unit": "ns",
            "range": "± 174679.74151708305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2588634.0425531915,
            "unit": "ns",
            "range": "± 100854.20229350399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2313049,
            "unit": "ns",
            "range": "± 208794.37107577708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5253000,
            "unit": "ns",
            "range": "± 66788.1726056343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52676.086956521736,
            "unit": "ns",
            "range": "± 3529.8840240331833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7101486.666666667,
            "unit": "ns",
            "range": "± 113179.64775818428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19966825,
            "unit": "ns",
            "range": "± 366122.2045528879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50482540,
            "unit": "ns",
            "range": "± 914689.977767643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101372600,
            "unit": "ns",
            "range": "± 2142098.9766773973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198041773.33333334,
            "unit": "ns",
            "range": "± 3448691.6563628395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4902416.927083333,
            "unit": "ns",
            "range": "± 19657.461070234163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1546948.4830729167,
            "unit": "ns",
            "range": "± 10023.186568484924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1198724.5052083333,
            "unit": "ns",
            "range": "± 4363.24345682178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630769.921875,
            "unit": "ns",
            "range": "± 8897.193732010765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832966.1202566965,
            "unit": "ns",
            "range": "± 2798.3253266701113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773863.8736979166,
            "unit": "ns",
            "range": "± 2940.6350743200487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3134300,
            "unit": "ns",
            "range": "± 73175.658521123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3417740.909090909,
            "unit": "ns",
            "range": "± 121774.92642630123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3986062.5,
            "unit": "ns",
            "range": "± 77176.26470187148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4392354,
            "unit": "ns",
            "range": "± 267284.41682744597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7497733.333333333,
            "unit": "ns",
            "range": "± 193452.55494433964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329611.1111111111,
            "unit": "ns",
            "range": "± 12294.330219884107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267329.06976744183,
            "unit": "ns",
            "range": "± 13942.46890347929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216672,
            "unit": "ns",
            "range": "± 5540.872374154333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5432484.615384615,
            "unit": "ns",
            "range": "± 68905.62200277814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3739691.489361702,
            "unit": "ns",
            "range": "± 145481.81095002496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25107.291666666668,
            "unit": "ns",
            "range": "± 2496.9979782748665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98241.66666666667,
            "unit": "ns",
            "range": "± 8942.643747403923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95184.53608247422,
            "unit": "ns",
            "range": "± 9950.537466704433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 210335.7142857143,
            "unit": "ns",
            "range": "± 20372.233225592576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9192.929292929293,
            "unit": "ns",
            "range": "± 1745.7968489508273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22986.17021276596,
            "unit": "ns",
            "range": "± 2405.944746093251"
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
          "id": "92ba4b995674a19bd7b677525ef1ee47f744fee2",
          "message": "Merge pull request #3038 from greymistcube/chore/cleanup\n\n🧹 Removed unnecessary logic",
          "timestamp": "2023-04-02T16:42:25+09:00",
          "tree_id": "e367f0043a44abc981b7f55b69d973d07fa9015f",
          "url": "https://github.com/planetarium/libplanet/commit/92ba4b995674a19bd7b677525ef1ee47f744fee2"
        },
        "date": 1680422568386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1702136.4583333333,
            "unit": "ns",
            "range": "± 161417.04476606174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3020288.888888889,
            "unit": "ns",
            "range": "± 105927.63229124063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2703407.4468085105,
            "unit": "ns",
            "range": "± 183634.6836540498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6941550,
            "unit": "ns",
            "range": "± 414143.71035437315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61721.05263157895,
            "unit": "ns",
            "range": "± 6123.010223683128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8766363.157894736,
            "unit": "ns",
            "range": "± 188456.21422060503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24479071.739130434,
            "unit": "ns",
            "range": "± 848739.4233444858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60077205,
            "unit": "ns",
            "range": "± 1367802.6498442867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120128118.18181819,
            "unit": "ns",
            "range": "± 2843475.9098908976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245488875.86206895,
            "unit": "ns",
            "range": "± 7109390.275024353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6340067.65625,
            "unit": "ns",
            "range": "± 93413.8657707586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1899497.279575893,
            "unit": "ns",
            "range": "± 23647.918439765795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1453051.2825520833,
            "unit": "ns",
            "range": "± 18271.842349385806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3257128.4635416665,
            "unit": "ns",
            "range": "± 58784.6096661177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025195.390625,
            "unit": "ns",
            "range": "± 15414.957541309228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962631.1067708334,
            "unit": "ns",
            "range": "± 11764.450035061574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3882468.75,
            "unit": "ns",
            "range": "± 75540.653238284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4103234.939759036,
            "unit": "ns",
            "range": "± 219009.2432806761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4867958.490566038,
            "unit": "ns",
            "range": "± 200808.4002935311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5170318.604651162,
            "unit": "ns",
            "range": "± 279765.7715731366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9002659.45945946,
            "unit": "ns",
            "range": "± 304569.0356511599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366791.4893617021,
            "unit": "ns",
            "range": "± 13479.38570699451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315756.52173913043,
            "unit": "ns",
            "range": "± 12020.859687761531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266225.3968253968,
            "unit": "ns",
            "range": "± 12158.389752440406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6459580,
            "unit": "ns",
            "range": "± 142533.49227831553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4516203.125,
            "unit": "ns",
            "range": "± 111226.85474167562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25874.736842105263,
            "unit": "ns",
            "range": "± 2075.8985965607008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116077.08333333333,
            "unit": "ns",
            "range": "± 9720.239104343782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112533.33333333333,
            "unit": "ns",
            "range": "± 10657.556416549234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213379.54545454544,
            "unit": "ns",
            "range": "± 13193.111744094454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10232.291666666666,
            "unit": "ns",
            "range": "± 1275.8068482474482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26592.55319148936,
            "unit": "ns",
            "range": "± 2336.9974009354296"
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
          "id": "b68a00ef4c04d4c805b9471c48c59a127ba827e3",
          "message": "Merge pull request #3032 from riemannulus/merge/main/0.53-maintenance\n\n🔀 Merge 0.53.2 to main",
          "timestamp": "2023-04-03T11:58:01+09:00",
          "tree_id": "118aa78362a7cfe4036b7151188443d5543a9b30",
          "url": "https://github.com/planetarium/libplanet/commit/b68a00ef4c04d4c805b9471c48c59a127ba827e3"
        },
        "date": 1680491940706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678831.9587628867,
            "unit": "ns",
            "range": "± 175577.31828788406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3302463.1578947366,
            "unit": "ns",
            "range": "± 316299.071393499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2606056.25,
            "unit": "ns",
            "range": "± 293655.38836946455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8031703.0612244895,
            "unit": "ns",
            "range": "± 820761.4851816224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53317.708333333336,
            "unit": "ns",
            "range": "± 10576.418603783426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8674786.315789474,
            "unit": "ns",
            "range": "± 544072.2659311272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24238201.01010101,
            "unit": "ns",
            "range": "± 1452598.4364055847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59120414.86486486,
            "unit": "ns",
            "range": "± 2934140.1681733504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114248986.8852459,
            "unit": "ns",
            "range": "± 5109574.420356207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235887173.33333334,
            "unit": "ns",
            "range": "± 10464403.01595336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5956583.626302083,
            "unit": "ns",
            "range": "± 152176.1470192537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939189.8302801724,
            "unit": "ns",
            "range": "± 84648.02987362017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456510.3155838817,
            "unit": "ns",
            "range": "± 30819.254766060563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3152404.340277778,
            "unit": "ns",
            "range": "± 65303.11299311046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1052530.6274414062,
            "unit": "ns",
            "range": "± 20442.179249417248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 959692.4682617188,
            "unit": "ns",
            "range": "± 17823.6356562412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3445453.6842105263,
            "unit": "ns",
            "range": "± 224363.9182935324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588061.290322581,
            "unit": "ns",
            "range": "± 268312.91110917897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4688608,
            "unit": "ns",
            "range": "± 385611.2515333168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5082591.8367346935,
            "unit": "ns",
            "range": "± 316398.2524595833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9167788.888888888,
            "unit": "ns",
            "range": "± 724288.0484449412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379215.625,
            "unit": "ns",
            "range": "± 38412.72357223375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301425.7731958763,
            "unit": "ns",
            "range": "± 40497.44662308589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252139.56043956045,
            "unit": "ns",
            "range": "± 32285.37294923673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6258051.020408163,
            "unit": "ns",
            "range": "± 430398.0450279676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4602382.291666667,
            "unit": "ns",
            "range": "± 299542.1755717748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21332.222222222223,
            "unit": "ns",
            "range": "± 5550.297649226231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102431.91489361702,
            "unit": "ns",
            "range": "± 17498.677140575466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84432.6530612245,
            "unit": "ns",
            "range": "± 14832.37629994381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 212619.79166666666,
            "unit": "ns",
            "range": "± 29887.912077915265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5665.95744680851,
            "unit": "ns",
            "range": "± 821.9506292226026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20931.57894736842,
            "unit": "ns",
            "range": "± 6827.202522916232"
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
          "id": "06dcadb1c245a5e3dae485232d6e232c46bb9e95",
          "message": "Merge pull request #3040 from greymistcube/chore/changelog\n\n🧹 Changelog formatting",
          "timestamp": "2023-04-03T12:10:05+09:00",
          "tree_id": "455a1fabf98b0d26316085398906cca91f305c12",
          "url": "https://github.com/planetarium/libplanet/commit/06dcadb1c245a5e3dae485232d6e232c46bb9e95"
        },
        "date": 1680492352993,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344173.7373737374,
            "unit": "ns",
            "range": "± 108586.83122497563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2425741.0256410255,
            "unit": "ns",
            "range": "± 83291.04873226401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2104078.947368421,
            "unit": "ns",
            "range": "± 141003.8130574933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5166445.12195122,
            "unit": "ns",
            "range": "± 180003.14018263615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42627.04918032787,
            "unit": "ns",
            "range": "± 1779.7371943279481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6791633.333333333,
            "unit": "ns",
            "range": "± 55650.60218730363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17538536.666666668,
            "unit": "ns",
            "range": "± 126513.01382334811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45670380,
            "unit": "ns",
            "range": "± 334800.7343395258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89828828.57142857,
            "unit": "ns",
            "range": "± 625451.7498804936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182725986.66666666,
            "unit": "ns",
            "range": "± 1468924.91486931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4844416.796875,
            "unit": "ns",
            "range": "± 6653.282521779447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1506428.57421875,
            "unit": "ns",
            "range": "± 1729.5870465586677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148122.5651041667,
            "unit": "ns",
            "range": "± 997.4559189539312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2703394.0104166665,
            "unit": "ns",
            "range": "± 12388.330010431535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836267.4869791666,
            "unit": "ns",
            "range": "± 896.9985994219812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761828.1575520834,
            "unit": "ns",
            "range": "± 881.818923323379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2910193.3333333335,
            "unit": "ns",
            "range": "± 32454.351825001104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3144389.285714286,
            "unit": "ns",
            "range": "± 89456.43400368742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3850553.3333333335,
            "unit": "ns",
            "range": "± 41547.3373165506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3960927.272727273,
            "unit": "ns",
            "range": "± 184316.41485016138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7058573.684210527,
            "unit": "ns",
            "range": "± 193725.68190434374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293482.14285714284,
            "unit": "ns",
            "range": "± 7873.163681088203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245128.57142857142,
            "unit": "ns",
            "range": "± 4251.593108005981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224662.16216216216,
            "unit": "ns",
            "range": "± 11280.77164734951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5171535.714285715,
            "unit": "ns",
            "range": "± 39264.759246445385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3617673.3333333335,
            "unit": "ns",
            "range": "± 55754.05772121839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16509.574468085106,
            "unit": "ns",
            "range": "± 1690.331083490519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80107.52688172043,
            "unit": "ns",
            "range": "± 4886.988860387563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76225,
            "unit": "ns",
            "range": "± 6460.878219593762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157897.9797979798,
            "unit": "ns",
            "range": "± 17481.86220290105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5367.708333333333,
            "unit": "ns",
            "range": "± 828.2505077020911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16573.958333333332,
            "unit": "ns",
            "range": "± 1521.8925054830952"
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
          "id": "e9f985f450f487d59ef3bf0f6db36ee476d1e28f",
          "message": "Merge pull request #3037 from greymistcube/refactor/block-evaluate\n\nRefactor block evaluate related code",
          "timestamp": "2023-04-03T12:22:37+09:00",
          "tree_id": "454ada684563cc5e87b0ab68b80567c1375e8c64",
          "url": "https://github.com/planetarium/libplanet/commit/e9f985f450f487d59ef3bf0f6db36ee476d1e28f"
        },
        "date": 1680493361096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1620886.956521739,
            "unit": "ns",
            "range": "± 120089.03218934653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007943.396226415,
            "unit": "ns",
            "range": "± 124520.46867488518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638091.6666666665,
            "unit": "ns",
            "range": "± 182314.39396167826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6463942.857142857,
            "unit": "ns",
            "range": "± 219676.72161816765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56720.21276595745,
            "unit": "ns",
            "range": "± 3791.603053813089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8727563.829787234,
            "unit": "ns",
            "range": "± 338897.81544803246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23269415.384615384,
            "unit": "ns",
            "range": "± 318759.21645800787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60046321.428571425,
            "unit": "ns",
            "range": "± 2192426.033297552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120629794.44444445,
            "unit": "ns",
            "range": "± 3919645.3000563676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243666940,
            "unit": "ns",
            "range": "± 4542591.312047091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5978986.197916667,
            "unit": "ns",
            "range": "± 94314.20046753687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942566.837086397,
            "unit": "ns",
            "range": "± 38805.247082840004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425264.3359375,
            "unit": "ns",
            "range": "± 16551.521445663795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3180063.5546875,
            "unit": "ns",
            "range": "± 57598.06186204399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1035033.828125,
            "unit": "ns",
            "range": "± 14139.365957030579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 936500.8203125,
            "unit": "ns",
            "range": "± 15399.668572261908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3909775.5102040814,
            "unit": "ns",
            "range": "± 153351.41088717908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4115061.290322581,
            "unit": "ns",
            "range": "± 122107.64288779348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4760174.358974359,
            "unit": "ns",
            "range": "± 165384.22523570716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5162197.142857143,
            "unit": "ns",
            "range": "± 248512.6019441504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8774989.583333334,
            "unit": "ns",
            "range": "± 342806.6034019661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368233.7837837838,
            "unit": "ns",
            "range": "± 18484.486475998656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307375.75757575757,
            "unit": "ns",
            "range": "± 9459.586087107296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270293.2584269663,
            "unit": "ns",
            "range": "± 14984.346360549438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6456121.212121212,
            "unit": "ns",
            "range": "± 172149.02112264495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4444278.571428572,
            "unit": "ns",
            "range": "± 74385.76351148661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26778.88888888889,
            "unit": "ns",
            "range": "± 2106.4638052424507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112112.36559139784,
            "unit": "ns",
            "range": "± 8446.441416597916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110604.08163265306,
            "unit": "ns",
            "range": "± 10423.27805618589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 215138.04347826086,
            "unit": "ns",
            "range": "± 21317.15422522024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9668.181818181818,
            "unit": "ns",
            "range": "± 1595.232926269328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26244.897959183672,
            "unit": "ns",
            "range": "± 2593.692684582668"
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
          "id": "f4ab79f05456dee3c24fb8109b393d92921015f6",
          "message": "Merge pull request #2996 from colibrishin/pbft/verify/block-body\n\nfix: validate block content in PreVote step",
          "timestamp": "2023-04-03T16:05:44+09:00",
          "tree_id": "f4bb5338c245cecfb15941a7a6749b1e93f38743",
          "url": "https://github.com/planetarium/libplanet/commit/f4ab79f05456dee3c24fb8109b393d92921015f6"
        },
        "date": 1680506400129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1359150,
            "unit": "ns",
            "range": "± 35929.27775505653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2418904.8780487804,
            "unit": "ns",
            "range": "± 85109.30017107271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2238525,
            "unit": "ns",
            "range": "± 49875.66514528112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5138562.5,
            "unit": "ns",
            "range": "± 159906.28455362094"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42192.1875,
            "unit": "ns",
            "range": "± 1963.4198127530217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6749857.142857143,
            "unit": "ns",
            "range": "± 22997.214355914242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17362250,
            "unit": "ns",
            "range": "± 88301.65735878174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44843557.14285714,
            "unit": "ns",
            "range": "± 218906.87065959815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88584260,
            "unit": "ns",
            "range": "± 920847.6497227976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177353236.66666666,
            "unit": "ns",
            "range": "± 1186926.0801791844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4853478.125,
            "unit": "ns",
            "range": "± 6769.803372638702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510146.1388221155,
            "unit": "ns",
            "range": "± 2584.7964835633747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143893.6979166667,
            "unit": "ns",
            "range": "± 2181.3780632218522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575130.1231971155,
            "unit": "ns",
            "range": "± 4459.1114347887415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804260.009765625,
            "unit": "ns",
            "range": "± 796.719519865582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771189.4596354166,
            "unit": "ns",
            "range": "± 702.0156872178723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2941291.304347826,
            "unit": "ns",
            "range": "± 73246.58796299896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3061288,
            "unit": "ns",
            "range": "± 75036.44292386645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3906840,
            "unit": "ns",
            "range": "± 67343.84901384833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4044244,
            "unit": "ns",
            "range": "± 98206.53016305313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6936066.666666667,
            "unit": "ns",
            "range": "± 145982.64538507033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290919.04761904763,
            "unit": "ns",
            "range": "± 10409.87425465251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236095.1219512195,
            "unit": "ns",
            "range": "± 8473.929171863314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214786.95652173914,
            "unit": "ns",
            "range": "± 10272.24863754822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5239493.333333333,
            "unit": "ns",
            "range": "± 62003.25413887181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3544871.4285714286,
            "unit": "ns",
            "range": "± 44545.968971932256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17167.525773195877,
            "unit": "ns",
            "range": "± 2019.179407853511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80812.36559139784,
            "unit": "ns",
            "range": "± 4555.1670130813045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68437.63440860216,
            "unit": "ns",
            "range": "± 3902.031632994552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150642.85714285713,
            "unit": "ns",
            "range": "± 15749.547530728634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4873.404255319149,
            "unit": "ns",
            "range": "± 583.3119256129971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15050,
            "unit": "ns",
            "range": "± 1477.4123502757288"
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
          "id": "b6651c751b7ca992a896ba5139e3d8b6a705df24",
          "message": "Merge pull request #3043 from greymistcube/chore/reorganize-blockchain-code\n\n🧹 Separate block validation related code",
          "timestamp": "2023-04-03T16:49:00+09:00",
          "tree_id": "68febb310cb06ee0c765e5c728e72392a040515b",
          "url": "https://github.com/planetarium/libplanet/commit/b6651c751b7ca992a896ba5139e3d8b6a705df24"
        },
        "date": 1680509488948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716749.494949495,
            "unit": "ns",
            "range": "± 312813.1085689976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3268537.8947368423,
            "unit": "ns",
            "range": "± 354811.51939218806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2698841.836734694,
            "unit": "ns",
            "range": "± 363053.2331316074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7313386.170212766,
            "unit": "ns",
            "range": "± 846600.4391506781"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69845.36082474227,
            "unit": "ns",
            "range": "± 18984.675950939996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7978294.94949495,
            "unit": "ns",
            "range": "± 700618.1437427802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21844857.73195876,
            "unit": "ns",
            "range": "± 1648207.64360076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64242243.75,
            "unit": "ns",
            "range": "± 2938634.886823396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129284233,
            "unit": "ns",
            "range": "± 7660421.869373696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230103455,
            "unit": "ns",
            "range": "± 15976408.816191928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5705695.6632653065,
            "unit": "ns",
            "range": "± 226874.28506141642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889005.3435496795,
            "unit": "ns",
            "range": "± 65576.50550792496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477939.0014648438,
            "unit": "ns",
            "range": "± 27247.450557634944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3297201.71875,
            "unit": "ns",
            "range": "± 69827.0383645134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1030337.6534598215,
            "unit": "ns",
            "range": "± 15279.987598760323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953673.916015625,
            "unit": "ns",
            "range": "± 21616.165530817412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3302941.489361702,
            "unit": "ns",
            "range": "± 438258.59318065015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3597001.098901099,
            "unit": "ns",
            "range": "± 378900.0444252358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4625372.7272727275,
            "unit": "ns",
            "range": "± 503727.9020966075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5385121.276595744,
            "unit": "ns",
            "range": "± 634066.2510536533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9636110.52631579,
            "unit": "ns",
            "range": "± 820711.959147677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 410569.4736842105,
            "unit": "ns",
            "range": "± 58241.61171212921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317625,
            "unit": "ns",
            "range": "± 48824.88580308417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278558.76288659795,
            "unit": "ns",
            "range": "± 58719.06943336446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6175156.701030928,
            "unit": "ns",
            "range": "± 611313.9954412435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4171284.6153846155,
            "unit": "ns",
            "range": "± 455196.5375095507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27475.757575757576,
            "unit": "ns",
            "range": "± 10972.610528866036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116952.04081632652,
            "unit": "ns",
            "range": "± 29102.23794700487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92719.19191919192,
            "unit": "ns",
            "range": "± 23959.241226647155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 231491.66666666666,
            "unit": "ns",
            "range": "± 42612.265757437206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5920.238095238095,
            "unit": "ns",
            "range": "± 1062.025770783542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26790.816326530614,
            "unit": "ns",
            "range": "± 10884.151788333496"
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
          "id": "fe7ee7c4537e276f02af01dc87417ab14156a78a",
          "message": "Merge pull request #3051 from greymistcube/refactor/block-validate\n\n🧹 Refactor block validate code",
          "timestamp": "2023-04-04T16:26:25+09:00",
          "tree_id": "19c43852e595bc3320b48143ad2b15c43fe98b13",
          "url": "https://github.com/planetarium/libplanet/commit/fe7ee7c4537e276f02af01dc87417ab14156a78a"
        },
        "date": 1680594032442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542785.7142857143,
            "unit": "ns",
            "range": "± 23455.058734093593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2505932.727272727,
            "unit": "ns",
            "range": "± 106218.06893532837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2222655,
            "unit": "ns",
            "range": "± 176487.19092502454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5204860.869565218,
            "unit": "ns",
            "range": "± 127015.68886319242"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43259.74025974026,
            "unit": "ns",
            "range": "± 2225.643593509866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6859650,
            "unit": "ns",
            "range": "± 27854.91946607526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17579360,
            "unit": "ns",
            "range": "± 81821.6248049028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45567040,
            "unit": "ns",
            "range": "± 370688.68301350356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91837226.66666667,
            "unit": "ns",
            "range": "± 406961.16779766354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181308246.66666666,
            "unit": "ns",
            "range": "± 930054.5996773266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869327.399553572,
            "unit": "ns",
            "range": "± 6185.086133356595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1552059.3619791667,
            "unit": "ns",
            "range": "± 11512.338831425124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136937.7103365385,
            "unit": "ns",
            "range": "± 1137.2586604539006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583039.6614583335,
            "unit": "ns",
            "range": "± 4450.638170523259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809373.1236049107,
            "unit": "ns",
            "range": "± 1818.0192694749524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727877.6576450893,
            "unit": "ns",
            "range": "± 1517.0611710801495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2962072.5,
            "unit": "ns",
            "range": "± 103049.94553924337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3118648.214285714,
            "unit": "ns",
            "range": "± 133500.5004976269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3969546.6666666665,
            "unit": "ns",
            "range": "± 51004.19964034708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4052520.8333333335,
            "unit": "ns",
            "range": "± 195740.99222884406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7107900,
            "unit": "ns",
            "range": "± 202704.88092298122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301212,
            "unit": "ns",
            "range": "± 7668.7852145347415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246804.54545454544,
            "unit": "ns",
            "range": "± 8574.948763707653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230110.46511627908,
            "unit": "ns",
            "range": "± 12403.728368042432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5285400,
            "unit": "ns",
            "range": "± 29313.36441511505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3625156.6666666665,
            "unit": "ns",
            "range": "± 42667.710552706296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18700,
            "unit": "ns",
            "range": "± 1461.3620179026213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83360.41666666667,
            "unit": "ns",
            "range": "± 5160.262726209662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78504.08163265306,
            "unit": "ns",
            "range": "± 8107.244035363529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157630.1075268817,
            "unit": "ns",
            "range": "± 12974.622260952312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6007.291666666667,
            "unit": "ns",
            "range": "± 826.9467992391831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17362.105263157893,
            "unit": "ns",
            "range": "± 1553.0463507330342"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "060cd3e02eaa0f9c9ed3134745815bf2c36fe999",
          "message": "Merge pull request #3044 from dahlia/type-converters",
          "timestamp": "2023-04-04T23:38:34+09:00",
          "tree_id": "d44ad2891cc70450dd4debbdf5635108c13b07d3",
          "url": "https://github.com/planetarium/libplanet/commit/060cd3e02eaa0f9c9ed3134745815bf2c36fe999"
        },
        "date": 1680620380742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1736050,
            "unit": "ns",
            "range": "± 182017.5696056875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3283610,
            "unit": "ns",
            "range": "± 320531.1672342322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2775996.8421052634,
            "unit": "ns",
            "range": "± 233339.91936367215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7029938.541666667,
            "unit": "ns",
            "range": "± 423544.4291290724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70066.30434782608,
            "unit": "ns",
            "range": "± 6150.927334247225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10004640,
            "unit": "ns",
            "range": "± 354786.20922523225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25054657.14285714,
            "unit": "ns",
            "range": "± 246659.04438277584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65596682.92682927,
            "unit": "ns",
            "range": "± 2312789.687898841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128157295,
            "unit": "ns",
            "range": "± 2576318.515261447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258967615,
            "unit": "ns",
            "range": "± 8877309.680492112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6387594.661458333,
            "unit": "ns",
            "range": "± 98924.6935164721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999700.3125,
            "unit": "ns",
            "range": "± 34383.168471371064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522681.953125,
            "unit": "ns",
            "range": "± 19581.317872556894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3448002.2600446427,
            "unit": "ns",
            "range": "± 51774.71868168255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1057473.7017463236,
            "unit": "ns",
            "range": "± 18669.198116948515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 983595.6204927885,
            "unit": "ns",
            "range": "± 10906.934055699905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4057828.735632184,
            "unit": "ns",
            "range": "± 213569.5218805571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4259098.461538462,
            "unit": "ns",
            "range": "± 198934.18312684764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5327163.888888889,
            "unit": "ns",
            "range": "± 263014.21549197816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5489893.258426966,
            "unit": "ns",
            "range": "± 303839.7244203808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9617409.090909092,
            "unit": "ns",
            "range": "± 407498.71314167517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 401461.4035087719,
            "unit": "ns",
            "range": "± 17366.714410721415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337982.6666666667,
            "unit": "ns",
            "range": "± 17087.9629938527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310873.9130434783,
            "unit": "ns",
            "range": "± 7651.98829724574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6757588.372093023,
            "unit": "ns",
            "range": "± 239269.061746795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4739157.692307692,
            "unit": "ns",
            "range": "± 122449.2618943109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32087.5,
            "unit": "ns",
            "range": "± 2648.3460578453987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130901.0752688172,
            "unit": "ns",
            "range": "± 11272.393120243654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130865.625,
            "unit": "ns",
            "range": "± 9359.648307888947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 232507.52688172043,
            "unit": "ns",
            "range": "± 24260.028121776326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13633.684210526315,
            "unit": "ns",
            "range": "± 1434.05469837783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31431.182795698925,
            "unit": "ns",
            "range": "± 2966.112171155148"
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
          "id": "55156ee578fcd4247e83f5afad8ad18c9873433e",
          "message": "Merge pull request #3057 from greymistcube/port/0.53.3-to-main\n\n🔀 Port 0.53.3 to main",
          "timestamp": "2023-04-05T11:49:49+09:00",
          "tree_id": "b8e10152fa0f22ef74a635454380aa248cf9b5d6",
          "url": "https://github.com/planetarium/libplanet/commit/55156ee578fcd4247e83f5afad8ad18c9873433e"
        },
        "date": 1680663987748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1669241.4893617022,
            "unit": "ns",
            "range": "± 141264.87620555528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3059642.4242424243,
            "unit": "ns",
            "range": "± 139955.0895665145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2675865.263157895,
            "unit": "ns",
            "range": "± 181459.32711639925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6725158.333333333,
            "unit": "ns",
            "range": "± 328858.58930635126"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58476.086956521736,
            "unit": "ns",
            "range": "± 5298.338316437748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9162197.590361446,
            "unit": "ns",
            "range": "± 486894.37327394757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23542007.692307692,
            "unit": "ns",
            "range": "± 257674.33083105265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59559935.294117644,
            "unit": "ns",
            "range": "± 1057551.0797008676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120560130,
            "unit": "ns",
            "range": "± 3180813.184941863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240347175,
            "unit": "ns",
            "range": "± 4708986.064324251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5812598.737980769,
            "unit": "ns",
            "range": "± 54734.501832674236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866195.6333705357,
            "unit": "ns",
            "range": "± 20354.24445624297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427492.3828125,
            "unit": "ns",
            "range": "± 17638.162024211273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3201558.7760416665,
            "unit": "ns",
            "range": "± 48345.32137635491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000674.0931919643,
            "unit": "ns",
            "range": "± 11904.390801518008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924435.8328683035,
            "unit": "ns",
            "range": "± 4648.916680496352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3802741.6666666665,
            "unit": "ns",
            "range": "± 93757.40273373558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4037115.3846153845,
            "unit": "ns",
            "range": "± 40206.69194205209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4746100,
            "unit": "ns",
            "range": "± 116983.28551938132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5394692.857142857,
            "unit": "ns",
            "range": "± 84700.15406657239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8952874.358974358,
            "unit": "ns",
            "range": "± 288775.30303165753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370986.95652173914,
            "unit": "ns",
            "range": "± 14251.699449471547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303934.88372093026,
            "unit": "ns",
            "range": "± 11052.297406528098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263791.6666666667,
            "unit": "ns",
            "range": "± 12929.491891152578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6305240,
            "unit": "ns",
            "range": "± 40004.38904491784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4511671.428571428,
            "unit": "ns",
            "range": "± 72478.81842910466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27517.34693877551,
            "unit": "ns",
            "range": "± 2803.23912460796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116255.15463917526,
            "unit": "ns",
            "range": "± 8440.790977129314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113665.97938144329,
            "unit": "ns",
            "range": "± 11282.84913964127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 207010.52631578947,
            "unit": "ns",
            "range": "± 9545.268691135148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8917.708333333334,
            "unit": "ns",
            "range": "± 1167.001988152067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26987.5,
            "unit": "ns",
            "range": "± 2829.329472358759"
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
          "id": "a9008dc85e18b93a9e34e91ee57fc87158d225e6",
          "message": "Merge pull request #3058 from greymistcube/port/0.53.4-to-main\n\n🔀 Port 0.53.4 to main",
          "timestamp": "2023-04-05T11:57:40+09:00",
          "tree_id": "6c6797cf881deada6e66d7f68eedc5e7c54df135",
          "url": "https://github.com/planetarium/libplanet/commit/a9008dc85e18b93a9e34e91ee57fc87158d225e6"
        },
        "date": 1680664405796,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435133.6734693877,
            "unit": "ns",
            "range": "± 111569.22121467452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2591772.1649484537,
            "unit": "ns",
            "range": "± 158677.36772974016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2199853.5353535353,
            "unit": "ns",
            "range": "± 161977.8287380093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5596151.020408163,
            "unit": "ns",
            "range": "± 343599.69613565586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52648.42105263158,
            "unit": "ns",
            "range": "± 4408.426726600704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6919840,
            "unit": "ns",
            "range": "± 124278.66039095943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19113146.666666668,
            "unit": "ns",
            "range": "± 345090.9732368029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49615258.823529415,
            "unit": "ns",
            "range": "± 980445.295553775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98659216.66666667,
            "unit": "ns",
            "range": "± 2695604.9478021413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194886648.14814815,
            "unit": "ns",
            "range": "± 5368185.394122441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4896337.890625,
            "unit": "ns",
            "range": "± 35206.00831165377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522312.2526041667,
            "unit": "ns",
            "range": "± 10519.546066911855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179614.2159598214,
            "unit": "ns",
            "range": "± 7305.18211725355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2660616.2760416665,
            "unit": "ns",
            "range": "± 12644.668765031924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846832.6171875,
            "unit": "ns",
            "range": "± 3395.229707973998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764960.52734375,
            "unit": "ns",
            "range": "± 3741.4885252433987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3137138.888888889,
            "unit": "ns",
            "range": "± 102950.54368212169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3181202.6315789474,
            "unit": "ns",
            "range": "± 158227.93092976912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3885617.073170732,
            "unit": "ns",
            "range": "± 138181.3896703153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4260835.106382979,
            "unit": "ns",
            "range": "± 240936.8961944974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7265991.891891892,
            "unit": "ns",
            "range": "± 243730.3910954552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317161.90476190473,
            "unit": "ns",
            "range": "± 14118.638202760945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262466.6666666667,
            "unit": "ns",
            "range": "± 11586.479067220604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217104,
            "unit": "ns",
            "range": "± 10881.65378925415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5349895.833333333,
            "unit": "ns",
            "range": "± 138501.6731312114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3711808,
            "unit": "ns",
            "range": "± 98412.9603592264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25557.44680851064,
            "unit": "ns",
            "range": "± 4039.249354348231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99639,
            "unit": "ns",
            "range": "± 11448.540068365473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87182.97872340426,
            "unit": "ns",
            "range": "± 9951.95596809694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219948.42105263157,
            "unit": "ns",
            "range": "± 24186.464753403652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8858.762886597939,
            "unit": "ns",
            "range": "± 1491.137190293004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24221.649484536083,
            "unit": "ns",
            "range": "± 4337.559480959207"
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
          "id": "5f0c1f0c8b33484731f259b0f5adfe04ab36d6cb",
          "message": "Merge pull request #3053 from greymistcube/refactor/block-validate\n\n♻️ Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-05T12:10:48+09:00",
          "tree_id": "d5695dc031f3ab84fe5407544e7651a49e6b3c70",
          "url": "https://github.com/planetarium/libplanet/commit/5f0c1f0c8b33484731f259b0f5adfe04ab36d6cb"
        },
        "date": 1680665235942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343460.606060606,
            "unit": "ns",
            "range": "± 93312.44510714442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2501647.272727273,
            "unit": "ns",
            "range": "± 105580.48685901768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155121.212121212,
            "unit": "ns",
            "range": "± 133506.71715328176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5599692,
            "unit": "ns",
            "range": "± 399634.07168118795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52604.12371134021,
            "unit": "ns",
            "range": "± 4824.588011896568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7508220,
            "unit": "ns",
            "range": "± 169846.43404527142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19870720,
            "unit": "ns",
            "range": "± 278421.82334415836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50707442.85714286,
            "unit": "ns",
            "range": "± 306002.5859978354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100697020,
            "unit": "ns",
            "range": "± 1047683.2715227305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202116773.33333334,
            "unit": "ns",
            "range": "± 1272118.7273131988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4816066.276041667,
            "unit": "ns",
            "range": "± 16412.59448346921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515786.71875,
            "unit": "ns",
            "range": "± 4551.795044260715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177762.1484375,
            "unit": "ns",
            "range": "± 4621.776341774699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638221.9308035714,
            "unit": "ns",
            "range": "± 4902.013171357585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852059.0755208334,
            "unit": "ns",
            "range": "± 2782.1126075856973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776798.2161458334,
            "unit": "ns",
            "range": "± 2779.0628981062086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354623.076923077,
            "unit": "ns",
            "range": "± 91196.84778627958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3531993.3333333335,
            "unit": "ns",
            "range": "± 62169.864848156896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3967806.6666666665,
            "unit": "ns",
            "range": "± 73909.09925294011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486026.315789473,
            "unit": "ns",
            "range": "± 153109.2238367682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7482520,
            "unit": "ns",
            "range": "± 131767.01950249702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329378.72340425535,
            "unit": "ns",
            "range": "± 12752.372944914192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269984.54545454547,
            "unit": "ns",
            "range": "± 10730.90411057256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239214,
            "unit": "ns",
            "range": "± 15294.54923702024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5363833.333333333,
            "unit": "ns",
            "range": "± 83685.30905948159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3827314.285714286,
            "unit": "ns",
            "range": "± 53146.790295193925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25458.24175824176,
            "unit": "ns",
            "range": "± 2242.373045288601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108165.625,
            "unit": "ns",
            "range": "± 6756.31210716865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106268.36734693877,
            "unit": "ns",
            "range": "± 9625.391644877276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 202427.08333333334,
            "unit": "ns",
            "range": "± 17464.095372878106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9479.38144329897,
            "unit": "ns",
            "range": "± 1410.0042955261029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21621.649484536083,
            "unit": "ns",
            "range": "± 2495.964526495874"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61f884b494f29f79ce37bb45d5641c27b800d2c8",
          "message": "Merge pull request #3041 from tkiapril/tx-invoice-tests",
          "timestamp": "2023-04-05T12:40:42+09:00",
          "tree_id": "5717727448b25ffa32088f7b329aea2c3cd2a9af",
          "url": "https://github.com/planetarium/libplanet/commit/61f884b494f29f79ce37bb45d5641c27b800d2c8"
        },
        "date": 1680667098997,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1370136.7346938776,
            "unit": "ns",
            "range": "± 118194.60659608422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2549170.9677419355,
            "unit": "ns",
            "range": "± 113655.84719813938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157962.7118644067,
            "unit": "ns",
            "range": "± 85663.68058768744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5152739.130434782,
            "unit": "ns",
            "range": "± 128829.6293529151"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52695.91836734694,
            "unit": "ns",
            "range": "± 3646.1791431281695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7440482.051282051,
            "unit": "ns",
            "range": "± 254248.05218091008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19363337.5,
            "unit": "ns",
            "range": "± 364282.89167440555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49274340,
            "unit": "ns",
            "range": "± 807086.7786587228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100981000,
            "unit": "ns",
            "range": "± 1575815.9265236896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202651926.66666666,
            "unit": "ns",
            "range": "± 2062209.8883294614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4868184.375,
            "unit": "ns",
            "range": "± 31019.39852280822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582667.9817708333,
            "unit": "ns",
            "range": "± 7774.027976618162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161884.4029017857,
            "unit": "ns",
            "range": "± 6078.896805111451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630449.1666666665,
            "unit": "ns",
            "range": "± 6374.915536472334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823855.5036272322,
            "unit": "ns",
            "range": "± 2657.291923609033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762661.8294270834,
            "unit": "ns",
            "range": "± 2000.6827360312816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3115852.727272727,
            "unit": "ns",
            "range": "± 123589.00204957328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3407624.242424242,
            "unit": "ns",
            "range": "± 105578.63488385988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3922323.076923077,
            "unit": "ns",
            "range": "± 64724.39202554879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4225642.857142857,
            "unit": "ns",
            "range": "± 153104.04583215367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7166485.185185186,
            "unit": "ns",
            "range": "± 189789.0928691103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321408.6956521739,
            "unit": "ns",
            "range": "± 8096.571274506392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257140.81632653062,
            "unit": "ns",
            "range": "± 10274.359638750951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220403.2967032967,
            "unit": "ns",
            "range": "± 12375.634219882324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5186446.153846154,
            "unit": "ns",
            "range": "± 68618.1173280135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3655464.285714286,
            "unit": "ns",
            "range": "± 48259.21366222934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21351.612903225807,
            "unit": "ns",
            "range": "± 2323.6315703257055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99721,
            "unit": "ns",
            "range": "± 11119.509608763956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81021.73913043478,
            "unit": "ns",
            "range": "± 7242.864257769433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 179795.83333333334,
            "unit": "ns",
            "range": "± 20428.107141962733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7506.25,
            "unit": "ns",
            "range": "± 1026.061709440006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22276.842105263157,
            "unit": "ns",
            "range": "± 2296.7809402661783"
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
          "id": "839e4da7af33f2a177ead2dd7db2b0f05158ce4e",
          "message": "Merge pull request #3059 from greymistcube/refactor/block-validate\n\n♻️ Refactor block validate",
          "timestamp": "2023-04-05T15:32:20+09:00",
          "tree_id": "ed2fe2e334a015663806ebf70c79dcaa66638716",
          "url": "https://github.com/planetarium/libplanet/commit/839e4da7af33f2a177ead2dd7db2b0f05158ce4e"
        },
        "date": 1680677226457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310538.775510204,
            "unit": "ns",
            "range": "± 132420.35663784257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2394084.210526316,
            "unit": "ns",
            "range": "± 81465.00666864301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2243571.4285714286,
            "unit": "ns",
            "range": "± 39768.53082471169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5420148,
            "unit": "ns",
            "range": "± 394881.87940551067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48293.54838709677,
            "unit": "ns",
            "range": "± 2819.9139075515777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6761166.666666667,
            "unit": "ns",
            "range": "± 27011.338007443857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18943878.57142857,
            "unit": "ns",
            "range": "± 296902.3698083298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44979017.64705882,
            "unit": "ns",
            "range": "± 766512.0711992198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91696905.55555555,
            "unit": "ns",
            "range": "± 1889149.6821935591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178808221.42857143,
            "unit": "ns",
            "range": "± 2070054.7592826067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4674071.40625,
            "unit": "ns",
            "range": "± 22075.898960721115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481196.953125,
            "unit": "ns",
            "range": "± 7605.651940070479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154944.4140625,
            "unit": "ns",
            "range": "± 7935.117240696883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596649.375,
            "unit": "ns",
            "range": "± 20020.91505605003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828487.05078125,
            "unit": "ns",
            "range": "± 4227.256429006904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757596.8815104166,
            "unit": "ns",
            "range": "± 2784.441867400784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2899839.393939394,
            "unit": "ns",
            "range": "± 81985.68830668686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3052689.189189189,
            "unit": "ns",
            "range": "± 97758.56252291432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3845380,
            "unit": "ns",
            "range": "± 126192.77922849533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3997266.6666666665,
            "unit": "ns",
            "range": "± 159240.64934796613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6936855.555555556,
            "unit": "ns",
            "range": "± 227809.09105708217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295204.8780487805,
            "unit": "ns",
            "range": "± 10411.29077539169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238077.58620689655,
            "unit": "ns",
            "range": "± 10075.957890181891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205233.33333333334,
            "unit": "ns",
            "range": "± 1659.5910412636072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5015069.230769231,
            "unit": "ns",
            "range": "± 25781.239452212296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3598773.3333333335,
            "unit": "ns",
            "range": "± 56715.990018772696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18062.76595744681,
            "unit": "ns",
            "range": "± 1445.9423420257988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80506.74157303371,
            "unit": "ns",
            "range": "± 5131.227873450445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73134.69387755102,
            "unit": "ns",
            "range": "± 5044.341568935022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 166175.82417582418,
            "unit": "ns",
            "range": "± 15419.016690505126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6066.326530612245,
            "unit": "ns",
            "range": "± 1046.1459831456395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17902.061855670105,
            "unit": "ns",
            "range": "± 2129.650762715338"
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
          "id": "bf92e685aa65475d9195d1a1dd417b9b6f71d853",
          "message": "Merge pull request #3062 from greymistcube/refactor/propose-block\n\n🧹 Remove tx execution update from `ProposeBlock()`",
          "timestamp": "2023-04-05T17:49:00+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/planetarium/libplanet/commit/bf92e685aa65475d9195d1a1dd417b9b6f71d853"
        },
        "date": 1680685623134,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571021.6494845361,
            "unit": "ns",
            "range": "± 139356.98555239657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2937020.8333333335,
            "unit": "ns",
            "range": "± 113794.87697090188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2564873.4693877553,
            "unit": "ns",
            "range": "± 151955.06698249222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6520941,
            "unit": "ns",
            "range": "± 413742.66805917816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55977.17391304348,
            "unit": "ns",
            "range": "± 4793.312724048034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7876549.0566037735,
            "unit": "ns",
            "range": "± 326431.39968608407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22368765,
            "unit": "ns",
            "range": "± 511612.8452720557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58167193.47826087,
            "unit": "ns",
            "range": "± 1467482.0967859717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115891538.46153846,
            "unit": "ns",
            "range": "± 1754095.7882141925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227547350,
            "unit": "ns",
            "range": "± 3749291.9558744174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5682422.552083333,
            "unit": "ns",
            "range": "± 64062.015793212195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832334.149639423,
            "unit": "ns",
            "range": "± 10644.447668418916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388698.6328125,
            "unit": "ns",
            "range": "± 6580.729638298289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3206304.5572916665,
            "unit": "ns",
            "range": "± 48658.95279229862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010976.3151041666,
            "unit": "ns",
            "range": "± 16711.868996721045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 899464.3903459822,
            "unit": "ns",
            "range": "± 9654.861449016345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3685459.090909091,
            "unit": "ns",
            "range": "± 138032.24314627197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3776474.5098039214,
            "unit": "ns",
            "range": "± 152636.06630562418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4436243.859649123,
            "unit": "ns",
            "range": "± 190502.62654502006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4821603.125,
            "unit": "ns",
            "range": "± 221672.27631194086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8118913.793103448,
            "unit": "ns",
            "range": "± 215288.1867971028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362685.9649122807,
            "unit": "ns",
            "range": "± 15546.088605411918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295839.70588235295,
            "unit": "ns",
            "range": "± 13933.12534938791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248000,
            "unit": "ns",
            "range": "± 13227.836657995229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6038973.9130434785,
            "unit": "ns",
            "range": "± 232571.62570297695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4166653.6585365855,
            "unit": "ns",
            "range": "± 149863.28619371887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23342.708333333332,
            "unit": "ns",
            "range": "± 2563.211176451858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106803.09278350516,
            "unit": "ns",
            "range": "± 10103.170434821515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97263.9175257732,
            "unit": "ns",
            "range": "± 10055.628456729784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 215691.83673469388,
            "unit": "ns",
            "range": "± 25334.779783821272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9023.711340206186,
            "unit": "ns",
            "range": "± 1333.992534639616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24410.869565217392,
            "unit": "ns",
            "range": "± 1866.1505611460566"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7bd12a0c9db0ef8dedf024dd37fc147e894696a",
          "message": "Merge pull request #3060 from limebell/feature/publish-gossip\n\nImplement `Gossip.PublishMessage()`",
          "timestamp": "2023-04-06T11:35:25+09:00",
          "tree_id": "c54ac2f904324029f65a532b7a9f2fee91b2d2b9",
          "url": "https://github.com/planetarium/libplanet/commit/a7bd12a0c9db0ef8dedf024dd37fc147e894696a"
        },
        "date": 1680749887160,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1801066.6666666667,
            "unit": "ns",
            "range": "± 185186.9670682303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3495142.3913043477,
            "unit": "ns",
            "range": "± 200852.30713668914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2859561.9565217393,
            "unit": "ns",
            "range": "± 187115.99613426096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7278365.625,
            "unit": "ns",
            "range": "± 337183.93088053237"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69748.91304347826,
            "unit": "ns",
            "range": "± 14155.040220384648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8790296.153846154,
            "unit": "ns",
            "range": "± 452315.49110273516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24503225,
            "unit": "ns",
            "range": "± 812439.7164009858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64501268.75,
            "unit": "ns",
            "range": "± 1250497.0695520774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126911054.05405405,
            "unit": "ns",
            "range": "± 3897019.2943948694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259161227.90697673,
            "unit": "ns",
            "range": "± 9542720.525823051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6080077.232142857,
            "unit": "ns",
            "range": "± 84785.4031969923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1955553.0598958333,
            "unit": "ns",
            "range": "± 33670.10233789503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473433.1770833333,
            "unit": "ns",
            "range": "± 16252.833810871905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3244448.9583333335,
            "unit": "ns",
            "range": "± 40117.181596521456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1063665.8203125,
            "unit": "ns",
            "range": "± 18873.37742704098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 989344.9674479166,
            "unit": "ns",
            "range": "± 7688.97525618073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3782619.14893617,
            "unit": "ns",
            "range": "± 219060.07978202373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4055090.7216494847,
            "unit": "ns",
            "range": "± 342480.42829800094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5022058.510638298,
            "unit": "ns",
            "range": "± 328674.9737470902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5274614.43298969,
            "unit": "ns",
            "range": "± 442118.29157800315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9050772.222222222,
            "unit": "ns",
            "range": "± 503860.7066359068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 414030.10752688174,
            "unit": "ns",
            "range": "± 35760.77759387717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348054.7368421053,
            "unit": "ns",
            "range": "± 35319.29666181548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298239.4736842105,
            "unit": "ns",
            "range": "± 39406.402638010244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6807417.021276596,
            "unit": "ns",
            "range": "± 263177.4094302408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4922704.545454546,
            "unit": "ns",
            "range": "± 230671.44011930324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28233.333333333332,
            "unit": "ns",
            "range": "± 7579.691240297694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116540,
            "unit": "ns",
            "range": "± 23514.504442831007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94922.68041237113,
            "unit": "ns",
            "range": "± 15983.999194211372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 235260.63829787233,
            "unit": "ns",
            "range": "± 27566.163683642237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6972.826086956522,
            "unit": "ns",
            "range": "± 1126.0261020991902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27140.322580645163,
            "unit": "ns",
            "range": "± 8522.707067849738"
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
          "id": "cdf801bf5a97b71baddab19f251f48fdd53cffe2",
          "message": "Merge pull request #3067 from greymistcube/refactor/remove-mining\n\n🧹 Remove mining",
          "timestamp": "2023-04-06T15:12:36+09:00",
          "tree_id": "486653c5b207b6caa4dcc32c38e8142a14e1ce40",
          "url": "https://github.com/planetarium/libplanet/commit/cdf801bf5a97b71baddab19f251f48fdd53cffe2"
        },
        "date": 1680762638869,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352917.0212765958,
            "unit": "ns",
            "range": "± 92696.34046238191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469879.1666666665,
            "unit": "ns",
            "range": "± 95475.17435668665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235635.789473684,
            "unit": "ns",
            "range": "± 145845.35522825996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5332420,
            "unit": "ns",
            "range": "± 186443.6440596901"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49425.8064516129,
            "unit": "ns",
            "range": "± 4497.484882295844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6686907.142857143,
            "unit": "ns",
            "range": "± 47706.64708218526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18515806.666666668,
            "unit": "ns",
            "range": "± 300239.58639409166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46233500,
            "unit": "ns",
            "range": "± 857218.0267197683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94667908.69565217,
            "unit": "ns",
            "range": "± 2308146.067126965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184324792.85714287,
            "unit": "ns",
            "range": "± 2828054.673735528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4846686.979166667,
            "unit": "ns",
            "range": "± 10815.6557260488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547369.6814903845,
            "unit": "ns",
            "range": "± 10504.714616458636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183755.6901041667,
            "unit": "ns",
            "range": "± 7711.556193343391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671007.1875,
            "unit": "ns",
            "range": "± 9939.145373572635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822489.4661458334,
            "unit": "ns",
            "range": "± 2883.726186153012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769903.88671875,
            "unit": "ns",
            "range": "± 3955.517906959219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3080971.4285714286,
            "unit": "ns",
            "range": "± 191949.58047179724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3169925.5102040814,
            "unit": "ns",
            "range": "± 200524.34991673907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3936763.0434782607,
            "unit": "ns",
            "range": "± 99019.053741957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4178750,
            "unit": "ns",
            "range": "± 177761.6422475486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6666275.675675675,
            "unit": "ns",
            "range": "± 221554.26273564753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305870.5882352941,
            "unit": "ns",
            "range": "± 8986.910663840907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248728.33333333334,
            "unit": "ns",
            "range": "± 11111.684057732657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224427.08333333334,
            "unit": "ns",
            "range": "± 13681.639476756061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5306813.333333333,
            "unit": "ns",
            "range": "± 59946.61752243368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3776135.714285714,
            "unit": "ns",
            "range": "± 63966.54903622983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23767.708333333332,
            "unit": "ns",
            "range": "± 2592.2757647192702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93871.42857142857,
            "unit": "ns",
            "range": "± 6007.888993542588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85826.80412371134,
            "unit": "ns",
            "range": "± 7813.69678118598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 216577.31958762885,
            "unit": "ns",
            "range": "± 22721.9951494996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8827.368421052632,
            "unit": "ns",
            "range": "± 1831.8948511856986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18402.197802197803,
            "unit": "ns",
            "range": "± 2059.3946263662597"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdd6d97c4565a60d4316b3c352b4dafa6aeb8206",
          "message": "Merge pull request #3061 from planetarium/getPublicKey",
          "timestamp": "2023-04-06T15:51:33+09:00",
          "tree_id": "1987539eef3df45e2448390a3661fb6a915bd517",
          "url": "https://github.com/planetarium/libplanet/commit/cdd6d97c4565a60d4316b3c352b4dafa6aeb8206"
        },
        "date": 1680764771386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412105.1020408163,
            "unit": "ns",
            "range": "± 120597.07932081577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2543072.340425532,
            "unit": "ns",
            "range": "± 90474.40834922582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2254795,
            "unit": "ns",
            "range": "± 155217.17101135323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5384302.380952381,
            "unit": "ns",
            "range": "± 183952.1192846518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48762.244897959186,
            "unit": "ns",
            "range": "± 5304.608292351375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7174113.333333333,
            "unit": "ns",
            "range": "± 31103.18924085408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18142686.666666668,
            "unit": "ns",
            "range": "± 52267.63361593409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46083200,
            "unit": "ns",
            "range": "± 179854.44511763236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92621560,
            "unit": "ns",
            "range": "± 339858.373443998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184001500,
            "unit": "ns",
            "range": "± 385405.019727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4934364.869791667,
            "unit": "ns",
            "range": "± 27481.265433970704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534805.8854166667,
            "unit": "ns",
            "range": "± 4807.5536703438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150196.6796875,
            "unit": "ns",
            "range": "± 1153.221901485521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568584.4921875,
            "unit": "ns",
            "range": "± 19084.97382143039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812426.2369791666,
            "unit": "ns",
            "range": "± 2103.3183688655627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733229.8828125,
            "unit": "ns",
            "range": "± 823.2636127386821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3151106.6666666665,
            "unit": "ns",
            "range": "± 56917.90412096891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3244410.5263157897,
            "unit": "ns",
            "range": "± 57938.318684009326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4080533.3333333335,
            "unit": "ns",
            "range": "± 64826.03827240439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4187592.8571428573,
            "unit": "ns",
            "range": "± 60346.19947609619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6947631.818181818,
            "unit": "ns",
            "range": "± 168366.9812284029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317205.8823529412,
            "unit": "ns",
            "range": "± 6324.50300302673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262391.6666666667,
            "unit": "ns",
            "range": "± 8110.7116122534435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246523.80952380953,
            "unit": "ns",
            "range": "± 5852.085505348053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5355942.857142857,
            "unit": "ns",
            "range": "± 28131.715315519006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3790980,
            "unit": "ns",
            "range": "± 32223.13277312257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22755.208333333332,
            "unit": "ns",
            "range": "± 1846.0694969906465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101433.67346938775,
            "unit": "ns",
            "range": "± 7669.6441923083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93414.43298969071,
            "unit": "ns",
            "range": "± 8300.037521134087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175305.10204081633,
            "unit": "ns",
            "range": "± 17079.464805160536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6764.285714285715,
            "unit": "ns",
            "range": "± 975.8158098972166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20485.714285714286,
            "unit": "ns",
            "range": "± 2289.419860787678"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1040b6aad622f02f2441c0ddbc7ffc2a6a135e9",
          "message": "Merge pull request #3069 from planetarium/peer-dependencies\n\nMove @planetarium/account to peerDependencies",
          "timestamp": "2023-04-06T17:03:22+09:00",
          "tree_id": "e13dadff5e4df1e6fb6e907b34bf8f04f3295ce4",
          "url": "https://github.com/planetarium/libplanet/commit/d1040b6aad622f02f2441c0ddbc7ffc2a6a135e9"
        },
        "date": 1680769265925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422747.4226804124,
            "unit": "ns",
            "range": "± 130967.85872621533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2528663.4615384615,
            "unit": "ns",
            "range": "± 102851.3205017771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245176.288659794,
            "unit": "ns",
            "range": "± 158291.730130633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5555625.925925926,
            "unit": "ns",
            "range": "± 233773.33739635145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50824.742268041235,
            "unit": "ns",
            "range": "± 3564.437511955049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7136460,
            "unit": "ns",
            "range": "± 113899.72908534193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19662650,
            "unit": "ns",
            "range": "± 196529.12878639254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50431607.14285714,
            "unit": "ns",
            "range": "± 455145.97736801516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101565461.53846154,
            "unit": "ns",
            "range": "± 578054.0077686824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201828460,
            "unit": "ns",
            "range": "± 1807976.6073075803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4912788.072916667,
            "unit": "ns",
            "range": "± 21540.413305781345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1546573.4450120192,
            "unit": "ns",
            "range": "± 2084.2504653679775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169487.8059895833,
            "unit": "ns",
            "range": "± 3544.427592663647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641047.4158653845,
            "unit": "ns",
            "range": "± 5408.6682119395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838673.6783854166,
            "unit": "ns",
            "range": "± 2056.522102876428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775246.1635044643,
            "unit": "ns",
            "range": "± 2447.68505812108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3314666.6666666665,
            "unit": "ns",
            "range": "± 57171.60467358233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3562588.888888889,
            "unit": "ns",
            "range": "± 74882.39319397796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3949428,
            "unit": "ns",
            "range": "± 96434.85071971301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4440728,
            "unit": "ns",
            "range": "± 117476.76195741862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7106066.666666667,
            "unit": "ns",
            "range": "± 177972.2637566502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321988.8888888889,
            "unit": "ns",
            "range": "± 10556.075509332535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261856.52173913043,
            "unit": "ns",
            "range": "± 9468.882420830712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221450,
            "unit": "ns",
            "range": "± 6188.015712774044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5834371.428571428,
            "unit": "ns",
            "range": "± 63340.16138245974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4187750,
            "unit": "ns",
            "range": "± 60896.51688915196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24895.918367346938,
            "unit": "ns",
            "range": "± 2807.6815973379703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102954.63917525773,
            "unit": "ns",
            "range": "± 8076.664181178556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101448.48484848485,
            "unit": "ns",
            "range": "± 8412.143356134382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197562.62626262626,
            "unit": "ns",
            "range": "± 21278.112668811824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8871.578947368422,
            "unit": "ns",
            "range": "± 905.9687606627242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22734.0206185567,
            "unit": "ns",
            "range": "± 2397.476390131322"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9a29074df85c7ff7d7e6b3ab6b2613949a420f3",
          "message": "Merge pull request #2613 from tkiapril/feature/index\n\nIndexing in `Libplanet.Explorer`",
          "timestamp": "2023-04-10T13:03:39+09:00",
          "tree_id": "f8edab4937de4eb36ea97b7d78db053df0fcac2d",
          "url": "https://github.com/planetarium/libplanet/commit/d9a29074df85c7ff7d7e6b3ab6b2613949a420f3"
        },
        "date": 1681100514663,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371617.7083333333,
            "unit": "ns",
            "range": "± 104411.78093923841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527468.4210526315,
            "unit": "ns",
            "range": "± 83083.76139926715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2233317.1717171716,
            "unit": "ns",
            "range": "± 152825.99685383428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5604153,
            "unit": "ns",
            "range": "± 346663.4173667652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49552.083333333336,
            "unit": "ns",
            "range": "± 3274.9119447114963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7064277.777777778,
            "unit": "ns",
            "range": "± 225876.93186601935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19377250,
            "unit": "ns",
            "range": "± 306049.92742512305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49657913.333333336,
            "unit": "ns",
            "range": "± 799273.4896379934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98736840,
            "unit": "ns",
            "range": "± 1648476.6768140823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198611086.66666666,
            "unit": "ns",
            "range": "± 2098677.73026823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4876857.391826923,
            "unit": "ns",
            "range": "± 11231.89908742623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569650.795200893,
            "unit": "ns",
            "range": "± 3091.5225298312725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167251.727764423,
            "unit": "ns",
            "range": "± 3426.9740547106294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662315.652901786,
            "unit": "ns",
            "range": "± 7332.92060067228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834974.4010416666,
            "unit": "ns",
            "range": "± 2085.9211506999704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761412.2786458334,
            "unit": "ns",
            "range": "± 2203.1064059868418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3157126.6666666665,
            "unit": "ns",
            "range": "± 93237.83061328305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3361830.434782609,
            "unit": "ns",
            "range": "± 160801.5815187333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3916450,
            "unit": "ns",
            "range": "± 106405.45474739536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4220130.882352941,
            "unit": "ns",
            "range": "± 202017.10084061115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6939541.025641026,
            "unit": "ns",
            "range": "± 237202.8786524853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313255.76923076925,
            "unit": "ns",
            "range": "± 12215.361808090833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263226.5306122449,
            "unit": "ns",
            "range": "± 10117.22490586813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217619.23076923078,
            "unit": "ns",
            "range": "± 5831.844938320582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5273080,
            "unit": "ns",
            "range": "± 88931.15475306888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3726092.3076923075,
            "unit": "ns",
            "range": "± 55377.4692683234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21994.845360824744,
            "unit": "ns",
            "range": "± 2310.500087193455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96237.11340206186,
            "unit": "ns",
            "range": "± 7091.10827591541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87029.16666666667,
            "unit": "ns",
            "range": "± 8070.03445719725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 188552.0618556701,
            "unit": "ns",
            "range": "± 17482.52091007284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7582.105263157895,
            "unit": "ns",
            "range": "± 1196.0021123023064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20685.416666666668,
            "unit": "ns",
            "range": "± 1874.9304080652487"
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
          "id": "39536c042478beb86397d6c792cac4c4864182e8",
          "message": "Merge pull request #3072 from greymistcube/refactor/block-propose\n\n♻️ Refactor block propose",
          "timestamp": "2023-04-10T16:03:55+09:00",
          "tree_id": "1fe94d209619d87dda3737690767b19bc5d1c75a",
          "url": "https://github.com/planetarium/libplanet/commit/39536c042478beb86397d6c792cac4c4864182e8"
        },
        "date": 1681111183199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1271640.625,
            "unit": "ns",
            "range": "± 32922.164897410046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2419272.0588235296,
            "unit": "ns",
            "range": "± 113002.57934658644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2047682.4742268042,
            "unit": "ns",
            "range": "± 118576.57776228167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5369285,
            "unit": "ns",
            "range": "± 357151.9650462022"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45521.97802197802,
            "unit": "ns",
            "range": "± 2484.073813440879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6727463.333333333,
            "unit": "ns",
            "range": "± 25360.42661500863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17795940,
            "unit": "ns",
            "range": "± 234871.13427214872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44000214.28571428,
            "unit": "ns",
            "range": "± 411155.130478365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87999069.23076923,
            "unit": "ns",
            "range": "± 710117.8181407826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177029714.2857143,
            "unit": "ns",
            "range": "± 2100731.1503222077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4603648.697916667,
            "unit": "ns",
            "range": "± 18720.169533756412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1469652.3046875,
            "unit": "ns",
            "range": "± 5362.840630189207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140283.3463541667,
            "unit": "ns",
            "range": "± 3521.2907064181277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619402.4739583335,
            "unit": "ns",
            "range": "± 14330.20359134392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821297.7734375,
            "unit": "ns",
            "range": "± 2980.1018253770694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749047.3567708334,
            "unit": "ns",
            "range": "± 1927.679869443265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2899266.6666666665,
            "unit": "ns",
            "range": "± 38889.32403384667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3038244.827586207,
            "unit": "ns",
            "range": "± 87131.09821333637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3827729.411764706,
            "unit": "ns",
            "range": "± 77036.58031015105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3833192.1875,
            "unit": "ns",
            "range": "± 177617.61969715988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6915855,
            "unit": "ns",
            "range": "± 408574.61798256135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283231.1111111111,
            "unit": "ns",
            "range": "± 10604.66925938806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232171.42857142858,
            "unit": "ns",
            "range": "± 7541.476350570788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203923.07692307694,
            "unit": "ns",
            "range": "± 1814.8249897964663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5108435.714285715,
            "unit": "ns",
            "range": "± 54248.737768270235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3562933.3333333335,
            "unit": "ns",
            "range": "± 31587.0377272221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17950,
            "unit": "ns",
            "range": "± 2089.573111779936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78484.375,
            "unit": "ns",
            "range": "± 4531.302313672609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69150,
            "unit": "ns",
            "range": "± 2205.5371090493895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153163.26530612246,
            "unit": "ns",
            "range": "± 17782.705531835694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5201.0204081632655,
            "unit": "ns",
            "range": "± 724.8881745197631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16503.157894736843,
            "unit": "ns",
            "range": "± 1027.7482752878852"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492",
          "message": "Merge pull request #3073 from dahlia/tx-invoice",
          "timestamp": "2023-04-10T16:32:34+09:00",
          "tree_id": "25188c22e036f85cc08e8040104a7c7e52c27b11",
          "url": "https://github.com/planetarium/libplanet/commit/9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492"
        },
        "date": 1681112838846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1491928.5714285714,
            "unit": "ns",
            "range": "± 22752.630568841876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2439928.888888889,
            "unit": "ns",
            "range": "± 89574.59213167289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2186541.237113402,
            "unit": "ns",
            "range": "± 142850.6808936763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5576532,
            "unit": "ns",
            "range": "± 353408.87353736535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48538.20224719101,
            "unit": "ns",
            "range": "± 2440.543233956955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6732126.923076923,
            "unit": "ns",
            "range": "± 37290.97642965283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19213880,
            "unit": "ns",
            "range": "± 220848.4198979666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48798153.333333336,
            "unit": "ns",
            "range": "± 765079.7706931019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99544100,
            "unit": "ns",
            "range": "± 695411.5759749762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195291257.89473686,
            "unit": "ns",
            "range": "± 4236190.850977613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4863705.052083333,
            "unit": "ns",
            "range": "± 22374.972060916523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1555296.9791666667,
            "unit": "ns",
            "range": "± 5057.516411358986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174287.6302083333,
            "unit": "ns",
            "range": "± 4688.781938306666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654377.8385416665,
            "unit": "ns",
            "range": "± 10313.666869592655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848313.14453125,
            "unit": "ns",
            "range": "± 2473.438024315126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760404.6354166666,
            "unit": "ns",
            "range": "± 2205.731386256172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047898.3870967743,
            "unit": "ns",
            "range": "± 137965.77562300564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3206570.3125,
            "unit": "ns",
            "range": "± 148030.69038256523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3866541.6666666665,
            "unit": "ns",
            "range": "± 100534.63135382392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4215714.285714285,
            "unit": "ns",
            "range": "± 106621.99312519636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6758545.454545454,
            "unit": "ns",
            "range": "± 148230.06804826434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311818.75,
            "unit": "ns",
            "range": "± 8200.80395350791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258805,
            "unit": "ns",
            "range": "± 11352.180780562661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219010.52631578947,
            "unit": "ns",
            "range": "± 7509.72484736109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5287486.666666667,
            "unit": "ns",
            "range": "± 97244.56552326986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3721962.5,
            "unit": "ns",
            "range": "± 70910.18615121525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21979.166666666668,
            "unit": "ns",
            "range": "± 1961.5201766764396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89945.83333333333,
            "unit": "ns",
            "range": "± 5753.4230848237175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85347.42268041238,
            "unit": "ns",
            "range": "± 7255.272404481463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185972.44897959183,
            "unit": "ns",
            "range": "± 18205.44571644659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7579.591836734694,
            "unit": "ns",
            "range": "± 1065.6742876486014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20776.530612244896,
            "unit": "ns",
            "range": "± 2255.9338030614945"
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
          "id": "c6be00d46c58b2b7fc3ac49bc56209c33bbaf57d",
          "message": "Merge pull request #3075 from greymistcube/refactor/block-propose\n\n♻️ Simple renaming",
          "timestamp": "2023-04-10T18:36:17+09:00",
          "tree_id": "8aa3d233e946edd28cf7b4d11cb181eb4d19981d",
          "url": "https://github.com/planetarium/libplanet/commit/c6be00d46c58b2b7fc3ac49bc56209c33bbaf57d"
        },
        "date": 1681120214612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1288815.4639175257,
            "unit": "ns",
            "range": "± 119811.64674553259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2416979.245283019,
            "unit": "ns",
            "range": "± 99858.99936042621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2039945,
            "unit": "ns",
            "range": "± 127432.94562754614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5032773.333333333,
            "unit": "ns",
            "range": "± 144633.8848391972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46637.83783783784,
            "unit": "ns",
            "range": "± 2344.3141768211394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6707340,
            "unit": "ns",
            "range": "± 36962.87326493978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18775246.666666668,
            "unit": "ns",
            "range": "± 284790.2232136757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46453920,
            "unit": "ns",
            "range": "± 831563.8504820729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92409446.66666667,
            "unit": "ns",
            "range": "± 1275664.1933107781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183302838.46153846,
            "unit": "ns",
            "range": "± 1764182.6547244957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4942940.755208333,
            "unit": "ns",
            "range": "± 23510.59170531905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523876.9661458333,
            "unit": "ns",
            "range": "± 5224.685449038666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157106.0677083333,
            "unit": "ns",
            "range": "± 4356.914260841316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633581.015625,
            "unit": "ns",
            "range": "± 10152.723722268467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814481.7317708334,
            "unit": "ns",
            "range": "± 3484.8762239614043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770281.6536458334,
            "unit": "ns",
            "range": "± 2241.223439734555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2967664.864864865,
            "unit": "ns",
            "range": "± 99481.03173809404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3157234.4827586208,
            "unit": "ns",
            "range": "± 91947.21807281637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3845416.6666666665,
            "unit": "ns",
            "range": "± 77440.29388920897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3969520,
            "unit": "ns",
            "range": "± 183491.4875409756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6637917.647058823,
            "unit": "ns",
            "range": "± 203151.08047294803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296186.6666666667,
            "unit": "ns",
            "range": "± 10888.455103707529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242869.23076923078,
            "unit": "ns",
            "range": "± 10035.926414862002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204838.46153846153,
            "unit": "ns",
            "range": "± 2903.6007707495596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5039291.666666667,
            "unit": "ns",
            "range": "± 32291.103709657848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4051642.8571428573,
            "unit": "ns",
            "range": "± 63206.8242942377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17694.38202247191,
            "unit": "ns",
            "range": "± 1039.7070774722383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86265.65656565657,
            "unit": "ns",
            "range": "± 5885.925128265156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77448.45360824742,
            "unit": "ns",
            "range": "± 5398.7288897878125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 172344.44444444444,
            "unit": "ns",
            "range": "± 19402.757126939054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6462.5,
            "unit": "ns",
            "range": "± 865.6302845174054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18129.166666666668,
            "unit": "ns",
            "range": "± 1998.3106900667594"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d81b32a42b9703fb93b86886bbe9698f17771a71",
          "message": "Merge pull request #3028 from colibrishin/pbft/verify/cached-evaluation\n\nfeat: cache evaluated actions in `Context<T>`",
          "timestamp": "2023-04-10T18:54:58+09:00",
          "tree_id": "a30b401d5435ed9f0b18bcaa0d329ee491ffe401",
          "url": "https://github.com/planetarium/libplanet/commit/d81b32a42b9703fb93b86886bbe9698f17771a71"
        },
        "date": 1681121426984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526952.9411764706,
            "unit": "ns",
            "range": "± 30701.77351650591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2605564.1025641025,
            "unit": "ns",
            "range": "± 133051.52402467266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2288688.888888889,
            "unit": "ns",
            "range": "± 171946.28485455405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5506642.105263158,
            "unit": "ns",
            "range": "± 232800.18942322343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49034.17721518988,
            "unit": "ns",
            "range": "± 2565.944923962229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6931112.5,
            "unit": "ns",
            "range": "± 128685.47120790287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19575193.333333332,
            "unit": "ns",
            "range": "± 171488.99784228837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48412486.666666664,
            "unit": "ns",
            "range": "± 650258.4660476684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97791583.33333333,
            "unit": "ns",
            "range": "± 990830.5561257085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196116146.66666666,
            "unit": "ns",
            "range": "± 2836988.229460115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4829083.28125,
            "unit": "ns",
            "range": "± 17330.841149999553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542315.7602163462,
            "unit": "ns",
            "range": "± 8034.628138545104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156238.1310096155,
            "unit": "ns",
            "range": "± 4335.308543846757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638253.8671875,
            "unit": "ns",
            "range": "± 16075.181207896203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820446.728515625,
            "unit": "ns",
            "range": "± 2306.2404343847675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765160.0520833334,
            "unit": "ns",
            "range": "± 8757.55661338635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3082017.073170732,
            "unit": "ns",
            "range": "± 111114.70852780704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3278554.5454545454,
            "unit": "ns",
            "range": "± 79169.32262575981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3925389.4736842103,
            "unit": "ns",
            "range": "± 84544.79348406475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4250246.153846154,
            "unit": "ns",
            "range": "± 104138.22825752023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6897544.827586207,
            "unit": "ns",
            "range": "± 198273.65214017956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313025.8620689655,
            "unit": "ns",
            "range": "± 13217.234367730583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258282.35294117648,
            "unit": "ns",
            "range": "± 10440.185934787807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214388.88888888888,
            "unit": "ns",
            "range": "± 4229.850350417625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5241663.333333333,
            "unit": "ns",
            "range": "± 55480.80577572581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3768784.6153846155,
            "unit": "ns",
            "range": "± 33242.087934671166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21470.212765957447,
            "unit": "ns",
            "range": "± 2191.6179415116376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92765.59139784946,
            "unit": "ns",
            "range": "± 6928.822828428454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88858.58585858585,
            "unit": "ns",
            "range": "± 10031.491334191604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 179317.24137931035,
            "unit": "ns",
            "range": "± 12527.85925119702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7762.5,
            "unit": "ns",
            "range": "± 992.6307417532887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21883.505154639177,
            "unit": "ns",
            "range": "± 2296.1780025172234"
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
          "id": "e0fb73f2e94aaecbba1d9ee94d1d796b8c33abfc",
          "message": "Merge pull request #3076 from greymistcube/chore/docs\n\n🧹 Updated `BlockChain<T>.Count` description",
          "timestamp": "2023-04-11T09:02:35+09:00",
          "tree_id": "e2b21b61850aefe125b79bff5a1a8fbed3c50ce0",
          "url": "https://github.com/planetarium/libplanet/commit/e0fb73f2e94aaecbba1d9ee94d1d796b8c33abfc"
        },
        "date": 1681172514080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1621646.875,
            "unit": "ns",
            "range": "± 132222.02058270658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3003906.0606060605,
            "unit": "ns",
            "range": "± 141011.80406540754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638577.272727273,
            "unit": "ns",
            "range": "± 166906.327644557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6693345.454545454,
            "unit": "ns",
            "range": "± 394945.05773219536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55422.916666666664,
            "unit": "ns",
            "range": "± 3511.1995001458627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8378827.586206896,
            "unit": "ns",
            "range": "± 243308.76752529858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22996150,
            "unit": "ns",
            "range": "± 436906.5285237412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58818812.5,
            "unit": "ns",
            "range": "± 1129158.4275468169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116116366.66666667,
            "unit": "ns",
            "range": "± 2055812.52434119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236074706.89655173,
            "unit": "ns",
            "range": "± 6749442.170861818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5806726.197916667,
            "unit": "ns",
            "range": "± 57503.50101317793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857997.3828125,
            "unit": "ns",
            "range": "± 21278.347623783473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1423802.9947916667,
            "unit": "ns",
            "range": "± 17079.255724980187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3188153.5416666665,
            "unit": "ns",
            "range": "± 33453.06390776155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995768.8802083334,
            "unit": "ns",
            "range": "± 2344.529463682669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929651.3606770834,
            "unit": "ns",
            "range": "± 5745.058214435816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3663636.5853658537,
            "unit": "ns",
            "range": "± 119602.24236212623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3943554.347826087,
            "unit": "ns",
            "range": "± 150183.50990485935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4674178.378378378,
            "unit": "ns",
            "range": "± 154882.65116090514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4980467.567567567,
            "unit": "ns",
            "range": "± 164947.80328275912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8305884.615384615,
            "unit": "ns",
            "range": "± 203097.94029936925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374700,
            "unit": "ns",
            "range": "± 7897.50519058355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302200,
            "unit": "ns",
            "range": "± 12525.312831959987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252045.7142857143,
            "unit": "ns",
            "range": "± 8165.974703435154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6147152.94117647,
            "unit": "ns",
            "range": "± 122923.48797955102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4190354.1666666665,
            "unit": "ns",
            "range": "± 107633.6579779306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25907.291666666668,
            "unit": "ns",
            "range": "± 3169.8661699017703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110270.83333333333,
            "unit": "ns",
            "range": "± 8233.652596977801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99942.1052631579,
            "unit": "ns",
            "range": "± 9180.988438736105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213755.31914893616,
            "unit": "ns",
            "range": "± 22199.969083681255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9090.20618556701,
            "unit": "ns",
            "range": "± 1396.9952721387453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23881.632653061224,
            "unit": "ns",
            "range": "± 2580.5915943959667"
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
          "id": "4f77865065eec3953dc869b5f3dbb5afe1973f11",
          "message": "Merge pull request #3077 from greymistcube/refactor/block-propose\n\n♻️ `BlockChain<T>.ProposeBlock()` overhaul",
          "timestamp": "2023-04-11T14:00:21+09:00",
          "tree_id": "74dd7ab342a5fee24792deb260801bfe6121fac4",
          "url": "https://github.com/planetarium/libplanet/commit/4f77865065eec3953dc869b5f3dbb5afe1973f11"
        },
        "date": 1681190302447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376712,
            "unit": "ns",
            "range": "± 165128.804503538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2400170.4545454546,
            "unit": "ns",
            "range": "± 84481.86148942752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2098447.3684210526,
            "unit": "ns",
            "range": "± 119403.49512161042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5507517,
            "unit": "ns",
            "range": "± 343375.7490878122"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47567.469879518074,
            "unit": "ns",
            "range": "± 2553.052139643887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6815713.333333333,
            "unit": "ns",
            "range": "± 125669.59438297297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19557733.333333332,
            "unit": "ns",
            "range": "± 294478.1138281919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48768660,
            "unit": "ns",
            "range": "± 618065.922050391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98255280,
            "unit": "ns",
            "range": "± 1478653.7488056975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195955913.33333334,
            "unit": "ns",
            "range": "± 1661366.4276589858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4699454.166666667,
            "unit": "ns",
            "range": "± 27511.99623673896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503246.484375,
            "unit": "ns",
            "range": "± 9225.480911060167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147613.671875,
            "unit": "ns",
            "range": "± 5845.590171551145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632733.0859375,
            "unit": "ns",
            "range": "± 11936.558159981156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820130.9945913461,
            "unit": "ns",
            "range": "± 1762.1670503342289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760300.9830729166,
            "unit": "ns",
            "range": "± 2372.4686483983546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3107028.5714285714,
            "unit": "ns",
            "range": "± 87252.795167549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3268447.619047619,
            "unit": "ns",
            "range": "± 113074.41158444474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3975616.6666666665,
            "unit": "ns",
            "range": "± 59848.51837360013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4089744.4444444445,
            "unit": "ns",
            "range": "± 84992.32645101295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6727509.090909091,
            "unit": "ns",
            "range": "± 187610.00000605706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299145.71428571426,
            "unit": "ns",
            "range": "± 9008.014172265222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253266.66666666666,
            "unit": "ns",
            "range": "± 4701.013062045649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200925,
            "unit": "ns",
            "range": "± 1573.1410385825955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5129446.153846154,
            "unit": "ns",
            "range": "± 66029.89998710957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3592840,
            "unit": "ns",
            "range": "± 65871.90816815835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20043.434343434343,
            "unit": "ns",
            "range": "± 2150.6127089056395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90508.24742268042,
            "unit": "ns",
            "range": "± 6843.041936021167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82376.76767676767,
            "unit": "ns",
            "range": "± 7448.323031131733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 171253.0612244898,
            "unit": "ns",
            "range": "± 16468.04593520579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6607.070707070707,
            "unit": "ns",
            "range": "± 1028.6956795242916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19329.166666666668,
            "unit": "ns",
            "range": "± 1888.4087797132927"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11f179e0f94fb9d44e1cc3e9807d9fab2de338ae",
          "message": "Merge pull request #3074 from dahlia/fix-tx-analyze",
          "timestamp": "2023-04-12T02:09:41+09:00",
          "tree_id": "3bc2823e7b1099ea36123395acd5a02b1f3e490e",
          "url": "https://github.com/planetarium/libplanet/commit/11f179e0f94fb9d44e1cc3e9807d9fab2de338ae"
        },
        "date": 1681234114747,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575782,
            "unit": "ns",
            "range": "± 158136.685781317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962145.3608247424,
            "unit": "ns",
            "range": "± 238767.1329021135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2620452.5773195876,
            "unit": "ns",
            "range": "± 230533.16784719555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6768337.113402062,
            "unit": "ns",
            "range": "± 626485.9348181044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54568.085106382976,
            "unit": "ns",
            "range": "± 8323.269787149055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8016545.3125,
            "unit": "ns",
            "range": "± 350428.52765371656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22312721.05263158,
            "unit": "ns",
            "range": "± 961433.7577910924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54901421.333333336,
            "unit": "ns",
            "range": "± 2635693.6010712488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101920372.72727273,
            "unit": "ns",
            "range": "± 3148535.0941224163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203463434.7826087,
            "unit": "ns",
            "range": "± 7722857.61389792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5565866.015625,
            "unit": "ns",
            "range": "± 122758.18765600916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1752822.4658203125,
            "unit": "ns",
            "range": "± 61719.34898871557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1287635.64453125,
            "unit": "ns",
            "range": "± 42964.54598613022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2871354.39453125,
            "unit": "ns",
            "range": "± 55182.1125223528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955850.7421875,
            "unit": "ns",
            "range": "± 11467.387337147686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852852.1897536058,
            "unit": "ns",
            "range": "± 13774.507103301647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3567024.4897959186,
            "unit": "ns",
            "range": "± 213613.12127215855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3508994,
            "unit": "ns",
            "range": "± 275956.3861090071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4563525,
            "unit": "ns",
            "range": "± 317628.49136422854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4357065.306122449,
            "unit": "ns",
            "range": "± 316473.51808627736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8578185.714285715,
            "unit": "ns",
            "range": "± 554648.5230519518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361611.2244897959,
            "unit": "ns",
            "range": "± 39079.85449500992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294353.7634408602,
            "unit": "ns",
            "range": "± 25044.948979349392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262634.40860215056,
            "unit": "ns",
            "range": "± 17703.33728439761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5994719.402985075,
            "unit": "ns",
            "range": "± 283970.6180057142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4255673.195876288,
            "unit": "ns",
            "range": "± 281239.44443727715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22039,
            "unit": "ns",
            "range": "± 6381.268278993201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92513.82978723405,
            "unit": "ns",
            "range": "± 11714.301534612909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82265.26315789473,
            "unit": "ns",
            "range": "± 11744.657168452355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 190675.53191489363,
            "unit": "ns",
            "range": "± 25454.647361428313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9428,
            "unit": "ns",
            "range": "± 5468.977338709051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21841.41414141414,
            "unit": "ns",
            "range": "± 7557.115988353666"
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
          "id": "4e9d2cadec1d7eba7e9e0299a362ae5bb3241f62",
          "message": "Merge pull request #3079 from greymistcube/refactor/block-propose\n\n♻️ Refactor `ProposeGenesisBlock()`",
          "timestamp": "2023-04-12T11:02:33+09:00",
          "tree_id": "aaf1ba21470229b637190bdf7e40fe953bccdc1a",
          "url": "https://github.com/planetarium/libplanet/commit/4e9d2cadec1d7eba7e9e0299a362ae5bb3241f62"
        },
        "date": 1681265810896,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334610.101010101,
            "unit": "ns",
            "range": "± 131935.5675265814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2437161.5384615385,
            "unit": "ns",
            "range": "± 99085.77024100583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109043.6170212766,
            "unit": "ns",
            "range": "± 149709.9500780355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5121533.333333333,
            "unit": "ns",
            "range": "± 182795.12277566135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47182.142857142855,
            "unit": "ns",
            "range": "± 2432.3700928318003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6717226.666666667,
            "unit": "ns",
            "range": "± 25936.721531633943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18741135.714285713,
            "unit": "ns",
            "range": "± 217898.34470774126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46817607.14285714,
            "unit": "ns",
            "range": "± 1069713.1870606386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92635323.8095238,
            "unit": "ns",
            "range": "± 2098244.6837546765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184744705.55555555,
            "unit": "ns",
            "range": "± 3804502.264341432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4694142.299107143,
            "unit": "ns",
            "range": "± 25019.875998490177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492753.8802083333,
            "unit": "ns",
            "range": "± 8238.484304716574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171079.9088541667,
            "unit": "ns",
            "range": "± 4080.8514726913495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604812.109375,
            "unit": "ns",
            "range": "± 8278.56214803267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823397.0442708334,
            "unit": "ns",
            "range": "± 5708.082252077403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753736.2890625,
            "unit": "ns",
            "range": "± 2835.332466280185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2947720,
            "unit": "ns",
            "range": "± 111130.20127923659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3148368.085106383,
            "unit": "ns",
            "range": "± 121570.2482667728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3836642.1052631577,
            "unit": "ns",
            "range": "± 79107.47482444004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3922378.8235294116,
            "unit": "ns",
            "range": "± 204521.57185916184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6650962.857142857,
            "unit": "ns",
            "range": "± 188628.50524667962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306021.4285714286,
            "unit": "ns",
            "range": "± 13028.998625942257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253488.23529411765,
            "unit": "ns",
            "range": "± 4487.605479671366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207309.0909090909,
            "unit": "ns",
            "range": "± 2455.87906692125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5139163.333333333,
            "unit": "ns",
            "range": "± 94036.56482352769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3587985.714285714,
            "unit": "ns",
            "range": "± 85248.29198121383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19397.82608695652,
            "unit": "ns",
            "range": "± 1738.1927118383092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86473.95833333333,
            "unit": "ns",
            "range": "± 7052.1104686046665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79359.59595959596,
            "unit": "ns",
            "range": "± 8005.022902641829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 182021.27659574468,
            "unit": "ns",
            "range": "± 18020.29245845537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6931.632653061224,
            "unit": "ns",
            "range": "± 1016.725787802483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17965.59139784946,
            "unit": "ns",
            "range": "± 1775.7726195791336"
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
          "id": "c25b7a5803c12c85236b729b04683f2323cb656d",
          "message": "Merge pull request #3080 from moreal/features/explorer/state-query/states\n\nImplement `query.stateQuery.states`",
          "timestamp": "2023-04-13T11:59:19+09:00",
          "tree_id": "38e009fe93b87ac7446c3284ed432fbd52c2cef4",
          "url": "https://github.com/planetarium/libplanet/commit/c25b7a5803c12c85236b729b04683f2323cb656d"
        },
        "date": 1681355651710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328836.8686868686,
            "unit": "ns",
            "range": "± 91441.10142540248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2460592,
            "unit": "ns",
            "range": "± 83731.16806854213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154348.888888889,
            "unit": "ns",
            "range": "± 117949.87246488188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5258217.391304348,
            "unit": "ns",
            "range": "± 193203.34371887718"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42538.17204301075,
            "unit": "ns",
            "range": "± 2476.4477303960657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7053340,
            "unit": "ns",
            "range": "± 61697.416014425944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17788550,
            "unit": "ns",
            "range": "± 94345.1254294979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45648985.71428572,
            "unit": "ns",
            "range": "± 164386.90574440468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91104050,
            "unit": "ns",
            "range": "± 657971.9902853008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185823673.33333334,
            "unit": "ns",
            "range": "± 440728.7608798258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894966.376201923,
            "unit": "ns",
            "range": "± 13726.860199618804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510405.6790865385,
            "unit": "ns",
            "range": "± 1318.2212202436688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145258.7760416667,
            "unit": "ns",
            "range": "± 1119.5639349818084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2558189.5572916665,
            "unit": "ns",
            "range": "± 6033.0174501057745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835541.9401041666,
            "unit": "ns",
            "range": "± 3128.698279180805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732313.1460336539,
            "unit": "ns",
            "range": "± 1741.756615850824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3154353.3333333335,
            "unit": "ns",
            "range": "± 56209.45353467392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3318422.222222222,
            "unit": "ns",
            "range": "± 83265.60067885331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4036209.090909091,
            "unit": "ns",
            "range": "± 82594.16507172953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4179742.8571428573,
            "unit": "ns",
            "range": "± 54253.3191368292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6953193.75,
            "unit": "ns",
            "range": "± 127519.64015397785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315686.2068965517,
            "unit": "ns",
            "range": "± 9053.204805005756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256729.62962962964,
            "unit": "ns",
            "range": "± 9973.56183664062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251931.57894736843,
            "unit": "ns",
            "range": "± 5439.061666580505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5359457.142857143,
            "unit": "ns",
            "range": "± 49186.76673636947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3766560,
            "unit": "ns",
            "range": "± 36542.26124835267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21975.78947368421,
            "unit": "ns",
            "range": "± 1715.555600683625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93583.50515463918,
            "unit": "ns",
            "range": "± 6687.62352553162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89773.71134020618,
            "unit": "ns",
            "range": "± 6951.749977461854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177143.8775510204,
            "unit": "ns",
            "range": "± 17269.525428364675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6827.083333333333,
            "unit": "ns",
            "range": "± 821.1005665269495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21336.559139784946,
            "unit": "ns",
            "range": "± 1596.04027315406"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12a9d074cb239c566aa8075dbbe971a0f2a63f5e",
          "message": "Merge pull request #3071 from planetarium/web3-zeropad",
          "timestamp": "2023-04-14T14:02:03+09:00",
          "tree_id": "500778c2cd29e55b11bfb39ff512918013f1a0b7",
          "url": "https://github.com/planetarium/libplanet/commit/12a9d074cb239c566aa8075dbbe971a0f2a63f5e"
        },
        "date": 1681449543919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371106.3829787234,
            "unit": "ns",
            "range": "± 101916.28950440833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2534888.13559322,
            "unit": "ns",
            "range": "± 108950.77041512952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2191093.9393939395,
            "unit": "ns",
            "range": "± 146715.7600553142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5572872,
            "unit": "ns",
            "range": "± 365623.5073228617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51540.625,
            "unit": "ns",
            "range": "± 4242.382104555486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7076950,
            "unit": "ns",
            "range": "± 103729.7209096795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19498193.333333332,
            "unit": "ns",
            "range": "± 205639.0890671833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48319135.71428572,
            "unit": "ns",
            "range": "± 660901.2513310813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97431526.66666667,
            "unit": "ns",
            "range": "± 1467056.137530758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193002380,
            "unit": "ns",
            "range": "± 2570879.0012089526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4932557.03125,
            "unit": "ns",
            "range": "± 11385.906524089352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543897.890625,
            "unit": "ns",
            "range": "± 5767.858657829966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170603.7760416667,
            "unit": "ns",
            "range": "± 5793.656195037308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685427.6041666665,
            "unit": "ns",
            "range": "± 13152.28288606784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833026.5249399039,
            "unit": "ns",
            "range": "± 1839.9045960505946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780963.8671875,
            "unit": "ns",
            "range": "± 3189.6923949817765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3069966.6666666665,
            "unit": "ns",
            "range": "± 91755.10634416968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3283643.1818181816,
            "unit": "ns",
            "range": "± 122102.45868756111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3840626.6666666665,
            "unit": "ns",
            "range": "± 48409.34777892543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4181061.111111111,
            "unit": "ns",
            "range": "± 165226.24901867096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6890344,
            "unit": "ns",
            "range": "± 183904.49079164254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315476.3157894737,
            "unit": "ns",
            "range": "± 9630.57305725341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261600,
            "unit": "ns",
            "range": "± 11765.13326128258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216430.76923076922,
            "unit": "ns",
            "range": "± 5467.487117919472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5255692.857142857,
            "unit": "ns",
            "range": "± 79724.59773192013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3653911.111111111,
            "unit": "ns",
            "range": "± 77579.52382130138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21809.473684210527,
            "unit": "ns",
            "range": "± 1705.689707895097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93660.41666666667,
            "unit": "ns",
            "range": "± 6227.536121159867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101327,
            "unit": "ns",
            "range": "± 8314.838324563885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 204419.38775510204,
            "unit": "ns",
            "range": "± 22117.608128186323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9134.0206185567,
            "unit": "ns",
            "range": "± 1250.1572066092783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23554.736842105263,
            "unit": "ns",
            "range": "± 1905.019596763706"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1168cf632afcf9e8946cdc460fe48da61842bf87",
          "message": "Merge pull request #3084 from planetarium/getAddress",
          "timestamp": "2023-04-14T16:03:32+09:00",
          "tree_id": "10e96fc60eda2c1a7e345db24dd4974122b0a4a3",
          "url": "https://github.com/planetarium/libplanet/commit/1168cf632afcf9e8946cdc460fe48da61842bf87"
        },
        "date": 1681456877355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588468.75,
            "unit": "ns",
            "range": "± 107733.54685714684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3032328.2608695654,
            "unit": "ns",
            "range": "± 198797.90241784093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2497550.5376344086,
            "unit": "ns",
            "range": "± 151568.10036620783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6528458.333333333,
            "unit": "ns",
            "range": "± 453165.43480085244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56468.47826086957,
            "unit": "ns",
            "range": "± 4556.650238401737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8451788.235294119,
            "unit": "ns",
            "range": "± 343859.84159076144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23445466.666666668,
            "unit": "ns",
            "range": "± 434362.90236665116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58838933.333333336,
            "unit": "ns",
            "range": "± 2469483.955946919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115498550,
            "unit": "ns",
            "range": "± 4171782.4629346123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237890580.4878049,
            "unit": "ns",
            "range": "± 8519167.901450807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5714658.924278846,
            "unit": "ns",
            "range": "± 40746.34926069198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826914.6354166667,
            "unit": "ns",
            "range": "± 22251.274383012435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410746.986607143,
            "unit": "ns",
            "range": "± 22000.827135991563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3135250.558035714,
            "unit": "ns",
            "range": "± 41016.8986748395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987903.6197916666,
            "unit": "ns",
            "range": "± 15611.661041952548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933949.2643229166,
            "unit": "ns",
            "range": "± 7605.331216550699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3595067.4698795183,
            "unit": "ns",
            "range": "± 191122.8254727602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3772286.8421052634,
            "unit": "ns",
            "range": "± 190684.0747359221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4498524.242424242,
            "unit": "ns",
            "range": "± 125424.28002161063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4793498.484848484,
            "unit": "ns",
            "range": "± 223852.92252000177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8378225.641025641,
            "unit": "ns",
            "range": "± 431054.31315837783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367358.6206896552,
            "unit": "ns",
            "range": "± 16072.511506740359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295293.67088607594,
            "unit": "ns",
            "range": "± 14997.789082977355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252812.63157894736,
            "unit": "ns",
            "range": "± 14488.023242292398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6298607.692307692,
            "unit": "ns",
            "range": "± 84317.6875625597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4357563.333333333,
            "unit": "ns",
            "range": "± 130177.17299056734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26782.291666666668,
            "unit": "ns",
            "range": "± 3799.141032880894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108064.13043478261,
            "unit": "ns",
            "range": "± 7977.517605598559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99228.86597938144,
            "unit": "ns",
            "range": "± 10684.665401512022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 215065.26315789475,
            "unit": "ns",
            "range": "± 20383.601922222388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7943.75,
            "unit": "ns",
            "range": "± 1181.2404274187456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23129.166666666668,
            "unit": "ns",
            "range": "± 2485.1947574498345"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03e7f025cd5d4145b2014e8e923ab241166793f5",
          "message": "Merge pull request #3088 from riemannulus/add-initialize-state-for-genesis-block",
          "timestamp": "2023-04-17T18:49:44+09:00",
          "tree_id": "aa7ed8bcf37bee09f9d60697aaaada4f4d9a6e3f",
          "url": "https://github.com/planetarium/libplanet/commit/03e7f025cd5d4145b2014e8e923ab241166793f5"
        },
        "date": 1681725974253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1246808.163265306,
            "unit": "ns",
            "range": "± 72470.21239965713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2445614.285714286,
            "unit": "ns",
            "range": "± 80728.7767818692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2310150,
            "unit": "ns",
            "range": "± 35502.99553992159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5418748.6486486485,
            "unit": "ns",
            "range": "± 183226.73055476864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47603.125,
            "unit": "ns",
            "range": "± 3656.3845566783302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7015130.769230769,
            "unit": "ns",
            "range": "± 190746.18951733905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19971293.333333332,
            "unit": "ns",
            "range": "± 291278.27261098294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50528080,
            "unit": "ns",
            "range": "± 453097.73023361876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99971680,
            "unit": "ns",
            "range": "± 1474083.8482645028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201656960,
            "unit": "ns",
            "range": "± 2231790.255057905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4850616.071428572,
            "unit": "ns",
            "range": "± 33874.769177127426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534142.5260416667,
            "unit": "ns",
            "range": "± 7408.883722403766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183375.5859375,
            "unit": "ns",
            "range": "± 7825.113394057966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644704.7712053573,
            "unit": "ns",
            "range": "± 8181.232118661083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828213.3649553572,
            "unit": "ns",
            "range": "± 2643.4218037986698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752724.7135416666,
            "unit": "ns",
            "range": "± 3295.6641846868174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3205615,
            "unit": "ns",
            "range": "± 143334.76381167673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3390380.5194805195,
            "unit": "ns",
            "range": "± 167982.35499361315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3982027.5862068967,
            "unit": "ns",
            "range": "± 115124.86046695973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4342891.891891892,
            "unit": "ns",
            "range": "± 144333.31289141192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7037629.62962963,
            "unit": "ns",
            "range": "± 193420.63730241643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324891.4285714286,
            "unit": "ns",
            "range": "± 10418.771843297513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257954.25531914894,
            "unit": "ns",
            "range": "± 17036.454682508476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215333.33333333334,
            "unit": "ns",
            "range": "± 5848.076606885378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5193285.714285715,
            "unit": "ns",
            "range": "± 88202.48214842289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3745973.3333333335,
            "unit": "ns",
            "range": "± 68102.82631712836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18317.708333333332,
            "unit": "ns",
            "range": "± 1624.5481828021025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93311.34020618557,
            "unit": "ns",
            "range": "± 7450.795207681131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99708,
            "unit": "ns",
            "range": "± 10627.8714955184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191008.08080808082,
            "unit": "ns",
            "range": "± 22283.80796227444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6528.571428571428,
            "unit": "ns",
            "range": "± 1283.1983237770885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19327.36842105263,
            "unit": "ns",
            "range": "± 2216.3532490386265"
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
          "id": "38980e74823b774ca23c5128f77211255dcb6785",
          "message": "Merge pull request #3085 from moreal/features/explorer/state-query/balance-with-custom-currencies\n\nSupport `query.stateQuery.balance(...)` with custom currencies instead of `currencyHash`",
          "timestamp": "2023-04-18T14:54:47+09:00",
          "tree_id": "d2b19ea68fcff95a931ffecf0f56685f3c450591",
          "url": "https://github.com/planetarium/libplanet/commit/38980e74823b774ca23c5128f77211255dcb6785"
        },
        "date": 1681798361350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467472,
            "unit": "ns",
            "range": "± 142814.978899203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2663270.8333333335,
            "unit": "ns",
            "range": "± 153425.25415991686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2305795,
            "unit": "ns",
            "range": "± 170811.27359418842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5766867.05882353,
            "unit": "ns",
            "range": "± 310114.3907182189"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53738.29787234042,
            "unit": "ns",
            "range": "± 5187.870600996483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7665326.923076923,
            "unit": "ns",
            "range": "± 204516.7035871492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19688366.666666668,
            "unit": "ns",
            "range": "± 241497.4287549209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50797346.666666664,
            "unit": "ns",
            "range": "± 517137.85239619855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100858042.85714285,
            "unit": "ns",
            "range": "± 787485.9312191755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203820757.14285713,
            "unit": "ns",
            "range": "± 1927926.6098640733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4834806.640625,
            "unit": "ns",
            "range": "± 27636.90969669358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549141.3151041667,
            "unit": "ns",
            "range": "± 4923.3964761166135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176352.6302083333,
            "unit": "ns",
            "range": "± 10430.912628861011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669400.886418269,
            "unit": "ns",
            "range": "± 6851.575801343375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837187.2200520834,
            "unit": "ns",
            "range": "± 2867.659124663787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771458.6393229166,
            "unit": "ns",
            "range": "± 1689.0155920794098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3285903.0303030303,
            "unit": "ns",
            "range": "± 93768.98969291663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3416336.8421052634,
            "unit": "ns",
            "range": "± 73547.95269094333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4059801.6666666665,
            "unit": "ns",
            "range": "± 181616.00904914152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4509820,
            "unit": "ns",
            "range": "± 81333.06479268704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7194656.521739131,
            "unit": "ns",
            "range": "± 247398.38017270304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336163.63636363635,
            "unit": "ns",
            "range": "± 10643.889625678967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272519.5652173913,
            "unit": "ns",
            "range": "± 9959.978125036607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238795.40229885056,
            "unit": "ns",
            "range": "± 13073.930282587105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5378875,
            "unit": "ns",
            "range": "± 58250.49551096306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3705518.1818181816,
            "unit": "ns",
            "range": "± 90174.41109086556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25709.278350515466,
            "unit": "ns",
            "range": "± 3072.189856676165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107440,
            "unit": "ns",
            "range": "± 13194.236574651783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107889.898989899,
            "unit": "ns",
            "range": "± 9576.901366601374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 205018.3673469388,
            "unit": "ns",
            "range": "± 16797.258900943172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8665.9793814433,
            "unit": "ns",
            "range": "± 1375.673062384536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24598.958333333332,
            "unit": "ns",
            "range": "± 2728.002731580152"
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
          "id": "23fa5406ecce3a4959fc38701c795682c8fbcadc",
          "message": "Merge pull request #3097 from dahlia/1.0-maintenance\n\nRelease 1.0.0",
          "timestamp": "2023-04-18T15:39:29+09:00",
          "tree_id": "244d53aa04947b63072d6989e3d8373876b569bc",
          "url": "https://github.com/planetarium/libplanet/commit/23fa5406ecce3a4959fc38701c795682c8fbcadc"
        },
        "date": 1681800879278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423398.9795918367,
            "unit": "ns",
            "range": "± 108581.56632384608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2690422.680412371,
            "unit": "ns",
            "range": "± 155736.48851582778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2277767.0212765955,
            "unit": "ns",
            "range": "± 129185.62487716181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5556112.280701755,
            "unit": "ns",
            "range": "± 238808.79834696164"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51151.54639175258,
            "unit": "ns",
            "range": "± 4765.656508684075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7453452.173913044,
            "unit": "ns",
            "range": "± 177109.06980924399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19729223.076923076,
            "unit": "ns",
            "range": "± 260238.85231919205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49734264.28571428,
            "unit": "ns",
            "range": "± 572764.8471797437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100342720,
            "unit": "ns",
            "range": "± 1043020.1266377503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196694473.33333334,
            "unit": "ns",
            "range": "± 2789869.505772285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4883740.260416667,
            "unit": "ns",
            "range": "± 31127.199087090175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512841.640625,
            "unit": "ns",
            "range": "± 7868.88254351603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167191.796875,
            "unit": "ns",
            "range": "± 6443.377958120693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658654.0625,
            "unit": "ns",
            "range": "± 12514.207860700753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832111.7122395834,
            "unit": "ns",
            "range": "± 2490.5599892890577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765861.6001674107,
            "unit": "ns",
            "range": "± 2054.448552902179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3236732.2580645164,
            "unit": "ns",
            "range": "± 97244.99091503127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3336795.238095238,
            "unit": "ns",
            "range": "± 152574.70346767464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3891292.8571428573,
            "unit": "ns",
            "range": "± 56451.76926144346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4125498.1818181816,
            "unit": "ns",
            "range": "± 169661.09518347218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6878859.375,
            "unit": "ns",
            "range": "± 212951.22697595455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316421.05263157893,
            "unit": "ns",
            "range": "± 7026.345576737789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265838,
            "unit": "ns",
            "range": "± 16561.10680437327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222051.66666666666,
            "unit": "ns",
            "range": "± 9806.077182926623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5238013.333333333,
            "unit": "ns",
            "range": "± 78785.20407381313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3722576.470588235,
            "unit": "ns",
            "range": "± 71622.4696709399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21592.708333333332,
            "unit": "ns",
            "range": "± 2323.529293379574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94597.9797979798,
            "unit": "ns",
            "range": "± 8571.64261397012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93795.95959595959,
            "unit": "ns",
            "range": "± 8842.279224040703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 186387.87878787878,
            "unit": "ns",
            "range": "± 18455.955693395732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7429.591836734694,
            "unit": "ns",
            "range": "± 1153.855856179571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20471.134020618556,
            "unit": "ns",
            "range": "± 2561.4106937912243"
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
          "id": "c07eb314e278089c6ccec691ddd129ba99533bb8",
          "message": "Merge pull request #3087 from greymistcube/refactor/remove-render-reorg\n\n🧹 Remove reorg related render calls from `BlockChain<T>`",
          "timestamp": "2023-04-18T19:24:12+09:00",
          "tree_id": "a0cfdc1da2f65b2dca561dc5489e437971922326",
          "url": "https://github.com/planetarium/libplanet/commit/c07eb314e278089c6ccec691ddd129ba99533bb8"
        },
        "date": 1681814391940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1262662.7659574468,
            "unit": "ns",
            "range": "± 76504.43094068173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2416726.923076923,
            "unit": "ns",
            "range": "± 95813.11489783296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051833,
            "unit": "ns",
            "range": "± 142741.2783197756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5450200,
            "unit": "ns",
            "range": "± 423195.9063501384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46437.63440860215,
            "unit": "ns",
            "range": "± 2655.098212319848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6805861.538461538,
            "unit": "ns",
            "range": "± 11361.964212636422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18226273.333333332,
            "unit": "ns",
            "range": "± 340329.7318497936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45206257.89473684,
            "unit": "ns",
            "range": "± 986381.9788138138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89483237.5,
            "unit": "ns",
            "range": "± 1685953.9850877703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179861036.66666666,
            "unit": "ns",
            "range": "± 2454999.059897017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4630414.270833333,
            "unit": "ns",
            "range": "± 25455.587585086112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1501930.5598958333,
            "unit": "ns",
            "range": "± 4857.583571889044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130256.3151041667,
            "unit": "ns",
            "range": "± 5962.495356403047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574665.9114583335,
            "unit": "ns",
            "range": "± 8685.689817886498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854417.5153459822,
            "unit": "ns",
            "range": "± 2684.9948726854664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761563.5672433035,
            "unit": "ns",
            "range": "± 1792.3754349011328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2882935.714285714,
            "unit": "ns",
            "range": "± 38178.07681707592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3033283.3333333335,
            "unit": "ns",
            "range": "± 100088.48799223329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3801700,
            "unit": "ns",
            "range": "± 116519.95797313268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3906230.434782609,
            "unit": "ns",
            "range": "± 149087.34035168812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6584475,
            "unit": "ns",
            "range": "± 203323.88908086464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291600,
            "unit": "ns",
            "range": "± 9591.286554877703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242112.5,
            "unit": "ns",
            "range": "± 4386.931349664213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207350,
            "unit": "ns",
            "range": "± 2148.7026497221705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5080883.333333333,
            "unit": "ns",
            "range": "± 93904.28003836572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3504677.777777778,
            "unit": "ns",
            "range": "± 56191.28627816569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16551.807228915663,
            "unit": "ns",
            "range": "± 873.646890462845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79709.89010989011,
            "unit": "ns",
            "range": "± 4451.368202775287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72564.78873239437,
            "unit": "ns",
            "range": "± 3470.6153670720905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149292.55319148937,
            "unit": "ns",
            "range": "± 14740.5317842365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5445.744680851064,
            "unit": "ns",
            "range": "± 575.2353223218056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16835.714285714286,
            "unit": "ns",
            "range": "± 1669.3260569870956"
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
          "id": "0f617b8088cacd2712175edc0c85c6c4a499e1d1",
          "message": "Merge pull request #3083 from greymistcube/refactor/tx-action-list-encoding\n\n♻️ Refactor `TxActionList` encoding",
          "timestamp": "2023-04-18T20:52:32+09:00",
          "tree_id": "4b290fa35c7819ed5366a09168097282f1c76f08",
          "url": "https://github.com/planetarium/libplanet/commit/0f617b8088cacd2712175edc0c85c6c4a499e1d1"
        },
        "date": 1681819860176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399190,
            "unit": "ns",
            "range": "± 120447.58321788903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2529271.186440678,
            "unit": "ns",
            "range": "± 110722.38357455171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244780.612244898,
            "unit": "ns",
            "range": "± 172468.7830161888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5697486,
            "unit": "ns",
            "range": "± 385959.7317719751"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49934.73684210526,
            "unit": "ns",
            "range": "± 3416.6914574069433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7087326.470588235,
            "unit": "ns",
            "range": "± 135647.5973313376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19801888.46153846,
            "unit": "ns",
            "range": "± 173825.3555462184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49379633.333333336,
            "unit": "ns",
            "range": "± 891676.8430215917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98212700,
            "unit": "ns",
            "range": "± 1968844.869777708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198621461.53846154,
            "unit": "ns",
            "range": "± 1387116.7119475212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4855992.354910715,
            "unit": "ns",
            "range": "± 28094.48557360811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530142.1354166667,
            "unit": "ns",
            "range": "± 7507.810938859602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182358.1473214286,
            "unit": "ns",
            "range": "± 7948.472164721399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2640576.3113839286,
            "unit": "ns",
            "range": "± 10910.424848967656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828429.21875,
            "unit": "ns",
            "range": "± 5193.201597554035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775899.4596354166,
            "unit": "ns",
            "range": "± 8303.998622951747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3114002.777777778,
            "unit": "ns",
            "range": "± 103209.26726416747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3376236.5853658537,
            "unit": "ns",
            "range": "± 103313.53192127729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3917493.5483870967,
            "unit": "ns",
            "range": "± 117327.08108953043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4261013.513513514,
            "unit": "ns",
            "range": "± 141329.01165201198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7060672.7272727275,
            "unit": "ns",
            "range": "± 167192.94010447696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319480.48780487804,
            "unit": "ns",
            "range": "± 11344.364669566012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258882.43243243243,
            "unit": "ns",
            "range": "± 12343.878279881195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222862.7906976744,
            "unit": "ns",
            "range": "± 8271.782880768696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5246364.285714285,
            "unit": "ns",
            "range": "± 59529.32835221588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3558113.3333333335,
            "unit": "ns",
            "range": "± 66486.45261218544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20937.755102040817,
            "unit": "ns",
            "range": "± 1998.0152681027341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95023.71134020618,
            "unit": "ns",
            "range": "± 7379.416378174782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89416.32653061225,
            "unit": "ns",
            "range": "± 8994.805991243704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112797.93814432989,
            "unit": "ns",
            "range": "± 16391.283121559885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7264.948453608247,
            "unit": "ns",
            "range": "± 1169.8505279444717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21085.567010309278,
            "unit": "ns",
            "range": "± 2400.216556667407"
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
          "id": "35d6ec84d2d45ad98e1c6595a22c1f684dcad4b1",
          "message": "Merge pull request #3092 from greymistcube/refactor/irenderer\n\n🧹 Remove reorg and unrender methods from `IRenderer`",
          "timestamp": "2023-04-19T11:20:40+09:00",
          "tree_id": "e92557f555adcac33daf383829d2261fcc687c74",
          "url": "https://github.com/planetarium/libplanet/commit/35d6ec84d2d45ad98e1c6595a22c1f684dcad4b1"
        },
        "date": 1681871810292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1225110.2040816327,
            "unit": "ns",
            "range": "± 107916.69418812828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2213913.9534883723,
            "unit": "ns",
            "range": "± 78109.82067818833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2002872.9166666667,
            "unit": "ns",
            "range": "± 170082.17486303597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5045919.3877551025,
            "unit": "ns",
            "range": "± 397782.2156199782"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44566.666666666664,
            "unit": "ns",
            "range": "± 2626.143410684791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6058178.571428572,
            "unit": "ns",
            "range": "± 35106.78607579208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17514784.615384616,
            "unit": "ns",
            "range": "± 248579.5642115211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43369529.62962963,
            "unit": "ns",
            "range": "± 1206050.1223207342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 86383921.42857143,
            "unit": "ns",
            "range": "± 1424581.253550331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 172227290.47619048,
            "unit": "ns",
            "range": "± 4084404.6863532956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4253240.052083333,
            "unit": "ns",
            "range": "± 31775.20989584988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1350896.19140625,
            "unit": "ns",
            "range": "± 7119.449420926211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1030501.6145833334,
            "unit": "ns",
            "range": "± 5158.682281033118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2365504.5572916665,
            "unit": "ns",
            "range": "± 15092.125324348019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 727123.0598958334,
            "unit": "ns",
            "range": "± 4136.090592481231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 672275.4813058035,
            "unit": "ns",
            "range": "± 2345.334684832269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2738748.051948052,
            "unit": "ns",
            "range": "± 133045.23924945467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2896679,
            "unit": "ns",
            "range": "± 179366.55223200328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3467627.272727273,
            "unit": "ns",
            "range": "± 84492.70428813412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3684967.6470588236,
            "unit": "ns",
            "range": "± 176149.2679783439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6085161.904761905,
            "unit": "ns",
            "range": "± 143371.75620110982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280673.3333333333,
            "unit": "ns",
            "range": "± 5075.6374218510955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231300,
            "unit": "ns",
            "range": "± 6232.816377850386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193277.5,
            "unit": "ns",
            "range": "± 6622.707150403074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4676981.25,
            "unit": "ns",
            "range": "± 87858.29665812255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3208235.294117647,
            "unit": "ns",
            "range": "± 57115.299408044666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19493.617021276597,
            "unit": "ns",
            "range": "± 1557.0725572446406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80859.375,
            "unit": "ns",
            "range": "± 3682.852532722126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74095.69892473119,
            "unit": "ns",
            "range": "± 5805.187222732536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104784.375,
            "unit": "ns",
            "range": "± 16559.09562827378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7167.708333333333,
            "unit": "ns",
            "range": "± 1044.4333433838324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18988.297872340427,
            "unit": "ns",
            "range": "± 2000.7985708388267"
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
          "id": "edeeef85a58e08adc7f9a72cb3e5d1151da73faa",
          "message": "Merge pull request #3082 from moreal/exp/action-evaluator-interface\n\nIntroduce `IActionEvaluator`",
          "timestamp": "2023-04-19T14:47:45+09:00",
          "tree_id": "641b86f21b5925da5c668908e3c739694d65b159",
          "url": "https://github.com/planetarium/libplanet/commit/edeeef85a58e08adc7f9a72cb3e5d1151da73faa"
        },
        "date": 1681884117233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374240.9090909092,
            "unit": "ns",
            "range": "± 128117.81097076483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2490781.111111111,
            "unit": "ns",
            "range": "± 89192.7249943581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2203360,
            "unit": "ns",
            "range": "± 155965.59384892063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5226162.5,
            "unit": "ns",
            "range": "± 202939.62064530322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42380.45977011494,
            "unit": "ns",
            "range": "± 2330.1781087958866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6966957.142857143,
            "unit": "ns",
            "range": "± 20281.811263589556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17177010,
            "unit": "ns",
            "range": "± 96211.78870447366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45003233.333333336,
            "unit": "ns",
            "range": "± 332416.50222631986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88433120,
            "unit": "ns",
            "range": "± 630098.4947949464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177945053.33333334,
            "unit": "ns",
            "range": "± 1471672.3659383792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4779244.635416667,
            "unit": "ns",
            "range": "± 10717.269951581711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505059.0364583333,
            "unit": "ns",
            "range": "± 5266.455117461334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153654.58984375,
            "unit": "ns",
            "range": "± 1440.7378240536289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552852.8385416665,
            "unit": "ns",
            "range": "± 20549.967329334977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824718.671875,
            "unit": "ns",
            "range": "± 4497.051360937072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731408.1263950893,
            "unit": "ns",
            "range": "± 1053.3543176131002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2923710.5263157897,
            "unit": "ns",
            "range": "± 99265.61907047796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3065998.1481481483,
            "unit": "ns",
            "range": "± 69490.09542246551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3881426.6666666665,
            "unit": "ns",
            "range": "± 65091.09514109182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4025579.1666666665,
            "unit": "ns",
            "range": "± 103121.51329195662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6773962.068965517,
            "unit": "ns",
            "range": "± 193689.18292274553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296902.63157894736,
            "unit": "ns",
            "range": "± 10041.57538092842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240810,
            "unit": "ns",
            "range": "± 8456.731501727349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222594.02985074627,
            "unit": "ns",
            "range": "± 10282.389779368072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5172433.333333333,
            "unit": "ns",
            "range": "± 46421.41849661743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3452221.4285714286,
            "unit": "ns",
            "range": "± 43890.91685551331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16094.791666666666,
            "unit": "ns",
            "range": "± 1319.758334470182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77051.19047619047,
            "unit": "ns",
            "range": "± 4127.150598132716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79990.90909090909,
            "unit": "ns",
            "range": "± 7781.284334852085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94052.04081632652,
            "unit": "ns",
            "range": "± 13476.066831068709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5175.268817204301,
            "unit": "ns",
            "range": "± 854.7381895083549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17835.714285714286,
            "unit": "ns",
            "range": "± 2319.982669682872"
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
          "id": "3356ea1fd766780706a90ed4230f41efca0e919a",
          "message": "Merge pull request #3098 from greymistcube/refactor/remove-unused-renderers\n\n🧹 Remove unused renderers",
          "timestamp": "2023-04-19T16:07:10+09:00",
          "tree_id": "c4999b1438bd9f8092db160335197f3e2fd3ef91",
          "url": "https://github.com/planetarium/libplanet/commit/3356ea1fd766780706a90ed4230f41efca0e919a"
        },
        "date": 1681889121642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1579838.144329897,
            "unit": "ns",
            "range": "± 197365.46759929226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2983359.595959596,
            "unit": "ns",
            "range": "± 229587.64273757048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2547846.3157894737,
            "unit": "ns",
            "range": "± 221404.95478249723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6266687.755102041,
            "unit": "ns",
            "range": "± 491527.8973457512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57972.52747252747,
            "unit": "ns",
            "range": "± 4841.098725933698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7919911.538461538,
            "unit": "ns",
            "range": "± 108037.4282248328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22876568,
            "unit": "ns",
            "range": "± 907984.9618214376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57499890.47619048,
            "unit": "ns",
            "range": "± 2076250.7284102654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113790987.5,
            "unit": "ns",
            "range": "± 2941156.9285797398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237733604.3478261,
            "unit": "ns",
            "range": "± 13309641.541279146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5795045.104166667,
            "unit": "ns",
            "range": "± 76351.05698378634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888999.8046875,
            "unit": "ns",
            "range": "± 17267.010610678826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402421.5299479167,
            "unit": "ns",
            "range": "± 14887.651119532073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2916164.708533654,
            "unit": "ns",
            "range": "± 30491.24183015318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024958.8671875,
            "unit": "ns",
            "range": "± 8151.083979555448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880610.152004076,
            "unit": "ns",
            "range": "± 21510.63077904362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3894075,
            "unit": "ns",
            "range": "± 86535.7235329342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4026677.419354839,
            "unit": "ns",
            "range": "± 119758.23342517324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4754326.315789473,
            "unit": "ns",
            "range": "± 163783.96727827514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4856053.448275862,
            "unit": "ns",
            "range": "± 212317.17023682865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7886225,
            "unit": "ns",
            "range": "± 200615.69848409388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354671.4285714286,
            "unit": "ns",
            "range": "± 12965.836520127294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295986.53846153844,
            "unit": "ns",
            "range": "± 11970.929310923157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254488.29787234042,
            "unit": "ns",
            "range": "± 9775.336159937313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6064757.692307692,
            "unit": "ns",
            "range": "± 165502.90371610265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4361828.571428572,
            "unit": "ns",
            "range": "± 75290.70254759143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22897.894736842107,
            "unit": "ns",
            "range": "± 2150.5060734116787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106186.73469387754,
            "unit": "ns",
            "range": "± 7472.156394684133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105035.41666666667,
            "unit": "ns",
            "range": "± 9881.369808799062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130646.875,
            "unit": "ns",
            "range": "± 14496.678045059332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8962.5,
            "unit": "ns",
            "range": "± 1387.2540085400822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24322.340425531915,
            "unit": "ns",
            "range": "± 2804.150313310349"
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
          "id": "91a4d0137e9d57aee46c44ff53210d70e5f16b95",
          "message": "Merge pull request #3102 from OnedgeLee/update/bencodex\n\nBump `Bencodex` to `0.9.0`",
          "timestamp": "2023-04-19T16:11:37+09:00",
          "tree_id": "626ce8094a832a2fa99f0d4ba78141fe10bd38a0",
          "url": "https://github.com/planetarium/libplanet/commit/91a4d0137e9d57aee46c44ff53210d70e5f16b95"
        },
        "date": 1681889364945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1227103.1914893617,
            "unit": "ns",
            "range": "± 86172.57310360573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2242487.1794871795,
            "unit": "ns",
            "range": "± 78560.31601490459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2018116.4948453608,
            "unit": "ns",
            "range": "± 152700.9568571393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5075751.515151516,
            "unit": "ns",
            "range": "± 355955.6187549103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46217.391304347824,
            "unit": "ns",
            "range": "± 3200.9822907067237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6143361.538461538,
            "unit": "ns",
            "range": "± 81346.47644962398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17661906.666666668,
            "unit": "ns",
            "range": "± 292506.7312208795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44785710,
            "unit": "ns",
            "range": "± 670647.9263688639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90266880,
            "unit": "ns",
            "range": "± 1596774.3955505155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179938633.33333334,
            "unit": "ns",
            "range": "± 2908601.744006576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4300414.53125,
            "unit": "ns",
            "range": "± 19716.558800546492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1407833.984375,
            "unit": "ns",
            "range": "± 7251.8178843287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053078.984375,
            "unit": "ns",
            "range": "± 7634.8711195738915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2421008.4505208335,
            "unit": "ns",
            "range": "± 14953.135496597564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 743436.6661658654,
            "unit": "ns",
            "range": "± 2607.7953122798262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 679024.375,
            "unit": "ns",
            "range": "± 3065.2705262579916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2897461.111111111,
            "unit": "ns",
            "range": "± 122012.76675648466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3075448.888888889,
            "unit": "ns",
            "range": "± 112452.30629880025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3496884.6153846155,
            "unit": "ns",
            "range": "± 45895.530758340115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3873207.5,
            "unit": "ns",
            "range": "± 135974.39594483993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6421556.521739131,
            "unit": "ns",
            "range": "± 241878.47146143808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285046.2962962963,
            "unit": "ns",
            "range": "± 11475.185910656826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237182.60869565216,
            "unit": "ns",
            "range": "± 8307.568285681198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205631.25,
            "unit": "ns",
            "range": "± 7680.679165725418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4789857.142857143,
            "unit": "ns",
            "range": "± 67601.61256936126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3282053.3333333335,
            "unit": "ns",
            "range": "± 61159.310314090675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20394.68085106383,
            "unit": "ns",
            "range": "± 2084.781880304647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87155.43478260869,
            "unit": "ns",
            "range": "± 5637.674762875532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82755.20833333333,
            "unit": "ns",
            "range": "± 9134.997707390796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113156.70103092784,
            "unit": "ns",
            "range": "± 15949.659787492956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7985.416666666667,
            "unit": "ns",
            "range": "± 1134.0638770338217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21596.907216494845,
            "unit": "ns",
            "range": "± 2927.2232863901722"
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
          "id": "2858539fc16f710eab1bbe5e419f44c1556b949d",
          "message": "Merge pull request #3101 from moreal/docs/missed-changelog\n\nComplement missed deletion record in changelog",
          "timestamp": "2023-04-19T16:41:31+09:00",
          "tree_id": "ce1dd1a1ae96561528196536bc85094c31f74aee",
          "url": "https://github.com/planetarium/libplanet/commit/2858539fc16f710eab1bbe5e419f44c1556b949d"
        },
        "date": 1681891076373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1300918.085106383,
            "unit": "ns",
            "range": "± 85816.12245792226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2403956.3636363638,
            "unit": "ns",
            "range": "± 101521.19421786208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110210.101010101,
            "unit": "ns",
            "range": "± 146226.28361336907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5030312.195121951,
            "unit": "ns",
            "range": "± 168244.38206835013"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42372.94117647059,
            "unit": "ns",
            "range": "± 2271.269219081309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6955007.142857143,
            "unit": "ns",
            "range": "± 18121.02324694948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17275090,
            "unit": "ns",
            "range": "± 111112.6892586338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44988164.28571428,
            "unit": "ns",
            "range": "± 397202.0753047164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90041426.66666667,
            "unit": "ns",
            "range": "± 849324.8700894028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183586442.85714287,
            "unit": "ns",
            "range": "± 1097403.4183641686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4897717.410714285,
            "unit": "ns",
            "range": "± 11884.72063646426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1490365.2604166667,
            "unit": "ns",
            "range": "± 3037.29530005041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140324.31640625,
            "unit": "ns",
            "range": "± 1874.3663494612083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595042.3828125,
            "unit": "ns",
            "range": "± 10807.973319221574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826832.6399739584,
            "unit": "ns",
            "range": "± 9106.574730046328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725852.4251302084,
            "unit": "ns",
            "range": "± 1031.2473575618737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2933100,
            "unit": "ns",
            "range": "± 35790.454965907695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3051611.111111111,
            "unit": "ns",
            "range": "± 70924.02399389913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3952164.285714286,
            "unit": "ns",
            "range": "± 48272.5691678611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4005327.5862068967,
            "unit": "ns",
            "range": "± 107055.35916575299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6721524.390243903,
            "unit": "ns",
            "range": "± 237431.1950655261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301380,
            "unit": "ns",
            "range": "± 4842.254492633423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239515.38461538462,
            "unit": "ns",
            "range": "± 9799.167323876416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218298.3606557377,
            "unit": "ns",
            "range": "± 9438.47607408595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5176042.857142857,
            "unit": "ns",
            "range": "± 38506.55217543581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3451207.1428571427,
            "unit": "ns",
            "range": "± 32646.986297141033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16548.936170212764,
            "unit": "ns",
            "range": "± 1781.188722370303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77704.93827160494,
            "unit": "ns",
            "range": "± 4100.27137012198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69306.12244897959,
            "unit": "ns",
            "range": "± 5138.490618899851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87488.17204301075,
            "unit": "ns",
            "range": "± 9355.663821199267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4679.381443298969,
            "unit": "ns",
            "range": "± 637.3673300397988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16056.25,
            "unit": "ns",
            "range": "± 1902.232068414699"
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
          "id": "b845bd27d5ce7c3ac27cd1e252e24303a6c7fe96",
          "message": "Merge pull request #3106 from OnedgeLee/bump/bencodex-0.10.0\n\nBump bencodex to 0.10.0",
          "timestamp": "2023-04-20T17:59:50+09:00",
          "tree_id": "2098680d696851b4e5c2dbbd2b802a56b919da11",
          "url": "https://github.com/planetarium/libplanet/commit/b845bd27d5ce7c3ac27cd1e252e24303a6c7fe96"
        },
        "date": 1681982262786,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580866.6666666667,
            "unit": "ns",
            "range": "± 136594.0737457381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2825004.5454545454,
            "unit": "ns",
            "range": "± 155216.58720838634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2448777.8947368423,
            "unit": "ns",
            "range": "± 195667.93471688655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5927862.2950819675,
            "unit": "ns",
            "range": "± 266834.4212952635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61428.94736842105,
            "unit": "ns",
            "range": "± 8660.91605809025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7417372.222222222,
            "unit": "ns",
            "range": "± 153795.7308577366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20342940,
            "unit": "ns",
            "range": "± 225002.62792116133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51140864.28571428,
            "unit": "ns",
            "range": "± 439057.27435590356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103676414.28571428,
            "unit": "ns",
            "range": "± 952308.979317066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207102553.33333334,
            "unit": "ns",
            "range": "± 1658022.7423335419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4847764.427083333,
            "unit": "ns",
            "range": "± 31559.72505629161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522905.8035714286,
            "unit": "ns",
            "range": "± 3665.2407144795125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1188421.6378348214,
            "unit": "ns",
            "range": "± 5175.200709673959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650889.090401786,
            "unit": "ns",
            "range": "± 10495.40043562206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846870.5679086539,
            "unit": "ns",
            "range": "± 2313.6726370508713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777174.7916666666,
            "unit": "ns",
            "range": "± 1996.12418096074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3404248.1481481483,
            "unit": "ns",
            "range": "± 92739.16013940293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587764.285714286,
            "unit": "ns",
            "range": "± 52741.643262851925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4113066.6666666665,
            "unit": "ns",
            "range": "± 142788.0161073038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4500150,
            "unit": "ns",
            "range": "± 74511.30012389964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7337778.571428572,
            "unit": "ns",
            "range": "± 263898.166368286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347195.3488372093,
            "unit": "ns",
            "range": "± 12013.82048365592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287069.69696969696,
            "unit": "ns",
            "range": "± 17428.57408984438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257141,
            "unit": "ns",
            "range": "± 20279.736091961255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5458835.714285715,
            "unit": "ns",
            "range": "± 85409.93103077252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3848959.090909091,
            "unit": "ns",
            "range": "± 90868.51651904688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27497.938144329895,
            "unit": "ns",
            "range": "± 3381.5362442437345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108483.15789473684,
            "unit": "ns",
            "range": "± 8762.755476368939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112138,
            "unit": "ns",
            "range": "± 14979.196213145724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138486.73469387754,
            "unit": "ns",
            "range": "± 21479.74657530196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10413.917525773197,
            "unit": "ns",
            "range": "± 2158.6640142598553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30729.896907216495,
            "unit": "ns",
            "range": "± 2850.0060288113723"
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
          "id": "52a12ef55668e95bc25e5a3c76c5a141411e9594",
          "message": "Merge pull request #3108 from greymistcube/refactor/blockchain-append\n\n♻️ Streamlined rendering",
          "timestamp": "2023-04-20T22:30:49+09:00",
          "tree_id": "6b586792b8a407850815e44c7ba432f12ced39ee",
          "url": "https://github.com/planetarium/libplanet/commit/52a12ef55668e95bc25e5a3c76c5a141411e9594"
        },
        "date": 1681998762437,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1781216.4948453608,
            "unit": "ns",
            "range": "± 291135.88453976705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3525918.556701031,
            "unit": "ns",
            "range": "± 411568.6180461227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2885655.0561797754,
            "unit": "ns",
            "range": "± 309812.0955482665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7695619.318181818,
            "unit": "ns",
            "range": "± 603387.0311770325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70180.64516129032,
            "unit": "ns",
            "range": "± 15080.142846634271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9167427.551020408,
            "unit": "ns",
            "range": "± 1186898.9941983235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25722796.907216493,
            "unit": "ns",
            "range": "± 1954784.5431921228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65881541.333333336,
            "unit": "ns",
            "range": "± 3321720.3615439236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133827984.0909091,
            "unit": "ns",
            "range": "± 4991578.387548706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270705845.8333333,
            "unit": "ns",
            "range": "± 6292488.864337225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6220813.252314814,
            "unit": "ns",
            "range": "± 169633.13107373306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2001594.4010416667,
            "unit": "ns",
            "range": "± 59829.70146462721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1616743.0989583333,
            "unit": "ns",
            "range": "± 41654.808711230704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3364316.167534722,
            "unit": "ns",
            "range": "± 67805.66094997412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1109486.8036684783,
            "unit": "ns",
            "range": "± 27342.841593247253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1036912.3322315705,
            "unit": "ns",
            "range": "± 35887.20872130667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3888950.5154639175,
            "unit": "ns",
            "range": "± 444797.69374301675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4165652.7472527474,
            "unit": "ns",
            "range": "± 444039.6189382353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5137791.111111111,
            "unit": "ns",
            "range": "± 526265.6574082056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5388621.052631579,
            "unit": "ns",
            "range": "± 586210.14856063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9496647.872340426,
            "unit": "ns",
            "range": "± 791740.3596798397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 410770.21276595746,
            "unit": "ns",
            "range": "± 55404.19965796086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341932.2580645161,
            "unit": "ns",
            "range": "± 41145.52952971325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304252.63157894736,
            "unit": "ns",
            "range": "± 47370.623004687026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7112204.395604395,
            "unit": "ns",
            "range": "± 484934.873270419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4859793.617021277,
            "unit": "ns",
            "range": "± 403285.252326149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29269.791666666668,
            "unit": "ns",
            "range": "± 10312.191250029888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114010.20408163265,
            "unit": "ns",
            "range": "± 27213.919610678615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102034.73684210527,
            "unit": "ns",
            "range": "± 22582.787497415276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148129.16666666666,
            "unit": "ns",
            "range": "± 32652.58566908895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7983.529411764706,
            "unit": "ns",
            "range": "± 1184.105756500251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30711.702127659573,
            "unit": "ns",
            "range": "± 9458.748654228339"
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
          "id": "e9dc3f38eef7a23b3ee3971759bc84f66ae197e2",
          "message": "Merge pull request #3110 from greymistcube/refactor/ivalue-tx-action-list\n\nRefactor/ivalue tx action list",
          "timestamp": "2023-04-24T21:04:52+09:00",
          "tree_id": "93624d95bcc66ec6d11aa791342673b303d0d3d9",
          "url": "https://github.com/planetarium/libplanet/commit/e9dc3f38eef7a23b3ee3971759bc84f66ae197e2"
        },
        "date": 1682339018560,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1641553.6842105263,
            "unit": "ns",
            "range": "± 134153.5511227168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3048177.419354839,
            "unit": "ns",
            "range": "± 138288.51572027354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2729033.8383838385,
            "unit": "ns",
            "range": "± 212101.8968187132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6518560,
            "unit": "ns",
            "range": "± 402085.20278402726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55750.54945054945,
            "unit": "ns",
            "range": "± 3922.0282062097976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8332051.923076923,
            "unit": "ns",
            "range": "± 341235.50460652885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22732943.47826087,
            "unit": "ns",
            "range": "± 550790.112496326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59851481.25,
            "unit": "ns",
            "range": "± 1812197.130991157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118974933.33333333,
            "unit": "ns",
            "range": "± 3967220.093970084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239529118.1818182,
            "unit": "ns",
            "range": "± 7437172.908792971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5649933.705357143,
            "unit": "ns",
            "range": "± 77468.20569326937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1806393.9797794118,
            "unit": "ns",
            "range": "± 34859.757496432634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411478.4765625,
            "unit": "ns",
            "range": "± 17558.22765259482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3213118.9453125,
            "unit": "ns",
            "range": "± 72526.44404908392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991046.8098958334,
            "unit": "ns",
            "range": "± 14866.623783558838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925252.0247395834,
            "unit": "ns",
            "range": "± 10188.440863467014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623529.5774647887,
            "unit": "ns",
            "range": "± 176377.1757135148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3885279.3103448274,
            "unit": "ns",
            "range": "± 108433.86522705357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4538269.090909091,
            "unit": "ns",
            "range": "± 193104.93297180976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4782024.242424242,
            "unit": "ns",
            "range": "± 147949.15729377914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7728098.245614035,
            "unit": "ns",
            "range": "± 334194.512164926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304030.48780487804,
            "unit": "ns",
            "range": "± 15992.874100090045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289953.7974683544,
            "unit": "ns",
            "range": "± 15019.725859067199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263168.4210526316,
            "unit": "ns",
            "range": "± 11314.768444930987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4704228.571428572,
            "unit": "ns",
            "range": "± 111335.32297908487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4098551.4285714286,
            "unit": "ns",
            "range": "± 131625.50568905388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23586.021505376346,
            "unit": "ns",
            "range": "± 2265.7943898164717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104000,
            "unit": "ns",
            "range": "± 8448.619216574189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93967.01030927835,
            "unit": "ns",
            "range": "± 10126.231629303631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114163.82978723405,
            "unit": "ns",
            "range": "± 18046.349233539953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7871.739130434783,
            "unit": "ns",
            "range": "± 1235.4939473087672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24413.40206185567,
            "unit": "ns",
            "range": "± 3352.5372501652687"
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
          "id": "1a612088183b6b385b0ef2dcaead6658b1a6354a",
          "message": "Merge pull request #3111 from greymistcube/refactor/polymorphic-action\n\nMore generic action type attribute",
          "timestamp": "2023-04-25T17:23:41+09:00",
          "tree_id": "bae83567c1d3fd2c26229e68420a96feb2dcd53f",
          "url": "https://github.com/planetarium/libplanet/commit/1a612088183b6b385b0ef2dcaead6658b1a6354a"
        },
        "date": 1682412035759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1490940.4040404041,
            "unit": "ns",
            "range": "± 153055.27607543935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2642604.0816326533,
            "unit": "ns",
            "range": "± 171129.76562889185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2302657.1428571427,
            "unit": "ns",
            "range": "± 183163.92691715076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5614030.666666667,
            "unit": "ns",
            "range": "± 283702.6036011833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53468.81720430108,
            "unit": "ns",
            "range": "± 4411.767330344167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7102735.714285715,
            "unit": "ns",
            "range": "± 102849.54550696377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19715776.666666668,
            "unit": "ns",
            "range": "± 311506.3963265938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50082362.5,
            "unit": "ns",
            "range": "± 948811.8737839095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103321416.66666667,
            "unit": "ns",
            "range": "± 1535418.3993141353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203552853.33333334,
            "unit": "ns",
            "range": "± 2094265.7942468482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4823226.09375,
            "unit": "ns",
            "range": "± 13528.653153929226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515364.1145833333,
            "unit": "ns",
            "range": "± 7767.633072965529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1195483.2161458333,
            "unit": "ns",
            "range": "± 5962.75775438744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643779.8958333335,
            "unit": "ns",
            "range": "± 8509.644180431713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853881.1174665178,
            "unit": "ns",
            "range": "± 2204.539741126069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769132.2265625,
            "unit": "ns",
            "range": "± 2742.0728036743726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3186780,
            "unit": "ns",
            "range": "± 84568.28601786842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3432284.8484848486,
            "unit": "ns",
            "range": "± 87645.03737096343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4018320,
            "unit": "ns",
            "range": "± 129815.6221904971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4242608.955223881,
            "unit": "ns",
            "range": "± 191358.14409773174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6807992.857142857,
            "unit": "ns",
            "range": "± 116641.79528193745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289529.03225806454,
            "unit": "ns",
            "range": "± 13117.581583093215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270965.67164179106,
            "unit": "ns",
            "range": "± 12703.907204249548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226167.2131147541,
            "unit": "ns",
            "range": "± 10185.344394626942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150871.4285714286,
            "unit": "ns",
            "range": "± 57764.22140672611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3665284.6153846155,
            "unit": "ns",
            "range": "± 39171.095767028826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25563.541666666668,
            "unit": "ns",
            "range": "± 2638.0263671986077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106506,
            "unit": "ns",
            "range": "± 12047.673148074207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102389.898989899,
            "unit": "ns",
            "range": "± 13801.134935210835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124742.26804123711,
            "unit": "ns",
            "range": "± 18439.33654724067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9181.818181818182,
            "unit": "ns",
            "range": "± 1823.4506219490713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25331.632653061224,
            "unit": "ns",
            "range": "± 3461.4101452387818"
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
          "id": "2065dde564132ae03bde8bdc2c43206728823503",
          "message": "Merge pull request #3089 from moreal/exp/action-evaluation-no-action",
          "timestamp": "2023-04-25T17:53:39+09:00",
          "tree_id": "a4621399f72f951ae0ea8d4674ee67b6b05f01f6",
          "url": "https://github.com/planetarium/libplanet/commit/2065dde564132ae03bde8bdc2c43206728823503"
        },
        "date": 1682413768893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358619.387755102,
            "unit": "ns",
            "range": "± 113661.12470728233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2475260,
            "unit": "ns",
            "range": "± 87950.81900757129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2179107.2916666665,
            "unit": "ns",
            "range": "± 156085.1233646103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5682865,
            "unit": "ns",
            "range": "± 392691.9465996756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49544.21052631579,
            "unit": "ns",
            "range": "± 3251.8968536373545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7119600,
            "unit": "ns",
            "range": "± 90490.71775602181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19602113.333333332,
            "unit": "ns",
            "range": "± 211842.90630649155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49713635.71428572,
            "unit": "ns",
            "range": "± 473448.02428914694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101114446.66666667,
            "unit": "ns",
            "range": "± 1434411.6095193212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204276393.33333334,
            "unit": "ns",
            "range": "± 2267412.252977473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4847987.604166667,
            "unit": "ns",
            "range": "± 19788.97368304496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523037.0833333333,
            "unit": "ns",
            "range": "± 8625.562905802302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187228.3333333333,
            "unit": "ns",
            "range": "± 10452.497808386437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629391.5178571427,
            "unit": "ns",
            "range": "± 10967.646746096225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827566.7818509615,
            "unit": "ns",
            "range": "± 4021.6730149272394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764401.2137276785,
            "unit": "ns",
            "range": "± 2706.620458723938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3173503.1578947366,
            "unit": "ns",
            "range": "± 169492.10955878615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3397817.3913043477,
            "unit": "ns",
            "range": "± 130304.37752405852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3960605.882352941,
            "unit": "ns",
            "range": "± 79729.48380765608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4193494.6666666665,
            "unit": "ns",
            "range": "± 211672.68070054517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6645729.411764706,
            "unit": "ns",
            "range": "± 208414.77370045817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277084.6153846154,
            "unit": "ns",
            "range": "± 4207.700510937487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264570.96774193546,
            "unit": "ns",
            "range": "± 12022.920557013334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219878.75,
            "unit": "ns",
            "range": "± 11488.901565302716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4061613.0434782607,
            "unit": "ns",
            "range": "± 99997.30589256268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3600257.1428571427,
            "unit": "ns",
            "range": "± 63573.35816308486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21640.20618556701,
            "unit": "ns",
            "range": "± 2001.0757416228253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94815.15151515152,
            "unit": "ns",
            "range": "± 7199.551624876224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90563.63636363637,
            "unit": "ns",
            "range": "± 10613.338301742559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107214.43298969071,
            "unit": "ns",
            "range": "± 17861.510001086142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8117.021276595745,
            "unit": "ns",
            "range": "± 1055.1092587640087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21423.958333333332,
            "unit": "ns",
            "range": "± 1798.229819143299"
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
          "id": "7d0cfe946cbd43cec8873a11e1864bfb489e2472",
          "message": "Merge pull request #3112 from greymistcube/refactor/system-action\n\n♻️ Refactor system actions",
          "timestamp": "2023-04-26T18:20:21+09:00",
          "tree_id": "6cba2c0ef3b8209c52d764d825675026e2c4dd98",
          "url": "https://github.com/planetarium/libplanet/commit/7d0cfe946cbd43cec8873a11e1864bfb489e2472"
        },
        "date": 1682502190686,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634571.875,
            "unit": "ns",
            "range": "± 199314.378863419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3198567.7083333335,
            "unit": "ns",
            "range": "± 276523.50313920376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2532181.8181818184,
            "unit": "ns",
            "range": "± 257947.14510156584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6810272.7272727275,
            "unit": "ns",
            "range": "± 414552.4063836241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62469.072164948455,
            "unit": "ns",
            "range": "± 16354.270344627259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8396043.01075269,
            "unit": "ns",
            "range": "± 736909.3701867941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24515299,
            "unit": "ns",
            "range": "± 1860488.5380189796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60875333.333333336,
            "unit": "ns",
            "range": "± 2637756.1301723677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127269673.33333333,
            "unit": "ns",
            "range": "± 5674623.1295415275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245684633.33333334,
            "unit": "ns",
            "range": "± 6271605.83663745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5664663.107638889,
            "unit": "ns",
            "range": "± 117800.41490013125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829915.541294643,
            "unit": "ns",
            "range": "± 30212.755871313442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405349.8744419643,
            "unit": "ns",
            "range": "± 17469.637494745137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3021482.198660714,
            "unit": "ns",
            "range": "± 40818.941592765295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986039.2903645834,
            "unit": "ns",
            "range": "± 17180.463827072133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924983.10546875,
            "unit": "ns",
            "range": "± 17035.510235273017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3591091.5789473685,
            "unit": "ns",
            "range": "± 333624.74609196367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3692341.489361702,
            "unit": "ns",
            "range": "± 412247.6266511166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4700817.391304348,
            "unit": "ns",
            "range": "± 392752.81145143963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4939864.893617021,
            "unit": "ns",
            "range": "± 445385.2887343231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8311367.368421053,
            "unit": "ns",
            "range": "± 662601.3336298891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347497.9591836735,
            "unit": "ns",
            "range": "± 56527.841839297434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321962.7659574468,
            "unit": "ns",
            "range": "± 43151.97695179052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281364.28571428574,
            "unit": "ns",
            "range": "± 50265.50178903114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4795237.777777778,
            "unit": "ns",
            "range": "± 395573.806683825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4434873.11827957,
            "unit": "ns",
            "range": "± 326992.97397709935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30148.979591836734,
            "unit": "ns",
            "range": "± 10566.336790715926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108645.26315789473,
            "unit": "ns",
            "range": "± 23817.617154075175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87298.93617021276,
            "unit": "ns",
            "range": "± 19151.071699599317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121725.77319587629,
            "unit": "ns",
            "range": "± 32170.141041909614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5636.046511627907,
            "unit": "ns",
            "range": "± 1078.1152170990956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28196.938775510203,
            "unit": "ns",
            "range": "± 11679.495241190712"
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
          "id": "da159c4c338fe085826fe39a39370f0f2ea1482c",
          "message": "Merge pull request #3113 from moreal/action-evaluator-evaluation-interface\n\nUpdate return type for `IActionEvaluator.Evaluate()` to `IReadOnlyList<IActionEvaluation>`",
          "timestamp": "2023-04-26T19:07:03+09:00",
          "tree_id": "da2e57752902c5d97761b111cb1ab5c105eb4624",
          "url": "https://github.com/planetarium/libplanet/commit/da159c4c338fe085826fe39a39370f0f2ea1482c"
        },
        "date": 1682504574240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442551,
            "unit": "ns",
            "range": "± 152526.7524108807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2464728,
            "unit": "ns",
            "range": "± 191012.8664977225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119476.0416666665,
            "unit": "ns",
            "range": "± 139442.42029544263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5236325.333333333,
            "unit": "ns",
            "range": "± 264071.9507262374"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49106.52173913043,
            "unit": "ns",
            "range": "± 4101.803525811223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6340142.105263158,
            "unit": "ns",
            "range": "± 137073.92699557528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17920156.666666668,
            "unit": "ns",
            "range": "± 133481.98094909755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46803657.14285714,
            "unit": "ns",
            "range": "± 577495.5060954497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93442746.66666667,
            "unit": "ns",
            "range": "± 1314943.2599745058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181740673.33333334,
            "unit": "ns",
            "range": "± 2443579.599529775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4293855.580357143,
            "unit": "ns",
            "range": "± 24077.568725590503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1359471.09375,
            "unit": "ns",
            "range": "± 6317.943757260396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1045003.4104567308,
            "unit": "ns",
            "range": "± 4372.535436173225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2420914.5833333335,
            "unit": "ns",
            "range": "± 26250.933839410656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 744655.5106026785,
            "unit": "ns",
            "range": "± 3116.2467216054447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 680197.28515625,
            "unit": "ns",
            "range": "± 3632.439060444501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2891034,
            "unit": "ns",
            "range": "± 116461.0394868917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3112061.7647058824,
            "unit": "ns",
            "range": "± 142597.7831874453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3531613.6363636362,
            "unit": "ns",
            "range": "± 129479.98874012836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3906262.686567164,
            "unit": "ns",
            "range": "± 184891.88063840533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6303205,
            "unit": "ns",
            "range": "± 220515.0508846656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260011.76470588235,
            "unit": "ns",
            "range": "± 13949.376259862507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247934.4827586207,
            "unit": "ns",
            "range": "± 13524.360687174545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207700,
            "unit": "ns",
            "range": "± 8858.162170396128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3702561.5384615385,
            "unit": "ns",
            "range": "± 59285.29242093605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3312686.6666666665,
            "unit": "ns",
            "range": "± 52694.90171417598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23854.166666666668,
            "unit": "ns",
            "range": "± 3106.8656287467143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90767.67676767676,
            "unit": "ns",
            "range": "± 9699.861436868816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79636.45833333333,
            "unit": "ns",
            "range": "± 8638.081168403653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109069.38775510204,
            "unit": "ns",
            "range": "± 15416.294821163883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8506.185567010309,
            "unit": "ns",
            "range": "± 1412.0622059737732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20795.78947368421,
            "unit": "ns",
            "range": "± 2276.3313050885886"
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
          "id": "80c0806f13e67aaa8b6098acba108d98a2b588d3",
          "message": "Correct typo (#3114)",
          "timestamp": "2023-04-27T10:17:03+09:00",
          "tree_id": "a74c00e6bb5445285df3182f73cbb89c0a158345",
          "url": "https://github.com/planetarium/libplanet/commit/80c0806f13e67aaa8b6098acba108d98a2b588d3"
        },
        "date": 1682559219523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378198.98989899,
            "unit": "ns",
            "range": "± 105952.01310311162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652738,
            "unit": "ns",
            "range": "± 164695.88121409985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2178898.969072165,
            "unit": "ns",
            "range": "± 139435.70762694223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5575356.818181818,
            "unit": "ns",
            "range": "± 305205.5831713356"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49643.15789473684,
            "unit": "ns",
            "range": "± 3453.5720832753004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6877485.714285715,
            "unit": "ns",
            "range": "± 32032.480082250582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19459685.714285713,
            "unit": "ns",
            "range": "± 284972.6642953748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48524565.217391305,
            "unit": "ns",
            "range": "± 1189767.8324357294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94289923.52941176,
            "unit": "ns",
            "range": "± 1686573.164559357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188223300,
            "unit": "ns",
            "range": "± 1832279.9979176847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869962.34375,
            "unit": "ns",
            "range": "± 24834.880466232215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521450.3255208333,
            "unit": "ns",
            "range": "± 8779.045052858233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154891.46484375,
            "unit": "ns",
            "range": "± 7633.641127776166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633230.4036458335,
            "unit": "ns",
            "range": "± 8753.623950179095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823697.3772321428,
            "unit": "ns",
            "range": "± 2717.480631358916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772433.02734375,
            "unit": "ns",
            "range": "± 2857.0682149537543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3005218.75,
            "unit": "ns",
            "range": "± 58570.88262666584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3206606.25,
            "unit": "ns",
            "range": "± 125314.56488721629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3837800,
            "unit": "ns",
            "range": "± 36402.13434148312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3987992.8571428573,
            "unit": "ns",
            "range": "± 145295.71425847884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6549602.94117647,
            "unit": "ns",
            "range": "± 206748.19186530312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267055.55555555556,
            "unit": "ns",
            "range": "± 10487.722681498835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249533.33333333334,
            "unit": "ns",
            "range": "± 9337.461208389666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216618.18181818182,
            "unit": "ns",
            "range": "± 9163.981241171994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4035520,
            "unit": "ns",
            "range": "± 40931.426975927854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3625383.3333333335,
            "unit": "ns",
            "range": "± 45733.04620459384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21544.21052631579,
            "unit": "ns",
            "range": "± 2280.011001721949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94313.26530612246,
            "unit": "ns",
            "range": "± 6454.75350699804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83532.25806451614,
            "unit": "ns",
            "range": "± 4926.175897809282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108762.76595744681,
            "unit": "ns",
            "range": "± 13258.77460760129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6836.170212765957,
            "unit": "ns",
            "range": "± 1489.9556942124432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20455.670103092783,
            "unit": "ns",
            "range": "± 2600.199073795639"
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
          "id": "47c67d3326463e3a171bce0aec3176060eb11873",
          "message": "Merge pull request #3115 from moreal/planetarium-tx/correct-test-data\n\ntest(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-27T13:32:15+09:00",
          "tree_id": "009923f197c382cc054adbcbb4aecaa312b017a4",
          "url": "https://github.com/planetarium/libplanet/commit/47c67d3326463e3a171bce0aec3176060eb11873"
        },
        "date": 1682571311315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1846233.3333333333,
            "unit": "ns",
            "range": "± 184837.9874756136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3573810.101010101,
            "unit": "ns",
            "range": "± 238755.45276173082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2824077.659574468,
            "unit": "ns",
            "range": "± 230184.8995702421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7377722.043010753,
            "unit": "ns",
            "range": "± 471055.4542185469"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74097.91666666667,
            "unit": "ns",
            "range": "± 13745.605836941542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9196739.361702127,
            "unit": "ns",
            "range": "± 524176.88228103676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25406560,
            "unit": "ns",
            "range": "± 673507.7220542217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66057144.44444445,
            "unit": "ns",
            "range": "± 1331420.9298040424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132167866.66666667,
            "unit": "ns",
            "range": "± 2424510.627106506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265433735.48387095,
            "unit": "ns",
            "range": "± 7959958.968510177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6268409.21875,
            "unit": "ns",
            "range": "± 111846.49843954474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2273074.3582589286,
            "unit": "ns",
            "range": "± 32346.665686645156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1517633.7472098214,
            "unit": "ns",
            "range": "± 18131.937501710752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3273273.046875,
            "unit": "ns",
            "range": "± 45268.98443781418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1061313.1510416667,
            "unit": "ns",
            "range": "± 18010.679194629247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 993611.1848958334,
            "unit": "ns",
            "range": "± 16633.721067458187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3946909.6774193547,
            "unit": "ns",
            "range": "± 221976.95143988935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4161170.8333333335,
            "unit": "ns",
            "range": "± 286234.15880475665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5205481.632653061,
            "unit": "ns",
            "range": "± 379087.22096960957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5454620,
            "unit": "ns",
            "range": "± 420862.97906674584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8835338.596491229,
            "unit": "ns",
            "range": "± 380386.5589081651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364504.3956043956,
            "unit": "ns",
            "range": "± 37504.1950604282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345071.4285714286,
            "unit": "ns",
            "range": "± 37722.493395009136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304128.72340425535,
            "unit": "ns",
            "range": "± 38173.533088519674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5216428.865979382,
            "unit": "ns",
            "range": "± 320323.37402965507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4503392.708333333,
            "unit": "ns",
            "range": "± 345928.68362828525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31564.94845360825,
            "unit": "ns",
            "range": "± 9106.1568141779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111855.78947368421,
            "unit": "ns",
            "range": "± 19095.881898648255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94108.76288659793,
            "unit": "ns",
            "range": "± 16580.16983588954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126611.34020618557,
            "unit": "ns",
            "range": "± 22637.9791330146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6244.444444444444,
            "unit": "ns",
            "range": "± 972.5572813044107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31846.39175257732,
            "unit": "ns",
            "range": "± 10037.191899128524"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07a7ae9bdfd3abace1f0fda495b472ed167947c2",
          "message": "Merge pull request #3068 from limebell/chore/deprecate-graphql-fields\n\nDeprecate pow block fields query",
          "timestamp": "2023-04-28T15:34:41+09:00",
          "tree_id": "7609b3eb033edae67625bdf07021c4af8cb8547d",
          "url": "https://github.com/planetarium/libplanet/commit/07a7ae9bdfd3abace1f0fda495b472ed167947c2"
        },
        "date": 1682664904301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1620117.3469387756,
            "unit": "ns",
            "range": "± 134505.45999381007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947867.0103092785,
            "unit": "ns",
            "range": "± 224492.96421865205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2475616.8421052634,
            "unit": "ns",
            "range": "± 201163.11136214895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6308580,
            "unit": "ns",
            "range": "± 441324.9589519489"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56057.142857142855,
            "unit": "ns",
            "range": "± 3742.374256987812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8246889.47368421,
            "unit": "ns",
            "range": "± 179250.69934696006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23098760,
            "unit": "ns",
            "range": "± 315683.70879727066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58003266.666666664,
            "unit": "ns",
            "range": "± 958060.1320724428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115408435.71428572,
            "unit": "ns",
            "range": "± 1633419.0920167533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228345014.70588234,
            "unit": "ns",
            "range": "± 4551944.6838605665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5769106.692708333,
            "unit": "ns",
            "range": "± 89031.49789290196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822529.5247395833,
            "unit": "ns",
            "range": "± 26272.892240689125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386563.950892857,
            "unit": "ns",
            "range": "± 18572.73663578082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3080655.3515625,
            "unit": "ns",
            "range": "± 35319.705721424296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981487.7864583334,
            "unit": "ns",
            "range": "± 14232.57347865564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913823.41796875,
            "unit": "ns",
            "range": "± 12642.424095805509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3547331.4285714286,
            "unit": "ns",
            "range": "± 106702.91845457033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3940516.6666666665,
            "unit": "ns",
            "range": "± 116691.33786761267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4522387.719298245,
            "unit": "ns",
            "range": "± 196495.25264183086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4722475.384615385,
            "unit": "ns",
            "range": "± 217128.1188828738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7701046.428571428,
            "unit": "ns",
            "range": "± 330873.73420538084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313446.77419354836,
            "unit": "ns",
            "range": "± 14195.736115109175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293204.6511627907,
            "unit": "ns",
            "range": "± 15965.719946381774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247177.61194029852,
            "unit": "ns",
            "range": "± 11687.131240599925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4656535.714285715,
            "unit": "ns",
            "range": "± 151268.8843687004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4085097.619047619,
            "unit": "ns",
            "range": "± 145896.66153771768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25791.20879120879,
            "unit": "ns",
            "range": "± 2603.273509839673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104342.55319148937,
            "unit": "ns",
            "range": "± 8113.3434414066005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95068.42105263157,
            "unit": "ns",
            "range": "± 9361.126763852404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116297.8947368421,
            "unit": "ns",
            "range": "± 14922.751293210466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8392.631578947368,
            "unit": "ns",
            "range": "± 1498.8820021732763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22552.63157894737,
            "unit": "ns",
            "range": "± 2293.832716881228"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d92918f38003c07ab256b4fb0a3b9aa88e9ce7e7",
          "message": "Merge pull request #3120 from limebell/feature/ignore-seed-in-consensus\n\nExclude seed peer when heartbeat in `Gossip`",
          "timestamp": "2023-04-28T18:45:28+09:00",
          "tree_id": "ec1d8a9df9ea2267b743a28e29178caa9fd5d819",
          "url": "https://github.com/planetarium/libplanet/commit/d92918f38003c07ab256b4fb0a3b9aa88e9ce7e7"
        },
        "date": 1682676322501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1819138.144329897,
            "unit": "ns",
            "range": "± 204911.63616061583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3417480,
            "unit": "ns",
            "range": "± 254444.85779746948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2760771.276595745,
            "unit": "ns",
            "range": "± 203046.7993209492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7364371.739130435,
            "unit": "ns",
            "range": "± 562124.8979993578"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65483.50515463918,
            "unit": "ns",
            "range": "± 12143.496891446766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9296143.01075269,
            "unit": "ns",
            "range": "± 685184.9349529578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25994136.666666668,
            "unit": "ns",
            "range": "± 777804.7088832257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64501985.294117644,
            "unit": "ns",
            "range": "± 3057112.939255369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128083079.16666667,
            "unit": "ns",
            "range": "± 3247999.887955016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258577558.62068966,
            "unit": "ns",
            "range": "± 7504396.262311714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6358468.671875,
            "unit": "ns",
            "range": "± 126166.95934184987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000116.189236111,
            "unit": "ns",
            "range": "± 40293.353074609855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1503385.7161458333,
            "unit": "ns",
            "range": "± 23031.349410174098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3351988.9539930555,
            "unit": "ns",
            "range": "± 62177.499382620495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1079129.506138393,
            "unit": "ns",
            "range": "± 14628.811127361023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999263.4505208334,
            "unit": "ns",
            "range": "± 17277.522546320954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3978060,
            "unit": "ns",
            "range": "± 311857.721718967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4086144.6808510637,
            "unit": "ns",
            "range": "± 371543.24879358336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5207640.625,
            "unit": "ns",
            "range": "± 480768.6671150744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5217628.571428572,
            "unit": "ns",
            "range": "± 490596.9412490121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8819106.06060606,
            "unit": "ns",
            "range": "± 676906.5881985251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360090.2173913043,
            "unit": "ns",
            "range": "± 38802.617051715875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325045.652173913,
            "unit": "ns",
            "range": "± 32920.364828615064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283258.2417582418,
            "unit": "ns",
            "range": "± 36814.00719513057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5257482.978723404,
            "unit": "ns",
            "range": "± 299449.726384734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4689093.87755102,
            "unit": "ns",
            "range": "± 307380.80543481896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25314.444444444445,
            "unit": "ns",
            "range": "± 5663.971709903464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113151.57894736843,
            "unit": "ns",
            "range": "± 21195.050923520233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94221.875,
            "unit": "ns",
            "range": "± 19198.559173596994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130058.94736842105,
            "unit": "ns",
            "range": "± 21331.913434923572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7051.041666666667,
            "unit": "ns",
            "range": "± 1335.5065896045564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24506.521739130436,
            "unit": "ns",
            "range": "± 5283.767477639792"
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
          "id": "da098726a6d45c70bd6b17bc552897aa09a81230",
          "message": "Merge pull request #3116 from greymistcube/refactor/transaction\n\n♻️ 🧹 Remove distinction between system action and custom action",
          "timestamp": "2023-04-28T19:02:08+09:00",
          "tree_id": "4657e6c865b152b723774737bb46cf651aba8e8b",
          "url": "https://github.com/planetarium/libplanet/commit/da098726a6d45c70bd6b17bc552897aa09a81230"
        },
        "date": 1682677268537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1518000,
            "unit": "ns",
            "range": "± 107568.37123335055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2824135,
            "unit": "ns",
            "range": "± 176069.26115089544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2386782,
            "unit": "ns",
            "range": "± 198037.27655431567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5765012,
            "unit": "ns",
            "range": "± 386190.8541306247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65632.6530612245,
            "unit": "ns",
            "range": "± 9700.204860310985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7810171.428571428,
            "unit": "ns",
            "range": "± 89473.3344769132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20284800,
            "unit": "ns",
            "range": "± 226482.5600349837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50442914.28571428,
            "unit": "ns",
            "range": "± 421111.33345569693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102507446.66666667,
            "unit": "ns",
            "range": "± 969898.1271001511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204725520,
            "unit": "ns",
            "range": "± 1477123.1006830232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4962383.7890625,
            "unit": "ns",
            "range": "± 19201.16103194828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539277.5948660714,
            "unit": "ns",
            "range": "± 5374.374189125429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182524.7135416667,
            "unit": "ns",
            "range": "± 7132.7775447018585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2758707.254464286,
            "unit": "ns",
            "range": "± 38687.434626783775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832064.5833333334,
            "unit": "ns",
            "range": "± 3773.9396311574305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767142.0703125,
            "unit": "ns",
            "range": "± 3128.9428443626075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3266400,
            "unit": "ns",
            "range": "± 89251.69369589692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3487968.1818181816,
            "unit": "ns",
            "range": "± 83085.6837497041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4113286.7924528304,
            "unit": "ns",
            "range": "± 155242.16447182896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4308312.048192771,
            "unit": "ns",
            "range": "± 229963.85208920325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6756800,
            "unit": "ns",
            "range": "± 232907.0955019085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312493.8461538461,
            "unit": "ns",
            "range": "± 14464.729483763651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312806.32911392406,
            "unit": "ns",
            "range": "± 16122.665537811716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294611.1111111111,
            "unit": "ns",
            "range": "± 5523.201212520409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4249900,
            "unit": "ns",
            "range": "± 35189.818603302476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822746.153846154,
            "unit": "ns",
            "range": "± 41741.45851517839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33664.583333333336,
            "unit": "ns",
            "range": "± 2857.9705411419286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 141903.53535353535,
            "unit": "ns",
            "range": "± 8581.057842729413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130718.36734693877,
            "unit": "ns",
            "range": "± 8802.314561344701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131155.81395348837,
            "unit": "ns",
            "range": "± 8879.634394317382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11657.142857142857,
            "unit": "ns",
            "range": "± 2209.45718015259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31162.5,
            "unit": "ns",
            "range": "± 2876.6665650220552"
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
          "id": "2e128e332835e4aca6a0cd2da98e33704ae3a40b",
          "message": "Merge pull request #3121 from greymistcube/remove/transaction-t\n\n♻️ Change `Transaction<T>` to `Transaction`",
          "timestamp": "2023-05-02T10:51:49+09:00",
          "tree_id": "21ae5700d32b3587eb21a0a9ad3d3c38553cfdd0",
          "url": "https://github.com/planetarium/libplanet/commit/2e128e332835e4aca6a0cd2da98e33704ae3a40b"
        },
        "date": 1682993477953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1456845.8333333333,
            "unit": "ns",
            "range": "± 154813.45781067692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2669413.9784946237,
            "unit": "ns",
            "range": "± 163464.5085740246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2273162.1052631577,
            "unit": "ns",
            "range": "± 178660.6989721658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5457503.296703297,
            "unit": "ns",
            "range": "± 384048.9619973386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49689.01098901099,
            "unit": "ns",
            "range": "± 4060.800428745559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7216452.5,
            "unit": "ns",
            "range": "± 250812.5543697667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20450853.44827586,
            "unit": "ns",
            "range": "± 872951.3034720292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49527906.666666664,
            "unit": "ns",
            "range": "± 778195.1641611567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100075035.29411764,
            "unit": "ns",
            "range": "± 1475320.6774042281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200240375,
            "unit": "ns",
            "range": "± 2558913.272225678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4971846.686422414,
            "unit": "ns",
            "range": "± 142811.86708469485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1560983.4748641304,
            "unit": "ns",
            "range": "± 39437.87725616835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1210143.896484375,
            "unit": "ns",
            "range": "± 23286.6894059826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2731188.8139204546,
            "unit": "ns",
            "range": "± 58340.90618808379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843777.7265625,
            "unit": "ns",
            "range": "± 22241.69306001804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771558.0746299342,
            "unit": "ns",
            "range": "± 16320.936820864608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325950,
            "unit": "ns",
            "range": "± 52810.36830017378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3377312.8571428573,
            "unit": "ns",
            "range": "± 164054.75572435075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3960172.5490196077,
            "unit": "ns",
            "range": "± 160400.1609455943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4309255.555555556,
            "unit": "ns",
            "range": "± 115609.84564584632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6595000,
            "unit": "ns",
            "range": "± 266316.69493293134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267133.96226415096,
            "unit": "ns",
            "range": "± 10369.276797647988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262257.95454545453,
            "unit": "ns",
            "range": "± 14313.475056107729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220671.18644067796,
            "unit": "ns",
            "range": "± 9775.1982226565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4025224.4444444445,
            "unit": "ns",
            "range": "± 152214.59605611168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3528970,
            "unit": "ns",
            "range": "± 60655.55990483001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22001.063829787236,
            "unit": "ns",
            "range": "± 1657.9229576540513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91673.23232323233,
            "unit": "ns",
            "range": "± 7560.380460716331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87341.41414141415,
            "unit": "ns",
            "range": "± 9128.370332023864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100666.66666666667,
            "unit": "ns",
            "range": "± 15053.096668069515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6745.918367346939,
            "unit": "ns",
            "range": "± 1145.3328303320752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20425.274725274725,
            "unit": "ns",
            "range": "± 2290.4921065906533"
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
          "id": "1baa5f79b5bce32b7b6619b9b78be8138470bf17",
          "message": "Merge pull request #3124 from greymistcube/chore/missing-changelog\n\n🧹 Changelog",
          "timestamp": "2023-05-02T11:03:53+09:00",
          "tree_id": "704625ba1eeca124c7cafb0b315bbcec741389b2",
          "url": "https://github.com/planetarium/libplanet/commit/1baa5f79b5bce32b7b6619b9b78be8138470bf17"
        },
        "date": 1682993991724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1350153.0612244897,
            "unit": "ns",
            "range": "± 108700.13344587415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2491081.8181818184,
            "unit": "ns",
            "range": "± 92632.65854532878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2151452.525252525,
            "unit": "ns",
            "range": "± 133970.88119761008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5376350,
            "unit": "ns",
            "range": "± 330595.958807421"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51638.541666666664,
            "unit": "ns",
            "range": "± 4598.269005927904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7099493.333333333,
            "unit": "ns",
            "range": "± 110652.11550922407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20059100,
            "unit": "ns",
            "range": "± 148394.2254733861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49458060,
            "unit": "ns",
            "range": "± 653527.9672668951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100149273.33333333,
            "unit": "ns",
            "range": "± 1295076.159076957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199894880,
            "unit": "ns",
            "range": "± 2284389.373302446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4856892.03125,
            "unit": "ns",
            "range": "± 22144.504469781958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540467.6339285714,
            "unit": "ns",
            "range": "± 7718.8399758372725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164941.924579327,
            "unit": "ns",
            "range": "± 2446.073534623259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645420.5208333335,
            "unit": "ns",
            "range": "± 11222.707139193748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825697.6911272322,
            "unit": "ns",
            "range": "± 2669.0359591830925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770410,
            "unit": "ns",
            "range": "± 4459.667987965432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234828,
            "unit": "ns",
            "range": "± 85394.40613998086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3355524.074074074,
            "unit": "ns",
            "range": "± 119890.24058221893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3917820,
            "unit": "ns",
            "range": "± 69096.99393916187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4283609.090909091,
            "unit": "ns",
            "range": "± 152738.93035394076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6941645.714285715,
            "unit": "ns",
            "range": "± 209672.7693375577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273895,
            "unit": "ns",
            "range": "± 11153.557234490298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257592.45283018867,
            "unit": "ns",
            "range": "± 10569.074063522887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224200,
            "unit": "ns",
            "range": "± 6953.580783616863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3960600,
            "unit": "ns",
            "range": "± 39760.38947782795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3579871.4285714286,
            "unit": "ns",
            "range": "± 59385.33137414981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23245.744680851065,
            "unit": "ns",
            "range": "± 2681.1434285858004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93339,
            "unit": "ns",
            "range": "± 6996.909779656049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89723,
            "unit": "ns",
            "range": "± 8976.848505511782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102870.65217391304,
            "unit": "ns",
            "range": "± 12469.069759564918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7201.0204081632655,
            "unit": "ns",
            "range": "± 1154.5066244811962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22228.42105263158,
            "unit": "ns",
            "range": "± 2371.4015587292592"
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
          "id": "85e160f6265d39cbf9add0c97870d0f41fb68ecd",
          "message": "Merge pull request #3123 from greymistcube/remove/block-t\n\n♻️ Change `Block<T>` to `Block`",
          "timestamp": "2023-05-02T14:12:10+09:00",
          "tree_id": "b4f52824685d8f75d04a2969594c1ccbf26dcfb9",
          "url": "https://github.com/planetarium/libplanet/commit/85e160f6265d39cbf9add0c97870d0f41fb68ecd"
        },
        "date": 1683005363462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336316.923076923,
            "unit": "ns",
            "range": "± 61195.38526624876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2485872.4137931033,
            "unit": "ns",
            "range": "± 108433.87473738368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2287105.0505050505,
            "unit": "ns",
            "range": "± 168169.71528041968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5374096,
            "unit": "ns",
            "range": "± 339451.4462000018"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49254.63917525773,
            "unit": "ns",
            "range": "± 4355.193753309488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6855900,
            "unit": "ns",
            "range": "± 60166.186517013026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19274021.739130434,
            "unit": "ns",
            "range": "± 481568.55733635655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47293840,
            "unit": "ns",
            "range": "± 777069.9488646897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99942564.28571428,
            "unit": "ns",
            "range": "± 1088085.1625374118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192081415.78947368,
            "unit": "ns",
            "range": "± 4132235.2146485187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4788050.286458333,
            "unit": "ns",
            "range": "± 42212.53187167093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518821.5234375,
            "unit": "ns",
            "range": "± 11297.523561430842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173321.328125,
            "unit": "ns",
            "range": "± 9941.575965191996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650890.7552083335,
            "unit": "ns",
            "range": "± 11202.667190896977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837352.6236979166,
            "unit": "ns",
            "range": "± 2888.5245617160317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782332.1219308035,
            "unit": "ns",
            "range": "± 1344.297219137644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3141702.272727273,
            "unit": "ns",
            "range": "± 115357.10880935825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3238470.769230769,
            "unit": "ns",
            "range": "± 150228.29785350544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3932037.5,
            "unit": "ns",
            "range": "± 131985.36571461443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4073869.4444444445,
            "unit": "ns",
            "range": "± 134453.67724758157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6492983.333333333,
            "unit": "ns",
            "range": "± 147496.8010952554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282374.358974359,
            "unit": "ns",
            "range": "± 14525.440609786157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260692.1875,
            "unit": "ns",
            "range": "± 11550.802963739918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214254.41176470587,
            "unit": "ns",
            "range": "± 10198.923470019874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3919686.6666666665,
            "unit": "ns",
            "range": "± 59018.56689292988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3518918.1818181816,
            "unit": "ns",
            "range": "± 85261.06483905287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21665.9793814433,
            "unit": "ns",
            "range": "± 3133.1522531209866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94779.29292929293,
            "unit": "ns",
            "range": "± 9291.319764400387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83362.62626262626,
            "unit": "ns",
            "range": "± 9352.731630423905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111107.29166666667,
            "unit": "ns",
            "range": "± 17069.52498208533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6416.666666666667,
            "unit": "ns",
            "range": "± 1026.8671483453336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21389.583333333332,
            "unit": "ns",
            "range": "± 2229.7264012791807"
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
          "id": "51a95183937a76829f5166d4169c5b9fd20f6fc2",
          "message": "Merge pull request #3127 from greymistcube/remove/block-evaluate\n\n🧹 Remove `PreEvaluationBlock.Evaluate()`",
          "timestamp": "2023-05-02T18:07:32+09:00",
          "tree_id": "58aa7a02d3106cd017adf090d986f5f85ce79ca8",
          "url": "https://github.com/planetarium/libplanet/commit/51a95183937a76829f5166d4169c5b9fd20f6fc2"
        },
        "date": 1683019438119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376292.857142857,
            "unit": "ns",
            "range": "± 105796.95004665898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648616.326530612,
            "unit": "ns",
            "range": "± 172483.23805839446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2191455.263157895,
            "unit": "ns",
            "range": "± 135949.01294581234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5390112.765957447,
            "unit": "ns",
            "range": "± 306854.71369876154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51232.63157894737,
            "unit": "ns",
            "range": "± 4493.646628563089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7440661.111111111,
            "unit": "ns",
            "range": "± 150904.1179373761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19742015.384615384,
            "unit": "ns",
            "range": "± 162650.37578680765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50716786.666666664,
            "unit": "ns",
            "range": "± 418550.73914412723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100592528.57142857,
            "unit": "ns",
            "range": "± 830073.2464701502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199889446.66666666,
            "unit": "ns",
            "range": "± 1756166.8904043208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5028242.395833333,
            "unit": "ns",
            "range": "± 13295.062570140639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547054.7591145833,
            "unit": "ns",
            "range": "± 4187.414998160367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171768.1640625,
            "unit": "ns",
            "range": "± 4168.612727464234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638279.3489583335,
            "unit": "ns",
            "range": "± 9611.283774458352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834155.56640625,
            "unit": "ns",
            "range": "± 2992.1952401402214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770154.4791666666,
            "unit": "ns",
            "range": "± 2859.5767852711833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3205651.2195121953,
            "unit": "ns",
            "range": "± 114917.48370450689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3366789.1304347827,
            "unit": "ns",
            "range": "± 109010.85058788284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3881113.3333333335,
            "unit": "ns",
            "range": "± 60205.705314205494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4267460.869565218,
            "unit": "ns",
            "range": "± 105050.03456851335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6582821.212121212,
            "unit": "ns",
            "range": "± 197719.0411252413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280721.875,
            "unit": "ns",
            "range": "± 12906.482544313407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261469.23076923078,
            "unit": "ns",
            "range": "± 8813.69012407623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225778.46153846153,
            "unit": "ns",
            "range": "± 10295.622436072228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3960903.3333333335,
            "unit": "ns",
            "range": "± 52060.663332949065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3630223.076923077,
            "unit": "ns",
            "range": "± 43898.88293655003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24534.0206185567,
            "unit": "ns",
            "range": "± 2163.854902999994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97367.67676767676,
            "unit": "ns",
            "range": "± 9281.68954846296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95713,
            "unit": "ns",
            "range": "± 9331.976687116663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101966.29213483146,
            "unit": "ns",
            "range": "± 10627.301288963945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7558.333333333333,
            "unit": "ns",
            "range": "± 1142.6346901296668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22313.186813186814,
            "unit": "ns",
            "range": "± 2045.2225519329886"
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
          "id": "136de5c689b87234ce87a9694db5c975a2d287be",
          "message": "Merge pull request #3135 from greymistcube/refactor/type-loader\n\n♻️ Changed `IActionTypeLoader` to `IActionLoader`",
          "timestamp": "2023-05-03T19:37:02+09:00",
          "tree_id": "c4a4fe94b72f4641da7598a8daaeac1c75c9020c",
          "url": "https://github.com/planetarium/libplanet/commit/136de5c689b87234ce87a9694db5c975a2d287be"
        },
        "date": 1683111015871,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1163856,
            "unit": "ns",
            "range": "± 114165.9640058005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2193487.5,
            "unit": "ns",
            "range": "± 137960.91914207558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1808167.7419354839,
            "unit": "ns",
            "range": "± 131470.1744662779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4568788.541666667,
            "unit": "ns",
            "range": "± 301567.71252199"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42279.34782608696,
            "unit": "ns",
            "range": "± 2519.1808385798254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5778307.142857143,
            "unit": "ns",
            "range": "± 79579.19581519662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 16197917.857142856,
            "unit": "ns",
            "range": "± 430733.43226328754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 40965613.51351351,
            "unit": "ns",
            "range": "± 1381557.1776405382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80686004,
            "unit": "ns",
            "range": "± 3196486.2433239385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 159766983.33333334,
            "unit": "ns",
            "range": "± 4011629.1877129106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4143673.6979166665,
            "unit": "ns",
            "range": "± 19460.393622061558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1287663.1119791667,
            "unit": "ns",
            "range": "± 12799.686169793304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1007539.5647321428,
            "unit": "ns",
            "range": "± 4985.594743639405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2294630.2734375,
            "unit": "ns",
            "range": "± 20283.53205711603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 766870.2287946428,
            "unit": "ns",
            "range": "± 4859.784488466847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 654403.4309895834,
            "unit": "ns",
            "range": "± 6124.753006480605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2597792.3076923075,
            "unit": "ns",
            "range": "± 106223.64465958704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2814064.285714286,
            "unit": "ns",
            "range": "± 120173.6946387057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3349793.9393939395,
            "unit": "ns",
            "range": "± 99755.50091158488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3402928.723404255,
            "unit": "ns",
            "range": "± 196529.5401048826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5445665.853658536,
            "unit": "ns",
            "range": "± 193589.2644360168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221286.25,
            "unit": "ns",
            "range": "± 11478.419418272368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210775.67567567568,
            "unit": "ns",
            "range": "± 10560.84537414787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177838.70967741936,
            "unit": "ns",
            "range": "± 7785.302563978596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3381047.3684210526,
            "unit": "ns",
            "range": "± 73692.85634322632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3043454.285714286,
            "unit": "ns",
            "range": "± 99786.57620098993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16447.31182795699,
            "unit": "ns",
            "range": "± 1706.4195542669643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75866.16161616161,
            "unit": "ns",
            "range": "± 7339.656154303796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64561.290322580644,
            "unit": "ns",
            "range": "± 4118.859916605894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83240.625,
            "unit": "ns",
            "range": "± 14084.590894232417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5345.833333333333,
            "unit": "ns",
            "range": "± 794.9732424052715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16385.416666666668,
            "unit": "ns",
            "range": "± 1724.4971298547275"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8edec62a15bf36bf36cc5e2b48dbe51924161f1",
          "message": "Merge pull request #3132 from limebell/cherrypick/1.0.1\n\nPort changes from 1.0.1",
          "timestamp": "2023-05-04T02:45:28+09:00",
          "tree_id": "889dfae22e65d823fb3586d7d9c2edca0416ab17",
          "url": "https://github.com/planetarium/libplanet/commit/e8edec62a15bf36bf36cc5e2b48dbe51924161f1"
        },
        "date": 1683137258308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1721106.3157894737,
            "unit": "ns",
            "range": "± 172744.94530925996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3261256.626506024,
            "unit": "ns",
            "range": "± 172656.63245280838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2699461.855670103,
            "unit": "ns",
            "range": "± 211884.81759127358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6900032.978723404,
            "unit": "ns",
            "range": "± 451066.6625477875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75556.12244897959,
            "unit": "ns",
            "range": "± 7744.250495524342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9276692.307692308,
            "unit": "ns",
            "range": "± 152146.4889590427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24001329.411764707,
            "unit": "ns",
            "range": "± 468567.03331101127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60848842.10526316,
            "unit": "ns",
            "range": "± 1336850.286771023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122243200,
            "unit": "ns",
            "range": "± 1587382.8838689171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242804776.92307693,
            "unit": "ns",
            "range": "± 2782912.104898346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6207898.828125,
            "unit": "ns",
            "range": "± 108924.2522122978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863883.75,
            "unit": "ns",
            "range": "± 24698.903371450513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375867.787388393,
            "unit": "ns",
            "range": "± 10512.45147949686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3385644.376627604,
            "unit": "ns",
            "range": "± 132936.1082628103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 988570.0474330357,
            "unit": "ns",
            "range": "± 12253.485214708537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935369.9776785715,
            "unit": "ns",
            "range": "± 9134.169842192068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3960647.56097561,
            "unit": "ns",
            "range": "± 209457.34308976764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4139146,
            "unit": "ns",
            "range": "± 157348.27380491898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5132121.153846154,
            "unit": "ns",
            "range": "± 211677.54550077053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4959733.928571428,
            "unit": "ns",
            "range": "± 212841.3000564981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8252394,
            "unit": "ns",
            "range": "± 329772.15830302704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331113.4146341463,
            "unit": "ns",
            "range": "± 17513.760108400424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330340.98360655736,
            "unit": "ns",
            "range": "± 14677.299672727955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287808.06451612903,
            "unit": "ns",
            "range": "± 28764.022374655902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4903941.025641026,
            "unit": "ns",
            "range": "± 170625.30773899175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4268146.666666667,
            "unit": "ns",
            "range": "± 77141.72362482914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24586.363636363636,
            "unit": "ns",
            "range": "± 4178.405480110231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116803.09278350516,
            "unit": "ns",
            "range": "± 15005.828406602046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116202.04081632652,
            "unit": "ns",
            "range": "± 14321.564589351843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120111.82795698925,
            "unit": "ns",
            "range": "± 14263.31452319098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8164.893617021276,
            "unit": "ns",
            "range": "± 1654.3008429193135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22658.510638297874,
            "unit": "ns",
            "range": "± 3078.905320565068"
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
          "id": "1eb7d483e635204d9210382cd65741885745ceb2",
          "message": "Merge pull request #3136 from greymistcube/feature/filter-malformed-transaction\n\n🔧 Filter malformed `Transaction`s when proposing `Block`s",
          "timestamp": "2023-05-04T17:45:27+09:00",
          "tree_id": "0304b66bc59b57ddd30c4a4bb80e79cb46f4c2ce",
          "url": "https://github.com/planetarium/libplanet/commit/1eb7d483e635204d9210382cd65741885745ceb2"
        },
        "date": 1683191216153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630549.4845360825,
            "unit": "ns",
            "range": "± 202369.21039881502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3118114.5833333335,
            "unit": "ns",
            "range": "± 343730.01981486834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2569581.443298969,
            "unit": "ns",
            "range": "± 316702.9846487007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6522361.797752809,
            "unit": "ns",
            "range": "± 547199.4151016981"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72161.45833333333,
            "unit": "ns",
            "range": "± 18334.25536955729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7501741.489361702,
            "unit": "ns",
            "range": "± 649851.1848934612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22624731.313131314,
            "unit": "ns",
            "range": "± 2386436.934249958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58991513,
            "unit": "ns",
            "range": "± 4375071.402583972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119712789.79591836,
            "unit": "ns",
            "range": "± 6962961.82578344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250528542.85714287,
            "unit": "ns",
            "range": "± 9869589.052002959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5638576.9921875,
            "unit": "ns",
            "range": "± 197662.63507211723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838627.1654211956,
            "unit": "ns",
            "range": "± 46228.231907362366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482832.2890625,
            "unit": "ns",
            "range": "± 74227.79875488348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2981208.0078125,
            "unit": "ns",
            "range": "± 90779.68542554838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014828.8346354166,
            "unit": "ns",
            "range": "± 30235.239152596154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944373.9612926136,
            "unit": "ns",
            "range": "± 22990.35690781414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3472076.262626263,
            "unit": "ns",
            "range": "± 462324.9159137596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536926.595744681,
            "unit": "ns",
            "range": "± 321964.47749547096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4478309.278350515,
            "unit": "ns",
            "range": "± 433884.41963328834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4619472.7272727275,
            "unit": "ns",
            "range": "± 637243.5294934439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8111038.144329897,
            "unit": "ns",
            "range": "± 1070671.93450765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324277.8947368421,
            "unit": "ns",
            "range": "± 44024.45205223388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323393.75,
            "unit": "ns",
            "range": "± 47116.10477265039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298155.10204081633,
            "unit": "ns",
            "range": "± 41406.760547785496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5002752.808988764,
            "unit": "ns",
            "range": "± 315948.7757280686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4302497.849462366,
            "unit": "ns",
            "range": "± 405068.7722013587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34454.08163265306,
            "unit": "ns",
            "range": "± 11255.6438843364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111071.05263157895,
            "unit": "ns",
            "range": "± 18780.03067280958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97635.78947368421,
            "unit": "ns",
            "range": "± 21793.947606976406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128521.875,
            "unit": "ns",
            "range": "± 30978.895033554698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5737.64705882353,
            "unit": "ns",
            "range": "± 1284.4283952486444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28718,
            "unit": "ns",
            "range": "± 10449.816391988074"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "508cdf7ef668ce4bd2268956e50e8059c453464a",
          "message": "Merge pull request #3139 from dahlia/main",
          "timestamp": "2023-05-05T02:32:59+09:00",
          "tree_id": "128924b65b11b0d0687f3552fc28ec882283dc27",
          "url": "https://github.com/planetarium/libplanet/commit/508cdf7ef668ce4bd2268956e50e8059c453464a"
        },
        "date": 1683222761036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498809.375,
            "unit": "ns",
            "range": "± 188720.04221130526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3024836.7346938774,
            "unit": "ns",
            "range": "± 307653.0638703529"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2475203.092783505,
            "unit": "ns",
            "range": "± 251968.91320062027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6440302.222222222,
            "unit": "ns",
            "range": "± 616160.5131558939"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58038.94736842105,
            "unit": "ns",
            "range": "± 15307.057854361658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8211620.731707317,
            "unit": "ns",
            "range": "± 434920.4450419725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21072893.684210528,
            "unit": "ns",
            "range": "± 1696531.946561681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57097318.18181818,
            "unit": "ns",
            "range": "± 3956445.2859204784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110569852.27272727,
            "unit": "ns",
            "range": "± 4137946.2959461245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220714326.31578946,
            "unit": "ns",
            "range": "± 4891467.673617683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5609813.57421875,
            "unit": "ns",
            "range": "± 102979.95913708913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851659.5833333333,
            "unit": "ns",
            "range": "± 24547.61246371849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353075.6380208333,
            "unit": "ns",
            "range": "± 20167.413871809244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2983252.403846154,
            "unit": "ns",
            "range": "± 29156.847787258437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985953.3333333334,
            "unit": "ns",
            "range": "± 9828.911286687602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903678.3984375,
            "unit": "ns",
            "range": "± 12939.2100747473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3317287.5,
            "unit": "ns",
            "range": "± 287070.4913431542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498735.4166666665,
            "unit": "ns",
            "range": "± 276965.86792529875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4387166.315789473,
            "unit": "ns",
            "range": "± 316738.380065465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4456013.541666667,
            "unit": "ns",
            "range": "± 509178.09470801323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7553672.448979592,
            "unit": "ns",
            "range": "± 581692.8366787967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313834.3434343434,
            "unit": "ns",
            "range": "± 52093.60719449087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307938.7755102041,
            "unit": "ns",
            "range": "± 53838.3675566559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254276.59574468085,
            "unit": "ns",
            "range": "± 36809.81760559812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4416729.47368421,
            "unit": "ns",
            "range": "± 425466.0310649319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4031972.6315789474,
            "unit": "ns",
            "range": "± 360765.41221028444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24055,
            "unit": "ns",
            "range": "± 10495.524539227916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99811.11111111111,
            "unit": "ns",
            "range": "± 23309.238288051398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84242.1052631579,
            "unit": "ns",
            "range": "± 19239.23616692394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105521.50537634408,
            "unit": "ns",
            "range": "± 22842.31794309758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4551.612903225807,
            "unit": "ns",
            "range": "± 878.9337541473323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24848.958333333332,
            "unit": "ns",
            "range": "± 10169.189739410922"
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
          "id": "fde751d5fd61f06fd49ba3d297cb6024ac173cf8",
          "message": "Merge pull request #3137 from OnedgeLee/fix/sequential-mutation-consume\n\nFix mutation to be consumed sequentially",
          "timestamp": "2023-05-09T13:11:23+09:00",
          "tree_id": "15eb6ef6a726f0295309a336f2936cf24f5719dd",
          "url": "https://github.com/planetarium/libplanet/commit/fde751d5fd61f06fd49ba3d297cb6024ac173cf8"
        },
        "date": 1683606459110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1308301,
            "unit": "ns",
            "range": "± 121130.4760215699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2363897.2972972975,
            "unit": "ns",
            "range": "± 79011.96634577465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2023117.1717171718,
            "unit": "ns",
            "range": "± 127713.84391135153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4777178.048780488,
            "unit": "ns",
            "range": "± 170108.8805915128"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41526.086956521736,
            "unit": "ns",
            "range": "± 2019.2203048172305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6746746.666666667,
            "unit": "ns",
            "range": "± 39173.29386688018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17051821.42857143,
            "unit": "ns",
            "range": "± 73058.77958688658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43793957.14285714,
            "unit": "ns",
            "range": "± 174048.43143078446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88640273.33333333,
            "unit": "ns",
            "range": "± 473012.92109604104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176519853.33333334,
            "unit": "ns",
            "range": "± 617791.3608361722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828195.729166667,
            "unit": "ns",
            "range": "± 13037.147487292697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1488640.3125,
            "unit": "ns",
            "range": "± 2677.2860109185017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134091.127232143,
            "unit": "ns",
            "range": "± 1270.6237133727257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545990.069110577,
            "unit": "ns",
            "range": "± 2311.19170954385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799530.6189903846,
            "unit": "ns",
            "range": "± 1319.2666996279606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729281.0337611607,
            "unit": "ns",
            "range": "± 892.6241200800946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2838623.076923077,
            "unit": "ns",
            "range": "± 25615.722835989935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3000800,
            "unit": "ns",
            "range": "± 49090.84200979618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3766466.6666666665,
            "unit": "ns",
            "range": "± 38698.886411934516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3789483.870967742,
            "unit": "ns",
            "range": "± 112871.43747578243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6148808.108108108,
            "unit": "ns",
            "range": "± 205801.59725432753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245246.66666666666,
            "unit": "ns",
            "range": "± 6333.476102444051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231302.63157894736,
            "unit": "ns",
            "range": "± 6222.560819943405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218558.18181818182,
            "unit": "ns",
            "range": "± 9284.927868426632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3711393.3333333335,
            "unit": "ns",
            "range": "± 36872.45326153129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445473.3333333335,
            "unit": "ns",
            "range": "± 43334.48753041634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15697.916666666666,
            "unit": "ns",
            "range": "± 1418.8193139417135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74341.66666666667,
            "unit": "ns",
            "range": "± 3987.607560458389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65116.32653061225,
            "unit": "ns",
            "range": "± 2558.8365633277813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73326.31578947368,
            "unit": "ns",
            "range": "± 3707.37529513096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4029.591836734694,
            "unit": "ns",
            "range": "± 624.5755975429047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14835.051546391753,
            "unit": "ns",
            "range": "± 1431.3485218720464"
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
          "id": "13cc3fe3a07719a9afd5959f57ded9658656a6d9",
          "message": "Merge pull request #3140 from greymistcube/feature/filter-malformed-block\n\n🔧 Filter malformed `Block`s from `BlockChain<T>.Append()` and `Context<T>.IsValid()`",
          "timestamp": "2023-05-09T14:16:25+09:00",
          "tree_id": "20ca298679e0f0d825d80b728910e4013fb33ab0",
          "url": "https://github.com/planetarium/libplanet/commit/13cc3fe3a07719a9afd5959f57ded9658656a6d9"
        },
        "date": 1683610700974,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1572433.3333333333,
            "unit": "ns",
            "range": "± 138700.28003273613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3030925.5555555555,
            "unit": "ns",
            "range": "± 204997.93014088567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510520,
            "unit": "ns",
            "range": "± 211581.86062297696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6501941.489361702,
            "unit": "ns",
            "range": "± 586260.8048222874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52164.77272727273,
            "unit": "ns",
            "range": "± 2836.1395071602587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8464432,
            "unit": "ns",
            "range": "± 211880.30567594842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23235100,
            "unit": "ns",
            "range": "± 1005327.4791496219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60372510.75268817,
            "unit": "ns",
            "range": "± 3409586.610077863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119477822.5,
            "unit": "ns",
            "range": "± 3904628.8166927514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250344438.2352941,
            "unit": "ns",
            "range": "± 11910490.454367984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5950596.041666667,
            "unit": "ns",
            "range": "± 77376.2665337629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924100.4427083333,
            "unit": "ns",
            "range": "± 26035.615885210784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473517.7864583333,
            "unit": "ns",
            "range": "± 17209.85319831389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3331427.9296875,
            "unit": "ns",
            "range": "± 41965.554310759086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048608.4601151317,
            "unit": "ns",
            "range": "± 22896.116982519477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982426.2109375,
            "unit": "ns",
            "range": "± 13366.332151260878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3641770.114942529,
            "unit": "ns",
            "range": "± 205210.95165193695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3965375.5319148935,
            "unit": "ns",
            "range": "± 264850.9038621461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4681360.256410256,
            "unit": "ns",
            "range": "± 221989.72618074814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4825482.278481012,
            "unit": "ns",
            "range": "± 242074.46923680414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8134753.684210527,
            "unit": "ns",
            "range": "± 523711.29264585546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300969.44444444444,
            "unit": "ns",
            "range": "± 10019.347553450045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288800,
            "unit": "ns",
            "range": "± 9555.820963460663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245625,
            "unit": "ns",
            "range": "± 2967.74325035034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4705650,
            "unit": "ns",
            "range": "± 187014.8812697175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4219308.928571428,
            "unit": "ns",
            "range": "± 178420.80012944445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20842.708333333332,
            "unit": "ns",
            "range": "± 2094.7676565881284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96303.26086956522,
            "unit": "ns",
            "range": "± 6134.400408414801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85932.97872340426,
            "unit": "ns",
            "range": "± 5483.080295456575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96667.46987951807,
            "unit": "ns",
            "range": "± 9266.621301730822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6250,
            "unit": "ns",
            "range": "± 1104.3413840262976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20405.31914893617,
            "unit": "ns",
            "range": "± 2035.2599908567122"
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
          "id": "33fadb3ef33986e09fc384dc3d85cf603b338e25",
          "message": "Merge pull request #3141 from greymistcube/release/1.1.0\n\n🚀 Release 1.1.0",
          "timestamp": "2023-05-09T14:35:05+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/planetarium/libplanet/commit/33fadb3ef33986e09fc384dc3d85cf603b338e25"
        },
        "date": 1683611519593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1311617.1717171718,
            "unit": "ns",
            "range": "± 125463.14121750696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2487753.488372093,
            "unit": "ns",
            "range": "± 134916.3005872852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2074585.5670103093,
            "unit": "ns",
            "range": "± 148767.11945583124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5188746.464646464,
            "unit": "ns",
            "range": "± 319755.5575662705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47454.76190476191,
            "unit": "ns",
            "range": "± 2551.13510110175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7030413.333333333,
            "unit": "ns",
            "range": "± 103975.79984006351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18510126.315789472,
            "unit": "ns",
            "range": "± 399364.8413308664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47567018.18181818,
            "unit": "ns",
            "range": "± 1165826.3227821607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95199856.25,
            "unit": "ns",
            "range": "± 1849564.6035283548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188168494.7368421,
            "unit": "ns",
            "range": "± 4017004.132223925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4700307.864583333,
            "unit": "ns",
            "range": "± 25126.255522034062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1480230.8854166667,
            "unit": "ns",
            "range": "± 6126.456539751612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1204591.6276041667,
            "unit": "ns",
            "range": "± 7325.901541380773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625175.5338541665,
            "unit": "ns",
            "range": "± 10410.675915762733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812464.0299479166,
            "unit": "ns",
            "range": "± 1763.222328462118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766125.3976004465,
            "unit": "ns",
            "range": "± 1383.2976894470107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3016658.3333333335,
            "unit": "ns",
            "range": "± 33015.76643564909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3219526.086956522,
            "unit": "ns",
            "range": "± 77249.21427897741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3839273.4693877553,
            "unit": "ns",
            "range": "± 152696.74163669173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3923858.3333333335,
            "unit": "ns",
            "range": "± 139881.89673957453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6186735,
            "unit": "ns",
            "range": "± 141461.39988666427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256152.43902439025,
            "unit": "ns",
            "range": "± 9153.236799211469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238948.93617021278,
            "unit": "ns",
            "range": "± 7109.848415812899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203938.46153846153,
            "unit": "ns",
            "range": "± 2066.6149704038817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3833864.285714286,
            "unit": "ns",
            "range": "± 64618.62802560951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3449378.5714285714,
            "unit": "ns",
            "range": "± 58513.57736682775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19147.422680412372,
            "unit": "ns",
            "range": "± 1715.0736611674265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82021.05263157895,
            "unit": "ns",
            "range": "± 5068.486171596854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74465.9574468085,
            "unit": "ns",
            "range": "± 4254.878368843653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82388.60759493671,
            "unit": "ns",
            "range": "± 5594.250421633052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5184.04255319149,
            "unit": "ns",
            "range": "± 790.7126486868734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17734.042553191488,
            "unit": "ns",
            "range": "± 1586.4041432423949"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "769e80cf396742e076b5de4acc50dc365491e589",
          "message": "Merge pull request #3142 from greymistcube/prepare/1.2.0\n\n🔧 Prepare 1.2.0",
          "timestamp": "2023-05-09T18:45:36+09:00",
          "tree_id": "6e83753f227a51959e4e13e4c26d550555ed1a33",
          "url": "https://github.com/planetarium/libplanet/commit/769e80cf396742e076b5de4acc50dc365491e589"
        },
        "date": 1683626768202,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662894.9494949495,
            "unit": "ns",
            "range": "± 205963.53024396976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3268599.494949495,
            "unit": "ns",
            "range": "± 303921.6911672927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2608390.7216494847,
            "unit": "ns",
            "range": "± 210171.8379695897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6896192.631578947,
            "unit": "ns",
            "range": "± 423804.1662467554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68691.05263157895,
            "unit": "ns",
            "range": "± 12378.219501572725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9950052.222222222,
            "unit": "ns",
            "range": "± 611725.9982256098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23986586.734693877,
            "unit": "ns",
            "range": "± 1806869.6081777008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62206307.14285714,
            "unit": "ns",
            "range": "± 2676470.980489532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126182864.28571428,
            "unit": "ns",
            "range": "± 3570899.651681765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241461612.30769232,
            "unit": "ns",
            "range": "± 11284068.843943046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5657812.96875,
            "unit": "ns",
            "range": "± 110789.00252681962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865591.4341517857,
            "unit": "ns",
            "range": "± 27233.325584296235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1441477.9715401786,
            "unit": "ns",
            "range": "± 17431.229661854035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3173609.0303308824,
            "unit": "ns",
            "range": "± 60518.753855098716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1041306.7057291666,
            "unit": "ns",
            "range": "± 24704.10241096192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952701.0709635416,
            "unit": "ns",
            "range": "± 17565.846791436114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3464264.285714286,
            "unit": "ns",
            "range": "± 396595.7518189331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3646544.4444444445,
            "unit": "ns",
            "range": "± 354718.9485978033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4551464.736842105,
            "unit": "ns",
            "range": "± 319515.6354075287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4982188.421052632,
            "unit": "ns",
            "range": "± 481947.9513839903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7914051.041666667,
            "unit": "ns",
            "range": "± 909338.4066966712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327223.15789473685,
            "unit": "ns",
            "range": "± 44981.25721408763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313925.8064516129,
            "unit": "ns",
            "range": "± 44696.60502433337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282383.3333333333,
            "unit": "ns",
            "range": "± 43815.14438174297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4733608.602150538,
            "unit": "ns",
            "range": "± 335995.48090125894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4550520.408163265,
            "unit": "ns",
            "range": "± 326010.5930728447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29756.122448979593,
            "unit": "ns",
            "range": "± 9419.053581788578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114855.67010309278,
            "unit": "ns",
            "range": "± 20279.623235077648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88267.3469387755,
            "unit": "ns",
            "range": "± 17743.68350227506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124474.74747474748,
            "unit": "ns",
            "range": "± 31814.155312563413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5056.179775280899,
            "unit": "ns",
            "range": "± 1013.0910234816217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28595,
            "unit": "ns",
            "range": "± 10081.349667138378"
          }
        ]
      }
    ]
  }
}