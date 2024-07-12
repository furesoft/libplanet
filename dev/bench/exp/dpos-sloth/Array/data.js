window.BENCHMARK_DATA = {
  "lastUpdate": 1720776543999,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "ce8f7ecd0fec57e750b97aba0c14170f74f33792",
          "message": "feat: make ActionEvaluator.CommitWorld to public",
          "timestamp": "2024-06-04T19:38:01+09:00",
          "tree_id": "927016d20e8d96cc4a85cb63a10d9504b5eaac5c",
          "url": "https://github.com/planetarium/libplanet/commit/ce8f7ecd0fec57e750b97aba0c14170f74f33792"
        },
        "date": 1717562956816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10793291.23076923,
            "unit": "ns",
            "range": "± 131594.46428399754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26686079.769230768,
            "unit": "ns",
            "range": "± 187579.14293712305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67298881.96666667,
            "unit": "ns",
            "range": "± 85703.63111566233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135610794.86666667,
            "unit": "ns",
            "range": "± 218610.97098102525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273578271.14285713,
            "unit": "ns",
            "range": "± 395623.0170291016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 16005.552631578947,
            "unit": "ns",
            "range": "± 1374.0808406985798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111154.32608695653,
            "unit": "ns",
            "range": "± 4251.047458133625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105004.44736842105,
            "unit": "ns",
            "range": "± 3531.6534520339274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90234.71428571429,
            "unit": "ns",
            "range": "± 1540.1839265076517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3094222.5185185187,
            "unit": "ns",
            "range": "± 129062.63832856448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2767357.4805194805,
            "unit": "ns",
            "range": "± 141852.3690742941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4898.923913043478,
            "unit": "ns",
            "range": "± 605.9171820552662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26483.47619047619,
            "unit": "ns",
            "range": "± 1657.2871756454301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22394.227272727272,
            "unit": "ns",
            "range": "± 757.2439889320908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29591.863157894735,
            "unit": "ns",
            "range": "± 5102.00247839862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1299.7659574468084,
            "unit": "ns",
            "range": "± 268.5337096851073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4861.860215053764,
            "unit": "ns",
            "range": "± 754.4156908466349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683192.9,
            "unit": "ns",
            "range": "± 37222.04488162442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1300960.3829787234,
            "unit": "ns",
            "range": "± 49908.58988606426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1090250.3384615385,
            "unit": "ns",
            "range": "± 45945.266096695465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9385185,
            "unit": "ns",
            "range": "± 1194433.515613497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184039.4242424243,
            "unit": "ns",
            "range": "± 68464.9451959862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291203.1333333333,
            "unit": "ns",
            "range": "± 87029.85005303954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2555581.3928571427,
            "unit": "ns",
            "range": "± 40183.77747700468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2316949.230769231,
            "unit": "ns",
            "range": "± 38349.46661983242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3017784.534883721,
            "unit": "ns",
            "range": "± 164193.48436121098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3011520.6373697915,
            "unit": "ns",
            "range": "± 49067.30416239807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920541.5039713542,
            "unit": "ns",
            "range": "± 5395.475825167489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612639.2955078125,
            "unit": "ns",
            "range": "± 4675.572423063705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623664.8930989583,
            "unit": "ns",
            "range": "± 14713.932132132682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459182.02689034597,
            "unit": "ns",
            "range": "± 845.8278140773288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428738.6446289063,
            "unit": "ns",
            "range": "± 1467.2954258921113"
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
          "id": "e1991162a1d98a3374ec4873608e2fb340fbfbdc",
          "message": "Merge pull request #3826 from limebell/chore/vp-followup\n\nFix `ValidatorSet.ValidateBlockCommitValidators()` behavior",
          "timestamp": "2024-06-14T15:19:39+09:00",
          "tree_id": "c80a492b39105394077e23ea54aa7847da02cb35",
          "url": "https://github.com/planetarium/libplanet/commit/e1991162a1d98a3374ec4873608e2fb340fbfbdc"
        },
        "date": 1718346525920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10774524.038461538,
            "unit": "ns",
            "range": "± 102421.88831219573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26587079.92857143,
            "unit": "ns",
            "range": "± 124178.55751758574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67647812.07142857,
            "unit": "ns",
            "range": "± 110337.6628713767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135839146.14285713,
            "unit": "ns",
            "range": "± 271202.2849259477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274118469.71428573,
            "unit": "ns",
            "range": "± 349719.6685066106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15587.520833333334,
            "unit": "ns",
            "range": "± 1363.170066844321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113294.62745098039,
            "unit": "ns",
            "range": "± 4624.616459603042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105154.23076923077,
            "unit": "ns",
            "range": "± 4322.965447401453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93856.51612903226,
            "unit": "ns",
            "range": "± 2822.056317309156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3134250.911764706,
            "unit": "ns",
            "range": "± 100170.0028679631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785762.488372093,
            "unit": "ns",
            "range": "± 150531.94202386533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4799.423529411764,
            "unit": "ns",
            "range": "± 559.5651878376423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27248.215909090908,
            "unit": "ns",
            "range": "± 2336.804097400775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22592.108695652172,
            "unit": "ns",
            "range": "± 1080.7100908715106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30209.85789473684,
            "unit": "ns",
            "range": "± 4942.065144433581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1262.372340425532,
            "unit": "ns",
            "range": "± 277.18757416185224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4689.284090909091,
            "unit": "ns",
            "range": "± 486.8303523075566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684803.7555555556,
            "unit": "ns",
            "range": "± 39302.20472117555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262504.4285714286,
            "unit": "ns",
            "range": "± 40664.03824329429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1054213.3396226414,
            "unit": "ns",
            "range": "± 40141.75302309373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9265677.43,
            "unit": "ns",
            "range": "± 1425923.5063852777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2173823.923076923,
            "unit": "ns",
            "range": "± 27314.96805008058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283315.119047619,
            "unit": "ns",
            "range": "± 81926.80038412708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2636097.6511627906,
            "unit": "ns",
            "range": "± 84344.13212516236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2360488.236842105,
            "unit": "ns",
            "range": "± 80819.85704737794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2983335.4464285714,
            "unit": "ns",
            "range": "± 126653.01572843091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030555.99765625,
            "unit": "ns",
            "range": "± 30900.673955500413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920768.1287109375,
            "unit": "ns",
            "range": "± 7541.366738363413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612647.9142578125,
            "unit": "ns",
            "range": "± 4440.21032657708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1621281.0430989584,
            "unit": "ns",
            "range": "± 8333.833199726674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459480.33479817706,
            "unit": "ns",
            "range": "± 413.6227775913392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424110.8057942708,
            "unit": "ns",
            "range": "± 1073.8639551414497"
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
          "id": "fe7a64bef1538836ba5bc4836f9a81c108980094",
          "message": "Merge pull request #3841 from limebell/feat/nodestate-self\n\nAdd \"self\" field to NodeState query",
          "timestamp": "2024-06-20T17:48:30+09:00",
          "tree_id": "975d44e2d619fed29ca688f6b17f938ded44e481",
          "url": "https://github.com/planetarium/libplanet/commit/fe7a64bef1538836ba5bc4836f9a81c108980094"
        },
        "date": 1718877742515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10742375.357142856,
            "unit": "ns",
            "range": "± 135019.7756094709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26690289.14285714,
            "unit": "ns",
            "range": "± 91600.16371404345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67251255.57142857,
            "unit": "ns",
            "range": "± 74065.83614877767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136532966.5,
            "unit": "ns",
            "range": "± 144851.41402773163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274012521.14285713,
            "unit": "ns",
            "range": "± 356082.0393752967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15741.239130434782,
            "unit": "ns",
            "range": "± 1108.608011159953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113207.18,
            "unit": "ns",
            "range": "± 4525.531912315695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105944.96875,
            "unit": "ns",
            "range": "± 4777.450020400071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89805.69230769231,
            "unit": "ns",
            "range": "± 2388.715985951126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113469.918918919,
            "unit": "ns",
            "range": "± 103838.38611124351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2726025.74,
            "unit": "ns",
            "range": "± 172070.88067971088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4833.035294117647,
            "unit": "ns",
            "range": "± 423.3251718483655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27319.44318181818,
            "unit": "ns",
            "range": "± 2102.8172829492864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22213.908450704224,
            "unit": "ns",
            "range": "± 973.2184247193842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28113.484536082473,
            "unit": "ns",
            "range": "± 5634.035511797549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1285.3684210526317,
            "unit": "ns",
            "range": "± 224.95839107613997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4772.586021505376,
            "unit": "ns",
            "range": "± 644.3160791965179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675000.9029850747,
            "unit": "ns",
            "range": "± 27782.63767724079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1256674.1176470588,
            "unit": "ns",
            "range": "± 38032.241732680086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1061991.7272727273,
            "unit": "ns",
            "range": "± 52186.127605815236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11130956.5,
            "unit": "ns",
            "range": "± 2183470.834650503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158097.611111111,
            "unit": "ns",
            "range": "± 44308.2906027076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273915.263157895,
            "unit": "ns",
            "range": "± 67781.26195011787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2560036.8076923075,
            "unit": "ns",
            "range": "± 30598.44676990597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2343563.1639344264,
            "unit": "ns",
            "range": "± 104840.06767424058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2877311.1,
            "unit": "ns",
            "range": "± 101520.86716224579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3054676.596875,
            "unit": "ns",
            "range": "± 46327.48177230374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924146.5159040178,
            "unit": "ns",
            "range": "± 5580.283331016152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615899.7366536459,
            "unit": "ns",
            "range": "± 4345.8763801606765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1617906.9864583334,
            "unit": "ns",
            "range": "± 5677.851266598279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469799.07122395834,
            "unit": "ns",
            "range": "± 616.1721462936277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431867.53854166664,
            "unit": "ns",
            "range": "± 1132.6777831107613"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "2e5122639d6ec9c4bb3a03ab60b3147f8f491f82",
          "message": "temp: fix build error due to rebase",
          "timestamp": "2024-06-20T18:30:37+09:00",
          "tree_id": "40ceaa3f38c0b730776d3580087a7cae144844ec",
          "url": "https://github.com/planetarium/libplanet/commit/2e5122639d6ec9c4bb3a03ab60b3147f8f491f82"
        },
        "date": 1718878305886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10994719.954545455,
            "unit": "ns",
            "range": "± 249683.05214420432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26880113.42857143,
            "unit": "ns",
            "range": "± 286475.85739645315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67918158.14285715,
            "unit": "ns",
            "range": "± 96949.60674483431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136708612.69230768,
            "unit": "ns",
            "range": "± 213773.7101607619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274398139.26666665,
            "unit": "ns",
            "range": "± 470585.56185587496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15777.8375,
            "unit": "ns",
            "range": "± 790.734715932602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113073.47916666667,
            "unit": "ns",
            "range": "± 4409.107354003892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105996.31578947368,
            "unit": "ns",
            "range": "± 3396.540959884981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91973.45652173914,
            "unit": "ns",
            "range": "± 3540.6566415882785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3099443.2592592593,
            "unit": "ns",
            "range": "± 162412.56562422885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2666037.03,
            "unit": "ns",
            "range": "± 172935.69829271527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4883.304347826087,
            "unit": "ns",
            "range": "± 508.23105715158357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26839.5,
            "unit": "ns",
            "range": "± 1601.2645792650846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22020.72340425532,
            "unit": "ns",
            "range": "± 848.8110790503349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30730.610526315788,
            "unit": "ns",
            "range": "± 4808.820132849719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1135.1935483870968,
            "unit": "ns",
            "range": "± 220.54503917737605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4654.017241379311,
            "unit": "ns",
            "range": "± 364.7789665903451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 677545.9133333333,
            "unit": "ns",
            "range": "± 30697.21736755028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1297057.866197183,
            "unit": "ns",
            "range": "± 63308.65787986425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1069341.1538461538,
            "unit": "ns",
            "range": "± 53761.48963736005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10935329.38,
            "unit": "ns",
            "range": "± 2013702.1033783269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2148000.230769231,
            "unit": "ns",
            "range": "± 22888.944599062983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265939.4615384615,
            "unit": "ns",
            "range": "± 34963.35722251556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2604550.71875,
            "unit": "ns",
            "range": "± 69166.71031679459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2327791.4166666665,
            "unit": "ns",
            "range": "± 60290.93113354011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2933053.5,
            "unit": "ns",
            "range": "± 90859.21539286178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3044500.989676339,
            "unit": "ns",
            "range": "± 42522.68223191431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921983.0782552083,
            "unit": "ns",
            "range": "± 7876.54677374068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610827.8720703125,
            "unit": "ns",
            "range": "± 3311.4350563347075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640634.491908482,
            "unit": "ns",
            "range": "± 1939.3155887985508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459432.17940848216,
            "unit": "ns",
            "range": "± 716.3160398727977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421625.69309895835,
            "unit": "ns",
            "range": "± 1683.033289898348"
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
          "id": "ff3ac3ed0c4017a30779c83a9fd956c4573255bf",
          "message": "Merge pull request #3867 from planetarium/feature/remove-feecollector\n\nRemove `IFeeCollector` and its implementation",
          "timestamp": "2024-07-03T19:12:31+09:00",
          "tree_id": "07d0f8f57eaa6f486b6b23cd83a7e4cc91907561",
          "url": "https://github.com/planetarium/libplanet/commit/ff3ac3ed0c4017a30779c83a9fd956c4573255bf"
        },
        "date": 1720002787619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10667613.884615384,
            "unit": "ns",
            "range": "± 122998.06025810492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26661644.733333334,
            "unit": "ns",
            "range": "± 120651.24741434751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67509684.14285715,
            "unit": "ns",
            "range": "± 78065.48534783734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136008746.85714287,
            "unit": "ns",
            "range": "± 101263.54172508875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274655721.53333336,
            "unit": "ns",
            "range": "± 716567.4437179026"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15604.29292929293,
            "unit": "ns",
            "range": "± 1361.297394763654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110333,
            "unit": "ns",
            "range": "± 2628.7139180110676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106292.04761904762,
            "unit": "ns",
            "range": "± 3431.6920448023952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92989.3,
            "unit": "ns",
            "range": "± 3298.3039168950345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115899.2592592593,
            "unit": "ns",
            "range": "± 130076.10420713369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2742338.034883721,
            "unit": "ns",
            "range": "± 148078.07999759872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4957.465909090909,
            "unit": "ns",
            "range": "± 464.0124093877563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27865.73033707865,
            "unit": "ns",
            "range": "± 2490.3358744082407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22007.060975609755,
            "unit": "ns",
            "range": "± 1162.9169486981461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29923.76595744681,
            "unit": "ns",
            "range": "± 5133.4655781922365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1295.989010989011,
            "unit": "ns",
            "range": "± 205.13288346313436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4738.352272727273,
            "unit": "ns",
            "range": "± 409.7393351307585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 673822.7192982456,
            "unit": "ns",
            "range": "± 23907.45022683036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282126.5135135136,
            "unit": "ns",
            "range": "± 42716.431299014475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1067043.5294117648,
            "unit": "ns",
            "range": "± 57183.17662056531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10986622.44,
            "unit": "ns",
            "range": "± 2094630.7751318808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159422.5,
            "unit": "ns",
            "range": "± 30558.23325226771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289707.0566037735,
            "unit": "ns",
            "range": "± 92964.97348472684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2552102.230769231,
            "unit": "ns",
            "range": "± 27200.19373752647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2337990.617647059,
            "unit": "ns",
            "range": "± 95326.34315752328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4054420.5555555555,
            "unit": "ns",
            "range": "± 969884.3556607938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3046625.8227539062,
            "unit": "ns",
            "range": "± 59348.78664942304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917008.4079938616,
            "unit": "ns",
            "range": "± 4340.848762618003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614642.3858072917,
            "unit": "ns",
            "range": "± 4385.727282049368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1622172.6947916667,
            "unit": "ns",
            "range": "± 17596.491023280098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464037.58461216517,
            "unit": "ns",
            "range": "± 881.0605752805269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424385.2927058293,
            "unit": "ns",
            "range": "± 1144.075820664808"
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
          "id": "0d38202c80aea945ee74241f3d80ebf133d6dfff",
          "message": "Merge pull request #3868 from planetarium/introduce/gas-tracer\n\nwip: Introduce/gas tracer",
          "timestamp": "2024-07-12T11:58:22+09:00",
          "tree_id": "febb1fcfd6b9413d5a7f3a4f1c6c55a67c41dc82",
          "url": "https://github.com/planetarium/libplanet/commit/0d38202c80aea945ee74241f3d80ebf133d6dfff"
        },
        "date": 1720753655588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10971367.666666666,
            "unit": "ns",
            "range": "± 94413.62348857513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26951566.4,
            "unit": "ns",
            "range": "± 92582.16645908185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68215961.64285715,
            "unit": "ns",
            "range": "± 215090.50277199314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135931893.2142857,
            "unit": "ns",
            "range": "± 694735.4320985108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279352258.6666667,
            "unit": "ns",
            "range": "± 551849.4936169083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15638.791666666666,
            "unit": "ns",
            "range": "± 1223.8455605754964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111354.07692307692,
            "unit": "ns",
            "range": "± 5147.407163768511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104530.1129032258,
            "unit": "ns",
            "range": "± 2686.025324743103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92555.57894736843,
            "unit": "ns",
            "range": "± 2983.5037051198256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3121608.1860465114,
            "unit": "ns",
            "range": "± 113859.20978522972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2715431.14,
            "unit": "ns",
            "range": "± 187895.53882861987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4990.922222222222,
            "unit": "ns",
            "range": "± 542.4022146175037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26854.64367816092,
            "unit": "ns",
            "range": "± 1626.1311624850314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23121.145833333332,
            "unit": "ns",
            "range": "± 1943.0615559183193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28549.875,
            "unit": "ns",
            "range": "± 5413.992248648039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1109.9021739130435,
            "unit": "ns",
            "range": "± 178.10288789500532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4869.891304347826,
            "unit": "ns",
            "range": "± 604.5024555985307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 707521.8229166666,
            "unit": "ns",
            "range": "± 65770.10785951717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1260103.7741935484,
            "unit": "ns",
            "range": "± 36992.710836694736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1065509.5731707318,
            "unit": "ns",
            "range": "± 52598.58220476452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10965230.69,
            "unit": "ns",
            "range": "± 2020438.8462984846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2191169.4565217393,
            "unit": "ns",
            "range": "± 83815.2086514551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311948.0625,
            "unit": "ns",
            "range": "± 70938.94249552261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2556407.230769231,
            "unit": "ns",
            "range": "± 31695.215380647613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305246.28,
            "unit": "ns",
            "range": "± 91956.03842387882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2888460.048780488,
            "unit": "ns",
            "range": "± 101510.53396691183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3065750.0989583335,
            "unit": "ns",
            "range": "± 42753.082039539004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928498.0520833334,
            "unit": "ns",
            "range": "± 5667.943481824109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613255.335546875,
            "unit": "ns",
            "range": "± 5299.167406227257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1626563.6760416667,
            "unit": "ns",
            "range": "± 9313.226068163383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458429.62374441966,
            "unit": "ns",
            "range": "± 930.4399887667707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428250.7369907924,
            "unit": "ns",
            "range": "± 913.9646031515789"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "bf23258b231b4c3302d281e763e5e54d63bde93f",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-12T18:04:42+09:00",
          "tree_id": "febb1fcfd6b9413d5a7f3a4f1c6c55a67c41dc82",
          "url": "https://github.com/planetarium/libplanet/commit/bf23258b231b4c3302d281e763e5e54d63bde93f"
        },
        "date": 1720775682820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10981628.333333334,
            "unit": "ns",
            "range": "± 90217.7243383354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27032484.785714287,
            "unit": "ns",
            "range": "± 259727.2829785352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67551933.8,
            "unit": "ns",
            "range": "± 111087.44578239768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135668053.06666666,
            "unit": "ns",
            "range": "± 177298.6951545195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278778396.6923077,
            "unit": "ns",
            "range": "± 346360.56656115473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15165.270833333334,
            "unit": "ns",
            "range": "± 1290.2463859292566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111536.4857142857,
            "unit": "ns",
            "range": "± 3608.3952060473102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105170.97260273973,
            "unit": "ns",
            "range": "± 5200.193134694889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94716.8431372549,
            "unit": "ns",
            "range": "± 3808.3057302299094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3146592.867647059,
            "unit": "ns",
            "range": "± 149439.10264269475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2666217.76,
            "unit": "ns",
            "range": "± 186498.4177596445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4990.67032967033,
            "unit": "ns",
            "range": "± 664.8777340391247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27361.724719101123,
            "unit": "ns",
            "range": "± 2352.9373699929406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22663.283018867925,
            "unit": "ns",
            "range": "± 934.3874459394094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28059.468085106382,
            "unit": "ns",
            "range": "± 4783.333115362015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1220.3118279569892,
            "unit": "ns",
            "range": "± 246.58321544903956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4605.355555555556,
            "unit": "ns",
            "range": "± 464.20463114399297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690047.9157894737,
            "unit": "ns",
            "range": "± 46381.899115344815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1296027.8181818181,
            "unit": "ns",
            "range": "± 48250.75807153501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1046147.074074074,
            "unit": "ns",
            "range": "± 44082.11754058934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9324784.24,
            "unit": "ns",
            "range": "± 1281479.1144735096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2190985.3076923075,
            "unit": "ns",
            "range": "± 75319.97110264206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275509.230769231,
            "unit": "ns",
            "range": "± 93423.21086569174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2591963.5454545454,
            "unit": "ns",
            "range": "± 62437.06610562981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2270852.6315789474,
            "unit": "ns",
            "range": "± 46508.87270930203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3114618.89,
            "unit": "ns",
            "range": "± 232348.41646657107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3041591.644791667,
            "unit": "ns",
            "range": "± 31064.015143278975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923110.2569010417,
            "unit": "ns",
            "range": "± 6962.880785455272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615461.3417317708,
            "unit": "ns",
            "range": "± 5336.236695785571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1610646.1147135417,
            "unit": "ns",
            "range": "± 11123.0729285958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464731.4598563058,
            "unit": "ns",
            "range": "± 674.3028836320999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422731.4629882813,
            "unit": "ns",
            "range": "± 817.8886634999426"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "985c1f787a192654603dba83f7be5bff42d3aa20",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-12T18:16:18+09:00",
          "tree_id": "6512b68e13dce93054d5efa58408c2563d333d72",
          "url": "https://github.com/planetarium/libplanet/commit/985c1f787a192654603dba83f7be5bff42d3aa20"
        },
        "date": 1720776493257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10788577.857142856,
            "unit": "ns",
            "range": "± 155089.82110072518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26541716.4,
            "unit": "ns",
            "range": "± 91294.45156180867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67843795.76666667,
            "unit": "ns",
            "range": "± 92201.95650578808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137228910.53846154,
            "unit": "ns",
            "range": "± 230045.07821389244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274749706,
            "unit": "ns",
            "range": "± 377234.45341685624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15235.68085106383,
            "unit": "ns",
            "range": "± 926.3215489788055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111025.6603773585,
            "unit": "ns",
            "range": "± 4565.236925958019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105353.27659574468,
            "unit": "ns",
            "range": "± 4005.1879166798894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91008.025,
            "unit": "ns",
            "range": "± 3196.272376053561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3118400.3260869565,
            "unit": "ns",
            "range": "± 119053.98852403137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2724848.23,
            "unit": "ns",
            "range": "± 184976.4743341379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4769.016483516483,
            "unit": "ns",
            "range": "± 481.6341941219466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26537.275862068964,
            "unit": "ns",
            "range": "± 1888.3538708673984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23324.755102040817,
            "unit": "ns",
            "range": "± 1861.566262510139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29440.075268817203,
            "unit": "ns",
            "range": "± 4697.409052817353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1286.2527472527472,
            "unit": "ns",
            "range": "± 196.86067229877148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4736.70786516854,
            "unit": "ns",
            "range": "± 524.2698863061239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680245.3432835821,
            "unit": "ns",
            "range": "± 32225.023049831772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272199.888888889,
            "unit": "ns",
            "range": "± 40404.02733517523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1054725.4032258065,
            "unit": "ns",
            "range": "± 40814.43602671738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9418409.68,
            "unit": "ns",
            "range": "± 1462823.4133050828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163953.3225806453,
            "unit": "ns",
            "range": "± 64398.27086984406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295855.9565217393,
            "unit": "ns",
            "range": "± 87050.36303012093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2592083.714285714,
            "unit": "ns",
            "range": "± 45946.02109905889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2348372.117647059,
            "unit": "ns",
            "range": "± 47883.773394390024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3042857.52020202,
            "unit": "ns",
            "range": "± 206850.07987724847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3044269.3997395835,
            "unit": "ns",
            "range": "± 51108.41430085209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921215.6200474331,
            "unit": "ns",
            "range": "± 3485.922441006739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614939.8597005209,
            "unit": "ns",
            "range": "± 4345.449947402857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1628116.7634114583,
            "unit": "ns",
            "range": "± 10995.973721627757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456702.8776855469,
            "unit": "ns",
            "range": "± 729.1607693321598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431922.6085030692,
            "unit": "ns",
            "range": "± 617.8357107808356"
          }
        ]
      }
    ]
  }
}